reportNgApp.controller('TestAvgTimeChartCtrl', ["$scope", "$routeParams", "StatisticsService", function ($scope, $routeParams, StatisticsService) {

    var init = function () {
        StatisticsService.getStatistics($routeParams.executionId, function (response) {
            var testExecutionTime = response.testExecutionTime;

            var avgArray = [];
            var labelsArray = [];
            for(var i = 0; i < testExecutionTime.ranges.length; i++) {
                var range = testExecutionTime.ranges[i];
                avgArray.push([range.value, i])
                labelsArray.push([i, ''+ range.leftRange +'-' + range.rightRange + ' [ms]']);
            }

            $scope.testAvgTimeChartData =
                [ avgArray ];

            $scope.testAvgTimeChartOptions = {
                bars: {show: true, align: 'center', barWidth: 0.5, horizontal: true},
                xaxis: {
                    show: true,
                    tickLength: 1,
                    tickDecimals: 0
                },
                yaxis: {
                    ticks: labelsArray
                },
                grid: {
                    hoverable: true,
                    clickable: true
                },
                legend: {
                    noColumns: 1,
                    container: "#testAvgTimeChartLegend"
                },
                tooltip: true,
                tooltipOpts: {
                    content: "[%x] tests for time range %y"/*,
                    shifts: {
                        x: 20,
                        y: 0
                    }*/
                }
            };
        });
    };

    init();

}]);