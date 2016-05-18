

angular.module("myApp", []).controller("forca", function($scope) {

	$scope.enviar = function(valido){
		console.log(valido);
		if(valido){
			console.log("enviado");
		}else{
			console.log("invalido");
		}

	}


});
