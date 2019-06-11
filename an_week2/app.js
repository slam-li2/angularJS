(function () {
'use strict'

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var ToBuy = this;
    ToBuy.array1 = ShoppingListCheckOffService.ToBuyArray;
    ToBuy.removeitem = function(itemIndex, itemName, itemQuantity) {
        ShoppingListCheckOffService.RemoveAndPushitem(itemIndex, itemName, itemQuantity)
    };
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var Already = this;
    Already.array2 = ShoppingListCheckOffService.AlreadyBoughtArray;
};

function ShoppingListCheckOffService() {
    var service = this;
    service.ToBuyArray = [
        {Name:'milk', Quantity:'5'},
        {Name:'cookie', Quantity:'4'},
        {Name:'peanut', Quantity:'6'},
        {Name:'yogurt', Quantity:'9'},
        {Name:'teapot', Quantity:'7'}
    ];
    
    service.AlreadyBoughtArray = [];

    service.RemoveAndPushitem = function (itemIndex, itemName, itemQuantity) {
        service.ToBuyArray.splice(itemIndex,1);
        var item = {Name:itemName, Quantity: itemQuantity};
        service.AlreadyBoughtArray.push(item);

    }


};

})();