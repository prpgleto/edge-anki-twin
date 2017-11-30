"use strict";function refreshLoop(a,b,c){timer=b(function(){},1e3),timer.then(function(){console.log("INFO: Timer triggered"),c.getStatus().then(function(b){a.status=b.data},function(a){console.error("ERROR: Request failed: "+a.statusText)}),a.poll&&refreshLoop(a,b,c)},function(){console.error("ERROR: Timer rejected!")})}function startsWithCharAt(a,b){for(var c=0,d=b.length;d>c;c+=1)if(b.charAt(c)!==a.charAt(c))return!1;return!0}angular.module("htmlApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ngJustGage"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/home",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]);var timer;angular.module("htmlApp").controller("MainCtrl",["$scope","$timeout","MainFactory",function(a,b,c){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.togglePoll=function(){console.log("INFO: Handling togglePoll"),a.poll?(a.text="Start polling",a.poll=!1):(a.text="Stop polling",a.poll=!0,refreshLoop(a,b,c))},a.requestPing=function(a){console.log("INFO: Handling requestPing for carno "+a);var b={command:"ping",carNo:a,source:"ui"};c.postCommand(b).then(function(a){console.log("INFO: Ping command submitted to server: "+a.statusText)},function(a){console.error("ERROR: Request failed: "+a.statusText)})},a.requestVersion=function(a){console.log("INFO: Handling requestVersion for carno "+a);var b={command:"ver",carNo:a,source:"ui"};c.postCommand(b).then(function(a){console.log("INFO: Version command submitted to server: "+a.statusText)},function(a){console.error("ERROR: Request failed: "+a.statusText)})},a.changeSpeedUp=function(a){console.log("INFO: Handling changeSpeedUp for carno "+a);var b={command:"s",param1:"750",carNo:a,source:"ui"};c.postCommand(b).then(function(a){console.log("INFO: SpeedUp command submitted to server: "+a.statusText)},function(a){console.error("ERROR: Request failed: "+a.statusText)})},a.changeSpeedDown=function(a){console.log("INFO: Handling changeSpeedDown for carno "+a);var b={command:"s",param1:"250",carNo:a,source:"ui"};c.postCommand(b).then(function(a){console.log("INFO: SpeedDown command submitted to server: "+a.statusText)},function(a){console.error("ERROR: Request failed: "+a.statusText)})},a.changeSpeedStop=function(a){console.log("INFO: Handling changeSpeedStop for carno "+a);var b={command:"e",carNo:a,source:"ui"};c.postCommand(b).then(function(a){console.log("INFO: SpeedStop command submitted to server: "+a.statusText)},function(a){console.error("ERROR: Request failed: "+a.statusText)})},a.changeLaneLeft=function(a){console.log("INFO: Handling changeLaneLeft for carno "+a);var b={command:"c",param1:"-68",carNo:a,source:"ui"};c.postCommand(b).then(function(a){console.log("INFO: changeLaneLeft command submitted to server: "+a.statusText)},function(a){console.error("ERROR: Request failed: "+a.statusText)})},a.changeLaneRight=function(a){console.log("INFO: Handling changeLaneRight for carno "+a);var b={command:"c",param1:"68",carNo:a,source:"ui"};c.postCommand(b).then(function(a){console.log("INFO: changeLaneRight command submitted to server: "+a.statusText)},function(a){console.error("ERROR: Request failed: "+a.statusText)})},a.showInitialise=function(a){console.log("INFO: Handling showInitialise for carno "+a)},a.changeLight=function(a){console.log("INFO: Handling changeLight for carno "+a);var b={command:"l",carNo:a,source:"ui"};c.postCommand(b).then(function(a){console.log("INFO: changeLight command submitted to server: "+a.statusText)},function(a){console.error("ERROR: Request failed: "+a.statusText)})},a.changeLightPattern=function(a){console.log("INFO: Handling changeLightPattern for carno "+a);var b={command:"lp",carNo:a,source:"ui"};c.postCommand(b).then(function(a){console.log("INFO: changeLightPattern command submitted to server: "+a.statusText)},function(a){console.error("ERROR: Request failed: "+a.statusText)})},a.requestLevel=function(a){console.log("INFO: Handling requestLevel for carno "+a);var b={command:"bat",carNo:a,source:"ui"};c.postCommand(b).then(function(a){console.log("INFO: requestLevel command submitted to server: "+a.statusText)},function(a){console.error("ERROR: Request failed: "+a.statusText)})},a.lastUpdate="N/A",a.poll=!1,a.text="Start polling",a.status=[{},{},{}]}]),angular.module("htmlApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),console.log("Initialise services at: "+window.location.href);var baseURL="";startsWithCharAt(window.location.href,"http://localhost:9000")&&(baseURL="http://localhost:8000",console.log("INFO: Using hard coded dev server at: "+baseURL)),angular.module("htmlApp").factory("MainFactory",["$http",function(a){var b={};return b.getStatus=function(){return a.get(baseURL+"/v1/twin/status")},b.postCommand=function(b){return a.post(baseURL+"/v1/twin/command",b)},b}]),angular.module("htmlApp").run(["$templateCache",function(a){a.put("views/about.html",'<!--\nCopyright 2018 NTT Group\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this \nsoftware and associated documentation files (the "Software"), to deal in the Software \nwithout restriction, including without limitation the rights to use, copy, modify, \nmerge, publish, distribute, sublicense, and/or sell copies of the Software, and to \npermit persons to whom the Software is furnished to do so, subject to the following \nconditions:\n\nThe above copyright notice and this permission notice shall be included in all copies \nor substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, \nINCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR \nPURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE \nFOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR \nOTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER \nDEALINGS IN THE SOFTWARE.\n--> <div class="jumbotron"> <p class="lead"><img src="images/golang.ce23e79a.png" width="80" height="80"> <br></p> <p>Hello Gopher</p> </div> <p> This is a digital twin of the Anki Overdrive which shows the current status of the cars. The twin works both ways, which means that the cars can also be controlled from this twin, e.g. spped and lane offset. </p>'),a.put("views/main.html",'<!--\nCopyright 2018 NTT Group\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this \nsoftware and associated documentation files (the "Software"), to deal in the Software \nwithout restriction, including without limitation the rights to use, copy, modify, \nmerge, publish, distribute, sublicense, and/or sell copies of the Software, and to \npermit persons to whom the Software is furnished to do so, subject to the following \nconditions:\n\nThe above copyright notice and this permission notice shall be included in all copies \nor substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, \nINCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR \nPURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE \nFOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR \nOTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER \nDEALINGS IN THE SOFTWARE.\n--> <div> <p><a class="btn btn-lg btn-success" ng-click="togglePoll()">{{ text }}</a></p> <br> <p> <table class="table table-striped"> <tr><th>Sensor</th><th colspan="2">Car 1</th><th colspan="2">Car 2</th><th colspan="2">Car 3</th></tr> <tr> <td>Last Update</td> <!-- Car1 --> <td>{{ status[0].lastUpdate }}</td> <td> <a ng-click="requestPing(\'1\')" class="btn btn-link"> <span class="glyphicon glyphicon-repeat"></span> </a> </td> <!-- Car2 --> <td>{{ status[1].lastUpdate }}</td> <td> <a ng-click="requestPing(\'2\')" class="btn btn-link"> <span class="glyphicon glyphicon-repeat"></span> </a> </td> <!-- Car3 --> <td>{{ status[2].lastUpdate }}</td> <td> <a ng-click="requestPing(\'3\')" class="btn btn-link"> <span class="glyphicon glyphicon-repeat"></span> </a> </td> </tr> <tr> <td>Speed</td> <!-- Car1 --> <td>{{ status[0].speed }}</td> <td> <a ng-click="changeSpeedDown(\'1\')" class="btn btn-link"> <span class="glyphicon glyphicon-circle-arrow-down"></span> </a> <a ng-click="changeSpeedUp(\'1\')" class="btn btn-link"> <span class="glyphicon glyphicon-circle-arrow-up"></span> </a> <a ng-click="changeSpeedStop(\'1\')" class="btn btn-link"> <span class="glyphicon glyphicon-off"></span> </a> </td> <!-- Car2 --> <td>{{ status[1].speed }}</td> <td> <a ng-click="changeSpeedDown(\'2\')" class="btn btn-link"> <span class="glyphicon glyphicon-circle-arrow-down"></span> </a> <a ng-click="changeSpeedUp(\'2\')" class="btn btn-link"> <span class="glyphicon glyphicon-circle-arrow-up"></span> </a> <a ng-click="changeSpeedStop(\'2\')" class="btn btn-link"> <span class="glyphicon glyphicon-off"></span> </a> </td> <!-- Car3 --> <td>{{ status[2].speed }}</td> <td> <a ng-click="changeSpeedDown(\'3\')" class="btn btn-link"> <span class="glyphicon glyphicon-circle-arrow-down"></span> </a> <a ng-click="changeSpeedUp(\'3\')" class="btn btn-link"> <span class="glyphicon glyphicon-circle-arrow-up"></span> </a> <a ng-click="changeSpeedStop(\'3\')" class="btn btn-link"> <span class="glyphicon glyphicon-off"></span> </a> </td> </tr> <tr> <td>Offset</td> <!-- Car1 --> <td>{{ status[0].offset }}</td> <td> <a ng-click="changeLaneLeft(\'1\')" class="btn btn-link"> <span class="glyphicon glyphicon-circle-arrow-left"></span> </a> <a ng-click="changeLaneRight(\'1\')" class="btn btn-link"> <span class="glyphicon glyphicon-circle-arrow-right"></span> </a> <a ng-click="showInitialise(\'1\')" class="btn btn-link"> <span class="glyphicon glyphicon-cog"></span> </a> </td> <!-- Car2 --> <td>{{ status[1].offset }}</td> <td> <a ng-click="changeLaneLeft(\'2\')" class="btn btn-link"> <span class="glyphicon glyphicon-circle-arrow-left"></span> </a> <a ng-click="changeLaneRight(\'2\')" class="btn btn-link"> <span class="glyphicon glyphicon-circle-arrow-right"></span> </a> <a ng-click="showInitialise(\'2\')" class="btn btn-link"> <span class="glyphicon glyphicon-cog"></span> </a> </td> <!-- Car3 --> <td>{{ status[2].offset }}</td> <td> <a ng-click="changeLaneLeft(\'3\')" class="btn btn-link"> <span class="glyphicon glyphicon-circle-arrow-left"></span> </a> <a ng-click="changeLaneRight(\'3\')" class="btn btn-link"> <span class="glyphicon glyphicon-circle-arrow-right"></span> </a> <a ng-click="showInitialise(\'3\')" class="btn btn-link"> <span class="glyphicon glyphicon-cog"></span> </a> </td> </tr> <tr> <td>Lights</td> <!-- Car1 --> <td>N/A</td> <td> <a ng-click="changeLight(\'1\')" class="btn btn-link"> <span class="glyphicon glyphicon-star"></span> </a> <a ng-click="changeLightPattern(\'1\')" class="btn btn-link"> <span class="glyphicon glyphicon-asterisk"></span> </a> </td> <!-- Car2 --> <td>N/A</td> <td> <a ng-click="changeLight(\'2\')" class="btn btn-link"> <span class="glyphicon glyphicon-star"></span> </a> <a ng-click="changeLightPattern(\'2\')" class="btn btn-link"> <span class="glyphicon glyphicon-asterisk"></span> </a> </td> <!-- Car3 --> <td>N/A</td> <td> <a ng-click="changeLight(\'3\')" class="btn btn-link"> <span class="glyphicon glyphicon-star"></span> </a> <a ng-click="changeLightPattern(\'3\')" class="btn btn-link"> <span class="glyphicon glyphicon-asterisk"></span> </a> </td> </tr> <tr> <td>Version</td> <!-- Car1 --> <td>{{ status[0].version }}</td> <td> <a ng-click="requestVersion(\'1\')" class="btn btn-link"> <span class="glyphicon glyphicon-repeat"></span> </a> </td> <!-- Car2 --> <td>{{ status[1].version }}</td> <td> <a ng-click="requestVersion(\'2\')" class="btn btn-link"> <span class="glyphicon glyphicon-repeat"></span> </a> </td> <!-- Car3 --> <td>{{ status[2].version }}</td> <td> <a ng-click="requestVersion(\'3\')" class="btn btn-link"> <span class="glyphicon glyphicon-repeat"></span> </a> </td> </tr> <tr> <td>Battery Level</td> <!-- Car1 --> <td>{{ status[0].level }}</td> <td> <a ng-click="requestLevel(\'1\')" class="btn btn-link"> <span class="glyphicon glyphicon-repeat"></span> </a> </td> <!-- Car2 --> <td>{{ status[1].level }}</td> <td> <a ng-click="requestLevel(\'2\')" class="btn btn-link"> <span class="glyphicon glyphicon-repeat"></span> </a> </td> <!-- Car3 --> <td>{{ status[2].level }}</td> <td> <a ng-click="requestLevel(\'3\')" class="btn btn-link"> <span class="glyphicon glyphicon-repeat"></span> </a> </td> </tr> <tr> <td>Piece No</td> <!-- Car1 --> <td>{{ status[0].piece_id }}</td> <td> <a class="btn btn-link"> <span class="glyphicon glyphicon-xxx"></span> </a> </td> <!-- Car2 --> <td>{{ status[1].piece_id }}</td> <td> <a class="btn btn-link"> <span class="glyphicon glyphicon-xxx"></span> </a> </td> <!-- Car3 --> <td>{{ status[2].piece_id }}</td> <td> <a class="btn btn-link"> <span class="glyphicon glyphicon-xxx"></span> </a> </td> </tr> <tr> <td>Piece ID</td> <!-- Car1 --> <td>{{ status[0].piece_id }}</td> <td> <a class="btn btn-link"> <span class="glyphicon glyphicon-xxx"></span> </a> </td> <!-- Car2 --> <td>{{ status[1].piece_id }}</td> <td> <a class="btn btn-link"> <span class="glyphicon glyphicon-xxx"></span> </a> </td> <!-- Car3 --> <td>{{ status[2].piece_id }}</td> <td> <a class="btn btn-link"> <span class="glyphicon glyphicon-xxx"></span> </a> </td> </tr> <tr> <td>Piece Location</td> <!-- Car1 --> <td>{{ status[0].piece_location }}</td> <td> <a class="btn btn-link"> <span class="glyphicon glyphicon-xxx"></span> </a> </td> <!-- Car2 --> <td>{{ status[1].piece_location }}</td> <td> <a class="btn btn-link"> <span class="glyphicon glyphicon-xxx"></span> </a> </td> <!-- Car3 --> <td>{{ status[2].piece_location }}</td> <td> <a class="btn btn-link"> <span class="glyphicon glyphicon-xxx"></span> </a> </td> </tr> </table> </p> </div>')}]);