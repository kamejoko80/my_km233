// app config
var app = {
    apiUrl: 'api.php',
    ver: 'v3.3.0',
    conduitHomeUrl: 'http://apps.conduit.com/search?SearchSourceOrigin=47&utm_source=YouTubeApp&utm_campaign=YouTubeApp&utm_medium=ConduitPowerBy',
    mode: 'standard',
    lang: 'US'
};
// gadget config
var gadget = {
    url: 'gadget.html',
    mode: 'videoFeed',
    feedId: 'most_viewed',
    feedTime: 'this_week',
    windowWidth: 480,
    windowHeight: 574
};
// paging config
var paging = {
    currentPage: 1,
    visiblePages: 7,
    resultsPerPage: 6,
    totalResults: 0
};

var language = { langs : [
    {
        id: ['US'],     // and all others
        name: 'English'
    },{
        id: ['DE','AT','LI','LU','CH'],
        name: 'Deutsch'
    },{
        id: ['BR','AO','PT','CV','TL','TP','GW','MO','MZ'],
        name: 'Português (Brasil)'
    },{
        id: ['ES','CO','PE','VE','GT','EC','CU','RB','HN','SV','PY','CR','PA','GQ','PR','MX','AR','CL','DO','NI','UY', 'BO'],
        name: 'Español (España)'
    },{
        id: ['IT','SM','VA'],
        name: 'Italiano'
    },{
        id: ['FR','CD','MG','CM','BE','MC','HT','BJ','CF','GA','GN','ML','NE','SN','TG'],
        name: 'Français'
    }]};