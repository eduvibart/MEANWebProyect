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
    $http.get('/api/getProductos')
      .then(function(response) {
        console.log("Get Products", response);
        $scope.products = response.data;
      }, function errorCallback(response) {
        console.log("Error", response);
      });
  };

  // Función para agregar una nueva prenda
  $scope.addProduct = function () {
    $http.post('/api/crearPrenda', $scope.product)
      .then(function(response) {
        $scope.product = {};
        refresh();
        console.log("Ok ADD", response);
      }, function errorCallback(response) {
        console.log("Bad ADD", response);
      });
  };

  // Función para filtrar las prendas según tipo y talle
  $scope.filtrarPrendas = function() {
    // Creamos un objeto para almacenar los filtros seleccionados
    var filtros = {};

    // Agregamos los filtros solo si están seleccionados
    if ($scope.filtro.tipo) {
      filtros.tipo = $scope.filtro.tipo;
    }
    if ($scope.filtro.talle) {
      filtros.talle = $scope.filtro.talle;
    }

    // Llamamos a la API REST para filtrar los productos en el servidor
    $http.get('/api/getProductos', { params: filtros })
      .then(function(response) {
        console.log("Get Products (Filtrados)", response);
        $scope.products = response.data;
      }, function errorCallback(response) {
        console.log("Error", response);
      });
  };

  // Función para eliminar una prenda
  $scope.removeProduct = function (codigoArticulo) {
    $http.delete('/api/deleteProducto/' + codigoArticulo)
      .then(function(response) {
        console.log("Producto eliminado:", response);
        // Actualizar la lista de prendas después de eliminar una
        refresh();
      }, function errorCallback(response) {
        console.log("Error al eliminar el producto:", response);
      });
  };

  // Llamamos a la función refresh para obtener todos los productos al cargar la página
  refresh();
});
