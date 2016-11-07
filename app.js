(function(){
"use strict"
angular.module("ShoppingListCheckOff",[])
.controller("ToBuyController",ToBuyController)
.controller("AlreadyBoughtController",AlreadyBoughtController)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService);

ToBuyController.$inject=["ShoppingListCheckOffService"];
function ToBuyController(ShoppingListCheckOffService){
	var toBuy=this;
	toBuy.data=ShoppingListCheckOffService.toBuyArray;
	toBuy.getBought=function(item){
		ShoppingListCheckOffService.addBoughtItem(item);
	}
}

AlreadyBoughtController.$inject=["ShoppingListCheckOffService"];
function AlreadyBoughtController(ShoppingListCheckOffService){
	var alreadyBought=this;
	alreadyBought.data=ShoppingListCheckOffService.BoughtArray;	
}

function ShoppingListCheckOffService(){
	var service=this;
	service.toBuyArray=[{name:"cookies",quantity:10},{name:"pizza",quantity:5},{name:"pasta",quantity:10},{name:"bread",quantity:4},{name:"burger",quantity:4}];
	service.BoughtArray=[];
	service.addBoughtItem=function(item){
		service.BoughtArray.push(item);
		service.toBuyArray.splice(service.toBuyArray.indexOf(item),1);
	}
}
})()