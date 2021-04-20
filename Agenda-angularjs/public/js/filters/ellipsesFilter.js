angular.module("agenda").filter("ellipsis", function () {
  return function (input, size) {
    if (input.length <= size) return input;
    var outpt = input.substring(0, size || 2) + ". . .";
    return outpt;
  };
});
