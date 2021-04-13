angular.module("agenda",["ngMessages"]);

angular.module("agenda").controller("agendaController", function($scope, $http){

    $scope.app = "Lista Telefonica";

    $scope.contacts = [];

    $scope.operadoras = [];
    
    var loadContact = function () {
        $http.get("http://localhost:8080/contact").then(function (data, status) {
            $scope.contacts = data.data;
            console.log(data.data);
        });
    };

    var loadOperadoras = function () {
        $http.get("http://localhost:8080/operadora").then(function(data, status) {
            console.log(data.data.nome);
            $scope.operadoras = data.data
        });
    };

    $scope.addContact = function(contact) {
        console.log(contact);
        console.log(contact.operadora)
        if (contact.date === undefined) {
            contact.date = new Date();
        }
        $http.post("http://localhost:8080/contact", contact).then(function() {
            delete $scope.contact;
            $scope.contactForm.$setPristine();
            loadContact();
        });

    };

    $scope.deleteContacts = function(contacts) {
        $scope.contacts = contacts.filter(function (contact){
            if (!contact.selecionado) return contact;
        });
    };

    $scope.isContactSelecionado = function(contacts) {
       return contacts.some(function (contact){
            return contact.selecionado;
        });
    };

    $scope.ordenarPor = function (field) {
        console.log(field);
        $scope.criterioDeOrdenacao = field;
        $scope.direcaodaOrdenacao = !$scope.direcaodaOrdenacao;
    };

    loadContact();
    loadOperadoras();
    
});