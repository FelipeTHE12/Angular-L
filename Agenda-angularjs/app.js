angular.module("agenda",["ngMessages"]);

angular.module("agenda").controller("agendaController", function($scope){

    $scope.app = "Lista Telefonica";

    $scope.contacts = [
        {nome: "Felipe", telefone: "123456789", date: new Date()},
        {nome: "12", telefone: "132465789", date: new Date()},
        {nome: "XII", telefone: "987654321", date: new Date()}
    ];

    $scope.operadoras = [
        {nome: "Tim", codigo: "99", categoria: "Celular", preco: 3},
        {nome: "Vivo", codigo: "88", categoria: "Celular", preco: 2},
        {nome: "Claro", codigo: "77", categoria: "Celular", preco: 4},
        {nome: "GVT", codigo: "31", categoria: "Fixo", preco: 2},
        {nome: "BH", codigo: "32", categoria: "Fixo", preco: 1}
    ];

    $scope.addContact = function(contact) {
        $scope.contacts.push(contact);
        delete $scope.contact;
        $scope.contactForm.$setPristine();
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
    }
});