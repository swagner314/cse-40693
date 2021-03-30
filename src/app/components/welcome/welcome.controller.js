function WelcomeController(GetData) {
    const $ctrl = this

    $ctrl.$onInit = () => {
        //this.api = require('web-api-steam');
    }

    this.clicked = function () {
        //const k = "640F9B619E170D8DBB1ACBE05E775C50";
        //var appid = "2";
        //var steamid = "3";
        //https://{base_url}/{interface}/{method}/{version}?{parameters}
        //console.log(GetData.getData(`https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v1?key=${k}&steamid=${steamid}&appid=${appid}`))
        //console.log(GetData.getData(`https://api.steampowered.com/ISteamWebAPIUtil/GetSupportedAPIList/v1/?key=${k}&steamid=000123000456`))
        //console.log(GetData.getData(`https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=440&count=3`))
        //console.log(GetData.getData('README.md'));
            //.then()
        //console.log(require('web-api-steam'));
    }

    //this.exampleVariable = 'welcome comp';


}

angular.module('components.welcome').controller('WelcomeController', WelcomeController)