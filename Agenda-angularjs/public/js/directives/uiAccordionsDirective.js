angular.module("agenda").directive("uiAccordions", function () {
  return {
    controller: function ($scope, $element, $attrs) {
      var accordions = [];

      this.registerAccordion = function (accordion) {
        accordions.push(accordion);
      };

      this.closeAll = function () {
        accordions.forEach(function (accordion) {
          accordion.isOpened = false;
        });
      };
    },
  };
});
