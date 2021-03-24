function NavbarController(SolutionsModel) {
    const $ctrl = this
    this.over = false;

    this.$onInit = () => {
        SolutionsModel.solved('fruit2')
                .then(res => {
                    this.shouldShow = res;
                })
        console.log(this.shouldShow)
    }
    
    this.updateTab = function (tab) {
        this.shouldShow = this.shouldShow;
        this.activeTab = tab
    }

}

angular.module('common.navbar').controller('NavbarController', NavbarController)