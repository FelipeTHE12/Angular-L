angular
  .module("agenda")
  .controller(
    "agendaController",
    function ($scope, contactAPI, operadoraAPI, serialGenerator) {
      console.log(serialGenerator.generate());
      $scope.app = "Lista Telefonica";

      $scope.contacts = [];

      $scope.operadoras = [];

      var loadContact = function () {
        contactAPI
          .getContact()
          .then(function (data, status) {
            $scope.contacts = data.data;
          })
          .catch(function (err, status) {
            $scope.error = "Houve um erro: " + err.err;
          });
      };

      var loadOperadoras = function () {
        operadoraAPI
          .getOperadoras()
          .then(function (data, status) {
            $scope.operadoras = data.data;
          })
          .catch(function (err, status) {
            $scope.error = "Houve um erro: " + err.err;
          });
      };

      $scope.addContact = function (contact) {
        contact.serial = serialGenerator.generate();
        if (contact.date === undefined) {
          contact.date = new Date();
        }
        contactAPI.saveContact(contact).then(function () {
          delete $scope.contact;
          $scope.contactForm.$setPristine();
          loadContact();
        });
      };

      $scope.deleteContacts = function (contacts) {
        $scope.contacts = contacts.filter(function (contact) {
          if (!contact.selecionado) return contact;
        });
      };

      $scope.isContactSelecionado = function (contacts) {
        return contacts.some(function (contact) {
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
    }
  );
