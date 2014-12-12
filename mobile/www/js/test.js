 function($scope, $sce){
    $scope.$watch("ddata.someString", function(newVal){
        debugger;
        $scope.ddata.trustedVersion = $sce.trustAsHtml(newVal);
    },true);
};