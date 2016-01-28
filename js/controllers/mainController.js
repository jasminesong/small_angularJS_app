var mainController = app.controller('mainController',['$scope','GetStyle',function($scope,GetStyle){

    $scope.moveArrow = function(element){
    console.log('1111');
    
    var oArrow = document.getElementsByClassName("arrow")[0];
    var oElement = document.getElementById(element);
    
    
    oArrow.style.left =oElement.offsetLeft;
                };
    


}]);

