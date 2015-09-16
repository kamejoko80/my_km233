//set the window object if it is undefined so that 
//the compiler script can grab the tags and compile everything
if (typeof window === "undefined") {
    // compiling the javascript where there is no global window object
    // UTORRENT_CONTROL_VERSION is not defined if this file is being used by compile-javascript.sh
    var UTORRENT_CONTROL_VERSION = 0.0,
        config = { compiled: false, folder: '' },
        compiling = true;
} else {
    //config needs to explicitly be set to the global config.
    var config = config || window['config'],
        compiling = false;
}

//can't load yepnope in a windowless (read compiling) environment
if( !compiling ){
    /*yepnope1.5.x|WTFPL*/
    (function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}})(this,document);


    //provide an array type caster if browser not rendering ECMA5
    if( typeof Array.isArray !== 'function' ) {
        Array.isArray = function( arr ) {
            return Object.prototype.toString.call( arr ) === '[object Array]';
        };
    }

    //set the configuration variables
    //  global UTORRENT_CONTROL_VERSION set in client and torrent.html

    (function() {

        var staging = (window.location.host.match('toolbar-staging.utorrent.com'));
        var prod = (window.location.host.match('toolbar.utorrent.com'));
        var dev = (window.location.host.match('toolbar-dev.utorrent.com'));

        //  these default values are for production.
        //  dev and staging environments override them below
        var toolbar_config = {
            timeout_remote: 15000, // ut remote request timeout
            timeout_paired: 2000, // timeout for local jsonp call
            pairing_iframe_width: '100%',
            pairing_iframe_height: '100%',
            conduit_toolbar_message_key: 'ut_toolbar_main',
            //conduit_toolbar_message_key_slave: 'ut_toolbar_gadget',
            //client_pane_width: 178,
            //torrent_pane_width: 370,


            torrent_pane: {
                collapsed_width: '70%',
                expanded_width: '100%',
                animate_time: 500
            },

            //folder used to alter url paths.  used while 1.7 was 
            //  in development in a separate folder in the repo
            folder: '/',

            //status messages
            messages: {
                no_client: 'No client ready',
                setup: 'Click to Setup Control',
                no_torrents: 'No Torrents'
            },

            //used for command names.  I hate duplicate strings floating around the code.
            cmd: {
                PAIR: 'pair',
                PAIRING_ACCEPTED: 'pairing accepted',
                PAIRING_DENIED: 'pairing denied',
                CLOSE_WINDOW: 'close floating window',
                SWITCH_CLIENT: 'switch_client',
                FOUND_CLIENT: 'found client',
                REMOVE_CLIENT: 'remove client',
                OPEN_GADGET: 'open gadget',
                REMOTE_LOGIN: 'remote login',
                REMOTE_SIGNUP: 'remote signup',
                //ADD_URL: 'add url',
                SELECT_TORRENT: 'select torrent',
                TORRENT_ADDED: 'torrent added',
                EXPAND: 'expand',
                COLLAPSE: 'collapse'
            },

            checkin_stat_key: 'BT_Stats',
            usage_stat_key: 'BT_Usage',

            //is_utorrent: window.location.href.indexOf('utorrent.com') > -1 ? true : false,
            //TBN defines bt (0) vs ut (1) toolbar
            TBN: document.location.href.split('tbn=').length > 1 ? parseInt( document.location.href.split('tbn=')[1].split('&')[0].split('#')[0], 10 ) : 1,
            //TBV: parseFloat( UTORRENT_CONTROL_VERSION, 10 ),
            TBV: document.location.href.split('tbv=').length > 1 ? parseFloat( document.location.href.split('tbv=')[1].split('&')[0].split('#')[0], 10 ) : 0,
            //torrent_pane_collapsed_width: 50,
            stats_url: 'http://192.168.56.1:9090/track',
            //remotelog_server: 'http://192.168.56.1:9090',
            remotelog_server: 'http://toolbar-dev.utorrent.com',
            //stats_url: 'http://remote-staging.utorrent.com/track',
            //autologin_url: 'http://remote.utorrent.com/talon/autologin', // can use remote client's server attribute...
            //autologin_url: 'http://192.168.56.1:9090/talon/autologin',
            css_inject_path: 'http://utorrent.atwss.com/toolbar2/css/',
            cache_bust_version: UTORRENT_CONTROL_VERSION,
            //cache_bust: true,  //not needed, rely on cache_bust_version instead - BA
            compiled: true,  //make sure to compress javascript before push to production
            fake_pairing: false,
            is_chrome: !!( navigator.userAgent.match(/chrome/i) || navigator.userAgent.match(/chromium/i) ),
            is_firefox: !!(navigator.userAgent.match(/firefox/i)),
            is_msie: !!(navigator.userAgent.match(/MSIE/i)),
            is_prod: !!prod, //defines whether environment is production or not
            verbose: 0  //sets the level of console logs
        };
          
        //autologin url is toolbar brand specific
        toolbar_config.autologin_url = ( toolbar_config.TBN == 1 ? 
          
            //autologin to remote is for another time and another place.
            'http://remote.utorrent.com/' :
            'http://remote.bittorrent.com/'
            // 'http://remote.utorrent.com/talon/autologin' : 
            // 'http://remote.bittorrent.com/talon/autologin'
        );

        //config for flipping out the brand string, and for getting the correct brand name based off of the toolbar number.
        toolbar_config.brands = [
            {
                base: 'bittorrent',
                pretty: 'BitTorrent'
            },
            {
                base: 'utorrent',
                pretty: 'uTorrent'
            }
        ];

        //search for only one local client
        toolbar_config.client_name = ( toolbar_config.TBN == 1 ?
            'uTorrent' :
            'BitTorrent'
        );
          
        //specific environment overrides
        if ( dev ) {
            toolbar_config.cache_bust = false;
            toolbar_config.compiled = false;
            //toolbar_config.autologin_url = 'http://remote-staging.utorrent.com/talon/autologin'; // can use remote client's server attribute...
            //toolbar_config.stats_url = 'http://remote-staging.utorrent.com/track';
            toolbar_config.remotelog_server = 'http://toolbar-dev.utorrent.com';
            toolbar_config.verbose = 10;
            
        } else if ( staging ) {
            toolbar_config.cache_bust = false;
            toolbar_config.compiled = false;
            //toolbar_config.stats_url = 'http://remote-staging.utorrent.com/track';
                //set verbosity to 2 when pushing to staging.  make this automatic
            //toolbar_config.verbose = 2; //no logs, just warns and errors
            toolbar_config.verbose = 6; //everything for firefox
        }

        //add the toolbar config to the global window config
        if (!window['config']) {
            window['config'] = toolbar_config;
        } else {
            for (var key in toolbar_config) {
                window['config'][key] = toolbar_config[key];
            }
        }

        
        //set up the console
        
        //an empty function to reuse
        var noop = function(){};
        if (! window.console) {
            window.console = { 
              log: noop,
              error: noop,
              warn: noop
            };
        }

        //set up the console
        //  based on config.verbose
        if( config.verbose < 5 )
          console.log = noop;
        if( config.verbose < 2 )
          console.warn = noop;
        if( config.verbose < 1 )
          console.error = noop;

    })();

} //end !compiling


//  define the dependencies for the application
//config.compiled = true;
//config.is_prod = true;

var tags = config.compiled ? 
    //tell yepnope to load only the compiled js
    [
        { load: config.folder+'compiled/conduit_deps.js?v='+UTORRENT_CONTROL_VERSION },
    ] : 
    //otherwise, load them all separately
    [
        // Main Deps
        { load: config.folder+'lib/jquery.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'lib/json2.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'lib/md5.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'lib/jstorage.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'lib/underscore.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'lib/backbone.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'lib/backbone.localStorage.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'lib/jquery.cookie.js?v='+UTORRENT_CONTROL_VERSION },

        // Falcon Deps
        { load: 'falcon-api/js/deps/SHA-1.js?v='+UTORRENT_CONTROL_VERSION },
        { load: 'falcon-api/js/deps/jsbn.js?v='+UTORRENT_CONTROL_VERSION },
        { load: 'falcon-api/js/deps/jsbn2.js?v='+UTORRENT_CONTROL_VERSION },
        { load: 'falcon-api/js/deps/sjcl.js?v='+UTORRENT_CONTROL_VERSION },
        { load: 'falcon-api/js/falcon.js?v='+UTORRENT_CONTROL_VERSION },
        { load: 'falcon-api/js/falcon.encryption.js?v='+UTORRENT_CONTROL_VERSION },
        { load: 'falcon-api/js/falcon.api.js?v='+UTORRENT_CONTROL_VERSION },
        { load: 'falcon-api/js/falcon.session.js?v='+UTORRENT_CONTROL_VERSION },

        // Conduit Deps
        { load: 'btapp/pairing.btapp.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'js/app.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'js/common.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'js/settings.js?v='+UTORRENT_CONTROL_VERSION },
        //{ load: config.folder+'js/siblings.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'js/models/client.model.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'js/collections/client.collection.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'js/views/clients.view.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'js/views/client.add.view.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'js/views/client.view.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'js/views/client.active.view.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'js/models/torrent.model.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'js/collections/torrent.collection.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'js/views/torrent.add.view.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'js/views/torrent.view.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'js/views/torrents.view.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'js/views/torrent.active.view.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'js/models/file.model.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'js/collections/file.collection.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'js/views/file.view.js?v='+UTORRENT_CONTROL_VERSION },
        { load: config.folder+'js/views/files.view.js?v='+UTORRENT_CONTROL_VERSION }

/*
        // Following block called in individual html page
        { load: 'web.js?v='+UTORRENT_CONTROL_VERSION }, // standalone web app
        { load: 'client.js?v='+UTORRENT_CONTROL_VERSION }, // conduit main toolbar thing
        { load: 'clients.js?v='+UTORRENT_CONTROL_VERSION }, // clients gadget dropdown
        { load: 'torrent.js?v='+UTORRENT_CONTROL_VERSION },
        { load: 'torrents.js?v='+UTORRENT_CONTROL_VERSION },
        { load: 'files.js?v='+UTORRENT_CONTROL_VERSION },
        { load: 'add.js?v='+UTORRENT_CONTROL_VERSION }, // add torrent gadget
        { load: 'login.js?v='+UTORRENT_CONTROL_VERSION }, // add torrent gadget
        { load: 'pairing.js?v='+UTORRENT_CONTROL_VERSION }, // pairing dialog+iframe
        { load: 'signup.js?v='+UTORRENT_CONTROL_VERSION }, // signup
        { load: 'uquest.js?v='+UTORRENT_CONTROL_VERSION } // uquest
*/

    ];

var bt_widgets = [
    'single',
    //'client',
    '_stats_conduit',
    'clients',
    //'torrent',
    'torrents',
    'files',
    'add',
    'login',
    'pairing',
    'signup'
    //'uquest',
    //'web'
];

if ( !compiling ){

    //check for the widget-specific script
    if ( typeof BT_WIDGET === 'string' ){
      //load it at the end of the tags list
      tags.push({ load: ( config.is_prod ? config.folder+'compiled/'+BT_WIDGET+'.min.js' : config.folder+BT_WIDGET+'.js' )+'?v='+UTORRENT_CONTROL_VERSION });
    } else if ( Array.isArray( BT_WIDGET ) ) {
      for ( var i=0; i<BT_WIDGET.length; i++){
        tags.push({ load: ( config.is_prod ? config.folder+'compiled/'+BT_WIDGET[i]+'.min.js' : config.folder+BT_WIDGET[i]+'.js' )+'?v='+UTORRENT_CONTROL_VERSION });
      }
    }

    //  use yepnope loader to load in the assets
    //      http://yepnopejs.com/

    //yepnope.injectCss('css/style_robv.css?v='+UTORRENT_CONTROL_VERSION);
    //don't want styles to be asynchronous, so let's document.write it.
    document.write('<link rel="stylesheet" type="text\/css" href="\/css\/screen.css?v='+UTORRENT_CONTROL_VERSION+'" \/>');

    yepnope([
        { load: '/lib/BrowserCompApi.js?v='+UTORRENT_CONTROL_VERSION }
    ]);

    yepnope(tags);
}
