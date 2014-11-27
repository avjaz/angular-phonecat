'use strict';

/* Directives */

var phonecatDirectives = angular.module('phonecatDirectives', []);

phonecatDirectives.directive('myCanvas', function() {
    var linkFn = function(scope, element, attrs) {
        console.log("foo");
        
        element.on('change', function(event) {
            console.log("change");
            
            angular.element('#newImage').removeClass('hide');
            
            var reader = new FileReader();
            reader.onload = (function(e) {
                var img = new Image();
                img.src = e.target.result;
                var c = angular.element(canvas).get(0);
                var ctx = c.getContext('2d');
                ctx.drawImage(img,10,10);
            });
            
            var file = this.files[0];
            if (file) {
                reader.readAsDataURL(this.files[0]);
                scope.newImage.name = file.name;
                scope.newImage.size = file.size;
                scope.$apply(); //so the view gets updated
            }
        })
    };
    
    return {
        restrict: 'A',
        link: linkFn
    };
});
