// Create the 'core' module and make it depend on 'lbServices'
// 'lbServices' is the module that your 'services.js' file exports
angular.module('core', ['lbServices']).
    // The $voter service represents the currently logged in voter 
    // and the `Voter` argument is defined in the lbServices module generated for you
factory('$voter', function(Voter) {
        var voterService = {};

        // This function reloads the currently logged in voter
        voterService.load = function() {
            Voter.findById({ id: 'me' }, function(v) {
                voterService.data = v;
            });
        };

        voterService.load();

        return voterService;
    }).
    // Declare the voter menu directive
directive('voterMenu', function() {
    return {
        templateUrl: 'templates/voter_menu.html',
        controller: function($scope, $voter) {
            // Expose the $voter service to the template HTML
            $scope.voter = $voter;
        }
    };
});
