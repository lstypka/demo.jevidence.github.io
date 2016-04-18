reportNgApp.controller('ExecutionDefectsCtrl', ["$scope", "$routeParams", "ExecutionService", function ($scope, $routeParams, ExecutionService) {

    $scope.allowedStatuses = [
        {id: 0, style: 'test-error', label: "Error"},
        {id: 1, style: 'test-failed', label: 'Failed'},
        {id: 2, style: 'test-default', label: 'All'}];

    var init = function () {
        ExecutionService.getExecution($routeParams.executionId, function (response) {
            $scope.execution = response;
        });
    };

    init();

}]);