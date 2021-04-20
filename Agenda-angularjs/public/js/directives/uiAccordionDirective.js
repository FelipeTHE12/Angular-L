angular.module("agenda").directive("uiAccordion", function () {
  return {
    templateUrl: "view/accordion.html",
    transclude: true,
    scope: {
      title: "@",
    },
    require: "uiAccordions",
    link: function (scope, element, attrs, ctrl) {
      ctrl.registerAccordion(scope);
      scope.open = function () {
        ctrl.closeAll();
        scope.isOpened = true;
      };
    },
  };
});
