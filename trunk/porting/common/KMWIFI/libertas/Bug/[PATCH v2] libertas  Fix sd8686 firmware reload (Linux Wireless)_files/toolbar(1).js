function toolbarInit(){
ga_init();
		app.mode = getUrlParam('appMode');
    if(app.mode == 'injector'){
        gadget.url = 'gadget_injector.html';
    }else{
	app.mode = 'standard';
    }
    
    //////////////////////////
  /*  var type = 'Undefined';
        
    try {
        type = GetInfo().context.host;
    } catch (e) {}

    _gaq.push(['_setCustomVar', 1, 'appcontainer', type, 1]);
    _gaq.push(['_trackPageview']);*/
    
   

}
function appStart(){
    if(BrowserDetect.browser == 'Internet Explorer' && BrowserDetect.version == '6'){
        openWindow('http://' + window.location.host + '/' + app.ver + '/browser/UpgradeBrowser.html', 800, 653);
    }else{
        openGadgetWindow();
    }
}
function openGadgetWindow(){
    var titlebar = 'yes',
    windowHeight = gadget.windowHeight,
    windowWidth = gadget.windowWidth,
    mode = app.mode;
    if(mode == 'injector'){titlebar = 'no';}
    var gadgetFeatures = 'saveresizedsize=0,hscroll=0,vscroll=0,openposition=alignment:B,closeonexternalclick=no,closebutton=1,savelocation=0,titlebar='+ titlebar +',resizable=no',
    url = 'http://' + window.location.host + '/' + app.ver + '/'+gadget.url + '?' + 'appMode=' + mode;
    switch (BrowserDetect.browser) {
        case 'Firefox':
        {
            if (BrowserDetect.OS == 'Linux'){
                if (mode == 'injector'){
                    windowHeight -= 20;
                    break;
                } else{
                    windowWidth -= 7;
                    windowHeight -= 42;
                    break;
                }
            }else if (BrowserDetect.OS == 'Mac'){
                if (mode == 'injector'){
                    windowHeight -= 20;
                    break;
                } else{
                    windowWidth -= 3;
                    windowHeight -= 40;
                    break;
                }
            }else if (BrowserDetect.OS == 'Windows'){
                if (mode == 'injector'){
                    windowWidth -= 2;
                    windowHeight -= 15;
                    break;
                } else {
                    windowWidth -= 5;
                    windowHeight -= 37;
                    break;
                }
            }
            break;
        }
        case 'Internet Explorer':{
            if (mode == 'injector'){
                windowHeight += 25;
                break;
            }
            break;
        }
        case 'Safari':{
            if (mode == 'injector'){
                windowHeight += 24;
                break;
            } else{
                windowWidth -= 3;
                windowHeight -= 3;
                break;
            }
            break;
        }
        default:{break;}
    }
    OpenGadget(url, windowWidth, windowHeight, gadgetFeatures);
}
function getUrlParams(){
    var e,
    q = window.location.search.substring(1),
    r = /([^&=]+)=([^&]+)/g,
    urlParams = {};
    while (e = r.exec(q)){
        urlParams[decodeURIComponent(e[1])] = decodeURIComponent(e[2]);
    }
    return urlParams;
}
function getUrlParam(key){
    var urlParams = getUrlParams();
    var val = eval('urlParams.' + key);
    if(typeof val == 'undefined' || val == 'undefined' || val == '' || val == undefined || val == null){
        return null;
    }else{
        return val;
    }
}
function openWindow(link, w, h){
    var win = "width="+w+",height="+h+",menubar=no,location=no,resizable=yes,scrollbars=yes";
    newWin = window.open(link,"newWin",win);
    newWin.focus();
}
