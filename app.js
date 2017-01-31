let jasonobject = {
    jason : {
        name : "Jason Lengstorf",
        age : "24",
        gender : "male"
    },
    kyle : {
        name : "Kyle Lengstorf",
        age : "21",
        gender : "shemale"
    },
    Bahamut : {
        name : "bahamut mamouth",
        age : "666",
        gender : "male"
    },
    Odin : {
        name : "odin zantetsuken",
        age : "450",
        gender : "male"
    }

}
console.log("jasonobject ID is", jasonobject.Bahamut);
console.log("jasonobject is", jasonobject);

JSON.stringify(jasonobject)
console.log("jasonobject after stringify is", jasonobject);
JSON.parse(jasonobject)
console.log("jasonobject after parse is", jasonobject);



angular.module('inputExample', [])
  .controller('ExampleController', ['$scope', function($scope) {
    $scope.user = {name: 'guest', last: 'visitor'};
  }]);
