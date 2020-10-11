function init(ParseProvider) {
    ParseProvider.initialize(
        'BCrUQVkk80pCdeImSXoKXL5ZCtyyEZwbN7mAb11f', // This is your Application ID
        '4wPYRKbpTJeCdmFNaS31AiQZ8344aaYubk6Uo8VW' // This is your Javascript key
    );
    ParseProvider.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
    
}

angular.module('common').config(init)