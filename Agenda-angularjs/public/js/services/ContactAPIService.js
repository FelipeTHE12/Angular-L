angular.module("agenda").factory("contactAPI", function ($http) {
    var _getContacts = function () {
        return $http.get("http://localhost:8080/contact");
    };

    var _saveContacts = function (contatc) {
        return $http.post("http://localhost:8080/contact", contatc);
    };

    return {
        getContact: _getContacts,
        saveContact: _saveContacts
    };
});