How to setup 88w8686 based WIFI module using GSPI

1> Edit: board-sam9260ek.c

Add: 

#if defined(CONFIG_LIBERTAS_SPI) || defined(CONFIG_LIBERTAS_SPI_MODULE)
#include <linux/irq.h>
#include <linux/spi/libertas_spi.h>
#endif


/*
 * 88W8686 Based Wifi module
 */
    
#if defined(CONFIG_LIBERTAS_SPI) || defined(CONFIG_LIBERTAS_SPI_MODULE)

/*
 *  Driver needs to know address, irq and flag pin.
 */
static int spi_libertas_setup(struct spi_device *spi)
{
	spi->bits_per_word = 16;
	spi_setup(spi);
    return 0;
}

static int spi_libertas_teardown(struct spi_device *spi)
{
    return 0;
}

static struct libertas_spi_platform_data libertas_spi_platform_data_info =
{
    .use_dummy_writes = 0,
    .gpio_cs = AT91_PIN_PC7,
    .setup = spi_libertas_setup,
    .teardown = spi_libertas_teardown,
};
#endif /* LIBERTAS */


/*
 * SPI devices.
 */
static struct spi_board_info ek_spi_devices[] = {
...

#if defined(CONFIG_LIBERTAS_SPI) || defined(CONFIG_LIBERTAS_SPI_MODULE)
	{	/* spi1.0 slot1 */
		.modalias = "libertas_spi",
		.max_speed_hz = 48 * 1000 * 1000,
		.bus_num = 1,
		.irq = AT91_PIN_PC6,
	    .chip_select = 0,  	/* Don't care, libertas use gpio-cs */					
		.platform_data	= &libertas_spi_platform_data_info,
		.mode		= SPI_MODE_0,
	},		
#endif
};

2> Edit: if_spi.c

static int __devinit if_spi_probe(struct spi_device *spi) {
...

#if defined(CONFIG_ARCH_AT91SAM9260)
	err = request_irq(spi->irq, if_spi_host_interrupt,
			IRQF_TRIGGER_RISING | IRQF_TRIGGER_FALLING, "libertas_spi", card);
#else	
	err = request_irq(spi->irq, if_spi_host_interrupt,
			IRQF_TRIGGER_FALLING, "libertas_spi", card);
#endif			
	if (err) {
		lbs_pr_err("can't get host irq line-- request_irq failed\n");
		goto terminate_thread;
	}
...
}

3> Build the module

# insmod libertas_spi.ko

4> Copy firmware:

  gspi8686.bin     --> /lib/firmware/libertas/
  gspi8686_hlp.bin --> /lib/firmware/libertas/
  
5> Create wpa_supplicant.conf and copy into /etc directory

network={
        ssid="your_ssid_name"
        proto=WPA
        key_mgmt=WPA-PSK
        pairwise=TKIP
        group=TKIP
        psk="your_keys"
        wpa_ptk_rekey=600
}

6> Run the command:

# iwconfig to check avaliable WIFI devices
# wpa_supplicant -Dwext -i eth1 -c/etc/wpa_supplicant.conf -B
       