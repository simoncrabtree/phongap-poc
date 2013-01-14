'use strict';

function HomeController($scope) {
    $scope.app = {
        title: 'Jobbi'
    };

    $scope.jobs = [
        {description: "Fix Boiler"},
        {description: "Install New Radiator in Hallway"},
        {description: "Make Cup of Tea"}
    ];
}
