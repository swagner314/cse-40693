function NavbarController() {
    this.over = false;
    this.activeTab = 'home';
    
    this.updateTab = function (tab) {
        this.activeTab = tab
        this.onUpdate({
            $event: {
                tab: tab
            }
        });
    }
}

angular.module('common.navbar').controller('NavbarController', NavbarController)