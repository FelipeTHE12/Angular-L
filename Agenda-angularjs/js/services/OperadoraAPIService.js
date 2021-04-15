angular.module("agenda").service("operadoraAPI", function($http) {
    this.getOperadoras = function() {
        return $http.get("http://localhost:8080/operadora")
    };
});