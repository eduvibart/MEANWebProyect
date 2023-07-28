var app = angular.module('app', []);

app.controller('myController', function($scope, $http) {
  $scope.products = [];
  $scope.product = {};
  $scope.filtro = {
    tipo: '',
    talle: ''
  };

  // Función para obtener todos los productos
  var refresh = function() {
    $http.get('/getProductos')
      .then(function(response) {
        console.log("Get Products", response);
        $scope.products = response.data;
      }, function errorCallback(response) {
        console.log("Error", response);
      });
  };

  // Función para agregar una nueva prenda
  $scope.addProduct = function () {
    $http.post('/crearPrenda', $scope.product)
      .then(function(response) {
        refresh();
        console.log("Ok ADD", response);
      }, function errorCallback(response) {
        console.log("Bad ADD", response);
      });
  };

  // Función para filtrar las prendas según tipo y talle
  $scope.filtrarPrendas = function() {
    // Llamamos a la API REST para filtrar los productos en el servidor
    $http.get('/getProductos', { params: $scope.filtro })
      .then(function(response) {
        console.log("Get Products (Filtrados)", response);
        $scope.products = response.data;
      }, function errorCallback(response) {
        console.log("Error", response);
      });
  };

  // Funciones para eliminar y editar una prenda (remove, edit, update, deselect)
  // ...

  // Llamamos a la función refresh para obtener todos los productos al cargar la página
  refresh();
});
