/**
 * Created by saurabhsharma01 on 08-Jul-15.
 */
angular.module('starter.controllers')
.controller('confirmOrderCtrl', function ($scope, $stateParams){
    $scope.selectedVendor={
        id:'eN467lXt76'
    };

    $scope.currentUser = Parse.User.current();
    $scope.selectedUser = {
        id:'UcNI0gG0JV',
        firstName:'saurabh',
        lastName:'Sharma',
        contactNo:'9602273529',
        email:'saurabh.find@gmail.com',
        address:'108,shiv nagar murlipura scheem'
    }
    $scope.orderTime = new Date();
    $scope.orderDate = new Date();
    $scope.menu = {
        title:'veg'
    }
    $scope.vendor = {
        title:'Rama Dabbawala'
    }

    $scope.placeOrder = function(){

        var Order = Parse.Object.extend('Order');
        var myOrder = new Order();
        myOrder.set("Location", 45.44334);
        myOrder.set("comment", 'NA');
        myOrder.set("preferredDateTime", new Date());
        myOrder.set("tiffins", 1);
        myOrder.set("userId", '1');
        myOrder.set("vendorId", '1');
        myOrder.save();
    }
})
