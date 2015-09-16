#
# Product-specific compile-time definitions.
#

include device/fsl/imx5x/BoardConfigCommon.mk

TARGET_BOOTLOADER_BOARD_NAME := LOCO

BOARD_SOC_CLASS := IMX5X
BOARD_SOC_TYPE := IMX53

TARGET_BUILD_KERNEL := false

WIFI_DRIVER_MODULE_PATH     := "/system/lib/modules/libertas_sdio.ko"
WIFI_DRIVER_MODULE_NAME     := "libertas_sdio"
BOARD_WIFI_LIBRARIES        := true
WPA_BUILD_SUPPLICANT        := true
WPA_SUPPLICANT_VERSION      := VER_0_5_X
BOARD_WPA_SUPPLICANT_DRIVER := AWEXT

BOARD_HAVE_VPU := true
HAVE_FSL_IMX_GPU := true
HAVE_FSL_IMX_IPU := true

# Support both PMICs without building a different image
# Dialog 9053 pmic
TARGET_TS_DEVICE := "da9052_tsi"
# Ripley (MC34708) pmic
TARGET_TS_DEVICE_ALT := "mxc_ts"


#for accelerator sensor, need to define sensor type here
BOARD_HAS_SENSOR := true
SENSOR_MMA8450 := true

# for recovery service
TARGET_SELECT_KEY := 28
TARGET_USERIMAGES_USE_EXT4 := true
BOARD_SYSTEMIMAGE_PARTITION_SIZE := 167772160
# Used to create the system partition (even if we are not using flash)
BOARD_FLASH_BLOCK_SIZE := 262144
