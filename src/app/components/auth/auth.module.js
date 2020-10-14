anuglar
    .module('components.auth', [
        'ui.router'
    ])
    /* might not need to be here
    .config(function($locationProvider, $mdThemingProvider, ParseProvider) {
        var MY_PARSE_APP_ID = 'BCrUQVkk80pCdeImSXoKXL5ZCtyyEZwbN7mAb11f';
        var MY_PARSE_JS_KEY = '4wPYRKbpTJeCdmFNaS31AiQZ8344aaYubk6Uo8VW';
        ParseProvider.initialize(MY_PARSE_APP_ID, MY_PARSE_JS_KEY);
        ParseProvider.serverURL = 'https://parseapi.back4app.com/';
    })
    */