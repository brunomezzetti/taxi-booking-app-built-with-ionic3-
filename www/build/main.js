webpackJsonp([17],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthProvider = (function () {
    //public provider = new firebase.auth.FacebookAuthProvider();
    function AuthProvider(platform, facebook) {
        var _this = this;
        this.platform = platform;
        this.facebook = facebook;
        this.userProfileRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/userProfile');
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().onAuthStateChanged(function (user) { return _this.currentUser = user; });
    }
    AuthProvider.prototype.loginUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.signupUser = function (email, password) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().createUserWithEmailAndPassword(email, password).then(function (newUser) {
            _this.userProfileRef.child(newUser.uid).set({
                email: email
            });
        });
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.logoutUser = function () {
        this.userProfileRef.child(__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid).off();
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signOut();
    };
    Object.defineProperty(AuthProvider.prototype, "authenticated", {
        get: function () {
            return this.currentUser !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthProvider.prototype.signInWithFacebook = function () {
        if (this.platform.is('cordova')) {
            return this.facebook.login(['email'])
                .then(function (response) {
                var facebookCredential = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth.FacebookAuthProvider
                    .credential(response.authResponse.accessToken);
                __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signInWithCredential(facebookCredential)
                    .then(function (success) {
                    console.log("Firebase success: " + JSON.stringify(success));
                }).catch(function (error) {
                    console.log("Firebase failure: " + JSON.stringify(error));
                    alert('Network Error, Check Your Connection And Try Again');
                });
            }).catch(function (error) { console.log(error); });
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signInWithPopup(new __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth.FacebookAuthProvider()).then(function (success) {
                console.log("Firebase success: " + JSON.stringify(success));
            })
                .catch(function (error) {
                console.log("Firebase failure: " + JSON.stringify(error));
                alert('Network Error, Check Your Connection And Try Again');
            });
        }
    };
    AuthProvider.prototype.signOut = function () {
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signOut();
    };
    AuthProvider.prototype.displayName = function () {
        if (this.currentUser !== null) {
            return this.currentUser.displayName;
        }
        else {
            return '';
        }
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */]])
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventProvider = (function () {
    function EventProvider() {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.id = user.uid;
                console.log();
                _this.userProfileRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("userProfile/" + user.uid);
                // this.CustomerRef = firebase.database().ref(`Customer/${this.selected_driver}`);
                _this.CustomerOwnPropertyRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + user.uid + "/client");
            }
        });
    }
    EventProvider.prototype.getEventList = function () {
        return this.userProfileRef.child('/eventList');
    };
    EventProvider.prototype.getEventDetail = function (eventId) {
        return this.userProfileRef.child('/eventList').child(eventId);
    };
    EventProvider.prototype.createHistory = function (name, price, date, location, destination) {
        return this.userProfileRef.child('/eventList').push({
            name: name,
            price: price,
            date: date,
            location: location,
            destination: destination
        });
    };
    EventProvider.prototype.PushUserDetails = function (name, picture, lat, lng, locationName, payWith) {
        return this.CustomerRef.child("/client").update({
            Client_username: name,
            Client_location: [lat, lng],
            Client_locationName: locationName,
            Client_paymentForm: payWith,
            Client_picture: picture,
            // Driver_location: [5.484261666666667, 7.481518333333335],
            Client_ID: this.id,
            Client_PickedUp: false,
            Client_Dropped: false,
            Client_HasRated: false
        });
    };
    EventProvider.prototype.UpdateDestination = function (destinationName, price, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client").update({
            Client_destinationName: destinationName,
            Client_price: price,
        });
    };
    EventProvider.prototype.UpdateNetworkSate = function (state, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client").update({
            Network_state: state,
        });
    };
    EventProvider.prototype.UpdateCard = function (card, month, year, cvc, amount, email, driverPay) {
        return this.userProfileRef.update({
            Card_Number: card,
            Card_month: month,
            Card_Year: year,
            Card_Cvc: cvc,
            Card_Amount: amount,
            Card_email: email,
            Card_driverPay: driverPay
        });
    };
    return EventProvider;
}());
EventProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], EventProvider);

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RatePage = (function () {
    function RatePage(navCtrl, storage, pop, navParams, prof) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.pop = pop;
        this.navParams = navParams;
        this.prof = prof;
    }
    RatePage.prototype.onModelChange = function ($event) {
        var _this = this;
        var value = this.navParams.get('eventId');
        console.log(value);
        this.prof.RateDriver(value, true).then(function (suc) {
            // this.pop.clearAll(value, true);
            _this.navCtrl.pop();
        });
    };
    return RatePage;
}());
RatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-rate',template:/*ion-inline-start:"C:\Temp\GitHub\ThinkAM\taxi-booking-app-built-with-ionic3-\src\pages\rate\rate.html"*/'<!--\n\n  Generated template for the RatePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n\n\n  <ion-navbar color="nav-color">\n\n    <ion-title>Rate</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content text-center padding>\n\n    <ion-title >You Have Been Charged</ion-title>\n\n    <ion-item-divider no-lines></ion-item-divider>\n\n    <ion-title>Rate Your Ride</ion-title>\n\n    <ion-item-divider></ion-item-divider>\n\n  <rating [(ngModel)]="rate" \n\n  readOnly="false"\n\n  max="5" \n\n  emptyStarIconName="star-outline" \n\n  halfStarIconName="star-half" \n\n  starIconName="star" \n\n  nullable="false" \n\n  (ngModelChange)="onModelChange($event)"></rating>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Temp\GitHub\ThinkAM\taxi-booking-app-built-with-ionic3-\src\pages\rate\rate.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */]])
], RatePage);

//# sourceMappingURL=rate.js.map

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		444,
		16
	],
	"../pages/autocomplete/autocomplete.module": [
		445,
		15
	],
	"../pages/card/card.module": [
		446,
		14
	],
	"../pages/entrance/entrance.module": [
		447,
		13
	],
	"../pages/history-details/history-details.module": [
		449,
		12
	],
	"../pages/history/history.module": [
		448,
		11
	],
	"../pages/home/home.module": [
		450,
		10
	],
	"../pages/login-entrance/login-entrance.module": [
		452,
		9
	],
	"../pages/login/login.module": [
		451,
		2
	],
	"../pages/payment/payment.module": [
		453,
		8
	],
	"../pages/phone/phone.module": [
		454,
		7
	],
	"../pages/profile/profile.module": [
		455,
		6
	],
	"../pages/promo/promo.module": [
		456,
		5
	],
	"../pages/reset-password/reset-password.module": [
		457,
		1
	],
	"../pages/signup/signup.module": [
		458,
		0
	],
	"../pages/startup/startup.module": [
		459,
		4
	],
	"../pages/support/support.module": [
		460,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 205;

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapContainerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_geocoder_geocoder__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_anim_control_anim_control__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the MapContainerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var MapContainerProvider = (function () {
    function MapContainerProvider(myProf, anim, gcode, platform) {
        this.myProf = myProf;
        this.anim = anim;
        this.gcode = gcode;
        this.platform = platform;
        this.onLocationbarHide = true;
        this.onDestinatiobarHide = false;
        this.speed = 50; // km/h
        this.cars = [];
        this.car_location = [];
        this.car_notificationIds = [];
        this.delay = 100;
        this.hasRequested = false;
        this.isCarAvailable = false;
        this.value = -1;
        this.location = [];
        this.GateIsOpen = true;
        this.onGpsEnabled = false;
    }
    MapContainerProvider.prototype.loadMap = function (container) {
        var _this = this;
        this.platform.ready().then(function () {
            var latLng;
            var zoom;
            if (_this.lat != 0) {
                latLng = new google.maps.LatLng(_this.lat, _this.lng);
                zoom = 17;
                _this.hasRequested = false;
            }
            else {
                latLng = new google.maps.LatLng(5.4982219, 7.5019607);
                zoom = 6;
                _this.hasRequested = true;
            }
            clearTimeout(myTime);
            var icon = {
                url: "data:image/png;base64,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",
                scaledSize: new google.maps.Size(30, 30),
            };
            var mapOptions = {
                center: latLng,
                zoom: zoom,
                minZoom: 6,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true
            };
            _this.map = new google.maps.Map(container, mapOptions);
            _this.marker = new google.maps.Marker({
                position: latLng,
                icon: icon
            });
            _this.marker.setMap(_this.map);
            var antennasCircle = new google.maps.Circle({
                strokeColor: "#5992F5",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#5992F5",
                fillOpacity: 0.35,
                map: _this.map,
                center: latLng,
                radius: 200
            });
            var circTime = setTimeout(function () {
                antennasCircle.setRadius(0);
            }, 3000);
            var center;
            _this.map.addListener('dragstart', function () {
                if (!_this.hasRequested) {
                    _this.anim.toggleFlipAnim('notFlipped');
                    _this.onLocationbarHide = false;
                    _this.isCarAvailable = false;
                    _this.anim.toggleFlyOutAnim('out');
                    clearTimeout(_this.timetoRefr);
                    _this.onDestinatiobarHide = false;
                    antennasCircle.setRadius(0);
                    clearTimeout(circTime);
                }
            });
            _this.map.addListener('dragend', function () {
                if (!_this.hasRequested) {
                    _this.anim.toggleFlipAnim('flipped');
                    _this.onLocationbarHide = true;
                    _this.isCarAvailable = true;
                    center = _this.map.getCenter();
                    _this.lat = center.lat();
                    _this.lng = center.lng();
                    if (_this.locations != null)
                        _this.showCloseDrivers(_this.lat, _this.lng);
                    _this.gcode.Reverse_Geocode(center.lat(), center.lng(), _this.map, false);
                }
            });
            if (google && google.maps) {
                if (_this.lat != 0) {
                    _this.anim.toggleFlipAnim('flipped');
                    _this.gcode.Reverse_Geocode(_this.lat, _this.lng, _this.map, false);
                    var myTime = setTimeout(function () {
                        _this.showDriversOnMap();
                        // this.moveUser();
                    }, 3000);
                }
                else {
                    console.log("has request");
                    _this.anim.toggleFlipAnim('notFlipped');
                    _this.gcode.Reverse_Geocode(_this.lat, _this.lng, _this.map, false);
                }
            }
        });
    };
    MapContainerProvider.prototype.RefreshMap = function (address) {
        // google.maps.event.trigger(this.map, 'resize');
        var _this = this;
        var geocode = new google.maps.Geocoder;
        geocode.geocode({ 'address': address }, function (results, status) {
            if (status == 'OK') {
                var position = results[0].geometry.location;
                var matLatr = new google.maps.LatLng(position.lat(), position.lng());
                _this.map.setCenter(matLatr);
                console.log(_this.lat);
            }
            else {
                // alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };
    MapContainerProvider.prototype.moveUser = function () {
        var _this = this;
        var rope = setInterval(function () {
            _this.marker.setPosition(new google.maps.LatLng(_this.lat, _this.lng));
        }, 500);
    };
    MapContainerProvider.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.cars.length; i++) {
            this.cars[i].setMap(map);
        }
    };
    MapContainerProvider.prototype.showDriversOnMap = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var allCars;
            var id;
            var car = {
                url: "data:image/png;base64,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",
                scaledSize: new google.maps.Size(35, 35),
            };
            _this.myProf.getAllDrivers().on('child_added', function (driverSnapshot) {
                _this.isCarAvailable = true;
                _this.locations = [driverSnapshot.val().driver_details[0], driverSnapshot.val().driver_details[1]];
                id = [driverSnapshot.val().driver_details[2]];
                var marker, i;
                console.log(_this.locations.length);
                _this.showCloseDrivers(_this.lat, _this.lng);
                if (_this.locations.length <= 4) {
                    allCars = new google.maps.Marker({
                        position: new google.maps.LatLng(_this.locations[0], _this.locations[1]),
                        map: _this.map,
                        icon: car
                    });
                    allCars.setMap(_this.map);
                    _this.cars.push(allCars);
                    console.log(_this.cars);
                }
                // }while(this.locations.length <= 4)
                _this.locations.push([driverSnapshot.val().driver_details[0], driverSnapshot.val().driver_details[1]]);
                console.log(_this.locations[1]);
                _this.car_notificationIds.push(id);
                _this.myProf.getAllDrivers().off('child_added');
                //  this.locations.push([driverSnapshot.val().driver_details[0], driverSnapshot.val().driver_details[1]]);
                // this.car_location.push(this.location);
                console.log(_this.car_location);
                //console.log(driverSnapshot.val().driver_details[2], this.location.length, driverSnapshot.val().driver_details[0], driverSnapshot.val().driver_details[1])
            });
        });
    };
    MapContainerProvider.prototype.setMarkers = function (driverlocation, uid) {
        var car = {
            url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAgAElEQVR4Xux9B5xdZZn+85122/TeMjOppJEEQhIIRCIdAUGQJoKCSlNExb4WENe6uC4uuq6LDRQNIr2DlGBCgIT0XqZl+ty5c/s97fv/3vc7dxJdEHDlT4SMhrkzc++Zc8+ctz3v8z6vwMGPv7gCEhACkMXPb+XlWbxk8TkFz/2259jnrX1x7dq38lwO/u635xUQb+XbkhJCCMi38hze7N89ZcqU0GGhw8z3TJ1lrOzeJFeP7kYlKgGMYlLlfMyvpMev/JHx7ZKnxLbPt9dNdqLbCzc+MboahmbIueVzxcSGidp98fvyK1euzL3Z7+Hg8d++V+AtdQBvp8v6xWM+UFlpVMfu71qhzameKueWt4lfdTzVbBeyp8+tnTF7SfOh014e2m5vSXShzIjC8xy0VbdjUmkjQtKHT25QSviQ4x5R9yCNqmiorKWlZsULK7rX9q7VpaVjfu2haKpsiz3S8cyTdWb0lrpoQ2J172rMbl/gjVSP9N95553e2+naHnwvb94VeEscwD9r5L98/uUm/SmaSpvkSwN/mqjDajtr6rHGsz1r7KZY9XWVRvm7lvevjU6vbMUhFS3oygxphhAoMWMotaLQoEHXDEgqMKQPDz583weEBil9SOkBQge5Afq570vouonSxjrY2Swyg6PQTKDgu8h4Lobyw/A8CU8z/O2ju7Up9TNGk5H8V5x4ZteusX47DLyUL8nnS0tL5dNPP+0WbyMppRBCvK0zrzfPZN5eR35LHMA/yyX8+ML3VSfz0MvC8Mby9sz6SPXRgIfqWLk7msucL4Q4YmbVJIzkk4gYIZRZpQhrGmy/AE96COsRSAi4vgvHdyjEM8DA4V5oAAQk1UDkEDgFICcAQNNAT/M8n1wBSmrKYMRiGOvohgsfOd+GLW3A9+ELIGsX+LU5eEjk09A0HUP5DDwn+5OhfKLL0PTCwGj8ucmVzR0f+96n/bPPPnvkn+VvcPA839wrcNAB/NX1XTLlsNqWcH1jY2V1re6JSwu+jIb0cC6siSPrI1WTLDMEXWioDJVD+hJ530HMDMHxXdi+SyZNFsyGTFFdsCmrD3rEYZf+I+hn9FCDJF/ATsCH1AQ812MnoIV02Jks9JCJ0rZ6JDr2opDLwwhZhAVwhiAMwLd9eOQInBQc24HtO9CEgG1IjLlZrNm7DXnP3t4Yq1y/5LQT+qvaG381Y86MTYsXLz6IH7y59nXAH/2gAwCwtH1e+zGNi6Z35XpDBTt3YUNJ3aKGsuqSSjNWEzFLYMJE1AzB9fOcwlNUdimISzJ3itqUXfsQHNV1TvWVnVP8D4xeo6xecqDXTB2e78LzJWMB/HRLg53LQY+GkUukIeHBKLGQT1JclyhrrIVru0gPDMIyQrA0E6ZmsVfh3+H7cOHC9lzkvDw8WYBphGDoIWwd2o3O1ADi2QSMtI8FRy7c9Z7Lzn1g5vy5v2md3PriAX+XHjzBN+0KvOkO4ECtN+fPn29G4+751eHKmohunjm76pClea+AplgVyOgjusmGqQkdAgYbJFXtVDkrQw9iu6C0XhsP79TWgCbgSwmpA67jwNcow/fgeVCGr3lwHY8juC8duE6e2yGEBwjKADzlLLhk0FVGEI6VobKpASOdnSgUCtB0nV0NZxTCV88nZ8DnRq/0CEYApEDUCiPlZLEuvhudiT5UmyWY3NKOQ49ZsGfRWUu/0zq1/c6KiorRN+0uO3jgA/YKvKMcwBnz50e9ZOTQqGWdrgm9uUKPXFoZqkB9tBJhI4yoEQM0CZ3Sb0H/dDZMnQt3ekzfIyNTYVfoFPcpexfsHHzdh+u48CgWSwnXddl4fSHh2o5K8yXV9h67D3Uc+kygHxkyMRAUKMg/o28WMQPNQM2EJuRzaST2DsKwQmzkKs+g49ITuZaAoHMlgJF/TsCihZAegpAS28a6sLJnAypLynHM9MPQMKk1Wzm75aF5SxfcOGnSpPUH7J168MTelCvwpjuAN+Ws3+BBT5m4aE40FptsQD8pJs1jq8KlM2JGFBVWCUzdhNB0CE3jiGoYOkzNgBE4AVMY0AyTSnKuzwm0o5TclZTC+/CkD4cM3bO5licH4JOBE7LvUnZAjT1OCgI0gIybMgb6Bh2U4b4gg6DHwZ+EnAI/ZlcB3/URralAqDyK0d3dfB4M5LPDIMehyg/lFOiDXq/++dLi71BHwjJMpO0c1gxsxvrRnTh27mLMaJiEhiOnrBzNJ7936TVX3PMGL+/Bp/8TX4G3tQOY1Tx1XrkevbS9tO7oClHaVmZFaqJGGCHDhKGRsWhsSOQETM2EIQBDAyzD4hRbcBmg8Tdd6cF184y6c1T3fHYABNwxm8kng3S4XCCjJRBOUI1OaD3hA/R97rypyE9xmv6nMATOIziCs+OQkl+/j44oID0fmmmgtKUe+eQosgMj0EN0fHICyvjJkai+QfB7yCGoniN5CP4JHb/UjMD1HDyw8zn0e6NYPHsBjpw5HwkvNWA0ly275JMf+4wQYrxt+E98fx889de4Am8HBzCOsxXf68K2ORNjmnljRLPmtMbqD622SkENfErpdU2HI33omuC02NAjMHWdHQKl9JpJTkGDJyR8qtPZChnSVwGVjZkM3IQglJ9Kfs1kwxKgVl8Q3cfRf87hGRhkSJAcwyv+UYrfVcarPuhxENG5dJCI1lfDiphIdPapY3FqUny2p5zGfsdnoyd+QZBN0DmQTwjp5GyArrFBPDu4Ho2tzTh70SkYGxtFoga/PvWC935i+vTpqYMW9Pa+Am8rB9BW3TajPBS+rC1affLkkuZDQxSB4cHxHDiUsnOLXUV9irBhw0JMCyMSiUHqhMyrOp2MSJOSSwJdM6ROtBl2HiZ0QdGZsACT4jU7B8WpobqbojCl5MWbpsi1oTKgiCPsu6FUgk+v2fehSEDF1+3n2yiGuz6MWASxxmqk++Owk0loJrk29Xz13+Jr6DjqRDgJUMyC4DnckoCuC0T1KDoSvfjD7qdR1VKLK0+9CE7Bxa6uPavKJtbffM2Nn/nt29sE3tnv7p/OAXCAC6JcgJvxfV9fUXvttIoJ10yN1bdXWWU6GW/OyyHrZeALDYYehkWpPj8OsTlo8OF4LqROCTrz9GDpVP8LGJopTd0SlBlQz33c6DUhNeELndIFdhHkBMjANS7p+YIGhvcXkVzhc+OGWmwVsslygs6hOnhS0QGobkPxRdLzODspbamBdFyk9g5D6JS2qI4jOw9mEipwUHBpwCiAKi98ehq7wfHzoItJjjJRSOHRzpUYiebx5fOuQcjR8dCKJ4bnnvWu73z4qg/f9M42k7fvu/+ncgBEIQauF8DXAdwAIa73b/jIxWc89Uz3+c2meVZNqDRmQUPBI76cz/e5ZUURoVRf6jCEwSQeMlBC6rNuDlnq7SPAAYQOUw9Bp5JAGDCo1UZRX6OWG/gzYQPKGahUnup5+lrV8+pyqiZBEcwLojCnFuOmrrgCPHZI6cZfZgXKEez7YBiReolkvq6HaGUpwpUlSO0dgpt3+ZxUhR+QkPiz6iww05AfKNShmBGoU6GfUUdCIqyHuNz57dZHMBYq4EuXfAqVVgyPPvpkyqiPfudrv/zut96+ZvDOfWf/hA7gJQOY7xKX/f3Hv/cCMez+ey2suohuamSktkfmQrW5iWgogigZtE8tPMLriLmXQ97LM6WW2nfUd7cI9ReKp0+RnQzfoLpeE9wSNLWQag2CWoQG1/yaJjj6kwNQvHp+pEIx5yhBGrBfOaAIvlSCBGkMZw9G0Sz39wL7Xh80+thL0HyA6wK6gbKWejjpNLLDST4XOgg7Ckk1CRf6yiF41LkIWoXjtYnqMBRpSip9kOo9Q8Od2x5DlxzGle+7BIe1HYrljz6Ve2Drsw8aFr762IaVW9+55vL2e+dvmQNQ0TyoWoPBlL85JBTc1vQneOruX1Tcc9/KSwZe7vpaa7iq2vcdFFwXaT+HivJqhIWFQirNhBlu5/EAjnIMXK2LYhSndJ9qeouNiLIDMnBO+3VK+ykDoNfTZ0NhAhT9dfU9AU1qQmP7J1YglQLFD3qtsrd9HkAhBiozIUyhiNUzDlB8Gn+m6L0PuFMIf2Dd5ATsAqJNddCtEDJ9g9wiVPwfNVQ0XmsQOSgo/9kFFHnI5BA4+hdLDnqJSkOoBUpv5bGOFdiS6cSZJ52B0+Ych1WPPStf7Fy7qzM7eOXjm1c++fYzhXfmO3rLHMDfcbnFU8tuqR/NpJbe/9j6j5UmrGOqpLDyBZuj+2gmLV8Y2i6s8hIcNnM2mnJRpHpGkElnoBkUpSmNp+gdkHkYyVeGTMZKeABFduUEVLeAHYWmS0MzBDkCAs3oGMwZUDwByXCiogdQMRDkAZqUgibuip08+iIYEwiYg4wZqLyckwfm/agGIrsJbt/xa1SBP/4hPc4CjHAYJY01yA6PoZBKqW4AtyDJebhs0ARjSiiaMlm1KgH42NzLUB0N5Ti4QqH/8fkJhM0wOhN78UD3n7HkXcfinIUnY+tTa/DYlhWdL45tvmrDru2P7PM0f8df8+BLDogr8E/hAGgMt3F+7N0Fmf/S4Pq+JZOrm/Sa0hgKvkTBzqLg2HAKHrLZAtbEt2HEsNE+caJc2jJPpLYPIDE0TGGfnQAZGDH7gtSdgT+KnuwEyPgF1fpUCrCzkLqmCwIFOfJrutSELoSmSW4b0rCvkPuOVywJyKw0lROoMlwX/BUH2aAVGBB4AsNXDqKYMQRfcHwupvKBeyi6FLdQQKylnn93uneIkyc1akh4ARm9yjAUBOhDEC+52FYMov2+7gCdFpGR9pUFdDIhI4SOsR7ctf0pHL30GFy65P3Y9PTLeHzbn3v22sMfX3DmsQ9cf/31+9KeA+KWPngSb+QKHPAO4NQpU0L1E2d/vsyPfaO9vB5tjbVsA8TEo8BGzLtc1kHeyUkn44q8nUfnSC+Wj25FVXsTTpp5NKI9BYzs7Zeu9ATN1xdvc9W7p2ivsHsybmX4ZL+B8euGogNz1FdZhMIGODtgA2QQkMtwei51A4gJWLRosktNAYBasR2nouw4pXg8hVDtRNVdVOm5ekWQA/D5qlSes4BoBJGGamQJDMwVeG6AvQwNGSnaj+IRKB6QGjceRxwUzLB/dqHaK5ySqGlFoXHnpHusF3duexzz33UUrnr3RehcvR3LNz/fN+wkPz5S5913UIDkjZjcgfXcA9oBtLe3h+vDFV97V9ucLy2YeQiipSHQwC2P1PkCbsEDbBee7cHJ2UjncijkHPiOj454Nx7fux6RxnKcNu9YWTcWFoNdvbJQsIVhKKNWMB7Vz4rzr0FjpQw2bkb6A2CQMgJq/1GTjet/cgK61IUm9PHsweRIT1ChIBIB/wJK9CnrIPv3GS8YL+YD/1CkBQsCAwXFaqUZoBxEoBmgwnqxSlAYP3kBx0NZez3sVAa5kbFxTgGDfoxBBrMFDB+o16iZocANMLdJtQ6Vp1GkIzoXNYfgc7cjZEawdXgXfrHpQbzvPafj4oVnondjJ9bu2dj9dN+6f9md7rl706ZN6QPr1j54Nq/nChywDqAdCJc1TvvqRUtP+vLC+bNhlBBiT9M3KprZBRd2xoadd+BlXci8g1zORiadQyFrw/ItDKfjuGvnM8hUCHnektNFq10p+zbtQa6Qh2FyIRAw8yiKKwMkQJDsVOPHFOUNpgnzpAAPCnHEl5rG5g9N8xk0ZCCRsgdK9gkYDGxd0AmrKT3J6MNfgH0a2IMoT0GvUkCiwgW4vcdsBVYKkhD03lV6wNN/0nEQqiiDWRmR6e5hQfTkcUlTRhiUQXO3g8DD/dQJGAVgLEDxFthf0BlqNDsQZCrq8vD7KgtFsT3RhZ9vvBcnvPs4XHTEe5HcM4zlm1/AAzufvmXES39969atB4VGXo/VHUDPOSAdwKxZsyw94X7tslNP+5elx8xFtCHMvXnXVsZPwzYFx4WddpFL5ZBPFVBIObAzBRQyNnLpPDsD3dEQTydwz+5n5UjYFh9+zwcwxa/B7tVbUSjkpDB0obNZkgFoPtt2EPlVbU8ZAUV5yhCoVUhGSZZKWIECD/Xx6UEmC0lN04g8RM19FcCp+1DEDwgYgM/PkewoAuyPOw0c+rlMUKWJcgCqc0FTRYQjUGQmo1agns8OwUdJSw0KY2nWEaCshX8np/37JgXVdKB6vvo+OYViAVB0APt4xAq8COaVgunC8kgZNg7uxC8234dTTzwZF8w7DXZXAiu2v4S7tz11a1yKL69fv2LwALq/D57Ka1yBA84BkIruJK3pS+959/yvn37aYlS0xmCGQnDzPnJpm0dsuZb1aebehyxIJEezGN47hkw8z6WAnfaRz2WRy+RhODpGMgncufkJ2HUhfOS9l6A+bsqOtTuE4zpS1ymSq0BJNkG4PqX35AAIE1BdAx4FlrpGST6Bf4wJKMyAOwZkwCrCUzuRDFinYzDwJwkrUN8PGD/0+qJuABNy2NjVX4odDOMIijUgubWoShRVoxdrd4UPerYtIvVV0EMG0nuHOItXtl/EG5j+RwkAI/zjBCHOO4qSzEWsIUAdAixR4YqKY8BH0wTKIxXYOLAdv9v1CI5YtADnzjgJpQkNy7e/hMf2rlnmy/xXHnj28R0HLe+f4wocaA4gPL1u0heuvfCC6896/5EorQtz5M3G8xiNZ5FL5+DYPqQnoZs6QhET5RUR6DQc059C97ZBpAYzcBwfTtZFPp2XhYwtDFfIwVRc3LP9aWBCBT588rkI78nJvm3dQnLE1X0hfE34nJLT1G/Q1FN1PgfmwMgZHVCPVQbApCGK/NQRUNoBzMvR6dB0JKIeU3ahC9LiZJERqiX4sKp/qPhBdAymFtBQsurrB45COYuAYhywDLnfT1mA57FkWKihCoXBUbiZ/D6GYZAFKJmBIN0vworFeQPmRwT0xf0yBAUGBh/cGiRRFBqi0lEeLsHGwR24fdfDmD1nDj546Okoz5h4ac9GrOhb90zGL3z8jkfv2vTPYQLv7LM8oByAZZWe+fGzzrj7i5++SJTVlyKbyGC4O4PBrgRGhkaRjKcAVyAUCkOaJsJhgZKqMFqn1qB5cg1GBlLYtaYXQ71jnDG4WYdKAmlnbKG7GhL5MXnX9meEOaVKfuS4c0R+9RDivYOQHHXVpSBGAJfZ/Im/YpIQP9YZKAy4ASqqK56AKhM0QZkDdQkDh8HlhCH5az4gV/l8bKo3CB5kb8E6A0Tw06WUviCsg8eR6XkBc18YKiPgfn6gS0DcfoYNbVdGmmqEdD3khhJq3JjS+2IjgCkFVHyoiK86CQRMFgVKx6lDfzGwwI6j2IbkFiqdu+TspCJcjq3De9gJTJo2FZfMOR3lOQsburZi1cDG5Uk/f9Wv7r/joBM4wP3LAeMA1jz089pPfe7H9/zq+19Y3DS9FsmRNIY7UhjoSWC0Pw1/1EMYYYTCFhCi295iEcysX0C4zMKkuQ2YNLcR9lgBm5/vxkDHKGcBTk7KQiYj7KyDCELoGRvEzzc/iBnHzMX5h5+G1J87MDacAEwKc8zf4+qYYTtOxRkLYA4BlfCs+McpvcIOqJynnzJzUIXwgEikUnnKEMhJsE+hn5OToOgfRHc2SGrfBRGfbJuZSzx0pNIJ9hEECCpQjjkDPqUuSoQAvu3ylGCktgzZvmF4jsfnr2w3YACysas2oGIq72syqsZKkRgcuBx2EPu6BcptePwe6RkEfJZHSrF5eDfu2PkY2ia246I5p6PKjmBj9xasGdy2MiGzl996920bD3AbeEef3gHhAD7d/elIww+8X01vbT33pPcsQDqVxkhXEonBDLyUj3A6hHgqg43xnagMlaDCKsVAJoGGaBWioRBs3UVa5tA8tQZzFrdyn3zbi33o2TyEfMqGl3NRyBWQz9qIwMTG/p1YtvtpecxZJ4v3tRyDwWe3Ipni0VrF22E3QKi7Jqnjp7A57vcFI8Kcx7OBMj9A6FLXGPmXOo0J88OANszRXJUMrOFHToCch04AI/scQd8jR+ILKZhizD8gKEJnhi53HtgBcEWhOIR/kaFLeI6LaFsDCmNZuGOZfc2AINVXLODAGYyLBhSRvnHGcDBUVNxNUOQRF2cHioxEJihyuVMRLcO24Q7cvvUhtExsxSXzzkSFG8aWrm14cWTrC1mvcMlP7vz5tne0lR3Ab/41HcAriXr+I4U+r7/+em2H3HLC7MGGR6/40ElAWGBsIIfhniSMhI74QBqrtm/Csztf9jcMb08YBeRqyurL+pMDJU2xWnH4tJlYMvlwNFbWIG6PoaItijlLJiMaNbD9+b3o2DSC3JgtvYIrCrksnJwjw7DExu7teCKxUZ514TnicNksdz27SZCiruqGBYo+/Ifj9N0ni6YMmpt/bIjECmQYUBk3GwQZNzmAACCkwSKy74CKzBkAt/uoXKA6nxyAqvUlC5JwbJVMGNI0QY6DToi4B8JQ4CMXAprmM+YYnB9lGuQAzLIozLIIst0jSm0ssFeGAZn8r76h0vri+LGaClTFRoD+BUOLRa3B4jShem2x1aickKlpKA3HsGO0G7/eej+qa2pw+eILUOGFsbV7B9aN7nxx22jPRXc9cNdBYPAAdASv6QBe7Zz/UU6ActWPv+/8tZd/4D1zmlqrKX3FSE8G+b0ehncl8MsV9+LBbSuQdfIufJkmJN6KxCJmKGSdecbpqKmswvC2bsxCA2ZMmoy89BBt0nHE8VOhxyzsWdOHrg1x5EZz8B0HhWwBbs6Wlm+K5/asw+OFTbjqwx/1mzp0rf/lDvhKPo+NgqK7QsLV/IBqwVPADoDAQDhUzQWoFiH/j8eIiTVIRq2yAx42Kkb/wGmwA9A5U5AEFEiC8Pl3alwFMH2Zan5yIHQ8gxwHewSFSwSGyjgiE308RCfUojA0BjdbCHp4Uvq+6jUEbP+i+IDqAoxrEChnp2oDtbhEVRAB01exj5TzKHYJAtCQMpqySCl2j/Xg15sfQHVtDS5/1/kodyPYtmcbnu1ft7o3E7/gzvvu3HkA2sA7+pRe1QG8loHTz4tX7g2smRI840LlabCe6t7bvn3K6O7CwycunQcraiE5lEG2y8Hu1X24+fHf4akOJVvfVFMtZ8ycjurKarGrow+lFTF88pprYZkW1mxci2cfewIN2TDOPuxEFISDsvYYDj9hEqyQhY61A+jYMIzcWJ7LgXw2Az9P0tw+7t3+HDrKErjmwo8h9MIo4t0jLOet3pzwKe4zG4BAOQbg9rH0WBOA24OUC1BoVxFfaNQeLJYARqAhQLatDJezBorqZMhk5AoIpH6hYg/qOjOOqMwnR8SZAL3OpMeGwiLYqQTtQeWYIH0PRnmMtQJzfSPkQCQRCHkUugjmcaCn5IH6hYokNK4/ELgJRgmYyEikIOIdsLagwhAYXAwowyxdrhwLnQt1B7oy/bh1w930d8IVx1+EWFbHnt4OPNu3ZvXebOJDd9x1EBg8kDzOPyQD2M9ZjMcGdWMEpei4s2DMKihHuYT2f/DFTz8wrab5tEXHzoDr+Uh2FND78jBu+sPteGDXc2hrqseJJ56ImbNmY0LrRGzasg13/Pb3WLx4Ec4662xFn/V9dPZ14cF7H0Z7KoYTpi+EawjUTS3BvBMmwjR07F43iM5NIyiM5FHIZpkyjALp/vn4+YYHYMytwxVL3o/k051IjSThmxyAA8JPYBCKSRcM7lBpoGYBiplCMFAkNV0TBmkGMpkocAAc6QMHoBtS45kiAgkZT2Aj564dGR6rj5BzAHcoeDaBSoCgW0FYA9UhdGwCGYO6RakO6kCooRr5/jh8xx3XIGQHwBqGivbLykDcFSBgMuAHFNsfxXKAMYOgb8DGrxaQ8Gdy5AwqqgyBuxjQUEJOIDuE/1n9B5SWluC6916BaF5gZ/curOjb8MLeXOLiX//+19sPJCN4J5/L33QAr5YF/K3soPizcQGa668Xd86cKc49Nyg7xXmelMt0Ic7z7r/1prlrnt32wAmLD2+ZdkQrMoMeep4fwX/eeRvu3P4Mjn/3u/D+089G08RWRCMlyOTSeOjhP+GPf/g9PvWZazFz5kz4NqnuaswLGEsn8PTDT0LfkcGxk46EF7ZRf0gJ5h4/Faalo3vjCLo3DCE3lEEh6yBHo8S2QP/YEH65/SHMPe4ovH/KsYg/3YGxQhYWR2bFOxIGYXYq1acPNQBUHCkuThcqboCaIVDRnZSFuGMQKAmpseLi9ygLoOhJuAFFdtbuVu02kiemf4Gxq4whkAgzlRioQXLlgb4hdxWYNySFUVPKKsLOcJqPo4yfTJ3nj1UWxn64KGBKdT3xClRGwQtQ6Bnjc37qAQ0Z8jJT4g7wp4BVGKxAY5qDpiFqRtBfiOM/lv8a0WgEX7nw04hkgd29e/Bc34YX45nRC//797/a9U42vAPlvf/dGcC+gnH8rfxl9Keof+ed2uZZm3XLqhLhoQYNE1rQkk/4KNUN0XBy5ne3fPuHXWv3XnPySYu02oZyDG3M4947n8EPV96OhcctxpWXXoZItIRvSF0PYWhwCHcuuws7d+7AtZ+8CvUNDfB4KFBt7DHCIaSSSTz68GOI7srhmPZDUdBstM6rx6HHToGpCXRtHEbvpiEk41kUUnnOBISnYdfwbtw18DzOPvc8LJTt2PPMBsbjFJWPuXkKst+PFyCFR017jsRU5DNbgNN87v8HcwOi2ApUX48zB+n7RbERzRemrmmaKaWmWnuCjJx6/8QR1sERnzsIBo8zS0EMRlOXhm7wWSn8IQjFpg6zLAZnJEFZe8BxoLMLSD9BBC8y/VRZxu3P8ZRekRCKzMNgitBTxCOpPAErLFEnktxKsMhI4SQAqzEN2qP47uP/jYryctzwwc9CS3rY09uJ5/s3vGiUWedd/8PvdBwohvBOPY835AD2Rffx9dLF1+/rDwUQE6H7554LozLXaDi1zSHL1owSusqluijRI3rK8Xqar7MAACAASURBVJx7b3/uZox5Fy5aPBMib2HtEzvx9d/fAr8lgq9/4auoralGNp9F0FrDjp178OOf/hjNjXW47CMfRUm0FB55gAC4ohvSMC1kcxncf++90LYlsHTikfBNickLmzDr6EkQ0kXv5jH07xhi1iDNEhAwqPkWHtq1HC/I3bjm4iswsbsEXet2wdepDRek/YogOE7ppTkAiqKq/ueSgHgCStMjEBvRhe5ruq6pceLiP12SuIhGRkzAHoGGNIRkco9PGbOuzJX2CAqLiQCK9EOvoxaAoXOXgJyIblApoOYHitKAsfYaeAVPFvoTqpvAziGQJQzIQKpM41FmKaU3rkoSiJXscwZ8fSkjCCI/OwGfdyOQ3gg/9vcbOw7uikg4gmE7oZxARQW+/sHPwkj62Nq5FTvtntVlTc0fvOKzVxyUGHsLvc8bcgD7n+dflQFBolxkmQDLli3TjzoKVksMVtYri2qObqJg0KSMGYpG8i9v2nr0slufvPmE+QtqmxprMLrLwR1334/bNj2KT133aSw5ZglyuTRHMNMw4BRsPP/CGtz229/i1BPfjVNOOhmmafIabtdVY6vUvqMXhEMR9McH8OvbbkfdkMCJre+CKDFxyFH1mHFUMzxXoHfzEPZuGUV2OIN8OgMnL+A7Esu2P4Z4k4dPnHUZ5IohxHtGoFm01IO0/YMtP/R7mP7Dw78KoCty+pnSywwBJvwYAeCnUv+gRKDxYu4UENqvyEKkQygM+BotJiAjp5Fl4gpQ98+i3yzgs6yABkH7SlRbUAqd2oV0PG5DSkMYgqJ0tKUKJW01iL+4mycoiWzE1XyxA8jLTIr7BAMtw3GTVy0Pwgb2tQxpI4pUUV96LFFODsAnzhF93yWn4AWjBmqgiToMUYucQBLffPg/uUX4jUs+B23Uwc7+3dhl961qmDzh0gs+dsmWt9AG3tG/+u92AH911YrHCfQqJPD003rf0rRVkiqJmq4bdTw9EnJh2I4QJWUl2ZfWrDvznp//+bsnHLHQjFql2PNyP/71rv9EZFYzvnrdF7lmt4N9embIQjoxhrvvfgjLV67Ahy/5AI44Yr66XT3JToBMk6S96REZVGmsDFs7tuG3P/8tZrutmF87E1qlhyNOmYLWQ+uQjBewd/0QhneNITuWRS6ZBxwN/clB/LrjIUw+ai4umXcGEk/uQjKdhG5aJNXBk7XjQzJMoR+X8mEyD4FsbP+BcjA5AFIYYkYhZwBKdZgXDukmR3uO4qZyCuQQeBTYMEilkzyI+p4u4GqQPoOHCiOgQSEqNxgL4GNqMFnWXGUDFfNbke+KozBIWACRe1g7fD96b7DklP96QbqvEIgAWFQDimq5UDHRCkaRfZImo3/kBKip4DPoyFkBAwYKAqaTpeWkffkRfOOBm7lsu/4D18FKAy9tWY2xSu/Px5xx7EfnHHHEwUzgLXBF/2gHIK+X12tfx7lGT8+Y7vvxMO3iippGxPa0iOMJM2ZGZTqfce+6/YmPD25JXzmjrV0YdjVWPr8St758Ny688lKcdvzJSGXSHFF4Os8SGOgbxC9/cTsGh/pw9RVXYvKUybzwQ3g8LKtUfz2KTj70kFL1DUej2LJ1Cx75zf2YWmjAjKZWNE2vwvR3taOyKYbh/jEMb0xhdPcYkmNp2BkXhmPg5cEtuGPwKXnRxReLo/UZ6HtiM/LChkFGyWR8VfeSwal1XpQ0s+EqjcDiBCFpBbBDCFSESUSEJgrZ6BVXQJDeQDGFNwLOABmzRRmBxiUAtyMMIWlWiZW+CEyg98uDTKqFqBuGoOOQ2AltOiKDjbXXI1IZQmJtr9RMIhYUF5azhRZbnftRfmleic22uGd031Ykdn+0eajoACjqk0qxz38DXpfmqKxAuq5aWUj/CeYWYpQJFEbxbw//F8rqqnDDhZ8FUi7W7FyHTL3250OXHnHhwoULu4s28Fpt6LfAVt6Wv/IVHcDrufiv9pxlcpl+FFqslnjCTJkRy0tnY5GSSFjLiwg83TJLyrNDQ32VV196031Ht8+qqK2sR8yuwiPPP44XxB586pPXormxEdlMjm9MroUdB1u37sJddz2AklITH7zwfNTU1sNx1EJO1d4KBDkJlGK7tED3fDQSwX1PPoLn7ngCZ09cjNkLpqKkIYqqllJEKgzk4wUMkRPoSSOfTCOfcyEcHU93rsVyYzM+8YHL0bbHwt4NuyEJlCNAgOdoOMlVNXsgBkoD9iwGQiQiw2AjZGPnQSFDMQcV+UdaBN6RYyChUYrauiENqustQ5IIIZUAumlJzRSCcAgCIghn8HUJqUkpSahQoza/isyaTk5AE6ZuIRQKSV3XhG5ZKJ83Afmt/XCSNpcNitWnHEAwX8y1P/MIeGWCz8IjahBJqZgR9sDS47wKUXUUeLqQSwAyeBIncZlXwSChQ0+krgHhAiyNwL+zJBpFIj+Kny3/HQ6dMQtnHXkavLSN5zatQrzG++9Dj5r3mZNPPjlT5Ji8AX7J29I4/3+8qTecAbzWH2eZlPpRWGm1jHnhXMqOOvCiYVOEhRRhk/ZYRSuSPXv2Vn/vy796oClUU9JY24oJWh3uX/U4nontxLe/cD08KWHbpParhDwdJ4/lz6zAvfc/iKMWzcVZ7zsbsUiUt/qodFMBZ6qbzbetAsQ0IBouwVBiBPf+8h7MFJV4z2nHID6YwfDQGGYsqUesJoJcbx596xMY602hkMpxuyufdfHjDb+BmFOLz5z4UegrRzE4uJcjLKHxiiIcrPjk2SEiChlSaC7/au7/E6TPfB2lD8AaAszrNzRWEQrUhzWDJgp1YZhU3yvGn2mFGHtgFiDV+wQG0l/LoMhPnQEpXY26+Z4gqh+nSoaJMI0GmyGEDItLotCUeoQMidTmQYgQqRYVHUDQx+ELqBzAfoJDikqsfrIvb9hPZ4BKL677XZ+jPzwPnuOzPBvLNQblgeBtRuPAA0IhC0knjfvWP4am5hacueBU+BkbD615wk41at894uiF393fCfDZBbLx/z8M4p32O16XA3gF9P9VrxOBfwsW1Jrt1aUl+fRYTLO0iCVljNJ/4cMwSkqH/+uWey7oXdn/hUotGq5rnYIWpwS3PHE79rTk8M0v3ADHduB6tqplTRPpsSTuv/dBPPrEo/jgBy7EySccp0Ax2tBLNWegojNOU+UUmN6azyDU9l27sf6pbTh19hTMnjEJLzy1FXvWd+KQRRMw7V3NPE2Y2mWjZ20f0kNZHiMWroaOoW78rPs+LDrlOFzUcoI/uHy3lvXyKgNnWS6eBlSZCk/vmAFYqNh9LAESaAdQ646qA8IBeNUYC4oSmm8JAgCJ9GOZwRYiKyR1yxAatQJ1DWbYLHIC2CHAMOBpEq7w4Ejaeuizmh8BoaZpIBy26H0zIGhUlKB0ai0KmwbgFpwAY+DMRZIEAlf/xZK/KP4x3jpU7UF2BJxp7CcgQpGfnAAZOAGBrhpI8gqEBVA54CoHETxP3TCUGekIh0LoSHThtpfuwdwZc3HZMeciO5rG/WufdPpjyc/+6w++dzOfV0AgO+gA3jy39JoOQErF2Pvr2uzVSgBq/33kIzNDFYXy0pIyq8yRRgy6DAmJiKGV2Lbpj/7L1Tc/3pCqbImGS9HU3I6aQhjX/v4GDFQ4+LcbvoWqujrY+awapzUMdHd24q67H8Lu3dvwoUsvwfw5h8N28pyqsvptMS0lUo1uQUqXozQx00JWGCtWv4z89kFcfvrR8O0IHrlzFQa7BlFbW4ZZx7ehfl45ol4YvevG0Ls1Dnskw87FsDXcv+sZPCE24+Pv/yhm9FZhYGun9M1A2CMQ7VSCokqukAd/lapwoKajaLtKSUiTpDvMiL2m+5wc8CoyQ5L4sG6Qc7BgWBb0sBl0CDTOBDRDk8LUqCPg+walFABlAGT+ru+CBplo2xEvPQ1ZiEVKEAmHYJkhlEyuh7A9md89LERYlSbjfH5Oz4OV5ZzJ7IM5ApKvWj3Id0ogMspzRYT6K/oxXX+u/23KAjz4BcoCXHYCHgu4qJKg+GGYJiLhMB7e+ifcse5BXHbKB3HOnJN4CvT2Z//Qs6Fr+yd/98y9dxedwP7U8TfPFN6ZR35NB/Bql+VVMYBly/Rjzo2Eyrf5FdGaunIYWsy181GDwls4Frvj9oeP3fD4rsub/fKSmFWJpgkTMUmvxAdv/RzWp3bgh9//D0yZNg3ZbJopvHSTrVm3Hr+9/XcorYzgsos/hJbWCapDQDemRxLcQRgLNv9y9UpRlnQEXQd/fvYlLKouxxknLMLqJ7ux+tmNKKSoVi2gemINpp9Yj5q2SmBMR/dLQxjaFYdXyEMvWEhmk/jx5jthHNaAjx95IYzn4xhNjoJac8WopmI9rweCRmw6qp+pEcg7BkhHQA3xMIZHlEKDsADBk3TQTO4GEF7BLUHDlIZhCd3UpbA0YRLCb+owQiFQiSDpmljETITwdQ2O9GBL2oyUR55KIunDNC1EwxGURKKIhCII1ZYh1lyBwpZhllFjRmFxKIMTJUpOFA1ZOQPVHixqB/DnIoRYnBAuShNSB4b4AY4ECZJ4pNJMDsCh77msVUCZQTB6EFA2JIu6GIaG2174I+7f+Qw+fsZlOH36UqRSKazqXtf15Nbln/r1vXeOO4H9S4HXg1G9M835jb/r1+UAXv8Fl0qEAk+HcjtzNZHyWC1MoxQhK++5bv3q5VuvuP+OlaeUuzG9xAshGq1By4QGLGqZiwv+7Vo80fNn/MdNN2H6rLlIpse4BMjnbSxf/hzuuON3OPzwQ3HxxZcwx9yxadpN5/STblgGpyjKGh7Tcek8zFAE3T19GN7Ug4tOOBQlZilWLNuCjq5u9MVHUGaGEY6UoG1WHRrnl6KhsQrpvgI6XoxjbGAMds5GxA1jbf8G/LL3CZxyzntxijEHoy92wKXBHALlqPQWPrxg6SgJh9IHbxKkdJ+7avvmAJQ6EPEKdFiE8vMKMsHGoBsmE5l0Q0jd1BnEY1Tfoq5AiOnOwtIlLCGExbPEwhUuCtJFnhadOgUmRtEe0bAZQlmsDKWRKPldlE5vgBjOIj+QhiBsIejrseRHkMHwiQfkR/Uw2EPAlYKq4/lREXnkLWQSHnEDXD9oBfrw82T0lAm48As2lwQMFFImwGUEcaslSqPl0E0NP3riVjzS8Ty+csG1OGnSMegZ2Iunulb2lB824ZMf+chH/sIJFG/xg2XBGzf2V3rF63IAr/TCV8MFuG7rWRnOu4X6cIlehVgotGND5zHDe5NnDG9PLMkOuMgkkiz0Ea2dhLaWCiyaMA+Xff9L+OPeh/CvX7weZZUVKCurRGllJeLDQ3ji8efwp6ceYTnqs854LwNhtuswMUfJZivNO2LXMQjIBiZhhcLYurUD0XgaHzp9IbavGsa2Z7vQE98t/9ixQiydsgAtfj38kIb2wytQf2gFqqNl6NucxN6NI0jH00ABIFHwX2y4B+vKe/H1D34JE7Zq6Nq+GzKklIKYphOo8Sp9f1VX0zZButnV+rEAD2B5ccX0UwtIqWXJcmDczzd0cgAajJDJ7U/GBdgRWBCWBiOiS8JSESIvoVqBju8i5+WRc/Mo2AXYjgvCD0ojpSiLxhALxxBpr0W0LAJ31whrD6hxX0kNBUYAWGCouPE4qPmLuqLFiqEICBZ7/NxQ4IsvOPqrjkCAARRceOQICg4DhFQeSHIKvLlc9W0JxykJxxj/uPlPv8DGxA587bxPYU7tTGzv3YG19u7u8umNV1xwwQUPvxImcBAj+L87gb/LAfytjGDZsnP1cxdcbaLSiCAnmjbv7rps8/N7Pjyhtr4q7Fjo2TGCwaFRFFI2YiUtmDalHk3l9Tjqxg+gekINPnXlJ/DQffehdWI7zrvgImzetAn33PMgNqxbhwvPPweLlyyBJ/NwbbphPUbbCYjiwpruRdbTIDIMDfv56NzUJQ8rj2HuzMlYfvdmER7RsbpzM1ZW7Ma0CZMxa7AGdspDrDqE5gVlqJtcDdMx0fnSIIY7kigkbYSlid6RLvxk2/04/IKluLjtNAz+aQvyqRxAToDZQURFCsZ7x/FzNS2ooAK1gUitEieh0KK6MGMDoFRfpzJANziFJ4kxI6Sx8euWAZ1KAEuHEVakIS1kAqbOo8uu9FCAixxlAfkscnYBBd+Fpesoi5XyrH6sthJlU+ph9GbgZWwGFcc7dMUZf7ob1Bbyoh644gooe+U/O7sLHhxSi0j5pdQWZEAQkLYiB7Gx21QCOMFnKg9Iv5Cwg6IkmQIGSqMl/D6++fCPsCezFzee+3nMqJ6MlzvWY4c2sGfCvInvO+Pss9f9tcG//sz0/24ob9cjvC4HsP+Ff62OQPHnvTsfmL/xz3uu07L2WRMaGiNlVSUY3DGGwZ1JDA7FMZaxoetVmNIcxSGzZ+FDd30TL7+wFrf8+03o2tOBQi6HpcefiA3rNuGnP7kV2UIC11x9NaZOnwHHzlL7S02k0cRrkTdPxBpmoknokSiG4mNI7ejyzjh8qu6PhfHCg9v85miZ9qNnf4f6M2ZhytQ25F7oRnOyApm0h+bplaibU4a6xiqkenLoWDeM9EAWTtpFiTTxWNdKPKFvxKWXXIo5HVUY2NAJj1p3gZWoRd/0jyKsygrUpqBAYJSMh1p63Lcv7hlQRs9cABot5jYgOQAdZoiiv0nZgDQsXeghkwk/WtiAGbak4FJAbfN1NA8Fz5bpXFak82lkClnpOK4wTUtWlpSJyvJKWTW9SUStEPzuDDkP1mQI2EDBwFBQ+3O2T5qEAbwSKIeR3arlJYGTCPYPkAPwAkowo/7kAAgEtF0SLOUNTtKmFqHD2ADTh6ksKI4bk7RYSTkGciP46sM/xEg+gRvfdx1mNkzDtv6dWJHe+NTXf/Cvx+2fBexfChx0BH+/e3pNB/D3XNyB3X+a+8zdz/2m3CubNWVWM+oay5BJOejbPIpkVwEjw6MYzOaQE5VoDKf8YxYfpX3zwf/Bf/3xN/K6z18n3nv6GXIsPsqtrZ3bOvCLW3+BsspSXHXlx1BTVwU7V+CbzCWmIAsMEFPGZ8Yc3VQGDEjdR0fXMBqznn/sYa3a9ufHMLplDOncCG5as8w/5dIzNaITb355vazf4wt9SIcZMVEzswKNM0tRYZage1sC/RuHkRvNw5IhXkT6nZd+jeoTJ+FzR16M1DM9SCWSHKWVDwjqZO4AKGUvSvE9SAb8VKuQIj6xCGkBaTELYJSf5MMZEKQSQDNMTv8NcgCmLrWwIWg/ghYyOCMgp6CHlDPQLJoilII6Ajk7L0ezSZHMJDGWTsJ2bcTCEdRX1KB+UiuqJtdC9OQh1RT1OO2XL6PaFhKgA/t4DrzUvMgUDroG43hB8L45A6AUgBwwPWZOgHIAzA1w6LECCV3Hg6AMLmBuFuUHymNl2JsdxA+e/G+0NLXg8iUXIxaKYfmeF7FqdO2Xb771p99+JSdwEBd4Ex3Aax36rx3Ev17zodMOaT30J+W6NWHWYRNR2UiEHR/xPVmMbkshl/AwNpLBcM7BaCYHXYxi6YJFWLV1A6649Ua0zJqMH//bv0srZIj4SFy+9PwG3PnHuzDvsJniA+efB8uMSNstSNLqobvYJR1tCI3RAF33itwcx/cx0jmM+WUlmFxb7z193y69zg2J1f2b5QPJtXjvRWeKiW1tSKZTMr6tB3UduhgbyaKmtRxVU6Nobq+Fnbax58VhpHrS3N8u18vw+I5ncNvYE/jE1dfg2NQkdLy0Bxp1wnQyc6r/lR1ZwQQdbfRTm4WDNWS0JyAQ9uQJQsoIyGVRBhCUABo5AV3AsijtJyegS4RNQTMRtADEtEyYbPiGLyxNM8MEEBo8uUij0al8FkNjwxgaHZbDqbjwPA/15VVoaWlDw2GTUeqZ8Hpz0CPUElQKAZSvMPof1OdFf1bUPyhCgDwbUAQDA0CPeT7sAKjlpyYFmQzEXQDiBFAG4EEWPLhUFvD3FVbAz/fU0jKiR5dFyzGcHcLvtzyE5uomnDjtWB7ueq77xUyy1v/GVZ+/5nuvlgm81r168Of/+wq8ZgbwRi7awrnTpx19yLxHTj/q3ROnzWtEfXspPBtIDRUQ35FHqicFN0MLO1yk/Qh2D3fDy/Vi4YL5sHQDF9/8JeyI9+IrX/4KTj7lBHR37ZUPPvSoeOThh3DeOWfj1NNOY4ag7zoU6YkFRLZHUUfxTY1g3tWAn0k7wog74ujWSt8dFWLVw3vEIeWVuG31Q/6OCRlx3vvPkWVlpcJ3pD+SjGvay4MiNqxTZoq6aZVom1uLSNTE3k2j6F+fQGY0j3I9xGDbV5bfjLLFrfj2RV9A9uFujPYNq7HdQF6LpTeCnryS16JVH2pwyBWChUaKmgHsFyRlABTpBaf+RPRh9J8GhIgVSKVA2OTPRshgnoARoUzAghbSOSugTIDYhdR58HRX0kh0x0Cv6OrvQjyZ4MxiQn0Tph42C/UTGmH2FVQnsDgqvH/Tr2jkDF5Qxk+ovWp2FvVEVf2l6MJcEVDqz0tb1eo2Rvzpe1T3UzYQlASqQ0DZgITuadB9cn86/zxn55jPEI6E8Oi2Z/CTVXfg8hMuxmnTlvJ2qCd2PTdWcUzLV88994If/bUTONgVeCOWuu+5/1AHMH3K9KMuPe2UZ845cbHZNLUStIo7O1JAZsRGpi+HbI+DfNJmsMjVa/D85hXwZAaHzZ2K9sYG/GLFffjestsw/bA5+P43vonEaBq//f0d2L59m/zwhy6Wiw6fr6XzOUktJmIBSceXlHby3l0FapO1+a7mYySe0lo9Ux43o1mue2FUjKwZhqV54kcb/4iGpYfIE487jqxRer4jXMdBdiCOsk15uGkfsYoomuZSylyKzICNztUjSPdm4OR81IZL8UjnCty644/45Jc/j5Pd2eh6ZiscaUMSo4+HhIgzHwiJBnMCRUVf3vvDRCEl7kk3v2+Quq4Jg0d9BUzDCqYFVWQ3qOanTIA+hyKcBRiWBp2ygLDiCNDwECyDTkFp92sQ6UIOewf2Ykv3DvQO9nHJMWPmTMxbslBWFCyBhAMtGqxLDzIXpQ8QCIAw+MdrgYo5QqDnFmgmjsuFBavFivMBTA0OpMOo5ndcCE+A0jSdJrccIJvNYDg+isHEIIZTcfSODmLvaD/60kMYzMWR92ykZBYlpaWYWDcBJ885FjPK2/Hcrhf7Z55+xHmnn3XW8iI2xU4q0JksPv77zOGd96o36gD2NYRf4Vp98UOX/GzO5KkfXbBgOuqaS+HkfThpCTcJ5BIFZHodpAdsREsaMDzUh40dGzhtbWorwyGT2xHP53DVf96A3UO98qpPfEIcu2QJvv2tH8D2M7jm6itlW3Mb8oW89Fxf82ligG4m3xe+lOQJuPAmD0DAnEwUvJmlUTGlthzP3tUjo0mhd47s8n6y+0H9+ItO8w6fMU+3Hcf3pCNs20Xec4S3ZRCNQwayeYn6iTVoPbwGIUtD5/o4hrel4Yw6iOphFPwsvrnyp8hPDeH7H/4qwquSGOwZUAKfzE5U8y9MpiHdgKJkOM8n0FyAYt7xBCEtJGNGIGUFgU6AoQaEaIzYoA5A2OLIT50CzgKiVP+bwgoZUoRMoXFpoEmdJI9YY5B3GYJUxgjG6xsblGu2rBYvbtrA6fRp552J2bNnwO1Kw/CE1CySMi3OBqg+vVIaDshOKqFRxl/cUch8gKJUsMYyYzwkRJ0AklenwoxqfHqO6yOZzWAwMYKBsUH0DPdi70g/eof70TnUjc7hvRgZi6OQL/BcAZUs0UgUVRWVaGxsRE9vD7L5HK4+9zIsrZuPlwY3PfKlH3/zPYHRF/sW43fkwWzg9Tuyf6gDuPFTV6w4cvrsoyZNaYLmgsdro7TGyzGQT+ZhDzkopCrR3z+AweEOamIjW8gDUR0z5jSiraYRdzzzEL6y7L/RPLUNn7nyWtz7wP3Sth1x9Ucuk1XVlbwc1KYIA0/6NmvU0UgMaV+z2ZFLyBZsEc4InDCx2R8bSWgv3t3jt5eX6Ss618hH7LXiPReeg/aGVr9g5+FQGeFQPipEOj6Gsm0FhEZ0GKUWJh5Zj7r2Egx2ZNG7Oo7coAM/56K2pAQre1fje+t+g8997rN4b+RIbHtyLR2LGvpKDJSHa5QoBnfXeLCJE1f1mAycvmI8QOkAEEGIgEAWCyVZLy4BLH5skBNgQNCAGdWpC0BfSy1M0mCEFRhSCxE7iaX9SJeABIu5TCCWYTKTlk+//Gfx2PNPYfaSw3D5NVdCJFwUtsdh6iY5YnaeAatx/8UjqrwKBnrGZcMCrIAFUUgSjKM/sQI9eK6PVCaJgeQw+pNDGBgbwkhqFIlUCvFUnP8lUxmkUynkc3kud6qrajB58kTMmjULDfUNsOi8TROlJaUYGh7C9Tdcj3hyFJ859yrMirT5o03+7R+46kMfFUI4+2cCBzOA12/8AQT8hl7wNzOA71537fLTjjvymFg0hKHdSeSGHdQ3liAciYHGVFNxGzs2diIxkEFNWRVCNtAx1I9hJ4NJM+owdWYTkkM5XHXzN+XGwT1i6XHHIZnOyPbmJnHxRRdyu4yitRQuqVVrPpcApHovBYFQZE50F6dzNpp94LhDJuLlZ/ux88+dYnZTk/zVpoewqzklzzz9bK20NAon60hPSum4BZLNEjmKPN0OYpvTsD2geU4tJh5ZCz/nYdfKYYzuzDOQFZIaSpsrcP3KmzFa6uBnH/suMk8NYGSgX43UcmqslnoEIBv3/hke5DJB4QGcMVCGQC0/6sszjKFDJy2A4HvEDtRN4vRrqvYnrQMqAaI0MGQKI2RIjT+b0IiTYIZoIEFCCyS+iuKlpsHCKavWvYS1Q1twysVnYWpzO3Ibh2HYOkiISE0AKh4FS5IzpTpYi0aHZGyA3wkvPbc9D45rw/ZdUOuRUvmh9Aj6x0aQyqWRyWQwGo8jm8sppWO1ZAWe46C2ro5FEq6KhAAAIABJREFUXadOnYrS0tLxoSmlsUA4gi9tuyBt25ZWKCQ6Ozu1z1z3GXYMX37fJ6HF815qmnnzlZ/+xGfHaYp/dSsfzARe27bfaAbwN49481c+v+7Mk46aUyi46Fg9gFRfAZXVMUyY3IBIRQXWbV4PL+GjtlABr0CQtURPXz/2jg7CqrIwd+EENNbV4ef3PoDv3PtLaRghYVolOPG4hd4HL75EEDhUyDnS810qtaVnu3z+SqXKIzlNFq0Tto/p4aiYWl3hr7ynX0/1jWBSebX/q22PaJlDw/6xS98FUxiCCgDbdYVju8Ig3T3LQHYgLas3O77fb2uRujIx/fg61E6sRPfqQXS/NAp/VDDFte2QFty961Hc8sLv8K3P3ogj81PQuWonPIa/ycKV4Ab1Bjiq7pf2c4Od9f6LWgLEZdBZ6JOow9wFIIYgBXQjzIIhJhk+OQZqA5oWrKgCA4knoLMTMAQ5B8okeNkpdxRoUFKHT/U9TQpym1ST3WN9wmnW0drUCtGbl8h7rD/AmQqLj6hBKhbzUEMBzLAkpmHOLSDv5pG2c0jkxjCaTWI0M0a8AyTGEsgk08jlcvyaSDTKY9tUxpSXlqOtvQ3Tpk1DLBbjTM4hYNBXAGE+l/Mcx4FdKPi5fMF3HFt6jiM9jxEeVFZX6tt27DC/f9O/aTOmTMPlh5+Ldds2bBtr1z560003PffXWUDxRj3oBP62E/iHOoBlP/6WXDRnBsYGMtj+fD9SvQWUhE1MPXQqht0RalBhSu1k5PpcJHuzPLgylshgV18PkvkcmmdUYtGR0xAfyeDSH92IbXs7afMuaqur8OlPX4uZs2fLQj5PVFdBJAHHc1kVy6MJFxag8aTjOaLU0+S7W2u1VJ8tV93dhyrTxFhmEN/Z8hux8KzjcewRi+G4DpNnHNvzXdvWDFP3CU5wSfZje0aW77AFUX3bDm/C9OMbkM942P5IH0Z2ZKHnPdQ018EPO7jqrq+jdl4LfnDaVxB/eg8yqQKPJ/OUMiEVPoF+NLNIdFse4uOuADX/uM4mVh0ZnKR0n1Zwk94flQJqIahqD1LtT2WBIgZRhkAR36Dan1mCOvQwEYgo+vvMGyBnwrYb9PWJkci/l47LWgNKA5FIPFyamBoDlzRYLEl0RABpJ4Okm0PaziJdSMtkIS3GMmMYy2SRsTM8XpxNZzA0PMwTiLW1dWisb0BpWRkfs66uHpMmTUI0GuW6vlAo8D8q1+h9UYeDPlLJpOzd22sXCnmXm5G8JFGhDayvwh+QFZUV+sOPPhL61W2/EucsPQNn1B+N5X1r/vTuT7z3oycfe/Iemlx9pWzgoBN4dSfwD3UAq/74M1ldWYm920ew8+UBFEYclKAEFY116HF2Y8G8yWiqqkZ6yEdiD+3pK8AtAD0DQ+iL98GPAIctmISZM9vxP489ghtuu4VxJ1M3xBlnni7POed9PEaazxO/nGSoiIHmqLUWNJ9Ksc7xRKknceqMdrF1Vdxb+1iXNq2qQabzSe0/+u/BvJMXeLOmzdBdpyCl5wvbcaTj+DyKSxOEhMinhxOoXudBTwjUzKnG4ae2IFYVwo5nh9C1Mg49LRAtC6OtcQJ+sOqnuH3jI/jZV3+I9q0lGOwehNQoXga9cTb2gCM0PnevFn6qVpZg3r5KtRVAyDsEyfh5PFhRfwkApAyAoj+Jg1hhRRKin4kQtQqpbDCkRjqCZPu0z4hl/pXWP6Xvaq0AlSY6NF+CUvi8ZoMGiXPCRdJOYziTwJifRCKfQjqf4RHjdCaNXD7HgF4inkCuUEBlSRnqm+o5ha+srOLUvLy8HJWVFYhEovyGKaLnyeAlqZgFW4wkCMjl90hDXQT6ZbJZ9PX22slk2iGh5OLikaCeD66TJExElpSUmD/6yS3mS2tW4zOnfgwtuTKsi/X85pu3fP+D6nr+bydw0AH83xzA/k6iKP/9ikd86b6fy1gogu1r+9G1cQQy6SEmy1EIhZD2O3HiCYvQ1FKJ3IiDRHcOyb05TnfHEins2tuDZC4t6yeUihNOnYexTB4Xfu8r2NKzmyNhZVkFLrvsEnnU0Ys5A3Adl4bh6QYSBAjwjAmtFvKAGeVRzKqpEqsfHpZ71neJI6rbxN1dK/Gg/iLOf9/7UV1Z5buOR11zZB0CFTOw9CirCtGgm+3Y8DbHUbnHQqw2hCPOmoa6KaXoIk7A8wnYvR40V8PE6S1Ym9uJD/30s7jiY5fio/VnYveLO5kFwCxFnpunCKvDEz644cbgIA3ykcowMRaVd1CLRVUAEwZNCGogTE85gqD3TzJhpA1gmqB5IBoQIq0AnSnDNCmoSUMz2ZlZtHGEugIExHv0G32ZL2TFaDaDUSeNeD5NIJ0czA6iPzMiepP9rDtIO42y+Zws5LKcQVRXVTPAFzJMtLe1YfrMmXLSpEmirLyMSxuLSEnklMjfebRuzVFZTCCEouTGeDc6vyfCGPJ5GlqyUVZaypmC47gYGhzwBwaG8sVeQ5FvrIas6P+8hERGIhGRymWtb3zrRr08WoZPH3UJdqzftPPlaM/Vd9539+MHS4HXrvv3f8bryQD++jmv6gReuvfnUnME1q/qwVhvAX7aQZlei8FUCrqfw1FHzMDEw6sgjRCyfWmMdnpw0xRjXHR2DMq9YwMwTCkOPaIVCxdNx60PPCA/f9st3IPWdEMeMf9w+bGPfVSUV9TIfKag+cQwoVSenYD0aSrO8l39pLY2Gc778pnfd2ujA3G5ZMJc/OfWP4iXq3bLC95zvghHw57r+kKEoLlpD3k7zZN5GlF6hYBNjeqRgow8nxZRM4ZZx7di2tI6xLty6FmRQLaDWhw+aifUQy8VOONHl0O0RHD31T/B0FOdcHJ5BvSIn2QQK45ufOYqUuKvYDTeB0iVNcsIEAWYv682JgZZABk+RXPqBBBIyANDIbU/gIycugQhKwYrYiEaCXMXoQCHIzoN4YzmU6xyPJCLy55kv+hNDKE/NYDdg3tl11C3yGVzTDyyIhHGLSrKytHU1ITSkhga6hrQNqkVE9smY9LkSfx9Ul9yXZszAYVs0FtQ24JZ4pzHo4PBAS51FIIQaLayA1BChEo9iKjbLPnuuMhmMujt7bNT6ZRrUPmiovk+8ZJgQpFWEJSUlOibtmwO3fCdb4qTF7wbV005E6t61u+y3t10/mev/ezqV3MCBzsE/9s5/IMdwK0yPepi0/M9yGU9yISDipIJ2Nq7A3o6jyMmz8T0hfWon1aN/KiDRGcOuWEaEXWRiKewu7cHqVwBlbVhueSk2YhGw+Lq//gOHt64im+baCQqL7v0I/KYxUuE43rSdgpCeo6gG4jsyfYcv8owxYnTJomhLXF/5b1dokRqoq6kAjeuu1WGDq2Rpy49nuB06KRow7pYQu0F8G1Or8nIiF+YT2aAtSk0D5WhflETFry/FV7WR9fKESS22cCYh1hFxG+Z1qJ97ZF/x29W3oeffu0mzO5pwlD/kBp3ZWacz2bPi7/HQUGaYjThCE/1BqRaL66EOqgf5/smNfEN2kmqxoSJVGWFdYSsKM/6RyMWiBqc822kvQIyXg6J7Bi60gPoSfehc6wPffEBJHKj/mAmoY2mRpHJ5aWpEd0IMIWOikrqszfL1rY2MXlyu2xvmygaGhq4915f38DU3EIuJ/N2QVB7j0ebWMeQahlegaKcwH53kcfLQ5Q6c/H7HPkpE+IEp+j81KIRAh1J3IWZgLmc7Ovvt7PprMcdEqJVBAtI1Z4C5Q+INFVSGtN/s+wO644//B43nHcdJo5V4OHUS/ee84mLPnDGGWdkD2YCry8T+FsO4JV+9polwGB3Cjs3DcFJunDSBdSIVryc2Ya1mZexQByCYyfOx6yTWrj+G92dQmbQhpfWpWs7orOnH33xIWrzoXl6lTzx+Pnipe3bcdb/Y++94+wqq/XxZ9fTz/TeS2aSSSWFNFJI6E0k1FCi0kEBQbmKgCggXfSCV5pyASkaBaUKCgRIAiFAAqTX6fXMnN7P3vv7WevdZxK8V8X7+/1x8TofSiZz+uy13rWe9aznue0aM53NynRaTWhpw1e/+lWjurZOyqTicpbXT3OWaUq0FCu1+QukORUl5ifrR6W968fMJr/LSlqm+pNdT5o1h3XIM9qn8kjSsDLM2iMuEV20VJaalmGqGg3iVeSkLFK7wijfIaOhoQ4zVzaguNKJ7rVhc2h7TDbDEhypHOrmTMSb+9fjgl9+B19bcQ6uaDsDfVu6YSBHJzuhlCpN1Ii6QB8oFctMnefqnFiMJOMlBEPo72gjUJMVS1ZUiQA/FvdUaP4vloQIfBvOjCFoRDGYGEV/eBB90RH0xAMIxIOI5BLIZBPcV5MaEgmMmOkMe4Eahik5XE6ceMIJ1hFHLJcoyMvLyuF2e1BQ6GcFZaJaU4+eTdMnQ92IbVfO+wyM244HfV4vQEw7hZIQVQCGSd6CPFKkCa2gPzD2QP0I/VGMA+3mntslwgsooSQSSWtwYCAbjydzZKAqHuWgLGObGdNrjaeT2q13/EgNhSK475Qb8Om6zbF13j3X3/WTu37e0dFBklH/7dj6X5jAgeTweRJAPujzH+ZfxQTe++0vrO69AQz2RJAO55CNpOExqtGp9WJPwadQOoGjlEWom1KCGUuaYcQkhDpTyIQNtsQbHY1ib2eXRGMl3aOYhy6dILe11OHyh++2nl23hs8ATdXMpQuXWCef9mXFoWtmOpUhLgBVAaYim+qCmnKrUfJL777Ug8HOsHFo+QTljf6N+MXIC1h+0jFoKG9gsgrLV1HzkctAMcRVleX1VELhLZiqhPhYGmUfAfVqKSafWo/mOaUY/DSE/p0RZHsAKS6hqqMB+2O78eX7v46FE2fgnlO/h6EtQ8yGo9YGRIEd9+IjM0+KRaoO6IAXGnsO2gKUadZPJb9pkZQweR5QAT2cCqI7NYj+WAD9iWEMxUcxkBrGQCKEpJHk1sJBLVUsxqCorYcsxDnsddtxdx+qQmQJX/na+bjxhhu5f0/EE4K8Q9JetFpNtCRBVDgofgRzMc9ryMejWCYUgSy0BcTnxyrBeRWhvJU4Xz32JWQrELEEmf0slISz2TR/n0qkqBLIxuOxnCqreZDXJlIJXIUwhoKiAmzetNnx/dtvlo+fdySubD8dv13/wvC0rx995vmrVr1pVwH/JQn8KwF8vgSQv9XfShKfqQjeevoBq3tXALGxNOKRLNKRFMxUMcJmGKM1O+GJe7DKfSZiZgqFHRaqWgvMSG8O8aG0bKZNZJKW1d01KHUP9Vkpy5CqG3zmkqXTrN7woHLard+xRhIxQpMll9tpnnvOefLsmTORSqWRSWeYD+R0QDq6vs6yei1l09ujCI4M4+j6w/D0nhfx4NjzOOXEU1BWUIwcOw6xqxBBB8TAzZrEt2P9LurJFViaBboe3dtllHRL6Di6GlOOq0F8LIPBnRGk9gLZYRPuymJYJTnc8MRteKfnQzz29XvNptEKORga5ZVkMyfIeezjBQMOyQlN0uFWNDgVJ1/UgewoQlkatUUwEBvC7lgf+pJBczA+JAdSMYTSYSSMpJUy0pLD72I9vUQkLtyACCOAjHQshRwt2di6/6Inp0pdNR2yJrtcDnhdHvYuLCopwuVXXG4dcexxiEbCEq3lsn+gHdk0m6cyn+TO8vZgIgHYuuBshCrygTBCpEbG9gCAxGBg/uzNMyE5SQgbFZEw7J5egHziMqLnpQqE2odUkpNAJhmndkBgAoKSYFcEJiiBWW6vR3n8V487fvfyH3D7Wd9BQ78bvx9Z+/S/PXzrRZMnT479ayrwt1uBfxQD+C8twMHrwH98+F6rZ18QRhpIRQwkIgkkol7EgjEkG3oQysbwvfrLMbFwGt4Kv4v6mS7LqatWtDONzJgh0ak1NprEvs59CMcjtOAidcysw/xZU3H/C7+1bnr2ARafoVNhQttEnHnm6UZJYZGcyaSlpGGi3u8xF5WVo3/zmLTr44zpTWdRV1yl3PHRL8xdhf3WCUtPkHRZJwcv7rcJnSf6S46ouzQBgGUQLZ9GAbLDRDYnIdcHVG6y0DyxArPPqoalyRjaHkJiQEK6W4JTl1A/pQn3/v4B3L32Mdx56rdxXPECDAwHWK6LyPFuycGW2X44eVoxaITRFxnGaCyInlA/toX3ozM1iNHUGOLZmJmUTDknk6y2Cd3vJUQfTqLS0ZtXVBZDSceSLAhK67YSy6Gp0B06nIoGt8MBl8tFRhzsN+DUqfJQoNG1oEoYDUfR3NSKS676OpontCAVjzNgSScj+RqOl3z2fgA9LcW8KPkPnNq86Gh35qyJxLbj7KYubMQF6nZAKyHfxNv6ggwe2uzC/CoCXQO0FUgfHe199PcNZhPJRE7lHCBWFhhfsKsqr89rReNxxy2336ZkzSweO/MOfPCntfH4As+35x9z+MNLly6lj/y/VK3/qgLsX8/ngAr+asn/FxJN0u/uvdMc6I3AoSlIBDOIx5KIhrwI7h1FcROwzbsTvpDX/F7HFfKe0YDla4ijZXYl0sEsYvszkpUzrUxKRm/PEPb3d0uGmTMLyj3WksOmyykzIx13+zfM/tAYnU4yIePLDj/cPOrIY2QmAJmGdEhVhTldK5Y3vdlpdu+JyY0uH2rL63H7Bw+avTUxecGMBSBwjXtQ2tZzkOGlLEg7dIHxNrG4iC1ZNk3FkEUboKHVW4QpZ7QYZfW6MtYXQ6grh2yPBKdXw4TFM/Ho07/AVU/fissXnYGrDvkaYoEgnXZmyjTkgewIdkQ60Tvci+6xQXTF+tCfiSDB84Yc4OBI4i0/j+bi1egctQ48N7CQzpEBaopIS0yjpSUh8tuj+xR5PfC4XHA6nEwkcrLNGCkSCc09mVV7hJU3cfUpFsh4JZlMYMHSxThj5XlwuXTuwWmWLxMjkQPmoJOaoEkmEgnp4/zOQB4MELuA9gVFHAZqA2jnn6XDxkWH7ApCTA3y1QbtK1AiFuMCkQZI2JQqAbpROplCf/9gOpmM5xQCQUSNI75oB8GAVVJaLG/4cKPj7vt+LJ285AT82+Rzcd+zDw11XLjk0CuvvLLbrgLG7zX+Wu0Nwv/LyeDzVAB/qxU4uCKQfvWjm81oKIXCQh+ioSRG+sIYGtQQ3D+G1lIfwlMj5tudH0jpfTnM9EzBKVMWW22Lq6WiGqcU3J1EKiBYbDQR2LO7FyPhiKRohtU4odI6bO4U6cl3XrG+/fR9kmGapLUvV1fV4LTTvoyq6gaYRhqLamqsmqRX2rym3+zpGZOnFFSgoLAEd297HLEWCVOaJ7EzsNOlik03utRNWsc17MUcsc9OdHXax7MUYq/lTGVb1qwdLVbnnNSK5nmFiIUSGN2ZhjUso3T2BJR5K631T70kLX/6AkwvbsOtR1xtrunbIG8d3oddg90YTA8jJxumqZsyqQ75HMV88hF7T9N16MRIII9DIyfMTm3DE8vKIps14aJT3e2Cx0lBrsCrOnmENhYIwedxs/U2j9bInYdHdGIVl3QTuMSmt8mnpiAESTLMbJro1CZOPH0Fjj32OJ5S0OnLRifjpf143S7ozLZngEgPtoSQbfsloL4DTCd6buY/sphg/rSxoUGmbeZxBuIM0P0EesG4hc0pSKWS/CzpVMrqHxjMpJMpg4hO46CgjdmoimI5PE71ySef1F95+0+47ezvYmKgFM8H171y5U++95XW1tbh/y4J/Mtv4LOl0d8rBv7bZJGXl6ff6aM33GTSpp7X7YTH48TA/gA+fDeO4OAY6h2qNX3mVOkNea31x20bUBjy4ZrWleg4pA6th1VKiuVAYGvMIt04umJ69o9JXX19iGeSlu5VsXBeu1RSXWSedu93sHHXdqpITRqPzZg6Qz76qCPNmpoyeV5JqZHbk1X2fJyxEsGQNaeiXl7ftw237v0FDlu2DC0VtUikEzxKI3ceWngRlzFx50nAgnpZOuao5iVGnom4lYPca6BlTxHaZlei44Qa9hMI7k9DNTyonzoLn/5+A+586X68MLCWFXmouiC1HWeRH7rfxWW/Q/daRZpGesWwqOpIZ8YFOKmkJ9yBt3ctEy7NCU1zwKk74dbdkGXDBtElZubR2W5kMxgaGGUiVVGRj98FA3/2b4mAOAqkPOOQdyXpbdFT2Ekhk0qhsKgQ55x/PqbPnEF4CmUOZiyIltvGRDg47SbcfnyB7NvgoDiO88wAfl5qB2i8a3cM+QN7/Db5tWLhRSCKAnZb5GTBhT4nwlQqwX+XSaetwYHBbDKVyuXbkfxj0+KQv6BAGhkb1e+4+06FlqIeWXErPvrTeuxrT16y8Oilj5x++um095U3cxBox78qgM/0Rv9wArjpppukm266adzz5d+//S0rGExAN53omFpL43Z88MdR7PiwFxbiOGnCQnQ6R81HBn+NbMiUr2k4C41l5VbjvAqrYUaZFO9LI7IvLlF5H4ukjd17u+T+4REaK0nldR5r2WGHSu91fYKzfnI9cobB5arP67dWnHKKfNTSueYstUge/HDI2rNPMvVYWFlUOw2bgp349s6fYM7ceWgsrUUsHmXeOunQUBVgqsTCo/EVKQlSQSDm94pKF7RppsmUO6igdqcfLdUFmLKiHq5iINqVhcdZgmL/JKz45rl4ec+bKGuuQHFxEVtz+Z1efhx6HmIbElsRuRyknMVjSCeBbtS3qyo8qovZfrpLg0bsQIGr8eoxjdRoZEB6f4YhswsQJSaaHgwODBEJCuUVpXyy8/iNNqKosyHdPRu4I/Vk+kvRb9OJKxSUKd6SsZjU0taOcy/4Kiprq5BKpoU5EAP8tuGqOP8/4y1METsuF8ZsR2GXyqM+ARbybF+EsynUkuwKgW7L408bRhQFgvgv06DzykP8PrJI0sq4BWpbrL6+/jRPfHhEaLcSQtXYKigqkt9e+47+4KMPy8csWI7vtp+Hn7386J5jbz535YoVKzb+talAPhn8vQD4Z/z5P9IC/LVWYLwN+MGFl1hdnQGoqg8nnTADtbU+fLQ2hddf3IzM2CjqCspQ4ik0nx9eI5W6fdIJlYcZXpdDKmvwW5OX1Un+Uh+CW6NSNmRY0GVroCci7dy3X47GYpbkyEnNE2rN2dMn4Npn7sVT77zO7nbUtza3NePrK8/GGS2z5U/f67Z27wqi1FCk9uJma/X+P0nPxN/CkvmLUOD0IhWN8zxdcjgAKyvotxYlBEooghhEoBpj9hSjMoFRBkr3eDFRLkHb8fWonupnpaBCtRbdIzEc/r3TkPXnMGvidA5QPolJ746YgJLK+wsO8sRTHXDQBp8lzD9p9ZdO/BwFEHHn6b7MGaBSXohokskHJQ4qp9mQgxIJu4/JGBgeZgel8rIy9g8kFV6x1W8ik2ObMPZ1E3RcW+WHg1CYmnD85AwkEyksOnwxvnTm6fz6eEqSD36+WX7Ux8OMcSdmDpw8emdvPB4cJLTxlxcNE8hKvlI4qJoYBxoP3ILozwd7mBKfIZlKcZKIRaPW8NBIOksLHPY0glucnElWaJbq0LUHH3lEe3fTBty16nq0D5bi0X1/eP2q+284b+bMmf1/WQWMX9T/Rw1I/5EEcOA3eOC3/Jm/u+G8i63B/TEMGxoWL5qAJTNKkTK8eOGpTdjz/j6r0OuVCtweFOpO0+d0Qld1sgyWfG43mmbUGO1Ly5GNS3JwR8KSDFlO5TLW3u0DZmd/r5LMZix/qW4dMrsdli8nnXjbt6XAyBhfyIXlhfj+hRfjzImLsPndAbNrz5hVBx1NtZOk7737U/lTeS9OXHQsj80i0RBfxMSm420ZLpPpjCLDDjpsDaLJMWNNIVabJiGSiaKwqwBTEw1oW1rJOACJnRQrrdj48Q4cdfNpKG+uRH1Dk5HOZBSf7kRZcRkKHUTP1UxVk2RWx7Fo5kD9fgbk4kUnNlGBcxmDyTCsvkvbeDmqPcQUgMlKTKwRzDnWQmJ2oYLQ2BjGwkGUlZYyRkAYAiUASkA5I80+g1xJ2Cc0OybxK7ChNIYHJG4naG/hpNNPxbzDF9mafnYLwIpgfDYLEjOf0Pn24ICyMCeZ/NKTfZKzSxE7geTLe3FWHGgLRFWRnxkeaDlElcI4Bk8TJF4fJoJSPgkMDQ6nsrmspeRHhAI3sEpLSqVde3c77vv5z+SCIj8e/vIt+PD1ddae1vhZ9zx8328Omgh8ZqL1fxUI/P+cAA5uA24882JrrC+NIdmLion1mFmexcy5DdjxSQQvP/EushEDxT6PVaw5La/TKbs1h+F0yHDJXqmgzGFOXFov17QXSpHunBXpT/JBFR5MYseuTmMoElAsTTUqa33SwkM7pBd2rpOu+o+7yRnb8hQ48ew992FCzi9v3jiGkb6g2a665YmTZuJrf7oRO6xBrFh4DJ+iJJdtGRJoaclW5hDdK9l4mSRXl2ODDipnqUwlJDur5ODu86I1VItJM6vRvKgIiOfMEle7vHHTDhx9yylwVPjQ2t4Ct6picm27vfMuZuN0EJJNtuiLhZkpj8rp9KdL2syRvhEHOJXqZLiZ4w1nURmw4QZ9T5UF9f/0wVgSwuEgAmMjKC4qg6/AByOXFfRj8gvMkhWzoO7S45FgKH0xs1bIEXILJFoCENCGktIynHr2SjS2tbB8tzj5RYNOQZsXBLFLZrvsz+MANnaSH/uRLiFXMnn98fxiVL4QEG1DHgsULUY+Fwh/ArZQ49cstBVogYiAQfpKxuPW4NBQKmcYbLgqHtW0CPuorK7Sfvvcs9rzr72EZdMPwx2zrsAdL/7MOuHmVR0nnnjijn9xA/7rCf552pu/WwFce+IFFsYciBeVI1ghIbZzM6449yi0zWjG6gfWWBtf2wef4kSJ3wGv7jI9DpfiVDVLVzX4XDqqmkswaXm95fE5pLHdCdoatAxFQs/egLRnX7cUziTgLVKt5vZqqaGqwvzqozdYG7bskJw+HW/d/wDKkl5r3do+JdUuGc09AAAgAElEQVQ3Yh5a2SgP5XLGpe/coTRNa8W0ukkc3JFElFVq6cQk1i+3pnydC74+4UQ0EhSiPsJtN4MMpJiGiQN1mN7ciMYjSkHE42JPE3Zs3oslN6+A5NfQ3DoBlUWFmNRC0waDTUr4ACPRC3psUsi1DFrZR5afzw56Kv8J0zAhQD7q46kFoDuLwQT/mRb8KBhYUVdTEU/EMdDfB9rMK/IX8fydyn+6Dz1/NptkezR6AGIAcm8uihvuyVn0w97doQFbLJZE2+RJWHHWmfAX+lm/X6iZC3EQMYkfP6fHLdDFsW67IdPrtNsHFvtgRqN4Pl4hGmcO5isLOyPZY0AxbRCJSnQpYoqRn/+TdXwikeSkFY/HzeGh4UwmkzYUVWNIwjQsi5WUnbp2770/0fYNdeH6476OebkW3Lv96V+ddNmZl5x77rkii+R7EhsQ/DxB8M92m3+kAhhvlw7+8A4mAp0+49j+mZ4ZVbtzcfyu8/dIjo3iBxdcbV58+eHYu61PfuzOt61ITxylBR54vU7Jreg5t8OhODTV1DWnUuRxmQ2zyzFhUQ0yYSCyNy5nkqaZShnSzu3dVt/YkEw9dmGFz5rc0GD1jPbJFz32Q6O4vcx66qrrVU/YgXVrB+AKRDC3aRqSBW6c98fvoryxEhNqm/kkTGdTrEjrdXmhktOuHQQ8is7RHr44GUlxJGPzzg3FYIONCUOtmFvbgYZ5bmi6itLSWvTsDGPxdScgJifQ2NGGSl+xMXVCh8LGGAzEWyRUQkxFGslzvy/T8JpPc0EFznGgWyyimbN7eO7ZqVIg2xOJYACKCPF3dMrrkBkc6+3vgcPlQUVpqTBGodLCNu80SZ2Iy3aR3ARQJ05ZFiTl4BauxdzLE96RSGHh8sOxZNkR0DSFS/hxFiDrGapcOQmxDpY1sU9r22L8oBqbEkEmk+bKRzQO4r+sg5hflrJbgoP2C+2mQDD+xNakMCkV/1gsKkKqQ8R2jMWi5vDISCabyZpEYqI3aJiGVVxUJO3au9f50/t+KhWXl+LBI29Af1cPAnO1a6/4t6vvsiyxiH3wtfx52oCbcJO8delW9+o1q2P/DMngf5QA7LI//+GNf4jL6he8fnzZsmXP7nod65LvWYqkS4valhh33XC+MmlaufX4/W9i3R92oUDR4fd5LJ9Dl0g8wiFrlq4pllfVUVxfKHccXi2VNBUh1p0wo/szrGwxOBiyduzsNEOJuKQ4TbmquhgdJU3WD1/9d8vVXILrTjpbHuoZzu3cFFQ9oZS5YOJ0uaRpAs55/luIuLLoqG1GLmsik02RziA8Xj+IIZfLmVCIByDRxU6on2hkmbHPG28Se++ljCzaoi04tGgqag9x8hixtL4G6SBw+DdPxf5ENxramlFY4MfMCVOhSmRNTvqF1LMLdVyJAp0MNLi3ZTdxTgS2fIg9AxdAn8l9Ap/nkEQPQPLnfMqzHho7Ihvo7enlyUVVebUgM5E2IkeZyF6UBOjUFcEvzFQZ7yIRZVunj/0LRVaAQa2DIuOYk0/E1BkzuDIRgh75x7CFTpmPTzUERbNtj5a3F2J+oPiXJgEEbnIA276IYjghpi15OWKRDu0sJFKjXYWJ9yJclcTnRq+HkgC1AyIJxM2R4ZFMjn7BxGQUuwJWQXGR9vQzz2ivvv4qTl9+Mr7beA5+9NL9O790+/lHrFixovevcQP+SmBLP1z8lSkjVnZeOpeatifU92jJ9rqPV2O1ADm+oF//aAIYv/1BSSCfAKTpZTPXn15x1LzH9v8Ge9KdrHary37zh1+9Ur7g8kXWR+/ulJ66/y0rG5RR5vPA63RaLpcuu1WX5VBlFp3weZ1WVUelPHFRJTSXaozuSMhJpglb1u6dA+jqHzATuYTicqtmY0UFhsIBqUvuks4+8ih07hux+j4NS2WSZU6smoKndr0hP97/AhbNWshrvrTmT+h6KDIGr8vPJBy65mRVSHmTii8vwpDVNfHsxbAbspTOpUxDrYnWYLZjBtoPrYSVMuCrKkWZqxJHf2sF3g9sRtmEBtQVleSaa5tUl+7mE52ej63CuaSnmBbnDs3IObAscueh3l2CIVP5L/T3WOjQHtuJ/XsCDewpAJOVqLe30Nvby6dsZVUNHE5dGKXaK7RcXNs8fSb4cuQdYOPzJIBaATsgBa1fRjqVRUlJCb502qkor6nkRCaMzej05v/y5c7rwUSpZiETSiG2oAlXGSJhUALKZjKf4RTkBVOZ+ScEQ8Qgj1lYB1iCB74XGgosGEq3slujZDpJWoKcBKKxmDkyNJLOmQbTlk3DIG4ARsbGnA8/8rA8FAzg3tO+h/pRP173bXv8lgfvXnXQWJDezjg34C9j+ebFV0zQJfPI0sKS2wq8Rf5IOoo3d7+H/fHhy9fu2fggb3l/Qb/+xwmA3u9f8ACkSUUzf31E2czTftv7PIazY8Q/Z/XeIyadZN1xy9mS158zH7x9jdz98ahVUuiwil1+SgCKW1UtTdUtl66aLocD3gKPPGFBhVE/rUxLDsEK7IxaisO0RsfS2PZJlzwUHpZMVbK8Ls2sLy5Xyn1u0zFRwe49ASu5P6uUI2fMb1yKb679qfLM4CvGqmVnKNl0nF1/6LQLjgagOTzweD08WmPvC0VYefNWGwWsIk49OnUtK4WUmUNRohSLPbMwdWYVsnFAdfgxuXEyTr/5HPx+92uon9yGk449FkoihaHBIOve0elNj0HJgBeAbfctTggMNNj5kwB8shejyQOVITbLjc9Cdkm0XXeYDyBos/ThDg8N8ey+uqoSbqebqxWeHfJ9SIVHvK/8L5qrALsEZ+8A27+QMs84GAoJqVQG7ZPbsfz44+F0ujixsHYB5xB6fPuU59VeASyIVkFUA+L5RBVCCktCI81mBtrCIPlpQJ4CLHaFD2Ic2LsF+RNGVPi2ajCPToF4gkRIUzzaDYfCxthYMEPAME9zDcOsqKxUnn/lReef17yJprp6PLj0+/jD6y/kFty1YvnyJcvfPqgV+C8J4KT2hT5ZUk84sXHJ11tq2xbUTWpAKp7CWM8Iege7sG5gE/7U9d6VO0e6fw4+Xr54X58nARx8m4N7Jv77g5iAqCltP7wJpS9tS2x1RY0Eo9aEZpc5JuG2b3wdp5w5wXrmF+9Kb7y0xSqAE4V+j+V36/AomqXruuLUdMuhqBLNy4sbC62OJdWSp8RjRnZnEAvEJMkhS/v2jBi7dncqCVLnUBS50OUyp7Y0WuUTHNK7G7rl3EjcqFE1ZdmME/CtDffhqV1/wJcWHo9MLEYKYnArKgKBIK/k+n2FbLfNY7KMzIsyTFChU40Cjsw6JAlZQ0IKMfiSLiyWZpmHzG6RCdRKZXTMaT8U1z5xHX7y5i/QOq0NF51/CQqgYu36Dcgl47BItouSCsUvf3qUBExW7uZ+nmddIlZ4vCekjbncZXEN2uNn3YAs++pRgsiyFbcoq4OxKLKJJCqrq+HxeIXPnk2nFQGWZ/bb/oQMxHEmhGQyDCj6bLvfpspClgi8lHisOHfhQsw+bAG7/fKpn6cK2xqGAiQ8sC7MvH6qKsiqyV72IfSeRp6i4MiDiIQDUEoRFOU8f0G8ZAJhuRQ6UBDwh0TVhmjL7HfGvItYNM5VBlVykXDECIwGaUecn0pXNdPhcTru//nP1Z6hPpw68zh8u/1sa/XwG28vuuSEM+bNmzf0F3gAKRhYh2JiySHTOq6fUTnp8sMPWayVTq1DOBpE/6fdCA2McpsWSI7hN3v/lF03sOXESDzy6hcv/D8fFfhvJoCDgZTS0oaqbCLxftZM1uYs8vAjairNsnVcuPwKfPe65eaenZ3yr+57B6mogeICNwrcnpxb0WWXrsq66jA1TaPptelzu+W6mRVm69xKmYJlaEcMRspALJu1tm3ab/WPjMmQsybp20yfVSs3tFThnTe6TCMSxnRfpVxSWmed+uL1UqbMwKFNHUikMsyz13UVwUgSRjIFfxHZl1EpLUEi5h+d9kySEWw0Rab1WpmXZ2JGCmpOwXJjOubPnAHNJyE2KuGQtqn4j7ceNb715K1KVUs1Tj99JZYeuhDvr9uA7Vu2welwcKDmUW1qL2j2L0p8wgUoAQkFYSIP0QYhBVQ2YyKVTjAdlpd56OdpIgSJqQLdl7T8U5EE4vEoSssqUVhYxFOGfDVtsXMiCYyoogrh98akORFZQqjgoFaHhDtt/T46740sdKcDS445Ck0trbyvT58PjxRtliHvFtgW6PmJAQUpLwHZhqikE0hknryKUH7uz4FP/OQ8bGFTgEWZIUafYstQJM58bUCbj/mkRT+hRBmPxZHJkNgojUfDxhglATKQNE2JdAN279vreOSXv5RLKkpw8+Ir4OrJ4o9Fn9x6/2OPXH8wFiBJkrny+OOL+tb3/uDWk779jY62KcBEN/NH+t/bg+BgGDkzQ1bsSGZT2DS6PfNS37t37B7cf+P/hQTwN99jbW2tcywU+U4mlbyRGGVHHXEM9nZ24pNPP8L8+hOsO25YJVU1Wnj4jtexf/sIivx+q9DttjyaJrt0h6mpiuQkS2xZh85a8C6peUkNalqLkAykjWB3RsppstSzb1jaubUb0XTY8Ba5lJmH1qLYX4dd6/ZbqdFBc2pZu9I6bZZ11BPnS2NyFJOrmxnwohOXgKt4Mo1YMI7SyiIopgZiHUq0/G6QCKfwsONApFKcSmMSBzETSGZlHKfOxfL2aVDLgUS/hMbmDry++zWcd/834CovwIqTvowvHXci4oEwXv7DyyCXYl5i47pd9NtM72UvEwIa7ZEXlfT0jLaIHgmChMNRTqAcsGy6SUFhE4bYhEhiMCwaDKO4rARFRSVccrMtF4/uCMAjolPe/08oD1MWEGIe4vnFaWoz/NhLQHibETBKwVtaVYGlRx2FwuJC/p6Vhu2xIBMp7f5c7PSIJMLAnV0l0PvlNsDeDBRtjc035mbBlhmy60sxLrSBTLYgEX8eNy6n1sV+DXkiEbUosViUtwiJvRkOR4zRsVDGFPpk8BcWaqufXa198PFHmDvhENw995tY3/dRv+OkhpXnrTzvrYO4AdKVZ150+cT+0nsuPPtiTZpbiNH+AXS/sh2jXYNIWzSotZAiMDkVwb54b/qtwIe3v9e55aYvagL4yxM+j/L8vfYg//N8I8vf+3y++bFofF3rhDb8x33/jm07OnHtd6+BZpTgnsuvxclntOK3j72DNX/cYrh1j1Li8xpeXZMcKqnVqaZDJ3lOFZoCS9edUkVjEVqX1JhFxW4r3BdTYkM5RONJY9e2AblnYMisbHErZVWVSIQd0PsH4YHOI7+mOUtx9i8vwJaRbSgvKOX+mOi3BHwnyNQiEDJLS0tlp+pm5J9UMchLhwZblACyojmGSrGnAnHEkTYkLJcPxZKGWfA3SIj2p1BZ12R1j/VIx9y+EpYu4dgvnYDzTj2TV3Tffv0dfPrpJ3A7PeLUth2B+CSjZR1Gvyhg83p5gn9AFxhFYSxEDkVEpBEkIKYUcF8sWhXGAbI5REJh+IsLUVFeLtx6+VRXYJgUrFTJaHzysxuBiHy+VgmjEH/kR7blw20JMHtNlz4veq7Gie2Yv+gwLu0JFKSVZO75eWdCSHzx/J8TQx5opI+QbkdEo6StOWDv44xjifaIcFxQVAwERcazq5T8S6RPhk1VxG1Yn5B0HGzxUOJORKJRZFIZFjsNhUNGMBhK0yena7oUTcScD//iESlj5XDp/JX4km8hbt30wOrffPjq6fngffPNNwu7f/XBk8f7FxxXsnIassUmep/dgp73dpEEGTJWmqca5FUYTcewP9mXWTv2yR0buj79p6wAGM/9i3kpf1annXaavHr16nzwj/M5nU7POdls5oljjz4eN95wHWJxCz+87X6sXfMczp13Nq6//kvYvW8/Vv9ynZUczaG0pAguWbGcmio7ZJkWZUxFkQ1V0VRNVkyXS1Oa51ShZVYli+qMdSYkEhQdHkpg595+GIUJAGXo79qLKe5CzKidbMqyJv/4/cfxh/63MLW5HaQ2RNdIcUkhl7Bm2kA4GLb8BT7J7ykwTKIbEfNPwIBM1KETkFyGNcjIIYs0KQ4CmCtPwLKyxaia6kFyIA5fYTlMrwMLv3MMokhi4eLFuPySy+D3ejHUPYRXX3gJmXSS7b+p9eayn8Z57G1GlzltAtrLNnkDAZuYFCU9/kScJwNsxsW4gGAHUmuQP0UjkTBcHqHkSxuStnKHWECSLWiSQ2wT8gIP/UIpEdhgnT0VIN6BPdETxqI24CbYfwYkRcP0ObPQ3tFh6wrYwKntN0BoAk8B7EmCqDHE+qEsachkkpw4OCHwso+tFUAtQL4GyRN+mM1o/8vAo63VcLBSmc0O4vdLuAQzJ4kvkWGZ+Uw2BxIRCYVCuWAoRGwky+PzqG+tX6u/+fZbqCuvxh3zvoH4YGhky4zwrTf88Ic/pfs/esP9Z5Z+at5/woknl2B+MRIfD6HnnZ0YGhxBIpNAKhdDIpdGMpNGNBtHd3og9cbIJ7d+3LP1lv9hBfDfxtf/8LH+4bt9nlNezHhsMtZFF12kPPTQQ/kNwM8QKeg2qqxfKynSHatWfQUXfO0i+P0F+PVz63H7bVdhgmMq/v2WS1DVADx87xtm9wejsq/caXqcTtmjOS2npki6qlu6Qu5WmkRmErqqo6zUa7UuqpXL2otMpDNyqCuL2HAae7oG0d0/BMtVjn1d72FGSQvm1k7CruAozn7uKr7QJre3sfFkLDIKl7cAfreXQb6hoRH4PB74CwpNiex77FTHhw79hzj6tCxEPboiKLtRK452qQVnVB6NxqnFCA2H4XKWob21A5OunY/O0T7MmD0DV1x2FSqKC7lmX7dmHT76YDM8Hh8UiaixYpRFSYZoxvlAMGk7kSKdSn4S7iJSTibJ3npii5WyB3EK8v3wAYAsGg0zllFTXQcH7ThQ78zov1gcolKeCDxCjFOMBg8Ad3mXIurZRSVCH4VYFhIUaW5bsia8BX7MWbgA5ZUV7KyU1/oXoh6sJsgtlGAL5olG9DAKMtm03T7kpcFFQsqTe/J1iWkHu0gANgVavGUBDfDvib7Jb/ZKvEk5ngSIVZnLIRQOI5vNsN/C2OhYLhwJZ3Rdt7KW6Xzy6aeUwcAgjmxbiB/MuhT/ueXZj+pOOeSIyy67LPjCLY8/5Pswc+GSr5wIqwBIfdCPzu09GBwNIpmKIGmmuIKM5eKIGhHsifem/9z/ya37A103/8PR97/gDn8tAYxPjeg1Ll26VO7t7VX27Nkzvvr7F6+dEgEjTirUhbKuvHDZ1y8rOG/l1+D1e7F+wz7c98BPsffDnfjOmV/FqWe14bdPvYc1L+6yin0OSXfqVoHDLTl1ydRVXXYpiqnIqqUpsqxJbuIIWNXNhVYbbQxWuOTUaA4ju6NSJJbGvm39GI7L2Bd4Hx1FE9BaVINYOonzX7zBTBlpmVR2Zk86RJyeyQQKCgvZqiow0GdJLg/ZjkkmiWnSScezdSq5RalMJGDLUGGoYjsvbsXRLNXi1IqT0dRRiXQkCMVRiGkzFuOI7y/Bmq2b0DixEVdddimam9rhUCR07e/Hn199FfEIrSE7uDQnKWIi7zAWx6cdW/NC1ojpJ3N7QGQcCjJKABlC4MkkhKTK8qlYgOIcrKFwBDkji7r6enh0l6gu7Jk5jTjJgES4DuVHdQdWeTmIeZ5vJwb6JfL0Q9Cg6YPg8t4G2yqqqzBrwVw4XS6mGwuBERsTEGIj4rkFzdAm8MiM0qczWU5s4mc2xZfwCmH6YWN/wjwkPyHl+oD51DY3+IC6iC0yalc2isrPyxwBk6jVGYQiIRB1mJ4hFAplw+FoxuN2yZu3b3G++MqLUkV5JS7rOBPT1frU09Y7P3vg17/81ov3PP6Q493UhYeffgwUJY3o9iF07SAr8yASRgIkOxY3YghnwoghhncD2+MbBraeGYgGX/xfEM//8Ev4Wwng4J/xoUCR0djYiM7OznzJn39C0USS7LWuT5Blee1VV15VfOHFF8PMZrB95xDe3fgxHnv0ESyqOQzXfnMx9u7ej8cf/cCUUqbkdzsst+awvLqmOGQt53QosiqrskPVTFVyyKSa63E5rYY5ZVLLnCqYKROR3pwVHQshni6SXlm/3kolBiVaNy51lmBiVRU2Bj7Bt5//CZ+YRcV+TG5oRSyREBTe4kqMBcmrMIPSolLBZOOjn4KPTjPi3VMQsK0OcuRjauYQlhJocjTg9KJj0dBUDiuXhq540DF7GS544Dw88fpzqGutw6qV52DW5OlQFSeyVgIb1m/A5g2b4HQ7Cd1gcA6Swx772dxYeg5YUPljtncAyJ8vFCZRFNDSGyH5CsmNQ2WyEMcSAV6hMNt1VVdVocBfINr6fFtB3gMSOQ0RFiBKf4b8uBUg3SMBDOZVf4VDkQ3g2bsQ1BixgIptc97SPgFt0ybz9CTPEqQH5BV9YUuWpwSNJyJKFrTNJ9oEQezhF29XNNQaCWxQeAiwwMk43iEozfmpgD2z5IqIgl5cjGSgItoLSoBMncrlMBYMchKgimZsLJiNRmMZVVP1Z579ndY/3IeOilbcddjVeH/fhwHjxNqzz60/cv7OJzfeNG3pLPg8MgJ7OrF3K9nZx5CWyXYli1A6hIgZxWBuNPlK14b708PWjZ3opFXFL9zX32oBDv6Z/duCUlZWphKDKhAI8Jttbm6W9+3bRyQIxgM0TZumyuoLq1Z9pfzqb32bxz99g0Ooq6vDXffchS2vBqyrL1kuVZRJePI/30XXzlHT73BKbl2HV9clryabDo1FLCWH5pA0csXRZDiyslVU5ZWaF1WbJdUFUipsWtkhyIFszvrda69YlVaR7HCq0C0N09rq0NRRgauevgsvrF/Ll8fk1gnwe3wIhYIoqyhFOpNDIhlCZWkNBwYh8nTy80owre4q5DpK1GC6MGn8ZiFgRNDib8MZnsPR0FgHU07DZbnRMXMh7nr5Fnz/Vz9F2/QJWLpwEY5ZfhSfbBQTAyNjePvl1/m5XXRC06xeI049Hat0cpFlOJF/xSnHZS7lCBVsvkmS3yY79tr6RXzFG8KUh1qTRBzhSBSV5eUoLS7NL/CNC3RQOIrTX/jz8UiNUH779M+Dd/SCqPKgZMHWXvaokJ6VjTqYCmSyKnHb1MmoqW/gZR8u+ccxA/t+lFjsaQJfKBZr/vP9xzWFqU2xjxKu6m0ikJAztzkmwj+JH0t4KNhbg0wXOLBNyBUU5R+ZpE9pwmKbxWQzCATGWC6Nktvo6GgumUxmBgLDrid+/aREBqsrJx+PCyedjJfjG95oKm3MtIXKjqnvaEW5z42Bvdux81OSp0sAuoW4mUYgM4yEnMCfBzcP7Y73twwNDcW/cJFvv+B/KAFUV1driURCD4VCss/n4wMoGo3SrzBfAVgOOKoUt/L4kqVLDr3pBzejvq4emz75BLMPmYZ1G97GDVfcj/OPOQHHfqkGq3+1Eev/vAOKpNPpL3lcTngUh+WWKehpfs2CHzJp9agKaQdoqGkrsVrmVcNX6IMZc0ivvbnWTISjkpJwS/Fkltb3pdJSPw47cjK6h7pw8q3XIJSIswXVlNYJ3ApkshY0uiBTcdTUVEHVnRyUBGTRTJkuZjpFGJqj8ROd2IqJ0VwUNXo5zig4CQ2tTdClFHTJgUmHHIrfffAcvvbTq1DZUomFcxfilJNPYnUf3jJUJHy6YSM2vr8ROtl9KxpnSzL+FBt8EucZk8aQ9ukreDDE988hGo3YnHkhoU2aAVyxwICuOBBPxjE4MILSilJUVFQILz5b/4/GiIQBMIFGVRhQFJW9qAi4vLd3AbicVxXiQ4mqYJz/TwmBRqgicdCOkbfQj0nTp6GwpEiAewdVDlzk2xp/eeER+hxI1IMITLZFkB3ANiaQdynOD/vGE4CNe9hVAVVneXVisYhkswPEiiO/N3JR4vGqLUmWSKYQDAWZl0KZKBgMZeLJhPn62recW7dtRW1FNa6dsQolkstY2/mhdfSk5WprYzvK/F4M7d2NXdt6MBwL8ZQnYsUQl6PYGtub/HPvlq/2j/T/+osa/Hnc5W+9fi79ly5dKtkYAOHUDvrX5XIp7AN/gEzEn67D4fDpuv7A4kWLDr/mmm9aVbX1UiAwivqaKoRTYZx7+mVYPuEIXHbFLLz1+mbzt4+/L+cSllXo1OBUnZbHpVkuRVNcspNdepyKA4pOMv2K5FTccLt1tM6swKQjJmL3vj3Ysq4TEzz1GA7F0T8Q4K09tyqjfVoDZs9rwgN/+B2+8+QDfAJ5/W5MamxBMplBOpFiYktNVRWcPrdYveUvIsAQes7b5Rw0IhkoCBgjqPDU4eyiE9Fe3gBFTUCWPJgwYzK29G7H4T84FZIu4cjlR+Dcc8+Dg5ZhyEDToSIwGMCa1/6MYGAUTo9HMPAoMJkReBCmyqc0JQ57rdc0WfWHlmBov59bAbrI2WJLgaYSryGGnv09cPk8qKupFac3I2b0WDawR20An/ii/xdLdmTzZZ/YlOyo7ZEpARxwK6aKSGEAURCGSEeRXX0sE4QHNHdMgu5w2Dv7dvnP1UAeDBRJjYI2lUwJz4A8rMyVgc1NsPt+rk/yLUB+p8GujsT0QKw85w1H86NVrmryDEJOAqJlEeQJIJ5KYnRslFs8SkrRSDi3r7dHfvGVl+V4NolDyyfjtsVXoH9skMd7s9vm8Ph4aF8nduzcj9FUEJZTRkbLWLtindk/7Hv7gc7R/m/mW98vahL4u1MAe9xH74/UGTSfz+fM5XLOZDLJ39vYgD245UpA13X9liWHL/nyJZd8A7W1NJrS4XS7EQ6P4VvXfgc1xlR875rDERgdMB76yRplqD9oeh0Oya06LJ9L/N+lOCxFJQRAklVVsZzEEtDcllOC1NjUhOo5hehN7EWTtx7JLgnBWBw9A2MYHQ3BMrMoKXJh/rIOOIaLQgIAACAASURBVHwOrPzR1Xhv9x4+leorylFaVoyx0Rhy6SQqa6rh83h5tsvoP52r+QuMtbpNWIoCzZCQkOLQLA0nFC1FR9MClDqS0AwZNVOnwYil0HLtfKb5Lli2ABesOg8+lw850gDQFGiShU83bcb7a9+Dw+mFTA7AvPVHLTEL74v/k9YPg1mir6XbkNAqS5fmy3g7OdBJyttwyRi6O7vhcOiora1l5WAOcnssx788IgPlg5ITACUQKpnFY+SXd4ShiFjzpWkJ3Y7NR2xAkO3L6TOhfSlVRk1zE2rq68eDnB+PPRbs129PEyhwk8k0JwCx4msP/5gLQeeK+OxF6S9O6oNbgXz/nx8a2mRBUU3kdwaYNCVMWem90ro3V0zMwTB5hXh0bIwrAYVGyuGQ8fb6dera99aDPBHPn/xlHFs9F5v6t2JGw3S0lDWgv3sA23fuQjAXgl7gwJgxht/teeO1Pd2frhgBvvArwX8vAcinnXaatHr16nwC0D0ej9swDE8qlXJqmuZyOp2OaDRqd3ni9+5yeS6bdsiUc6+44mpMnNRmFZcUSWSYOTYSwMtvvoZ3n/sEN1yxCrUNEh574G1r60f7YRkatwGUCFyEB6gO6A4NLmaxAQ6ZnHB16FBQVz0ZY44+lLdrmDmxA5HOFEK9CcSyBvbv78ZYNAZdkVHf6MfcYyZjy9adWHnX9RhNJnnHfXJzG3sCRkMhHhF6/dSXk7mG4J9bZMyZzQI6YQM0FlQYhc/Eo5AKdBxXdhQO806G4rDgcCiontKOcqUGlVe0IpJKYtb8Q/DVVatQV1GFdEoIeDqcToSDAbz5+lsY6h2Cz+PgEMjRKc4DAQlyzkKOlpCoFVAJDBPYKwmBCI6/oL3Klsw7FtxPW8TZz6KnuwdSzkB9SzNUTdiL88SMpgAUyESwZoghf0oL5yAOcCbwiGOZwUIC04jjYyeHcXIPqSaRXh8/BgVojt9XI41ay0vHA4/j29YdzMuS00mfSKQYE2IBH1vlh7f7GP/LOwyJHQk+vDlwxcqwKJLys0CbQCXmlaKKsqcDTKKybdnppKckxaQpfixackpgeHiEEwN5KXT1duGZZ59FNBlHW0k9bpx7GQosDaYuo6W8FaODo9jbvQdJ8l3Wcnitb333J4FdZ23p37v+i3rqH/y6/2YCOO200xSb7EO3y5/4HgCFAAqI+AfApSiKzqWdra3jdLqPam6tu+jHP/531NRWwe3zWl37OqXuzh6EomP48Z2/xDWnXYplRxbh5ec+xNo3tlvxUFZycuBL8OoeEDhDiztuXqbRmMOvSxbcjgIUltdh656NWLZsNmYe1ohM1MDIvgTS4SyGwkH0dg8hEUtBdcuYuaAZs+dOxD2PP4Ebf/Mgn6TFBX401tYjHEpA12QUl/pgGsSBJeBI4WU6QuNNUiin5pwaAJLyljNIIYVlRfNxVN3x0N2UI3KoaG5Arb8ec+5Yhi27dqBpUiMuPv8iTGxsQzZD0mYOduOVHQo+3bQJG959X4h6kB25JYFSHOGN1Ndzic0TAZXHgXRxc7CTKQhHC9F7DZocwjAsYR4qy+jp6UE6nUJzQxN0t4uDRZzeXNOQqyKz9/IA37gQiH1ii4RBp7vdFihUGRAGQvZjYrQnsAQbO+BqhJaGcvAWFaKhrQVuj28cyMsv/nAasheGqAIg+zKBEQikX2z75M91kfT4O952FDyzAyPBfF1h/71dR/BDcNI4iDTEK9SiQOCxZF5fkAxI43GMDI9A0zQ4nQ787sUXsGHjRniLfVhePhvXzjmPN8ILPYVIhBNk6GKZqiW92L8u/uHQxwvf37/143+G4P88GABXACMjI9KaNWvoUqIk4PZ6vWVEv4vFYkUA/JQEADjtn0uark0uLi4+5xePPKIefdTR2LZ7GwiICQyNIBwN4eab78KS5uW49LzZ1qbtu/D6S9ukwACZVJpwkfGF5IKbnHF1nZ1uaDfAqehQrSxK/HWwnC58sn8dFrcfitnHtaKosgCJniyC3TFGmnv6RjAwNoxcBigpcWL5KdPgVp046cZr8e6+T/gibq6pgdftQzwchafIC7/ThxyBa9QysmCeoMbm7XB5P1DKYSQZxWGVi3BK3fFwqxJcThNlTfWoLW3GWQ+di9+vew2+ikJceenlmD1tBrJJE6ZqQjdUaC4nIsEA1vx5Dfp6e+AhUhKlViqZeZnUQlYxoVtE4yXhD+rLBQNQJt0Au/c2DdIPMNgpiJSHCNEcHQmQRBaa6pvgK/DzZ8nAH6sI2Se7QtMV0ZPTEpXY5RcEnvEpgUxr0HQ/URlQQuQEYFcK9HeiCrB/xlhJDkWVZahpriewVnxmgnv8GelvWlsWVu5i5DduIc6Htp0ImIQlziU+zUkINU8KstsK0Q5wuB8Iehs0zXsZfmaSwEnLxg94A9NkynAwOAaP04W+oUE8/vRTGIuGUVFYjO/MPB9HNM0HuzNnZfSMDGLjyGb8fPsLL6iF6qlbt24lssg/xdff4gGMv8GlS5cqa9asYR6A3+93RSKRYgA1iqJUG4ZByYCSgNdOArqqqmVOt+uIH/zg+4WXX/p1fLT5Q97Ucro9GBocwq0/ugO5QQfuvP4iJLIDeO25zRjoCyIVzTHx3qNoNBJkgRBNURnocik6894bKqdgLBJANDWIZn89miaXYfKSRkiGjEhXDuGhCCKpGHp6hxCNihatZXIFlh4/C8+/8TbO+fGN3O/TXLutsZlXXnOpLEoriqDRTNlebhFlJXuG2WIWdK3lEDQSmFM0E+c1nUE1AhyOFMrrq1BX34HvP3MT7nz5QWgODZd943IsnrcYOTIAUU3GolTZBdUhYfumrfhwwwa2EHdKMi+S89oxtToEimmk+StYdcJFmDRKSCsgL+8tfjV0sdN8ndZtY7EIIqEIKiurUFRQyAlEUHuF1ZEmEQZAgS0kwsSOAAW+APwEOKhwMqJg53GgPSUQJCG6r8L0Wr6vnUCoqhAbRxaqmmpRXF42TtChKM0zCum1J5Jx5MiI9ACxVJzh45p/wj6cZdrsBaj8vkS+x7Spg/ZA1MYJ8gnDllbLB7+oIASYSrgEVTfUCohlLEtYqGcziMXjeOGPr2DLth1QvApm+ifh5sO+zhJsPtVnbez8ULrl7QexPxX4DzObvZr0Sf8pov8gBP8v308epcknCO7qKAEUFxc7E4lEcSqVqgPQKMtyo2malASoHaC2wK8ois/pdLatPOvMwtPPOQOqQmaVOqqqahEKjeGxJ5/FY/f/AndedR1aJmp489VPsG/HEJIJA/FIEh5Jg1NX4XSo0A0XdF3mlVY1k0N99QxsHvoE/iYDtYlyVEtlmLikDjWTKpEYTSHSnUQ8lMZoNIK+3n7e/KOTd9Fx7Whtb8C/3XUP7luzmvvOYkchGusrQZx7en0+KmHzasCKEPCQTFWIeagKspKBkBnFTE8rTm1dBY+cg88ho6SmDi0NLXh6za/xlUev4dN01SXn44QjjuDdfcYTVAWKoUBxaKRoi7deW4Pe/d0g115a6yWknWJJiGdSkGkwrRSQJdRfjAOtrC3bRdKh9hIRUWeFpJfJHHiP28lbgfxzXskVoUOLP2SDLAJX4AAqJxl7/dem/BJXn4KWVn4F1ZfIQqLv5/sfzBMYxwg01gvQ3Rqqmmvh8fvsdl0sJbEqkQnEEsRYJAITYQx2C8Czf5tEYq/9chtgD0aEqpDgU/CSkL1GLQ5/WySVoSfiFFB7dMAWXQgH2fgAr1zbsmKcZYQnIbUkqWQCH2/dgt8895ygMqvATXMuQa2nzHp66yt4v/tTI+EwN4XDwZ9kMhmSFhd9zD/B198DAccTgA0GchvgdrsLs9lsjWmarYZhtMuy3GCaJlUFJQCKJEnyaJpadsRRR7i/dv75KC0rh5nLYMrU6SzN9dwLr+Pyi76CC4/5ClaeOQ+bP9mOjev2IJPMIRbOwkgbcCsynDQ9kFxwcF+qQVcU1Hub8Eb0XXgXGQh/kMCy3Gw0NFbhkGPa4Cl2IbIvgWRfCqFsGgNDAQyPjCKZM1BW5cbRZxwKBEwcfcM38NHQTi4122vr4ff6MRoJ0SYjW3FlrSwUop9wD0x9qeDDUy8eRBjTymZgZfVJ8Bk0hpNQ0VqF1ont+GjzJiy47SQ+4U4791R8+fiTuffPSeT5R/03XYxZ+HwF+Hjjx/ho4wewTAU6mZRSyW6f9GJvz7b3JmowSYVREBFLkcyLqfwnpaEMiZxmkLXScKlk8Gmw7mFZeak42Q1C8kQCoLEY/8u7+6K852SQTwj57+2fjZf5VD7Tfi1oUYt+D6rtrGz7DFJi4GpBZT6Av8iPysZqqDotJdmvm6YaOZPHlcKgVMzp85MA3lnIVwIcm2IawnN+IavKoWbHvB28Qh6NKh1eq+bb0gSA2iOxQkz6D3QvZgay0rIwf6FJDSdHW5fQoUoYGg3gV888g91790EvcmBaUTszBG9/4z+s9bFtf/zxT+67/twzz/zonyDmP/MW/l4CoBvnty7oz3Q5yV6v15fJZMozmUwjgBkA2gFUASi3AUK3qmmeOYce4rrwwkt5NBVPRDG5YzLSuSxeemE9brrhKsxuX4Abr1qFSKgHb7+5i08wZBSEQ0moWQluTYVTc8EpO2zPPB98zgr0uPeh7Tg/7n54Nb6sLMf80nY0HlqJSfMbIUUtRLoyCI1mEIpG0DMygHA4DjNroH1hPZYdOQfPP/sqVj3wQ8SsJPwOD9qbJyCZpmCKodBfyH032XBBzkK1aJ4swdLo5LIwnItjkqceX6s7FV5nPWRpAI0TG1DX2o6h/YNovm4BV8RLj1mC804/GwUeHzvvUj+f5VPZhMPlYMnt9W+8g8GeQcg0BiAQgIObF/h5zk8jSPqWyD7cExtZXpGl05lDgvOGgZGRUXYTcrk0pOMpnmw4PS57oiEITjx2zPP+80HOvb5YQiJJNAL5KHEwHmCf7uLUpzhSoGpCI4D6e64EeI9ajBJlWi3mF2mhpLocRRVFtmYIiazQCnGW5bvEopKYHufXAohuzWw/wWDm/5M8g6D/5peG7JOchU7zi5AGb0VywIutIiGgQo/GtmyiAhDLheJ2nEh4NCgqPPo/0cMJsnjp1dfw/MsvoaqyAuFMHPcs+hYqMz5saOi9/Zb77rzu86gG/7UEcbB69v+mJPK5MAD7BYuZFKAUFha6QqFQodPprEulUtMBTKV2AEA1gFICCjVN12vqqp2XXHopDjnkEB6/0ElL7rhvvbUFP/rRd+FTC3HzFdegpjqHjWt3o6tzlC+LTJzEHVJwmDI8mhO64oRiZOHWi+FzlqEztRcnX9uBHz76K5waW4EvNc9Hl9KJllllKK7yIzJoIjWUQnQkjb54ACOBEcRiafg8Tiz80iS01LXiujvvxkNvP8c9f2l5GcoqSzE8NAi3psBT4OOxFO0RME2YSWZZyIqOcHYMNf4OrKg+CnW+OujZETRObUNVTTOSw2G037MY0cEYJk/vwGWXXIqqslIk4iSJlQUIdbbdedxeN3Zs3YUP1qxDlthxqsy9ftrIQeWVYVLxEe6+Dt3FJ79hpFmwVNZU6JqTgUp6faSGQ+IhjJ9bBooKSuBwarbeoTiFFVVj4I9PfyrpFZo+CO8z7vkpsFUCB0UwMMhHVuO2GxCV8tT/89hNkaFTaU++CrSZYO/855mDsqagvLYS3kKfmPtzqZ1ikJKjlEcT9vqwWAawA51GsPZikB3k5NkoVENt3TQO7gPEKbY9t0eirKXAKsb2xHCcA0DirEK3U9xXTBbEyFBUFyQQu3X7djzxzFOcsCWnjPk1U3HPvGuwZuyjva1fnbPymGNOfP9/U/D+//FaPm8CyN+OEsDB48Ayl8s1OZlMTgEwAUCTXQn4VFXVnS6X85prrpZWnnM2sukUSTUhEBjB1p0D+OUvHkD3vt248qxvYsm8Ouzr3Ivd20aRiGR5NBcKRCAlZei6A7pFF6UFn1IEl1aArpEdWPC1Kdg89gm09cW4c+kPMRDZgz7XfjTOKIdT9yI1mECkO43+sRAGg8OIJhK8FFLXXIpjTj8M6aEsTv3+N7CxfxuTyGuqm+HWDITCo3C7vXB5vOwkxBlCFTp7MglPZuIodJRjVdUx6PC3IZ2OoHpOCyrL6qBEDSz95Rn45NMtqJ/cgG9e/E3UlpUjk0uTMBdkXYFsmKDldBoJSuks1vxxDXr37ofq8lAO4Ofgkp34AbQTwXNu4ZJDbLx0Js3AH53wZPZB4B55HQQDIa6uCCsoLSkXJzWfzqKMpqBUaRRI5Tz39tQCCLIMkZBUog4TgUihZJDnBtjTAXv0lycJ5dWCxMnPIAInDVXTee5OrYruVFFWX8mVBX3u5FpEEwDu/flwp/dF1YS4jEWVL7QH2MqcywCxHiXE0cVfcWyzCzIvGgi7NA70vHQ6Aa5C4JSCnhKiyfZLQouR+QKcMIQCk4ADTLhdTnR19+Dxp3+Frp4eVNdV8S3uO/pGNJpFuPGjhx792XO/vLqpqSn03wXe/9YT/u8lic/TAnAbMGvWLOXDDz+UGhsb5Xg8ro6MjDgcDkdxOp2uBTAJwGQ7CTQQGCjLsluWVc9FF18g333X3QhFooiEx7Bv/17s2jOA1aufxfp3XsVxi07FBScfjlhyEPt3jKK7PwCHpXNvFw4keUaum6QQlINTLkVK8yMxtB+NE6qQmR3B6uf/hJvar8QZcy7EW1tfQ/G0DJrb65GNZJHozyDQFcP+4QCCcVEmU0++6PB2NB8+H39++tdY+cD3EczEGG+Y0tSMZDqDeDKJkpJiqA7aEciymhfFpaQD0XQSmqzhrIbjMLVqHuRgAE2HTkChvxJ+xYNT/vNi/HH9q/BWeHHdt65DC4kfaCScI7QFTVrtJTRaAvsSdO/txbo31/FFSZRhIuFwB2xvzPKHzzN6UXob6RRILszj8bCzMK0+R4JhYTmeIx1GA8XFpbaoB534dJkLCjEHKDUEvAEokHwm/XCSoWRAtxNa/1QhEO5C+YJOemEtJgBBwhIISKSTn6sJIhvRazMMJJIJVinOJJLwlxSgqqVRBFvOYIYiA4qcgwRVOT8TyDP/RJQT1iG4/cx7FssNfFuO33yZz7FMFQG1AoLym08GXPazGphoE/I/I/IS1wC2vwCzHmW2GsPWLVvx2ltr0DvQx8xAIv8c274YDy3/Ae544afJ2nNmzL7kiiu2/WVQfVGDP59UP0+SkEgTYM2aNfn7UBVAjSmN/mgCQKd/h50IWvNtgK47CpYsXaT99Kc/4+07l4uWemRs+mgffvbAg3jnjT+gtqoBN17wbRQUxNDdPYyezgASsSycLh2JSAbJUJoDTqce112CNLyIB/ejWi2Cc5obbyfX4tP1Xbh8yrkokYoxrakSzUvrUOh1Ih0wEOxOon9PGN2RIaRzMeQMoLrQh8PPmA/F48DF11+HJz56mS/uUr8HjZUNCIRDcGgKCor9MJggZMt2aeALHH4fzq0+DjN8bawx0LKwHW6tDKX+Slz1zPV46JWHoDo0fO+G76GjbSIz+yiR0PCY3j+5AxOy71JVPqXWvvkeBrt7IDttMU0JPP4UvHvBACS6LAdb1kDaysLp0DjQxkZGkTVMFBcXIh6PIZc0eduRFHK5R2fRTYs/Qwp2Dlpbypu+F3N+UY5TRcHPQeNB3j60EwJVCOSrwGNAqhxYy5e1DLJGike8mVSWEfVMJsvLVoaVgWIZqGttQ3lDNQcycw64YqD9AgFMkgaDYCfaZ5FtW5Y/8gX3X2giMqJPisj2+c0nvd0C8Gkv5P84IdC0gQlGRKSyPRiEv4JoJyjwKVkQeWq4fwjDQwMIDI/i07070Tc8xK/PVeRDscuLh46/BY1KKa5df+8fUO9bsXr1Z81A8gngi5gIPk8FkAcBD9YAUGkcODY2RkmARn80EqQkMM2uBAgQ9Kmq5q+sqvLecdePUVNbi0KfE2UlRRgezeI3Tz+HO+64jhdJrlhxNebOqsHw6H70doYxOhJnKi9dmJHRBIykBSVncs9Nu4eBYC9KLQ9KSyox0hrAEx+sRnBPDDMrpuOaqSvRMbMRVVOL2HQjETAwtCeIwb5RjCTGkDGz0AwFEyaVY9Zxc7Dt3Y9w2K0XIZnL0HAKrbV1bLUVHAvAV1gMr8uFDPXijKQryOZMDFtJfKXiaCyrm4ukYaB2Rg2K9BJUF0/AXb+9A997/jYOtquuvQYLph+CbNZCxkhCUx3iZBfC/P+Pu/cAt+0sy0XfMeeos7fV2+41vVdCKBEREIIEpIlKCcVjweuxHRGvohfLeQTxHrgKKnqOckEeIAiIOSYhjSQ7ZSfZ2X31PteavYxZxrjP+/1j7Cy2aRuD5a4869kra80515xzje/7v/IW6abijoFTJ2dx6J570W7VYdpJRWsNenBB27EQllWgKs3bnTbqlAurtkT9Jp9LwjAdcQnioG58bBSaZyr2nwhuUkHdBPWWxRqdDQlx8gGXQE3xpTaQKX+Ua0kZGmqBbiA9zZQrMUE/DHIKfHB4p2mmYA1Ytou7kvTU4UquB92wsW3/bqTzVCxW3oBKmUgNEtU6IFAPOnMUMUhlRKdOfAFACg5SnfhsFMRtOVBMFqivuAOrib9UCdwQqJJf/FjZB7CNEyyAj3a7LeCpleVFCogG4iYRHD55FKcXZ0W0hVshz9Lwvktuxm9cfit+7/b/gc2dOPjJz336X1QBz3eK/kf9+bkkAOoAkhfgB+0AqwAzqAK4/mMrwARwcTALyESjUQ4Kcx98/4eir/rhVwvskmWrbqZQrtTxoz96E2r1Em649Ifw/le/ESXvpJT9a8s1tJsd6DETftNHbaMtbrXjsQEpzzeaVaStBEaNLLbt3IG/qHwZt991N5KpND6y5924cHwPBi/JYHg8jz7XT8suFo5tYnW9iLJXFa59XLdx4MpJ7Nw/iD/83N/go9/4jJSJccPArm07UO804bVZTmfQDehrjBle6EtuEe/a925cMXwB0HWx98CE9Ovbk/vw93f/Ld7yVx+Sk/Un3/MOvPTalymSUTQCi4M8YfIpgkqUPb6ESxT3fuceTE+fgGk5pEGLdp5C5yntPTUpU/DbSrWOjbUibDOKdDYLy7QkISwuLUtbMTE5JutLNaXnY3FYaMI0+fuUfJY67VXAy8pPyn1+j5cEtQZoS94DSyYqE3k91QqJKnEgMS44KZ14DQsG2xdlHSIJh0NFYieimoF4KovR3RMybReOQCAZFnL4A1pQMP1nggzN0oKhnSSAwDxMgvrp4JbJ/5kWgMHOZMTengYqYYJQNGauA8hbqWyWsb62CmopcnXKREK6eLPTwUOHH8HKRlFVREZU4ME7E8P4k1f9N/hND5+e+eIdb/ml977yxhtvFCzAf+bT//lagO9JDmQFhlksIAfx/5kACAEmCIjTf84CwrXgsKZpTABjN1x3g/2hn/mA2FcRZTE3t4TxiUm89cdvwcmTT2FkeAd++Q3vwcBQD0vlTVQ2WqhV6vB6mthdtSp9VDdLGImPwe0ZWC9OI2+mZah1IL8LR7oz+MSjn4WZcPAru38aB+PbYY9a2HfBGOK5OPwOUDrVwPL8BhbLq6h7Deg9E5mMiYteukMIRu/649/EP598RMrTbDKJsYFh1KolmLEUkqmEiPgoAZs2avDxyqGX4rXD18hJOXTBMGzNwLi3HXdM34vX/I+3y0n1ozf/CF73qtciZaXBTiKU9+aAr0csSV9JbCSScSzML+G+u+5Gr+eq4R9LbPLapQxXuiR9wln7nkhd9TpdFPJ52IaNcrUia07aX9HabGxkWAl/8jOA3VJbkUlADfIU4Uft93mqqpOTpySRcS7hxWeEOVms8MkrsRQ5r0VlKIooZwrUbSRJy7Tl8XSTFQGkwiAvX1GPo0jksyiMDT6t6ycehWqsp1DAIa8/RAeoQObaVNyUxC1RTe1l9ReqIvNrSQ4qaZ1ZC0rXoPABMk8qlbBZXEdpYx21WkPZtLO6CkBHfA3zK8t48PGH0XZdpa2o+YgnE8IR+dVL3483HfxhfPwfPukO/tj57/nVX//Vz29NAP9RT/jne17PVQEoqIaUbTJy3YoKDJMHjyYmAH4SDsxWgCtBbgU4DBxw7PjUyPBQ7uc+/GHccMP1iMdiOH5iDp22hw//4gdw+tQp6LaNd730bXjzdTfiSO0Q6pUeSuUWWnUXlqyidFQ2ajCRQt0FapsLGDAzcHRiBNTU+q7qCRjo4nXD1yEWcWAbJsZ25TE+OgYrEUW33cX6bAuLq8tYbmzIUIr02+HJFC69dg9OHJ3DGz/9K6i2a3JK7eD9TB31eh2ZdA52Ki4nIHwXVc/FPnsv3rn7DcjELAztyyIWK2CwlseRxmm8/E9vRmujhcuvvwI//ZafQC6ZQpux1qG0Fntt+g5wLqDeVgqE6KaOB++9D/PzM/J6uVcXME+g4Ct2ZdQm7PfRrrcQixuwbAe1ShVdty8qPatrSzIomxgbUaQmsRVSQJ4oSVUCa6bbEE/QjoCJ/C5XlEp2j0FE4pXMAALOgGwGlACBeu4GORo2DMOSU1Nnu8Dnz2DnKpOmHcLHVxgDmS4QValFkR4uyGBQpMRC7f+g9w/tw88Qgyj8EbgkMUFJby9BrwZ48nW/L27LIeW33++dYRAyWXCdV94oobi+KZqMnN/wNtI6qHojmD8AM4sLOHTkcbTaLeQyBeQHBlHcXEfPdeEbfdw4eDl++SUfwvHF4/iLua/8+T8+dNe7z+75//82AwgDXlVoT39snQmEa0FWAmQJch7AWQCTwB4mBNO0d9qmMfm2d74j8oFbPyQKrvVWT5RyP/OZT+KRhx8Q7Pv5ExfiY7f8VzSTSzi6eAzdloZW1YXb6SNmWug022jXDZTbfbRKcyjoeTh6TIZaJggYMmBHyIwzYUZ1JCIm0kkHw5MjUsbHEyboVlQqNbBWa6LFJFyw3wAAIABJREFUEt/jJLyLqb05ZNNJfPL//Rt84s4vSp/L/vjATm4FmlKJJPI5WES3uR0sd2s4mNmHd+x7G3KWjsE9KWRSA0iXEih5Ll7xuTdh9vgp7Nm/H7/wXz6EbCyNNp1xlOpY0POqi0+p8qhTtFIq45477kCHjjzEPgRCGqr37Uph3HGpxqshEY+j43bktJKVoR5BtaqSQWEwJwGn+mauythydOR0J1JQJurCPBT8nAQtqww1EAy1ADQYhmoPLCMmX/M5qkEiMQKWbAbEWkAgxoQyB6+HcFoJeuVHcIZwZBnIDuVAR2ilCq56faXkE8B/RQN9CxEooAaztA8PJLZPatqvMAECngq8ErgmbTcbqG6Usb66LEFP0JW0BCRZCbIzYH36vhjFnpw7hdPz85JEJyZ3yGMvL83J2prI1YjRx96hXfjVyz6AtJnCp77zmforf/aNb37fBz/4DTkJ1QH5n/LjhcwAzn5hWugMzOrglltuoT9AuBVgJRCuBYkO3KVp0R2mET3/iiuvjH38438gF48Ty+I7d9+Lz37uU3jkkUdVmWvY+MjNv4BXXXYV/nHuH9CuddFrA61mWy4SywJ6zQhWNn2Ul+cwoKfgRBMwohpMahFzcm5asDVb2HQ0/Ejnkth38TDGRoYQt+OIJDVJNq2WB5dlY8eH1/FgRYH0iAN/HXjsiadw6Pjj+Pi3P40Fr4LzduxCqVISFZ8ELcWjFpaa6xj0C/jwwbcjn8ogu28IicEC4isaUkMDeNUn3ox7Hr0XAyMFfPQ3fht5Jy7moqFeP09lOg+xv5a9u23K1oFyYY889DBOHzsmyaLLRqHTEvfgXqcjWvdu14VppzE4MCQ9vliviRNmwKGXU5InvOqNCQdWsaOou4Krp0yZ5slmQPT+ZCgYETCMRgYcrVlM8jFsmf6zbRBuAL+Wk10BpHjqy7pQJ67AFHyPVC2sGpRNUCAKqoxWBU5s26A9l3gHngEDK/EQeZbBjl5wetKGKN7DmdM/QPRJ2S8oQQ5YPbSbLhqVKsqbZenxiT2gmDvnGEQhCkBIfgMBVj35m56an8XphRlJCmNjE/L3rZY2sbK6JBsVPqdYzBF9QWpIfGDPuzBoDeCR5Ye8r8zc8Xf3n3zkHZqm9f8znvxhUD9TAgjxFi80o/H2PNf4SVowZwEs/3cEEOHdpmlfmkqnxj7ykY/iwP6DopH/yMOP4ROf/O84efqozAU4zX7J+S/B/33Lf8Pj7UdxbO0otG4U7TaHOQwWF3Erg5WVFhYXZ5FFHHZUBbvFEhQGqB4YJYsQUSmr914whitvvBB23wJcBpgjFzidftou0OQgjqdpVIeZ0uF3ffjlPnobdXzniXvwG3d8HHPuhmgQ0IY6nc1JO/DY9BO45ar34PXDV8LSoyiMx5AdGkR0oYex0f147R/fjG8e/ifE4jF85KMfxWgqC81Q03fBuDM2PD6HrsiN03+PcF8nbmBjjWYiX0GrUkGEtkSB2GZUsyjBI6e0TaCSHZOTW3gCoWGG2nzJha6Qb3zfAhosyEcITE9FY4AB0RfxEPIf2LPrJk91UzD/ggoMMANsIVjuEw8gCYtOQ3w1PPHDVWLAGRDuvSQJNcBkG6DUjAK7Mg2IJ5PI5HJBKR5cZhL44eghgPGKXRqNUAP0XqAUzNZJthFk8pUrUjm16nU0600ZWJK74XnUUvI1nv5MIqQbd7otrG+s4fTCPGaWl+FSEWpoBAODIzJXIVGtVFyX1sEwTNgGKyINlVYdLz3vavz0pT+JZCyJpbnjuG/6ofb4j1z8gd/+7d/6XPAKtlbM5xpDLzTWXvTbfT8VwDM9CcF2BRJhnAUMA5gMEsA+wzAP6tHopT900yusN77p7RgZGcTCwjp+9/c+htPTT8HQHbidFjLZPH7/db+Oqw/swVfmvoFOqyu8q6bbQ7fdQTaZRanaxqlTp5DsxWH5lhIhoOAGp9laBFQTQi+CZMbBD998CbZt247eCQOGkUTUduAnDEQcH1QP9bgmM4GIzYtbse7gduFXWvDXXNz33dvxkTv/GIcrC3CijlxI23fux3cfvh8/du378KaJa5CwbAyM60gNDcKf9zE5tB+3/tUH8dn7Pw+6HP/sL/0CDkztUqajAXCFPHNlbNEXmDC5B5ZjQ+P+vNfGow8/iIcfug+ZeAqmHYcVS8iQjYHHAWEom6X4/oqoJEVwYDUmZanImyntPiIHlZimKI2ILDm5DhySsbQnCk4NHtW+P0T48T3l0+TPtgKCmCSkbCfWQDgA7P2JJAw8BuTkV8hFJo3QGZVoxkB9HalsRsBMTIDkCrAqkQpA0H8BAUjMUwIOgHgj9iQ4280W6qUqGtWyYCG4yyfUuh/IuPPAEKtH4gF6Hly3g/nVVZycPYGl4prgAvKZggyleZvi2iqKpXV0Wm1pFzjXiMVsGIFa9GazhrcfeB1+5MArAF1HN9LD8enDONyYPvErn/ydq6+88sqNs5i1/2laghclAWwpgfh4jEkKhRALsJObgUgksjMRT78q5pgDb7z5Frz+5jfi2PFj+M2P/gaazaasoFjiUjjjDRe9Ab9700/jgc5hPLF2DI5mwSX4penCNhJwvT5OT08j1qBAiAHd5QSafHcqBkVhagb8qIadBwp45Q9dCW/GRmIzj3ghDi2uQYvrAHHydgRRTi1sA0iZ9A2XQZdnAX6jDyw10T4yh499+VP4xKG/RnaoAL/tI5Ur4DTXdf04fvOqW3HF7ssQmzSQHxtGe66LqfgO/O4df4Tf/ubHEYkYeM+t78b1l14lwzgO5YRXQ96vDMF08U1ouq6syLrdplx0jVoD9915p8B+4/GC2sUHgB5BCgfrO24G2Mcrjj+TWB9ajyewkhVnwqG+oaLQMvjV9F5aAKoPyI98WLYF23Kk3xeqsMwU1BqSVQfnLKIPIGu9UEOA/T5/v9rri/tQwBMQlKHwDEKAjzIqDRl//L1sMdKFHAzLFK0EMUcJwMDS6weCICzdyTLstjrSDjZLZbQbDdFJlL0/+f3cYAgGgG7OBP74aLkNlKXMn/OnFxa1leKqwDmHC0MYHh5F1LCwuDiPdSn3mwojEIGsqmMWExxtxvrSuu3N7sC7L7sFeTOL+GCa2vc4MXcER04+ge+sPH7H0FD6TXccOqR08v+TfbwoCeCs18zLj6FFejC3ApwF7HZs56WOY19q2Vb0zW95K1YXV/C1b34t0HFXfzTaR00NTuF3XvlL2Dc5gK+v3q7mZl5EsrwGC622h2JpCVpdR5+ooLYGW5RsqRqkw2T/akVx8LJxXDC+HcW7OxjIjCE/6sB0eohYBowkp+IReEkL0YwBLRGHlrDhEZ8f1+lvhkjDQ/+pEr7wPz+H99/2u+ilgMLQILpeBKvH56Hn0/iVy96Da7ZfgcKIjvS2EXgbPUxEJvH5R76EWz//81Ly3/xjt+ANr74JkY4GV0T9yKoLSnt28X1VjrOcJdnHsmNIxVN44skn8OSjT8AUfT/F+adSEVmFvD+Tpqzcyc9hYDIBcD/PyTaRfQFlzgsx9wGnXvDzkohUHyL8fC0Kx3Fkwi+Q4YB+LerAohTMXl+HIVwFbgkY24FysIgLK2px6BDEakeSggB8VBII8QGK2KMm8HY8Jm0V7y/9Pm9Hii779X4P7Y4Lt9GE22yiUWuCZEhmN07ymRRk+Be4DBPm3XLb2CwVsbC6jFPzM5hZWhDBVFY4tE0r5AdgWY6/urqizUyfFLaoQKAjGuIJCzGuMo2I7/d9rd3loraDC8fOwzsuuhl5vQA9byE/OozNE6so9cs4MfMk5lfmMNNa+9Z6r/3Ow6cOr/0HiP9zaj9elARwVgXA94AIQWIDhoIqYFckEjkvnU6/Dr6f4w6bFxRZoREYMsjyusrTjT58N5//GvzXG9+Oo92TeKpyCjHq6PvconmoVTw0WxVYfR3VNRfdegeGZ8GMRGBp1A5UUtmXXLMbk9YQTvzjEkYLAxgeyiKejEKzIjBiHmwnCsNhArAQidvQHAtaPAovkYIWp0hHHP5mHydvuwOv+9MP4Xh9DpP7phCPD+LIoQdhDRbw3676IC6YvBQDBRdDO7dB6+rIV1K4c/Zh3Pypt6Lf7eOVP3wT3v32d8L3XDTbfUTI2RfjCjp/0A+A5bICqhi2iWjUgh0hxr+Bu799Jxr1mvSjQp8VeK5Cs8lpyxOTwc8xKldwgp4jb19DjyW6KA4rsU2pOJQ0npiSMujFPUeGYxTINGUKTniuiIUI3VetEBmg7OvZEshqT7AECq+vjERVCR/i+2VNdAZUFCaAoEUJHImCQl/ky+g5yOqIrUonKPG7rRa6rouO6yoNAbYwAvcPhpqBZqAEfbmMxdU1nJ6fxYnZUyiWN2U2kUlnMDpMt6QscoUC5mdncOzEUzLd5wqRySzu6EjH4xSLlcCnDRu3MHyPbzhwHW45+COwu7YsuQvbJ9Hb7KA0u46OW8eCt4ni3EmsuGU8sHr00w+fPnLrv3MCOKfgl1bxrAFGWH39a18Ha1wOBNkKiHIQE4Ft2q+JJ5OXdbsueWii0MtA4AnHNQ+rALfXwlBqCP/Hde/Bxbt2457aw+h5bVlBcZVTrUSwUVpBIZ5CbbOHxnoN/QYfLSJrQCtiwUhouOiinRg3B/Dd255A1slg19g4nJSJmNOD5UQQtXU4tgUrqcOKGzCTNus/RBIWtFQOSGbgt6KoP3YKH/6zX8f/88RtSI0kUMhvw/SRx2E4MXz0+g/hkqGLkJjQMHJgD7RuBMmSjYXVFVz1R69Bp9vAVddfh//y3veJ1mCr0xZnYioSS90r0t066F9oOcQDmIr8wlNYj+D0U6fw+MOHFLgGIVKP1UPg9cfAN/gIAcNPdvbK209c+aQ8CJj3tPmiuIh8KyjNZYWuMPQk6lAlVwBCov4TlPr0ZQhw+0wCQikWUJPiDKiBn1odatRU5BkduPcIs1EO9iDzBOKg6qRXen8MtFiSYqJ9tBstdFwOfZkMlOze0xeoEgpjoqi3GmL5Nb+6jJOzszg5P4O1YlG4CKlMWoK+MFCQ+3Y6fdRrbSytLaG8uS4VTtyiGKsPJ2aAjlQyDu15AgfnxiCfGcCr978Ur5i6js7KfjehawPbhuFt9lFd2ECj0kLfbaKZ7GNm5QQqxSJO1FdW7pp59J1rlbVvP0/wbD10z54VnHMAP8vv+p7Hea4txQ8qAYQoQZKFWAUwAWxnFRCPx3/Mtuy8nE/C8SZLTq1o+pTF9lwBd7x025X48A1vw4ZVwvHmnIByOJ1uNDQsbxRR4MWKKFZmq2iX2hIEet9AnCeUY2ByahA7c6M4cucxdGo+pkZGMZBKI+bosONRIRvFbA1GnGYHUen7nHgM0WwCkVQcSKTh+1n0Ty7jL775t/i5b/0e2vCRHMqjsrQK24zhD3/oN7AjMYL07jQGdg6DtP5sPY3uZg/n/f5LUWkXcd4FF+DnP/AzEnRE61HVSwtOXeIVIlwBctcsJTTfBQY3zT01Aerce/vdKK1vwLEcRCkcIjJePKF5sCsijQpYgoeUhJeS7Q5kvoXoQ4FQRe45E1XSGij5biKc+Pu5BuTkW051Ie0oPoDIgYUyYvx/yqdrprQhLJ+FcyQtReBtEEKYw0QTiHwo3L8q82XxJzt/daILOIezCgp1SIVBPyhFj2YlRVehYqmI2cU5nJg7iVNzs2I51+50fMextFwuhzH+jQcGxBNwbmEeS0vLaDZoRtITeblCIYtkzIbmddHrdwKbdh9ut4tmty3JbN/oLrz+4E24NLdXZk/RgRQyg4Ny8tdWK+jUOItgoqpDc6LYMGqYPv6kmIY+VZ5dWKquvv3BmaN3nuMJ+mIF/jn+2qcT7DnfMbzDs2QXviD+/TgQDGcBUgXoun5FKpF8RYTHmixy1TXY44VAmGePbLIW0rEsPnDZW3HV3gtxuH0E7UgTMcMUphmNGtMEqZgmausNFFeq8FsR6F0PMU6xdR1W0pDpu7GsY2FuUabiFCQZiA0gEbdgxXTELMB2ILeNxYGYE4eVdGAOJmgjhIifR3+9jm/d9VW89e9/DXXPhRGLwa3VYTs5/MGbfh/D0SQGJmMYm8gg4juwXAuZchb7//AaLLYWMTI2jl/82Z9H3kmg3W+j11E6/U7UkGGervPUZanOLQRLeYqBUAYsKoSo2ZMzeOje+2AQb28zKBjkhgpQovMEacd1HGW2iO2nmBmtw5T2HwejvYjP+kF5DwjoZot1N6VNRfhEofpCtiD/LsRsqLhWgB/F4FUVhxiZyFoyUE/mEFDaDEV0kpWnVDgKCCSPI7eQ/kD0EUJBDmlL2AIZlH0jNkGD22nDbbWwurGO+YUFTC/N4+TsNBZXFlGt1wWPkMvnMTI8jJGhEdFCpB7C4sIiTp06jUq1KglvaDiPVNxEPObQ5oEW5b7ny3qQV5vW6LjoeD0MJodwzc7L/evHrtBGrBxc30ViooBMpiAJvbpUkZrWGqSSdB2lmRW0K2142ShObZ5GZWHRhx3RFuvrRx9eOfq2w7MnX4h82LMF/r9ZQnhRZgDPkD2CHZQkAaIDuRYkQIhbgUnbtG9IJJOXywEk7SmDP5Rv6ohCDiewV4xdgvde9mYg1cd0/zQMrs8QwUa5hYRc8EDf9VFebaBebAItsuZ0xDUdfcND1+lgyChg1BtBhKV3j5VCFI6ZFKx3zIrAjEWE8ZeOx5Bgi0BdwGwCRjoDzUwBlRb+8d5v4Cdv+2VsmB5h4eg0WrDtJH7/lv+OMcSRGrAxsbcA3YzBdm0k57O48W9eg0cWH0M2n8cHb/0gdg6PoaN1QfdxyzKg65YM6hhIVCNmNS3DOfbgyoNL0Hlk3T1wz/1YX1lDPB4LDExViS4nfdQXXULSMoTUw5kC15taT4Ja+fASlx+IcAg2n0NAA15EAYUUQ08lpmiEFuYKnUcHIKUUHIUZJBpZ2YmeANevAblHSEf8vkhsBH59qjLg82Hwi6kndQ2V5KmgB0Vi3KAPJL0ffNkIrW9sYGFpCTMLs5hfnMdapYhSuYJqoyE8CBKfGPSjY6PIF3KyvajTFWp+DrNzC9Ia2FYUIwN5JG0d+VxGhpccMHdluKgUll23h1avhVQ6gwP5Pbhu8ip/b2abJiWaGUFhx5ifSKe0zkoVtWpLqOPGeAJGykS32UF5cRMrj86i0+qgnnL9k6eOaP22KzOZ7y4dPvbw+tG3FYuVQ89xsoZB/mIEexjH57x+/EElgLB9Y3izDWAVwLUgqwB+DsVisZfF4onz5IKQMrCLnoKs9Xu9ntfudrq2bkfeef4b7Zv2X4HT/jyaRk1OvlKzi3wshp7bR7/rodvsYmOpina1D6PPvTVdgi0Uu6tYa26gYOaxP7sLY3YeTlQXE05OkRkeDJKYbSETyyKbTYhWfyIZQzyRhJl04Hd7+O5j38XnHv8yvrr2KEobS7J60u0E/vCWP8AF7QgihTgKl25HaiAJlH3k5jN48/96D/7hyLeRHhrAW9/0Flx63kExC+Wgk8FL16NQ8EICiXgEMfwwZffOc5y3M2Bi5vS0YAMIdqLkOD+ovy8ltOHJOlRmAYGOnkzqpQ1QJbQU/6IApLT62dNLYAY9tgz5xFSDp7ki87DFUCQgPo5KIDL0OyMRZshQUK3umIgY0MpFOUzqivfPJKFgD2zhBGfANoMYpW4HpXIVq8V1zMzPYH5pEWvlEsq1ujz/RDwlJ36tVkIylsbg0CBSqRSGh4eQSmextr6KhYUlLC8tiaBHzI4in0liIJcQaDexCUQEcrAnFSYn+57ntzuuFk+mcGDkIM7L7MLu5CTiekKZnORyfnZyRLP4t2q00eUeKmEikrYFW9BlqyDqQj5Kc+tYOTTtdyI9bbm3jtW5WUngDa+Fe+YfvXO90XzTyZWT68+TBLbO3f41SeH7SiQ/yASgar2n2YIUDOVAUEhCkUhk2LZjF+l6dLzX61rcA3Tp1ql0MCNev69rkUjswOj+7K0XvymazMUxjQX00ICnOfIHphWW22rCdTU0N9gKNIG2B4uYgChDx0e1V8dSfRONTguDsTR2ZLdhKjmOITsHuhB3/ZbMIIyuIS0CyUp2zMZQPoVEPCEn2wPHH8D/njuMr60+hodP3iP9KtuMj93yR7hUKwA5DaOXjiI+NIRIA8iuJfH+v/w5fP7BL6IwNIxX3PQyvOyql8BmYHJP3fXE+Ygnv6LCRwSQpAZpXIlFYIgQBuHNBrpuBw/d/4Bc6JbjgJbpT3v2+YDOE52cRiXuySKdJQXhuVHDQ1TkvliuM6hVTSDrwUBtiKcz2wa1C1ewX+UJoDY0cjtZD4aJRYGuZAYRwnmlKggKfEEFqgRBpCErGspxcdVZLpdRKlWwuL6E5eISKuRltFxxM1LYJQ3ZbAHNek2MT4rrq0ImGh4aUopIHBR3aPm9jlq1jH6njcFMHIOFFBK2IaU+U55LgBHZgT0PzXZbeny2GMRenDd2Pi4YOB8TyRHEu+xEPeIRfJqbpAZz4r7KQWTEifpwDI0blS7FT1wOTDk/8Ail9r1eT9s4voSVw4vopLuY25hFeWUNphNH0214TxZPf/rx6uyHFxYWxEX3hQzsttzm+wro5+vlz27Zf9AJgI/PlSBrV1YBbAOYBAgXppJQXtM0fp+4Acf3fc4MeMSFNGPbNGPpm/e/KnXT7utQsktY7s3BsBPIZ7PQNU6OSf5w0W1HsLlSQavUgdZRQhb0F7AsS4ZCFbeCpWYRxU5RUH3bMhPYkR7HVHIQU0MDiOlJoE18uyfBkowlMJDJykVzaPoR/MWhL+JvT30HDbeuJLt0Ex//8T/B9mgehlPHrovHkRgdR7Tnw1438Nt/+TH80d1/jlQhh5ffcCNuvP4GQQ3yeXVDeSxWKjydDdqRqSl3aM9FXT2W0IYQhkzMzc/h0Qcega/1hX9/xqmHFbpYdvGyZzOvmHziNSDdOgOZAaxuI5KAPNW5MpT5iw7f6yhIMW+tceqvZgkC6+VgjzMFAfxwM6DswQTmK7DmUD6Mp7siNfE10FrL7TRRLG2KYOlaaR1rpSIaLpF7HSQzadFD6LTZ8pHNaKFSJU9/Td4HiqZm0inZTPAFMEmUKxU0axUZ4sVNDYOZBNJpB3GuT3W6KRH1KH2+bFpct4mG24QdTyOhJ7B3dB92JLdjkOKyUW6p6bhsivBHnK1C2vI1U1e0CjNCQBkFBjSKwNB/kfMbchJ4YAjykKvIbhdLD8xiY3EF5UQbi/OnpUWMWTHU243OV0/c9f5jq7Offb7A/Ff8/F9TNZzZsvwrfv9z3nXrMJB+gpwFUDmYwc8kwE9+n20C/yJMFAz+MwmAxnrDqfHh9150i7FzYgxHO8fR1NqYGByDEfWkbXAbXbSpkV9uY32lDq/eQ6RL2qoFjg1iIEDIkp632m1irbmGYrsiWZ5w2+FMBvu378QOawxTiSE4ERtRK4akZQtXfmZ5Bv/z8JfxqSe/CpeafjKd1vGxN/wu9iQn4Lkl7LpsHOmJSVjJJKw14Atf+AI+8LVfgZFw8MobX46XXH8dHN2W3bTf6SmUbiDKwdUluQLiGxDUTQLqCUg+VAUmVPrRBw9JFcCgEEyAR0ATxwImomwHOAwMMPpKuovAIV2ox1LWU5hUkoUC7yjnM6X0wyqBZbwC+AQOQjLE4/cDPIGAghTrj7Bk8iBY8opxSd9Dvd5EuVFFrVHD/PICWgySPlCqlJHOF8TwtMVVX6ejbM/gYXl9BZVyBfVqVTj/27ZNYXJyEslkSm63vrGJeq2OqN/G6EAKUb+DgVQciZgtg0PWMz2ezt1AAMTjVN9Fo133M/lBbSg9hm35ndiemkQccVjCFBFtQ9+JJ7RYJgU9bvuwuZlWBCTZUginytN6Xt/3+r4ma2qv7/f4vX7f93vi9uBrkb7G6vP03U+JPmPFqGN9blpWilkrjbn66vpyrfizX3vyzv/1AoPsB3LyP1f58QKf1znfbGtmIiaAQU7lIK4F5fQPfARYATD4+XOpBLYkAPk6EonGr5q8dOAnL3mDUTVrmO0sYHR4N0yrKaSart9Ds9xBr9nDZrGFdrkt8wGhCbMViBDFZkprQL9Bnp6eRj58D023iVakBWvUQNNto1Zu4mB6O7Ylp5CLp0FJ2Zn1RfzZY1/Cg+tHz7jQRg0dv3b9+3DhxLVot9axa98AshM7kdw2CKvax7E7nsS1n3yD7EKuufYluOmVr5BsO1UYgmZaohGoC9ZdUXB1O4DeslyXLZkalnFTynI76lhYnl/Aow8+TKaPEvMkZ0cO6S06/qL0q7T4ZU0PeipEEDEZtIH4pyQfrhvZI3cEksD+XFaRvL94BgYbBY0S4CRZUQCEluYKwsA1WrleR7XVQLG8gbWNdREs4S6e0307kYDfo3pRFS23Bbfdkq1BtVRCp9NCq92U1oatAaXSdmyfwu49e4UfUK03sL66huJmEblYFOP5JAbzMaSphBzYpTFQiaBkS0AUIDcofC3E9g8OT2E0M4WJxBSG02NwPAORvkqwbGuchAMj5fjRhK2JC7Pm+57vUXtEzSg9xnyfUAGN/3geg94jRsDr970InzP5BJ4n9QDLKRSPLWH+0DR6CR+L5QWUV1fQ0w1/JJ7V5morldunH3r3kcWTX9pCgDzngDqHOzxrVfBv3QKEcyaW9QxmbgTEWDRoCTgXYBWwNQGwCmArwH/DZGCkUoXRnzrvDcn9o9twpHMC2cFhJGJkqSnb51arKxRiSolVinU06i50Onz7NiwxFo2IwxATAQFIdNJhclAYdh/OiInFxAr++Ot/g9JmDRkzhb3xEWHHHd9cwHKrKBdr+JFKZPFbV74X+3ZcjWJlFpmcjj0XXYjEeAGOFkfxsXnc8H++HsvddVx37Utw9VVXiyQX2woSUZTwBflqSvdeLJfIPvOjEmzKX1Ot02Topxtyyj356GOYOzUDJ+4ooo3PdoSn60y2AAAgAElEQVTvg+Lic1BFvADRxswOnCeYQvTR5f/Vqk5N59kfq76fGgpqFShVhxh/CGtBKizCcutNFxv1MvfuqDbKKDfrMmdotdp84kgnMqi3ajJc3SiuyeCPuAcawnCmQFMQkRZj8qBVWgRiwnLw/POwY/s2NBotbGxsYmOzCK/TRdL2sWMsjaFsUnQTBbkYMgZJde6xdfAQkc2QBstIYmriAIZiY8jqKcStpKhJh20KIdW6Y0FP2NBsPdBlUEIooe26JqxDZUrClOB76uQn5JhOzd2+5/e8viZQZGossN/wfM+P+hESieYeOIny4gaaMRdLawt+pbqp2YaFUXsA35p74PQja0+9eqlYPHYOgXwuN33GoH8+qvIPegYQvgBeTSzrGegMfiIE+ckEwP9nG8CfsQJ4xgQQ0fXY/uG9E2/f96N2z+7AzUZgx3XYTl/6zi4TQN1Fq9FDo+aiVKzBr1GbTpdSldx3x6PgZVSkwY0o2wOSh5jwiUoE9N0a7l1+EF/5zh1o1PuBFbdaTyrIhNqh85C4YfJqvPvgazGUHsRyawV2UsfOvecjt38cVjqB/kINv/XJ38JnHv4iDp5/Pm687noMjAxJz7tteByxRBw+mYc8UoW8E1E8elqEMaCJE+A4i1RnwmDZr1omVhaXcPjQIyIMQicgIupUSU/SjiD81f3ZQgQuvtwYiK0XT3Ly8IOyX9RxOe73NfQ6fXRIpvG6qDfaaHVbKDfqaLabqDZrwgfgSev2OqIIxGqBwh40/NwoFiU42+2WUGwp+qLkuRRhh87QbKXctitJNJ/N4cDB/bjqqqsF4HPs2AmUNjZgGD4K8Sh2jmZkCMug5XvOWQQDlWq/TEYkODmJrKxzM6khjA7vQy6ShdEjUpEtjo4oxV4MVi4GTMdEJG7JaoOzFno9isqwyKARmKVox0IrEH1RBjfXBoHAqMfA1yjprnUojiqw5a4vMGrN1wSqHAXqaxX/9L3HNJeCo37ZLy0vapudKoZTQ4hHTXxj9p5/Xit1Xnt49TAdUv5DfPxbJQD+npAkxGDnZ5gAQjsx0oiZAMI2IKwAGAkcJFqWFRt+/Z5XD14wsi8SLUTgOn0YVgvJeExK81azI1Li3VYPpfUaaiWaa7KMsGBTt47rLJa03D3z38AWi+OsNl13Ul34+TaOLUzj+OllLLc2xZYsZ6QwmRnGaHwIOTuD8UQBCcOGxdMyO46N2jLyegSjU7sxuG8U8akRxDpRfOfbd+H1f/J20Sh4xzvejqmdO1HZ3EQ6mcT2obHAT6+rzECEpccdugBe1epNTnXKbUXkVOJrYGA98dijmD05DSOugl5Ie/yPnH725ZYusF9l6EmcgYVut4NGo4am24Hbpu5fE612B61uFy1XBSZbok7HlcqCePieS2UktTVIZ+g3GEGzWUOpvCmr0FazIcAtTvw52GTr0en0wABg8IkSj9+TRGsZNF+ZQGFkDJl0FrbjYH29iFq1gmzCwPaRLAYSOjIJS96PoAFSJiZByZ3MDCKVGYXtm8jnxpFPTsDySP+mg5IwIgLZMhOmY/n8peR+iIMRVYSVyIjv+32NbtJMSkptkAm4z7yoAFkctSoTB405gCUm3x+vp/kcBrLy4Ov2eBtNkpxMV91aC6fvfgIbjQaM3Wm/ViqieHzWX99Yi+zIjME0HO8LJ+74zXbK+71Dhw4JtelF+njBc4N/jxYgfI28shnIDHR+sh1g+c+ZQJgU+P0w8Fn+82sJfvnUNGs0O7H99btfnr5w+3nYtKtoG2WkYo6cOpz2cyvQqvZQrdEtp45uowezp9OrTE5AtgM2B2i0upI1Fm25PXR6LVT6dfjpNhrRTZxaXEOl2kPaiWHMGcIF2T3Yl5uSxNEXhA5PAg92fhhzpdMYMil5PonUeBrjl+yBbsfQmi7jI3/+m/jsQ1/E9Te+DDdce50yr+x3EHMSGMrkZdUoF16UZaf0o0oJONAPCF13xCdAiwhddXO1iMcePIRmtwXHooiHJpZiXLNR5qzbaQuxpkTV276HzXIFrUYNDaKQROGbfXdUrQbFDUgHRUPFnTjAUZAZyKrHdV00KbbRbsuuXdl3i2eSbBL4WOyE+T623abYmMWsKCxTQyGdhGOZyA+OYGh8OxrNFprtDqrVGmKOheGsg5TRRSFlCymHA0UmHLY73L7wN8WSBWQK25AxsojraThOBo4RQ7SjSEwcmAhxiZqEFCmNmYiasvZQ72UAL+ZqL3QFEkcwjvpZpQQGIUp9SEmR9f2+H/E0zSdooM87avRj1mhw2uv12AZI+U/uCt8QWh506i0sPnTa3/RdrX9RBp4N4Ryg3vCmDz0VWXnkNHYntvnHKtPa7fMP/toT8yf/L0XaflE+ni0BfM/3n6kd+LeqAILZ9hl4cJgEOAgM5wHhMDBMAPw3/DpMAmbEMIeuGL988scPvjpKKu+CNoeEnBwJKTHq3Q5amx3pWSvFJuobbaBDp2HShtkOWNICiJ4d0SkRmlt0pAKotpso6zVEUiyBa1gru0hFEpjKDmNvfBvGEoNyehKQy4AhH8BMpHBk/kGMpacwlB8TFePhy3cgvXMUZqmHpafm8M7PfggPrz6O9/7UuzE+OC5+9KGOfjaZRiwWEwYfdfbCN4pPjWs6TueFQ4CenE6mo4NU1XvuvAdPPX4YVUqGkS/fh/gF8MKkDh4TgTD4TJJ8LGSSWSQzWRkeUoOAoBf2p1ExxgyqBY1B3Eaz0RDd/FbTFdOPdrcjKDwmI077OSSXSgEaMgTckIlpaCjkEihkElKp8H3q+jqGtu2CYSXwyKOPBrMXDZPDGUwWYhjMJWQYKq7FuoFYKgPd9xFPDWJgeBdy9gBsODKboGISX7+iM6okwaAXnwNb8T9COrFSJle6gbLTE4UR8gz47oq5iJzqykhEeQeoFoP3U4lFZoC8i9fXZCXre5wHBFuAHvpdkgeDbQ40bfH+k1hf2vD8V4xoZRCa7mnZfMpzErbW73W06fsfR+WheWzTcnho4wRum77vFXOri7e/KOH/9IO84EpA3glfsTKe6eOcHugcXgRjlFc5y3z2/EwA4SqQLQGrgrANCOcBvP3Ta0HASmXyu9629zX5y6cuwbJRhmtvIJ2KIcaLGx7qzQ5qGy1USq54Cri1Dgxfh8M9NbcC5Lbz1BCYKkEeXbTREW39cqeGju0inu2j2/Vg+Wlsy4yDJVwOcdTdnrDRGJjJeBb24ChOHb8XY+kRjOWm5ELL7hjF0NW7RG7MmXXxpTu/glu/9GsY2TOJd77xLaL9T4ET4oo7royahV1HKrMYYgSqusKoj3hSXvP0AXkCiIpO3fGTJ/HlL30R1XJFWXUJLTc45QQToCGbywjUlag5Sohl8jl4PVdotkxgLIFrzQY2NjdRq9ZQq9eDgWRE2gGq6fQ6pON6MsB04kolhyYlfL/TcVNWkrl0DAnHQrvTw9zyOjaqLpxkAVPbtmNxeRmLc6cwNVrA+XvGkU85yJFvYUbhMCklB0TWLRHLIFvYhlx8UJZ1pOsqUpICEgkwiXMMbiLob0B8rxMwEsW5SQWwfAQOQSrw+YMgAcjWU53o4jvIlqvvyfdCtWGZDbBN0HyN/BFWUr4sCfwIpcg6fTIGpXFgO6BZ8Ri1VrS5f37K2zS8SHm35m0ur0ZSyTTiSdvv9ogB8uFbHpYOz2r2oQpiPd3/ysydX5ovNd71Is0DXlC8PlsFsDUJhFjiF/SA5xD44U35uKztOOUPRUN48odDQVYGZ68EwwTAloCfdiQSSe8d2r/3vRe92U7kU5jXFmHGPeTStijY8PSplZqolFqolTqobXaAdhc2d9e0HKfVWMB7VyVfV0rdeq+OaqeOlteCk9cxlI/B1lMYi09ge2YE8Z4j0+xipYlmp4WEnUIsU8Dy8lFMpMaQTQzIsR1LJTF22RTiOwvQii46M3X86t/+Dj7/2N/jkqsvxStvuAm2qUshLUM7XmicBeo8cjjwCjXwlJdAKAFG30L23VQCblYbePDQISwtLiqSDgebZDQ6jnD7CW7J5rLIZnLC8+dooee2UW+2sFkqY6O8iWalhla3Lac7B3xi3smtghiTaAKwids2kukETFpl8euEotCKz19AGSa3odp0cd+jp9Dq6ThwYC9MPYITx55APmPj6ovPx9hACvl0AtmBKaTTBSSiScQtsvMySFhpmdh7fVfK9oipVIY5zFQ+hFFoRPFRvdUk14FEKnWaC25UVg7K9kt9TzFNlaWaYhh6HIpy6MeuQTQTPdUeiK+AGgKGXgihb2DwOL5oUno+iwr6Mvq9Xk/r9z1fi2paducQ+m4HM3ccx3rK9+expjXKVT+fy2tev+W33LafyiTYokaqnaq/fO9JbXwmgnbX9f/6xLe+4LY2f+rQ0lLz+4ilc7rLs20D5Prb8kjnTCY4p2ehbsw/3da1YDgQZDXACoB4AH5ubQGYMCT4gwrCiRr22NvOf/3Ol2y7AtVYG2VzFdmsIwHAkq1WaaJaaqBcbom9mFv3Ee1HEaPsEweCtB2VvTeHX2ow1u63UPNaaHWb0GI6JqdymBjNY8Qew5g5DKdvoVQtYW2zhkqjilR8GA0NaJSnsT23DclYCnrEkRVjemAAA9eMQU8a6B9v4uTRo/j5v/91PLxyDKmBHHZv3yFzi7jjiGKNR5iraAK6qFSINtRE9ps4BQJi3Bb7+h46vbZUJmTkCn2X6r2Og2QihUwhK4KrqXhMTlhKqlcqZRSLG6jWqkKaoeqtgJk87sS5XqQaEDcidPhR6zYmJ34/kSBVmbBfnrzKykslG/6rhpRmlPc3cHqhhGOzaxgeGUShkIHe7WDv5CguPv88jA1vQ8bOCa8hbqTgWAkxNFF2YxSH0SToOXcQkhBPem4nWN5bupT4lHkTzoLEdmjrHZxTFAFlMg2svp8u94MEIMnA55CPJZJqB8RajBZiHAp6Gv9fbu2FrQH8SN/T2BDQIElaChYP4jtI4ZKerzuGNnjhuN9YqmlHb38SpXFgprwAv0NHqbxvWFE/n0thYnxSSyUS2mZpA/c/+l1s3nEKwwsRPFWb9m+bvfdTj82e/JnvI4623uUFxfDZLkZhC/CC7vyvfIJb767csJ5uBXjqswJgJbB1HRi2AuFaMDQgYUUgwKKx9OQF77v8bcnJ/DBmzFkYmQiycXoFRMTlt1ZuiQ9AtdhAvUH5MA96zxedQUpf85Ri7pf1lqd63aYkABqSAoMTOVx0wSTG85PIeRk4XQvlzQqWNjdRrFSRTk5hrbqOSm0G5xUOCoGIEGECkLgiG9g5hPxVE+izHXliFUdOPYnfu+NP8N3FJwXEY5EFZ9tiPuH16D2o9vRK4TswvFDVq/T21KiPJRNIZ0iMGZLTnToBpsXWISLlPamqK8V1lMslKdsFf18pIyrORkLPgxOjfwJhz9waBGYePqXBBUyozD64ISEEONQXEHFQJgZNbVG4WuX+P5UQMddoxIHuR2H0dUyMTeLA7v0oWAOIukrAhJZwfL2hRTexCpRni5AOzWpM2IoKdahx70+tRoITVMZR2wg55UMF1EAIVd6foPYXMlQQ4MpeQJICNyiB6ICa+otmOgOf41ahBwaOwcGbz5ZAgp3ZgGMB+QMwOSgcg9cnndjTE2akcN6YX5utaCe/e9JfHe74s8vT1FPSBoYG/Gwqicltk/72ybGIrhviNX9y/hT+6ev/ANyxjoFmHN8u3l9+aOnowUfmjy29iDH2nBU8Xzh/F/0MnmsGED6fF7sq4O8MDUUY3Cz5efJv3QSE0OBwJRgGf1gBSHUQiUQGXrX7pgvesPdVWivZwKazjkzagR0z0e0AzVpbLMaqG21Uy7Ss7sOnD4DHoaAi43CFRkZh2+/A9WhEQgaYmpYXcjlceOluHNw/iVw0DaNjorbWwfLaClY3ijCdMSxszqHX2MC2wi4kTUdWYo7pyLDRtmLIHxhE/sopNBdKKN03j2PHn8Rnpr+Au049BC8WlfK8tdmQHj+Vz8ppKnZWPQ+ZVBpjE1NiTtKoVlAYGEY+n5Gylfh06iS6LRfVShnVelkkxy09gm7Phe8xWCMwmMlkdK9UgGX9FbjrsnGW2QEBSYGKbkSGcmwBfERiDhK2Cdt2ZObBdqBQGEI+O4hsLIOcnULaSSETz6KQzSNrZ2B5lFdX+/8IAUgEN8mmISIDR5EwE+agmAuoK0FdjYHScBTRrAM4ejC8U8nwjG9AsH1QaibhRwDg4TheDEYCZ+BAfYD9lVQNkhwC6XTehus8wq+7SpdCbtNTRqNqMshqQIwJmWM04gPloXt0VfAQTTp+aveg1lyqYeahU1jKtPzTqzOaY9jewMCAlkrH/D179mqjwwPMYzK+5Pty+3duxwO33euNHyd9o4O/Pvath46urr5qsbZIdeFz/XgmANCzIgHl3WTmC5hb/x4JgM9BuUQ8PQtgEmACYCII5wD8eusWIGwDwvWgo2manYkVDvzURW8avmD8oLbsLMCLtZDL0TcwgnrbRb3EAKmjxgRQ66FZ7wXYAJp1EhgThd9lyHfEdpvechyAES+QMeLYtX8KV1y7F4O5FKKuifZ6D6vrJawVN+BH8zi+8BRivoeBxIgQfehRYBtxxAhAMWNwLAODl06hcM0UatMrWP3fpzA/cwpfX7sHX3nqdqyVNrliUhdn8NdgUJoxAzu2b5eAMw0L3ANUS1XRs2N102m30Gm1YMcdJGOOuANzJciMRrgsA16MPFn19li2Kg8C2e93qZ1PZBtrW4qiOEhyMKcTLm3A9DU4dhwZUm8LoxgZGELOTCKJBFJ2HOlYHAmu4+jMJKsxypv5gmSMWiYiXE2KwzBXixFJAkpzgOK/QklUrzewKWeMsQ0INL9EkzHKeY6YiCqJ8MA5UK1GgmQRCsoEVX2gcKROfOJ65eciNR4MAYP/l41GOBvgCpYJS1yUpSDkIoD4cqEDCHOy16c8UyC7ThYgAUAazFRci+/Ko7PZ8ucfntPmrRpOLB7zY3YSwyMDpJn7hcGCtm/PLj+qPNjl4/jp4/jKN25D9NAGdm2kMd1Zwp8//tW/fHxx+l3nGv3PcPvvCf7nMy99rjVg+LMXuwIIEwAfP9QO5IkfJoBwCBi2A2f6/qD0D2cB/L6paZpz0chFN9x62dvMaBZYM5cQy5iIs6/2PEH0Vco10XFr1npolNrotPqI9DQYHs0sIZh89tX9KANEecdx757QHEwMDOPCq3Zj+95hIRf1yh4q63Usr5XQ7Fk4Pv044hEHGSMhoB1R+2ECcOJwTFsUiy0rhoEDA8heMoHmUhXNmRWUmw08+eghPDh9GMcaS1iuLGGlsoFG1AWiBkbGhrBZL6NaqSLCU4kB0iFERYPuKDUkx+IMIS5AF9MkyUVJeTGB+Bplvyk4QsFPR6bpHH5GLQ5ALcToMcDTvwukOYFPZpBPJpB3snCQQN5MwNR9WHoCcdNGUmTDbXjU6otQt0DhCAyLw0dLjEJFH1B28soNWZSBlAKpCh4eg0EikCYw0CeQU1uSljIKFbHUrAPNUqIvEv5ClArJx7wRA1bdR6TJRWiRXwdxH/b6or+ofiZrQSYQGfoF2wE6DAkyUvwHFBOIX7MqkO0MsUysBIS4wcTpez0hUPt62tHiOwf8fs3F8uMLWLTq2uOnn/QdM4bRsWHOmrRMNonde3b7/JpPiZuaerPmffUbX9NmnjyhDT7Wx0gkjTuXH6p+9slvvmujXP7yOSaBreX+M8Xzc8bvM93hBxn4Zw8uwiogbAUY9CEYKPxa1PvP+uRaMNwKmJl4dtdbDrzuwI37rsWGU0TN2UAqkYQd5Sygj2q1hQY/ay7qFRetCtGCXRHQINFFpOk43JFSmFBaT+TFU0YcWSOLXbsmceDKCeQGEnQDR71YRbsWwcniCuZmTiOFpAy4NLLyRPjCQExPI+nEYVo6HP7UiiJZSCMxlkd23zCOHjqE6KkWMk4cK5UilssLWKmVsB5poeE3ZSi2XlpBya3B9bqAEUPXJEy4K8Af2RqQo8++nMRfWq7ZMSTspJqae1FBzJmaJxoHXKPxwkzYjgBpLJhIkiBF3n5PmYZyMEqbb/IlONwT7T9yBhjURBQ6DHr27aQw0/cvYAqSoCOaX0JgUP8Sfcc2Qho+5RGgFEMJ9lHMRalClWZYIBmm/ApFQYi+DdRmDGYAgZ1ocLsgyLecdarfD+THAxNR1QGExiLqspZA5vcCHUK2AWFvH+CAlSy5QIQViIBapz1P87V+N1g3RiWYzZTpx3YVNLQ8v3RsWVtNtMVWjviSsbERGTZn81ls275NhqmkQvf7XZRLG3j8sccws7aI8gPzOLiYha97+LOjXz1879KRG6vV6ub3kQTUiw0x60//q173lrL/+VqAf6sEEFYCW9eCIUCIQR8mAFYHWxMAgz8cBMqAkFXARGrihl+45qcTfOPnzdNAzEOCJpR9DW67K+KQzWoLtWob1RKTAD3vfeh9NXwjBl7KVGI7uKOmr73pIKknMJjKYe8l45jaPSzbAbfagtdK4onpI9hcWoXZi0tPbkYoQaLMMmzTQtJIiMMMHycW5dTbl0Ha9pefh+8cvQuJxT4u334FNMJm/SbcaAfNbp8nBJrdugz+3G4DnSjbVR11rwa315R1lpwmMjnjY1KgMwKLJTw9EBlAEZqlOoKNCBMCFYfERET0AJTrrxzUrFx41Inph/DblAhoQA+mi5I4BNPejNRfeXzlL6ik//mNMJjV6a/MQcmpV2xFqc8lCfAXspwOgl7kzPi7gwQR3FZ8BVIONA4DAx6GAH14ivM2cqkLHvHMVS9AHgEEqMc6c+IHLX1Y9kugB5UBp//KpVkwAeKpqOySw8RBIpCCCAp0WBKDCJxoJrUGdw/IY9UOr6Ey6OHh00fQa7YxMjIE24khnU5ibGxMNj187qVKBbOzs1hfX8FGuYS5U9NIHapjlzeCp+pz3mcOf/mPn1o9/QvnmACe7eaCZmK/v3Xw9x8tAWxdC4bDv3AmwISwteQ/ux0INwSOrpsjr9n3Q5fdcv6rzX6mgVVjBXbCEsVdKvC0XA/tahv1ShPljRbqZRduk2VyD1GSSAJlW0Hb0WnYsGDrOlJ6EgkzgfHxYey+bBjpwRgino7V9So214toEmdQbaBfC3CdHhF9ak8d120knCSSVkytHhltrofhS3Zi2l3A/EPH8LJd1yA7NIB+UkckFYFPphr66DddeO0eur2OXOAdYs+btMBS1tbK+U71yAyI0CGI5EIFHxbnP3ktSiFYgWXEHVBWgBqURHHQewd9MZ83T0nuzSk6qoZq/F2qFKf6kMiW0KlIKZiIPkD4+6VF52MEsF6RPudzksSokoVPwaKAyy+FA5OABLSaDzD4JcE5UURTsaDn5yOckRcODrvwyAu2A2EYhFsU3ko9XYUHkBaAqD81CaRwKslFQrXqK5KQch3mqD84N9kF9IQMIOnG7/c8rcdljUbOhR/fNahpCQONh5dQH9DwxOpp1ItlDIwMIBFLIJmOI5fPIRVLKpJUv4fDRx7D8vwSWh0Xq2vrKD4yiz0nk4gn4vin+QfqnzvxzfdWq6W/PfMiX3g2eM7h3zNWAi/8sV/0W4aVRrgRCJWDzp4BbE0AvE1IFQ5bgzPVwFBm5PyfuPDHdl+/72IsGAto6FUknZiUrCSmtBp94Zo3NpkA2qhUXOEKcPJri8EGFXh0keEiCYjCo+zn2QOnrBgm941iz+UTcLWegGn0ThTNooviahH1CrH4SoZKi5jCT+fqK2YxgZhIWXFxAJYEY1lIXzyKb933LeyJjuDSnRdDyzrQCwYitCiz1ASc9FS/TZcfdZEKEqVHZ+GenELS64vwP69WaTDVhJ8786BHDobZyh2Ys4QeATHksquTTsw2ZMdNbEAwLGO/LV6CSleQ5b3Gvl9Kdg7z1CwisCM4M82X4BeZM572yhVInfasJpQngaoYlH1ZWAWokiVoVbeoCoseKROAzc2IjPOUl3EIYFUTQjW5ky/52sKJfhALoVuqvDRVHSiH5KCnJ2NREIHBrEAJf0glyA2A7P+ZHHhsclbAtqAvb7xCZW7LwBhPofn4Ktp2Fyda6yguriE3mEc65SCRSCORdJBOZpRyE3zMzk/jxJFjgs8otysorm4ge38dO/sjKHtt/NXJ2x66e+3xV9fr9bP1BLf2+8966p/VCvyL8j+843OtAc/cZstveTGGgc/2AkJ78XDCz0og3AiECYD/hpyAECYcfk/mAbpu5g4O77vmF699T9LIaJiPzEGLRZDkdBw+2l0f7WYX9XIT1c0mShtNtKod0KlIfAVBrgD7d1OkokjhdCQJmKISNDI6ibGLxxFNV2HrdCY2JJlsrJRRXKsKG7Hf1dWFJsMvpfmfot2XlRLNfcsw0K/3kL9wHAvGOk7f/ySu3X4ZBkeGoOd0aHkL0RgBMeqS55DOo98f7cWV+okQdiSw6f8n9F4GnFLwZZD6uirPhUYr5a662HkBc9gpdQN33+yDuREIUHHqZFRiJAKTFaFQJjSqDaqNgfTuvIzFGUj19/JcwxZAvlZS4ExEqs9XAiNiSiJiJKFUeFB9hPLjUk4oXcCnqwATeoqyYOG+ULUL6t0JKgJJVMHzFSRFMOxT+L6A+qts0eW9CLD/0ueTzCN7fjUM5Mvs+SrBShvAyojJgDeWJNEXn0eRbvc8mCNJOHsL6M1WRRthVt/E3Ol5DA5mkU6nRcSUyseEb3OuRAg6fQhmTh3H/Ok5LKws4tTSPPSZBvZOZ5BJZHCsOtP/s6N//6dPrM7+Iou/czh6t1YAYe8vLcDZp/8zBfgz/Z6tQ8IXIwE822vhXzdEB4Yw4XAeEA77wmDfKhYSSoiFqEHL1u3dP3HJGy99zcGXYSm6gqJZFJXfhKGDmJSu20Oj4qK2WZNWgHDhVp06+r5o9TtEwlkkn9hwIpag+hi0cTOGgfBeG3gAACAASURBVOQIrEIEwwcTGBzMK+ZdvYt6qYGNpQrKpabIRLuE1EbpYUcfQBMxy0LMcZASDQKCkJR8d+rKITxw+EFkN3Wct/8gzLwFsxCHkYohavgyaOtz6i90M3XxyY5a7aaVOo9UBwaiLHElOH30aRIqQaQLyEmcgsglgGICCs6eF79LlBvhsUouW52KCibLU1URk5U4qeo1wpM9OMnZBohGQmAOIoM/YTCdmfDLvl/0CpT7sjr9g8ANvAcljiUJBAkgaAVCX8Fo2hEDFbVJDwL/zJWkqhT1BNVrPAMIDBwIpIUJIC987SFiOOACqPaAcc3KgJgBJkcmTiaBYB7AxKsSh5JEotcpMRXRjI3Y+UNAvYf2YhlruQ5On56WLVQul0UmmxNHK6I26fkorReAjc11rMzPY3VpGU8eP4pTx05hx3wSe/pD6OjAbTN3zt22dM+rVzY3n3yeBPAvgj64/Zmg33r/cB5w5t9zyC4/yJuG6MBwwBduBUKNgK1Q4LPxALwPb8+qwNI0LbFjcMfVP3/5u0ZGhgqY0ebQSXSQi8VkAu31uqIeVN1sCVuwtNlAq+Ki5/owPVKFDYHFxsii0ywRG2FlkElkYRkJtHobOHDRDuy8YOKM6k236qJCVeLlCiq1BtyW2sHzpOtrukiRE7GXiDoifkkTSoqBxEaTcIc1nHjgcUylhzG5fRuiWRNmIoZIhvZlnLhTRjuCSE/1q35XgykXYnBCnTEBJXKWJ7VyAQoBNtQDlJOcCcCLwqMAqCCBgz6XnH0mAaHN9lWP3FFEnD6bXVm/UfdPqQaLCpH4jwXOpAIPVsM+QeuRKh34BsoMQdCHajugzIrUgFBMSmVAqOYQ6jkHysJyO6VdKDMEy5CBoFQGjMMzLYDSKggGXU+D2sNCJhj+SYBLZghanIAKfAb7HwCFFMqH8gIETClugLRITJhKHiAkEEl7JpWApSNx3hCicQOdo2U0Bvo4vroIt9pGYSiDgYE8fHF/tpHN5hVHQYug3etgaX4G9XIFy4uLuPP++9B+cgNXVKaQTaex1i7js0985e9OLj7ykwvA86kKP1Nsfs+p/2x4gGdaAz5XoL+QHuT7SRRSXAa4gJD5x4A+OwFsrQbOrAGDQaEkADH8NqyxV+2+4eXvuPB1qMfaWNZXEEtEEDN5Fx/tHkRAtFyqYZMw4VoLbkX9oSke6hg6HK7CdENkw9i7Z60BUAYS/Q52TU1h6iJqACbRbYp6JPqlPjaKZWxuNFCvtNFu9eExGPgHpwwZ13AS/DHEde7kNfiujuSFA5hrz6NxdBV7xvchPhRDJGHCThmq9DWjFLeAYVjKXpxxzM2Fx+zCmFMEF1ETDvbp7Gl5yPaCybr04D6184I+l5gHkc/lsUdB9p4kCJa7Qo+VAZgIB0hrEeoV+1E1PPTY1/NE5UZPADwKURnojkuAh5qE4VpQnIQCmzFJTiJKqoZ+4iCkVhdbkkGQHILSX0/HZDtzpuxXAIGgMgn7fbUReHokGH5fofzk/2QYqNBBMi4QohBfM09/NRMhVJjXglQNTA6BoQgt3Vi5cSurcAV9kZozt+VhTSaBNVeIZDOddawvFpHLqwTQqTWhm1GMjEyo3y0P28cpUUJal5nTd+6+G089/CQOLOexP7ZNwFlfn7nL+5unvv7Wpfrm3wVB9Uzxd3aV/j3/f/b6T2qlrVuBc4zWH1QC4NMIh4GhAlAoJBrCgc+wAc8SDQkxAaF4CP9NJOKZC3728nccuGrXRZjFEmpmEal4Qow12m5fZgGtSltAQuVyG/VNFx57BHIFDEvaAYXqiyJhxJGKDaLmVpDUgaH0EIYmC5i8tCCqPP2WBq3L2UIHxZUyKhQmrXfQ6nVFL4+Dv37EFzGSBIeCTADco/cgsGX9/CEcf+pRpNsWJsYnEE3q0FMGzKwJnT+ni7G4CRkSjHTRkSGgbKe4ogsuYv4soqoD2YTJHID38UVVRwrkHqsBBrzSzKdsL/+f7sySBPgztgJSBgcjdAnCILTEdUgiR230pOQPTnFO88+s+lRQMxmIA2SAAAxbgsBj/OkK4EwVEGwCzmwEgqRAhmBKSZGFLYmKpeB6D6oC9X8BL1ASo5QMZ7YAIeiSk34ZGMrpr3p8IQgJ3t+Tlin0KuTwNHJGRkxTcwFFJJIEYuQTiB0ckMdzl+pY9qtYqawhbsX8wXxBq26s+223gwMHD2oiycb5q9/D8aMnMDc9j6nxcdx19x14+PCjGN6I4bLudmQzeX+luopPPPhX9z22+Phrq8CzYQPCBm0rBuBMWKtZztMfW1uAs5upF5ILfpAJgL9fRK63DPsY9GEC4GBw69Av7P+/BxMQsgg1TRu+fOLCl956+Y/HMrkUTkamocUgvHVxeHF7aDY6qG42UC0TG9CQ07zXpqCmJsM72yCQRkPeKcC2kmi0V5F3kshYGaRTSYyeP4CB3SnRt/dcwG+52FyrY3O5ikaZ0tQ0keCJqQg+lkCFrf+PvPcAsvS6zsS+/385p845TM7AzGCAQQ4EQJASmEkxSaIVuFyvS96SVPZuqda13nJ5XZZd1qq8K4trxSVXgRJFgiAAgch5cujpmZ7u6Zxfjn9673edc+/teewdkAQlaglrgK6Zzundc8/5zhcQCUbYoYjEOLAspIe7kE+bWLx0AyOpHqQ6UvCGvdBjHnhjAfipGwj64CVfO52SgoV1ld4SBB6e3xnUF47CLHDhXZxY120NxbwCFGAW3WpkNNIiUJA7AKH/p1tQEGHYDUMcJ+EffpOCy52GuvApmESy/ugQcxEQeQMcIUY4gQQSFTdArfsYLBREBDGxcOYA4QjSGY1HAonuE+mJYtw5UUkxgtVlt0UU3qIPKxmA7IPFgVWrQMHoY6YoA4OEC9D/jPbTtkSAguL2F65BOjkQSY4T/1jYUJWw2RZvdSJ7O6ElfXBW6ig4NXejVeXC3JlOa+uLC+7q5ibuuPMOLR6J8UGlLITp63NYX15CNBzCjRvT7ktvvIGE5dP2Zbvd0Uyfptlwv3Xte9ofXPzWJzcbpb98lwP6bl38VkFob//Vx/hpwwC2vi5ZBFSw6Bbvv80wVI0IajugOgC1FlSAYDAaju/41KEP3fWR3Q96csEiNvR1RKJB6CR7c8ix1kG1XEOtZKBYMlAt2rBZMESW4h5WDNIGIBVJsomoaeWRjnYioRPHP4hMbwbDx9JIdEdZfEQPGrvioLBWQnGthgqZa9JmgOZp5sGQFVcQQW8IUX8Qfr/OikSP5SJzdAAzlUVU53LY3TMGfzQIT0SDHvPCF6PNgBfeqB+eoJ/luWRvTbc/nR9azdPenh7U5C3AB1dwagUASO2u8hpkbruY9+n7ZPIL4QA2hR6SAYgw3qSKxQdElBPOE5Q0SYn4k1knnV2RGup66Xnx+UT7zwQB0SVwwZBuxFtgX9vOn0g/vAGQ2wK1BeDcBEEe4mmGtAaKFyB6WXH/bx0BdT8J+JLvf14DSoBQkXv4fEtQT97iguorDj77A1AxpOdVV8DPS4RRAqX8I6HRgliX/TEEdybRyhpuvVDDBvlLNptaOh7HwtQMrkxN4c4Tx4kVyIkINKatrW5qK8sLPJNsrK3imWef0xLBCAaXUzgcH4AWDWJlbRn/28u/f2pidfGDFVRuJRZSHYBCOb6vTrR3ANu3AT/IEehWxUb9mH+S2wD6HO1y4e3+gO2eAAoMbC8A7QWDjENCwx3DJ3/p4CfGDo/txgzmUPc3EI8FeYa23RZqFYstxEsMBtrMFDSrtM8nQMHHAF4s0SlSee0KUuEEoj7B7AtHE+gbTWDoeBc8YQ90gwpLC/VCA5vLJTYmrTccNt7kGHQK4PCSPTlhAX6EPGF4gxroTidVYOTeLlw5ewGJeggjvUNoBVrQwxo8MT88CS/8MRLakFbeB80rRgLh5e+Fl4wz6Udni5uLxwJ6vNLNyS0nHTIPXJ2+N2r72eWWAUBGvUlnYNMTBWxQQWB+NDNp2KWIigGFidLVT2MA44yOAPm8XknuESw9BUKKaEFiKUrWHqsMJUApW3w1EnCOMPV+9PEUVrD19kLlx+KhSIh/BvxH5h9KIEASBqWoSpL7BG1KrQJFJ0Y/G9Xy87ggDznpCdgghPXXEjiVYCDhBFzFuSsQWxiBv9JqyeXuJHKgk41ZjNmiW447mhkDEv6IO39tSnv9rXfc40dv0w4cOkwzv9swTK1YrsCnwa3X6jh36oz25jtvsqBsuJLGnmYvoj0Jt142tL9549vuf7z01z9fNGr/aWvVcfOEqv3orc6l0DzLmX87I/CHjQD/EAf+VoVGFQDVBai133ZloJr5t3cA7VhByOcLjtw3evzeLx/9dMCO2ljSluGL0M1OiTkujGoLtQZpBagDIEzAQL1owzGavFEOan7Ek50iLdcsozPSjUhAbAii3jASmRSGD/eid0+cKcCUVtyiLcNGHaXlEvKFBttiW/T44VGaMHUfA4JBPYiQ3wNfyA9fU0N0IAVnzIsrb17AgcwwwhSu4XPQ8uvwpUPwpzzwBL18ExI4GAxHWZBDIpwAIfw0bjjUBcg2lh7stJpj1oq4HaXjgNiN89tbLJGmmZdirprUATAWQGOAAAXpQAg/PlovSrCPygqdVb0lko35sMpcAcIImDZMRcLDvISbaL8s8Tzzy32/DCQRIcMigmwLUGRkiLwJxB894IcnSkGK8uLbmgKEMIjpwpIgLDlBN9F/LgRilSc8wMRNLzgA0kpMIv+MAzAvgDoCkQ1A+AmrDajjotWsHJX45WSMMp6Gvz8K53oJDW8Ldr/PJcXp8swNvPzSa9r4+Ih74uRJLRgKu5vrOe4CLMvSXMvC2VPncOnyeTS1JsbcLozXupHu7+RtwtSVy/h3b/3J84ue0pMr/6V70M05SHyn7X+2CsCtDtoP6wD+axUAtRGgX71i/qnbXj3fniDUTg5SbMK2TkCPhIORO7587DN7H915F2b9SyjqJUQjflbI0YO9UbdRq5nsJFzJ1lDKNWAZLTRNh9H3TLQfVrMG2EV0+TrZUCPqiyPs9yIWiKBzsBsjhzuRGAzCtjTA1NGqGigul5HbKKNAAiTLZu9BPoCk3gN5EgQRDgQRDIpxgFrl5M4erHvzyE7MYUfHKMdSe7zUCXgR7PCzwxDLF/UWvJEIPPQUCHBgKD1gGdW2xOEmXb64TcV5YTBOJg9JNxxxk9ED2BKbAaIf01aAwEEmyEi1nBTeSfCPP5JMBBaUYWb8MdJPIwG9WqgAOWBErvW4xac5nLYHKvREsgTFgb+ZcsRfsOwARNcggUZaO0YC0AOUadjODpbKQIFyy7lA6f9vbgBEHoAA/Ph7ou9PzvMCABSjjwD9JDAqHUOJLMmf1BZsQj5uVD8YTNXgSwUQO9zjuhUL1qahOUNBeP1ed21xDs8+84JGkfQffOJRRGNJzN6YI2MXl8xXSdpNqU/vnDmHaqOq9Xky7iFrEOl0WiNzmuqNNXzjzNOF55bfemwqt3h6G0X4B2EAWyzAH7QG3L5GaJ/H2+eKnzQA2F6k+CHUZgaqbnl1wBXwpw5/O0+gfWsgRESa1rm/b89Dv3Hnl9LJjgSuNaegBVtM1uBuzwFqtBWoN1DKN1DebKBQNtFqWND0KKLhbpi1Zfj1FjrjXXzbEjWYrKzDeoSNNwdGu9B3JAV/IgjXBpp1G1bexOZKEYXNKmoVGw2XdvBsI823HNGNw0HpVEyFgG5yv04PItxYvY761Q2Mdu2AL+oV5J4QEOmOwJvwwQOLhTLeRBx6NAJfMMjhHxplARJzzRQIP/8C6RxQnp+kzYo+gG5oorxS0KVL203OLOQnHgVILMWPbpmWIQxJaZdAtz4rA1hY5EHLS5betN+mtaEXLicLi06BFwiMCwjqL9/udHKoCMjKpIBAbknlCMGdhgQIBdFIFQgPrwO1EMWjC0GRIATKFaDwFdn6vsUWQB56oRCSBgFqpy/XfHLlRwectCM03/PPb6tLEBuCrU6BgUIaA6ioSU6A5iK6pwuezrDbWmxobtrn0jZn9sY0/uavn9ZMw3E/9akn0dnVpV26POGGwlGtI52BbTWQ29jAmbNncXVmHsMdXbjdHkFfph9WqIXq1VWcOn8Kf3TtW//m1PLk/7TNTrx9C3BLHEA8Bm6agLQftHYA4V3fWb7DP2QB4G5PFgCVFtxOCW5nBW4HBbdAwO/zEAwE9n1y76Mnv3D4Z/WcL68tuEuIRClei+zBAZM6AcIDygYKhTq7CNWKDWjNACLxblTzi4h1x7D/iftRn1iGMbWGdCKFaDDATkCpTBr9ezqR2ZNk6SdsHXbdRD1bRX6xjFy+jrJZZ5YgOffQHKp7iGVIK0EiCvmZdES4QzAWAAZ9mLh4CclWEMm+DlhBWhjU+SAE/TSzk/OuH6nBLiT6e7kQeAIhzjyA6+dRwGOT5Tl1BXQAJQVYpghRAhGPydTuS9MQmPL2tyh6y4ZLa0ziDDBaTnMzdSlincjLLG7/hf04B3MQ4i+pwuT8Q/+mV/MJ5S5BxJ/f/Fvu+llrIDEAmTYsJY0yfVhKiiVjkAqGTgWAY8EkE1FuK7YepO3rL8UCEo6/0h5cUH+J8EMFUKQCMc3XbdE6hVOIhBJQHXoGBvnnJUBEel/6uRC+ogBDfyqEyKFuyqXXyOBV6/DgyqUJ9+lvP6cZlu1+8EOPaKOD/Vhd2yAsxQ2FguRUrZUKBffShcvam+fPoj/dgeOB3RjLjLutTp9WODuN5avT+P2L3zh3Zv3KR1YKhYW2Q6x2tNu7/B8Jq3u39uFWI8M/9MsUL0BhAXTbt9OF1RqwXSHY3gm0A4YkiE92xLpO/Oadv7Dz8NBebcKaRMPXQCgcZDYZj4CcZWdwF1DcqCFfNNCsaUj4kyiW1hEayODkr30aer6E5T97Cz5DRyYaQ8QXQDgQQld/F0aOdiHWH4RGSjsTMComSqtVji4vFmsoWSYLzeiGodgyD9GDvUCEosIptMQXQKWURWCsE8F7+lA2ckKcRMClV0ezZqFCoSUrORhrm4gFvBg6OISOsTEEUt3wh0MI+KlDoNtOAxpy3y9StgRTkGO9Xbb5oj6Y2l5G/unmN5tbWwHXIp2AWJMJlqBk0imfQOb5i9af8A+6sJXNF9/krAWQKj9F91UEoPaXU/GQPAHuBngIFGCi0hCILkF1ETpjIJ4QYQGSXqzWlW1LgS0EXK7/BJhJ8j7SVkhXIDrgIg+MxwHWQAkqsDABoVGKSVI0+NNYJYhfJLbgaYo7BTISpwaICqJHi4ynW57eqIZyE0h6tIsXL+LZ7zzv1uqGdtvRA+5ddx3jbo0SrZu2TfRwrZDPY2pqFm+cOg2fT3PvyxzW9iRHgXgAG9M3UL+yhm9Ofg9fn3r2yZVi9ts/ZAz4kQ7/DwMBf9iB/0ljBAoLoIeu6gIU7bcdE2i3DW8vAEoqrHIIIprH233P8PFH/tkdn4u0gk1ca04jQI42IbKfEvlzZNBJmwHKFizkaqgVNbQ8CZjFVQ792P35R/DYF57Atd97DrPPnkYinkSKFIPhMBLhGAYOdaN3fxLeiA9unRa+LoxCHbmFEnJUVGoNjo5mHToo1YZyCz3MOCSKsFkroRHTkPnwbsQPk6mEFwQSUWpuNBxhIM40LRjFGgqzG6jML0NrlLibiQ8PINXZh1A8wQYkBMBRKi6TfNRMS+6gRGGlW5+IQlQMGOSiAJIWQIeeNgG0GjTpFhQZiQQwsleWjDBnTjsr+CThhwE9ysiTtzJbDt8cBfjBRL9JmVDMtYdcf5m4IP9msFCxAUlwJIBEfh/uNG52EFQgPOSfSCtdFkMJMJw7AKGB30pyFjOQODIMiLYRgBRNWiQFiZtd0KalJ4BDmwMbGtGAhXmIYlqRMQJZDetuS3c9bpMUw3AtsgrzI3yoSyioQzomr13Tnnnqu1qtarqjO0a0B++7y221HI3MlSLxqBsIhbTN5VXMzs3j7QvnOGPxvvQhd3dsTAt3hrExv4bsxQXML9/Ab5/+4xc2vfWfuQUYuL2z/2Ed/dbP64cd9O2YwLu9/Y9cdX7UTyhJQe0UYQUCqr/VKNAeHKKKQLubsFIPhqORxNFfvf0z+x8ZvdMz05rGmrvJWm0KDYXmZXDHaDioV+rM6ssXyDsvjmplBa1SFeN3HcVnfuuXMfnnb2DqmdeRjCYQC4YR8QXZL6+TuAFHu5EYjjLJpFmnrYCDxkYFaysVQTwyTXYeZt8+PhcUWuJjp5+l4jJ6PnYIvj0JBGwglU6ju4PiseJoGg5Pul6/l6XHNaOOeq0BFKuwNnMwsjmEwmGk+kcQ60wjECTmnJcBQY9NluJS5spuQnxlioTilrD7JltyjeLCmRfQRNMUjrmsa6C5mH/DkiLLcz0NMxLNF/T9LSswnsv5FpdKPR7qRWKxYBIK4ZAY4+XB3lr7ydtevr8AFOhjy05BYigapRrJRCA+/EojIB/6UgFwcwsgfQDb14I84zP1V3QBvOtnMpTcDjAEokhB0h6ci6LO/uG8DWjRZ24y3aJJ5k0tDcHxFHwjUS5a84vL2vPPPYvVpfXWbbcf1EcG+3jMIOA2lki56Z4O5DdymL56TTtz5QpK1Yp71DOi3d63D9GhNDamlrDyznXYpSr+4Mq3MWlcS52fmyu+h3P0rm/6XkaA7W+rDvxPshNQYCDdHUooRH+3z/1qNGj3ClCrQ+UktCUf1nVPamfPrsd//fYvJNLJGC42rvCqLRxNyogqD2zXglGyUMyVkC9aqBoRFDdX0DTr6Er0oGd4FFapCKfSQCIQYo1BwhtAIhhDIhpE765uDB3qRbAjAIfAuEYLVslBaTnPTMFCtY6qbcMmlJ5LgI8TjIuFPKweF7EP7sDM7DTGh0bR29uLVCpOQd2olSgFCOjs6sNAXy9ffMVyiUImQAHgdq4EY2MDzYqBVF8POgZH4I8EGZlnUYtho2WIFZ8I/xCgHlt3NQlVd3gbQLNui5KLiRtA3QpHY0ljEO4C+N6Xqz1BOhJAv6D+UiEVbbykCm+1+3TQhTW5IAzJgiF1DGJ7oA65vPXb/AF4TUjOLQo8JMNR8gqg4i3/8M3fRgMkk1ePLAxC4Swdgtsjw5gHQKxIueZjApDAC7YIQUoYRPMSrwFbjOOgpWstsg8XUwHhoC6pLL3RoBva36VpSY9WNczWKy89r106cwmHj+xBMpbUPH6fGwyENb8/6HZ0d2qUeHT5/GW8efYMjFod+1p97t3779Cig0msXpzF6lsz5D2ovb1yHl+ffv4rFzeu/d4WP/vvUAneDwVAjQJqDNjKCWyjDCv9wPaDr7qBdv+AsMfrH/yZPY/c96V9T4YXnFXccOYRi0REQEbAx62naThoVGoolQ3kKwGsLy+gZZiI+GJo1h3O24uGg0wKinjC7DkQDUSQCASQzqQweqgXHTuS8Mc9cGoaLDIfKZvIrpQ4tLRQrcHkBx0ZfgpU/trSZaTu3o2laAGbszdw770PIZZMY2Z6EpFwCKlUAqlYDIl0CsNDw+gf6INtONjMbqLSqPINTAQna2UDtZUNpHr70TsyjEgiwYdEM5po1igaTMiBFRWXb2A+HCKHkLCAlhwFaBwQdtlEnWUOmzDK4BtZtNqMtG8ZfEjSDr1OmoKoG1+184roI8I95ZwvhIJSWCRWh/z+TA5SwiGiPYrxRXgGUKS6KAI8AijyqzoQ6oqSB5/27jy1qJxALgLi5hd7f8EFIAk1LTp4bJKaAEEA4jhRXaMPRNiAjBlj/2BJEmo1ddfTampkoRYajLmeXWkNPrhnLpxzJ86e05LxhJtMJXWfz+P6/CHN7wu4kWjU7ertwfTVGe17L76kabrr7msNascP3obwQAJr70y7a6dvwMjXtU1jE//21J9MV6L2genpafPvcPZ/rBHgVm3+T7ID4IeZHO1UF6A6AVUI6PC3k4ZuxRZUSUOKHxBMxjs+8BtHf2HoQPdunKlcRN1bRTQaZuMGSqghxLter3PcuFnVMb24wCBewhsXiDiNd74gYh7h+Uf+f9GAjog/io5IDH0jnRjY34XoMH1KH6xiC6hZKOWryNJqMFdD3TRgSDSebpC3599A9323YcqcQXUjj0cefRz+oB+vvfIyDh3cjxN3HMeBvbvJ3Z+xgFAwxF9vudZAIUfpPxU0YfGu38qVYC6tIZPpQ+/YCGLdGSYNOVULTsnkGZ9GFL6xOQRE7LU5fIOKgCVxAJqHqQhIXTyj3/SfdBwm+JTWflutPF/GRP6RHh6KrSf5CNz2s0GABAflGMC8AlkAuDuQmwFVRMT8L/0GpXGoeN4jugBSCkoi0Pcdii0phFAB8u+Ot5iK+iu5AMohiffC4mV8+NkvUNC8W2QNxlGO7AqkUYQgCUv4Y3JuiBBpaY6r0SjpC3pboV0ZXe8Jt3Klov7ss992CYLpyGQ0v9/v0gaKHKNDgYDb0dOFaqWuP//Ci65rWdpuqw9HjhxBsC+BlVevubnLi1otW3Yt29D+8Nq3ly9jeWxiYuK9mIXcsla8lw7g71ps3uv7q42O6gBuhQVQMaDDr+zFVctPp67dPJRsxr6fH6DryeODhx/7zaP/TbKm1XDJuMJa/UgkjEA4wNFYDdOGWbfgNaO4OjeNtfUcwm5MOO0wYqTxzR+mw68FEQsFeSUY9UXR3RnFwM5edO9LIZIOwzZdlgxbVROFjSKyqxUUKnU07AZTbSkA9NTCKXTddxhT9WkUs+t45OEPIxUL48Ll8ziw/wA++fGPIJ1K8EGgB5tl27xnp660UquhUiyiWqvAMChjrwm7VIG1kEcylkD/7l1IDnZBd30wS3W0KrTrE7p+5T7EkeTMCWgyNVgoB23hiENbAhoJZKAqr024NAtVIDuQSSNQ7gwEZC/Xf1Qg5AGWEmWWAFO7zp9fegFIluGWiagcU4To4CYdeItOzNiAxtoOPSxEQoJwIBWIXCgl80893gEa1gAAIABJREFUmtoKgAD+ZGoQt/iS/KPCRQkXIGCUC4BYmXLhIAal2+S2n+X97BdKpDvSCtMnJ/swl5jSbqAzqvl3pV0tquONM2/i0rkzbndntxYJhDSfz+d6aPVL7lORqBaMRHD5+jVsXl9yDzT6tL13H4GeDGLjpetu8foqytkckyGeuvFS5Rs3XntgPjt/9r0equ1v/9NcALbGujZ9gFIL0q1PB7q9ANzKOlwRhtoLgAIHw4FAYOfn9z955yd2Puq9WL+O9dYKEok4wuEAE2ssy+YZ3rQiWF6Zw8bqJmD4gSal22hs7URpwyl/hLuBgB5gTCAVinFEWXd3Bwb2dSE9FoU/HoCR1eDUDMYXskvkHZBH2WxwtHelYWBy5TK6HzqIGXMBy4uzuOfk/Rjo78PG5goOHTyMJx57RLjxUivLZp30uBQ4gm2Rm3CVU35r5TJqVoN3+R7bRvHKIqIIYNedx5Ac6WE8wMrWuRugPxwPTsGkBOKT0I2yA4keTHZkzJQTICAXAemgyzsMDuwQNmSM69EtTft/ohxLCTGPN9IqXLTusjBQ4VAURQX+ydaeb3uOSJaFgbuKm+KhLXORrY2BjBOjjcBN50Cp2ZeSYW79FXtPogR8ngXphy5zMgLhmkKYB3snCM8AFlnRjM8dAFOCCf+TWYPspMSRAgShSD81Ic103Zaue7XwYBye3ijKroFvfuvrmmY33UQqrVHOBGUqBDz+VsM0KVRFN1uOW5lc03YbPRh/4DCnlG+8MaWXbmygmi1w1b2wctn9dxN/9afTG/O/uI0U9J7rwfupALRrBNTMTwVAjQDtrMDtOYLq9lfOQSpaLDrYOXzyXxz7haFMJKWdKV9iy1HKvPeFKWijBdtyUW0GsL6xhPxSHmZJ58NGNmEcn621EPUEEQ2EEfaE2Ak4EfQjGUggHYuhf7gbfXszSIyF0WzqMLNAq0zx5RVkNwrIl2qwLQcbRh7TKzcw8NhtWPVkcfr0azh29C7s2bsXPl3j1v/2o4cYK1AiGLXnFg9S8vuzUKNOoFpFpVpBo15nm6tGuYS1166iO5rBkcfvQWywC626A2uzDtcgyzAi8JBfMCkKKfdDWKbTKMC3HhUA6groEa5wS36oixuctQBbyjwqJvQ6ojzfpCFvOf4KgYCQ9CoTEzUG8Egiab/KJ1D6DXCxYBMSJSgSICITkWhcIMPVIGUzCLsxEQV2Ux8kCYHM2uO4L6kF2DJGpTfYUga25QvK7YfgQhD/n4g/7LAs6h4XAkYAqQRwceCcCeEjSoXaJR5HYCQGJCPu5aXL2vPPfgeZdJcWDUVAycrVSr21Uaxo6WRMCyei8E4ZGEU3xp884tZXi8ieWkB5MatVCyL+bSk7h9+b+Ma33liY+DiVq/d86tve4f1QAPiS2tYF0KHf/tTe9itykOINKCFRe+Iwv8wXDI08MX7f/b+47yPeVXMd181ZJNNRRClk1OdBy/HA0LzIba5idaWAarEFu+qI8MyWDse1oHtaiHvI6COOkDeAuM+PNG0EQhGkOxMY3tOLzj1JBLsDaGRdONkWnGoD1Y0KNrN51E0T69U8ri3PIHHHKLwHO/Did7+JvsFhHL/tBMbGhtHT1YE9u3fARym6bLktlR/Mh5dsPipYDRt1o4FquYhSpYJqvU69KzaX15B/axq7h8ex/5GT8HdG4RQMOCVb2F9JW3Q+NjQGODaTmdgOiwBANhEllaHwH5B3nbT7El8LLTUFAUgielLwI9oM4fwjwkbbCgBhd4odqPQBcv3H+QOKBkwMQWYUSkqwMiFRH4yKTcgHj2QHyqPftgIUhqAMWcoNAP9N3ztheuyxKAUT/D3KuHBeCbKjkpgr2DVpyxRE4AGCGsj2xOy4Tqmi7BzMLRpxcOGjpOXBONmKac9eeaF19uIpLRVJun5fUKOfNZnQwu/TvHar1TPjw579+7TeD+xF9u05LT+xjEaWPCYqPHoWKwX86dSz+XeyVx9Z2Vw599NUANoLyt83L2B7B6Bu/naSUDtPYHuAiAIA24sBG44kopkTv37sC7uOdO/C2eplNHwmOlIpePz0oPEioAWxVihgbX0d5azIF2A+HfHudQdOs8XeAbQhIFCQYrTinjAXgEwkjr6BNPoOdiO1I8jsNWPFCyNn8F63tFlHtdrAcmkVk/MT8B/oQcdDe/H6S8+xoejI4BDuvZdGgR50dnUgmYhC95BNtmKwyVtYzsO0zjJNE9VqBeVSBXWjBpKb0sC6sbyO8pl5HNm1H+MP3A7N54NdaLBLMfNtaAygGZ8PBrX+hAEQF0DxAW466HC8OL0pn20CACQRh1F9RtukH6B8eCpCj8QAlJCf8wKlKpCxDYkNbDkGMVmR/ATUJkDKgGWHIGcYUViIeBTxC1MSxkkl8KdOiAQEeWEviUEs+JEegax+ZJ2VkvzKt2OEX3UAcmsgyEXMB+Q1qSAYsT8LO4hzUeAtA8861BEFUkH4E1Hmbjw3/zKuTF9GGOQYHIVB41rIh85sSBtYjWDfp47Dk4pg4bsTqK2V4BgGjGoNNpowa3X82dVn8Lcr57+0Wdz8w22swPdUD/6+O4CfdAGgj69AP9UBqO2AshZvVxAqcFBJhLd3ADwS6LoePtS//8n/4djnw6anhcn6NMJJygIIsazV1SPIVusobqyiUWhx5LjVcOClLsAl3oAg6ISp/fdHeC0Y9YaQCEQ5QTcTjaN/Xxd69iURHw7BsbxoLNiwCzbIPIISjFdza7gycxnr6ToOfOxRvHr5RTQKNfT19+HY7XfgtkMHkEonkUjGECSHXNr7NynElNpgSvQRpCI6keQ2Y5rkdlxDtVpFuVxEzawzdz47uwr3whIO3XEH+m7bg5bRZH9EOvDEMSAMi1OA2PWmiab0DYQtNwRkGEigYDvrjteA8nZXhBzO+pMcfqVYZ4MS2ZgrbgDf+vKD8Whw0yuQZ33OOVCcA1VUlOuQ3P9LijB9Og8VAApXkdePuvW3hLICsedDojwBheqPgAC5StxKBmKar1wVCq9E6gSYRSzGBd5wkpMQb1AYBxRjAXdlRBZuuq5kO3JQki8edj0bBnd9l0KL+tXs9VbDsHRKk+514m7kfB39O4bdvg/s1vOTq1h6/hoswwI5w1OsmKPZsIwanp9+C8+vnfuVqfXZ339PJ37bG7/fCkD7KNBeANrHge0FYHuYSHsHsMUP8AYCO37x8Efu/vSuh3CxNo11rcA8f4ry8njCKNZNFHPrqJdb7CRskumnTbcgOe3asFyXQ0US3jCSgRQixPLyhREnQDAYRVdnAoP7utG5L4IQjQJFD6xFhxWD9WId69l1TM5O4PzmJA5//qNY1VZw/tQp9Hb3YWRwAA8//AF093YiFo0gHKTUXZ8YUdjq3GBGHgFK9Kh2KFLMNOHYDhp1g8HBUinPRh9Nn47sxCwiiwYO3H8XEsO9cIo1NOvkfyBvLRrqJTjWknl47BfAO3ERqy1igVTrLyPCWNIrE33lYRdtf9uGbov5J3QIaixgPEMFikp+P6cN0dvwmpJKPx/x78sjYNCfzUQkEEkbgajwSLjpDy5VgOrrkKu+LT6AaOFvjgP0PLEm6W9JCOI8AF6BkjtzyyVDFe7ved6XiUPSOJl/ig65thJVmOclMUNomktuTq7T1N3LJQodRXnc5xoRW3MqBkrnVjR7pYT+x/bBFwth/fVZlObXiWPIQzDhTZZD2RMmXps9g68tvvDrG/ns//HT1AH8XYrRD3tfOTluqQSZeNqmE2gvAgoDUONBu6mI6gLU31QEuBAMdg498i/u/HymP9WDM4Ur0KLk5Eua/ThIt72eX4NRBorFOoyaCU2q95yGg7LR4LiugC+IpCcu5MJkJhqIIkN4QCSMnoEO9N/egdRoCJ6wH8YyYKw6aJUM5As5TF2/htPz5xE5MYaOe3bj7bdfht2wMDQ0gsOH9uHg4cNIxmJIJuIIEsPP1ZFd34BZLyEaTyGeTPMNS7d23TBQr9ZAB7jRaMC0bFQqZTQJRNNcLL82gR47jkOPnYQvEIZVJL8DChehh6tHtM90rZE3gAjK5MeZMMMQwhh2HaKOYautF368XD9cKQ7i35q8cZmFI/UB4p/CV0AafYow0TamH+MDkvDDXQYZjsiPx9wDmS/AvAIZBkIFKOJlbsBWqDgnf8s/bOYpBEFiKSCNP+i8yhFAZQAq6TC7AxNvQmmJGAilQZ9UZMJ9ibaANAKQWJKwP6INCCUVpy7oGn1zsu2g0BYigDlLNdderenVzRIaHhOmv9mC4eihviTMYh215QLHwnM8AeMULY53N2wDZxbO4pnVdy7ULffBhdICrQd+rD9/3x3Aj/VF/Ajv1P510r/V/K/GAUUPbn9eUYS3C4TaC4A6/Own6PF4Ox/bc98DXz7y0cCGncd1cwGxcBShcAKGZaBWysM2PchnK2h5XPQNppHMJFDJmbgxuYpcvsxjAbX/qUACcQ4XjXERiIeiHL89uK8HPYfiCA3ogBFAfQFwcjYa+RIW5uZxZvYCcgkTuz/xKK6sXsLKzDTi6QwG+gdw/NjtGBkeQWcmhVg8hs2VVWRXVtDV08nx3NStxDKdgiPgmCgXK2hUqkwxpjGBHoHVWhm+aJBXgIXXpzDaP4bhYwfQqppwahbbhvFMz+2wMMtQfvnKJISRf74ZJQtQpvKI6iHAOjHPU0Mg3YhUny83AFu/UFoZ0OEVRAJpDCqATf5YNNqoFaMKFVFjhuw45KJPmIbQbUwbgRjlvnvECM4PMIX8K4MEeW/Knb/w9pOiJyUeYlEQj/XCV1G6ARPZh6jA7C7kkmyQTJcllqB4BqQq4U6DpoCmcCiUmwfHsYk07GpBj9usWlru3BIauTJJQjVnvcY3vm07cMiNSSO/BiHJdpoWzGYTdauBmdXLeHbtNFad+oG1/NoPCw951yP2fisA6utVpCAqBPSQUmvB7QVBFYbtW4AtLoC8/YkpyKrBZCx18CvHP7nvocGjeLt8GWW3hq5wBoamoVYrwePoKFVMpLtj6OyLwTEtePxeVHNNTF5YQj5f5UzAhCeKtD+JOOUAcCdANOEIurtTGDjUgcyBMHzpAMwVDdaKBrfcwPryOs5Nnce1+iJGnziJXNzE3NwU6qUiBvr6MDw0hBMn7sLIyBAs08LM5CVEwhH09/cwYYn45LFUGuF4lIEt8gKoV8vIr2dRKNMKifb4lHXpINyRgrGYQ+WdBew+ehtSfZ1w8nVOC2JaLx1JWgmye65gx3F4ZpM48HQziwc8swnpMHipGxCUZgIcCfRSa34G+QTND67MChRbBOkALIuEuN1FsAh/BZwqKlOH25WBfJ5V1JjUFLSLgcgTMRmgsLibN7/ERwToJx3F+ACL9r/d8PMmU/BmijBlMm51BjJbQLAj5aSxZZ0m4hkdx9FZItQijhCLrlk66NhkEsDDB/tFVBbyqM9miRPg2oEWqst59nSmJoMKAI1zLdgs5GJsh8Y6s4HFjWv45sor7o167pBlWZd/hEv0lm/yfikACiZqHwPUwVe+Aardb6cMt2cMtAOB7SIhOvwqVCSqeTyd+3t33flbd38pAX8Lp7OXEAim4A1GYdUK8NoavGEfMkMRzC/msZlrwmOZ2LmrE35fGBfO3ODUoVAzhKQ/jlQgjpiPNAOUEhxEMhJhmnDPkQySO/0kJoEx70Uz30SjWMLk1au4sHIRgf39SN+zD4vZJSwuTcEHP4OAd911J44ePYqNlQVMT15Df18vevt64SOzDr8f+UIZg2MjPCLQD4u4AEajjlqtjhszs7AaVRhmHenePvQND2P1pcvwZV3sOHFAcAxKliC+kNMPW4iJEYAPDd/6gkLMbT075sgWXkaIiRwPaRkmAT2+wXkNSKxB0SVwh8GW5SodSIiEVOIQIwkyRYjXhNJRiF/PaUPKA0gxBOUsLvELnTwJ02SjLrcaDEQo+Uz7wZVAPR9koZHg7Z3MDeTnb6L8Ymyg55lAKFaANN0zsChueI4RJryFalJza1vjcrCoS/MSeVGuVlGbXHcbG1X6eWr5aA1NLxDOARYdfIppd1qwqQA7NsymCdtxYTQJBGxgOTuN5zdPNeeb1WObxc3z/1gKgBgat6gkWxsB5R7UviFQt79iA7bThJW1GB1+VQBUJmHEHwiMf/bgh27/wt7Hca5wBUtOEaFQCk2jjrgviJHD3agWy7g4UUD67sOoL26iOjOL/ft6iUKPK6dnUcs1EffHkAqkeBQgA9FoKIyYN4AOshDbm0H6QAzhoQDsNQ3NFR12ycTK/DxO3TiPStDGno/dhzVvBXNL09hYW0cqmcKefftw8s7jyC4t4+qVK9izexf27zuAQNDHc2KpUEJL86FvsJcNQYndZlsGYxiLC8tYXJjByvwckqkUDt1/DyKuH/N/cRp9gwPo2jWIZrbOsmNmBxInXwqAaDPA2XmsF7hpO05sHBp4yfBUTLlC4isAPrLLkq5ddOZZpy9ufdUe8MvIS5AvfZk6LFt/MQYoW3AJJnJH4BN2YyxNFpiFoPDJYb9FDWITWjIAPSI3Arz3k76BfOsL8hTv62ivz4dapQZJUJDFQQIcZNMUAQJQE8M8SGqNGOkXdGPKS9e4iLhNOLxZkOZDOk3xvB50HbOJxnxeL1/Pud5yU2v6m+4rlYv4xsILeCB1u/ZE970omWXYFMfaspkizk+2xSIl0yGAt4HV3BxezZ9xZ8PNO1YXb5BP4I/15/3UAahvUPEB5DTJ7b8CBNtBQVUAFB+g3TlIcQKUSIj+3ioAgBbvSHQe/Fd3//LwYLwDr2+eh6X74W350d8Xw/EHxnHltXksrmsY//wJkK3T7BtT2Lx0Ebv3dSG/buLKmWV2BEp5k8wKJL+AmJ86gTBi/gh6+1PoORBHbFcQgZAf5pwHTt5FYWMd03PXcS0/gx333QH7SAw3ZuaxsDYP3atjz/gu7Ng9htpmFptrGzh6/BgGB3pRqFSRX99EpVpDIBjGibuOsxSY2mwO+3Qd5HI5zF6bxqXLF2EZZQyMjeO2B+5F9bUllC8uY/edB+H3BtGktSChfZzoKxBushVj6p0M2qSIcOK+8MTP1yQ7A7C0WJxKbh8EQi/bc6YIb/0W5RaAzUCEDFda/ojCwY9MgQO4nIOgcAEhY1YCBH4zuQJVMeE8btDh9WnQOwLsh6jcgMlGXfily3SfNq9/Hg84WVjoK8R8QNRfQYlmEJSlATKMhVaCVBYIE6CCQ1s/Hpc4WEVECopHpttqOpqRa6B2Pefay2WWkOe8Ffz59e9qrzQuY3LmmvvL4x/RPjP6BEpGGWaTTGSpkJBHoQOr6cCxLVhmE3XHRDY/j1fyp3FDr35uPbv6tR/r9Mvt64/7vv+13m97AWg//LfaCrT7B9zCNZjbf1UIOFaMNgKa5sk8sPPEvf/dkU97V2trOF9dRlAL48DeDhw4vAMTz83D6ezEwM8eYAzAcnScf+pN+IrL2LG7E5dPLWP+ygbCbhRxXxqJMGUJEDcgjLAvgGQ0jr7RNDL7gkiM++HkvLA3PKjlali7sYgLS5PQesIY/fhdmN1cwtLyPNarWYwOjWJsqBfry4sI6wEcO3kHAqEQsut5rCzNoVyuobO7G/fcdQKJ7ow04aQDpKFUKWB5fglT165iaX4WZqOB44/eh33D+zH3p6eR6cqge3wIbtEUcmAaCtg4RBFqyE1ItPwEmPGdKuPJRQK1tB9Wh1mOAsqSnG5lPoD0xxWegXzB0zHiF4tIINH+O4JqTGs/sjbniiC2FIpVKD7QVjiY6AvZZEAmGrdceFIBIO6TZqDider7EUQdkQDMvTwVOQbvFaCnIsKldoDbeib8MSxPeiD+Voifx2ZJLA6kSV98DT6v1rIs2HkDteW8W1kqI1j1aC3NdK8G1rU/vPRXmKwswHQMNI0mvnzks3g0fhy5Wp5xGqdFt78QfZE+g7UpDuVMGMiWlvBa8aw7WV/93wu10m/+uIfx/dYBKAyAHwa3oAirEUDhAGo1eCsnIQUMthcAxQuIQNPioUBw/J8d/eyuBwdu115dv4Jc08C9J0awY3gQ155Zhm/nMPo+vg82iYJCIXjdEJ7/6jfRl64iHIri7Reuo75aR9ibRpKwAH8IcR+lAomnTCaJrp1RpPeGEMz4YC15mCq8ubCMhYVFTDSu4eADJ4GDPZiamsb85ixi8RBG+vuwNHcdHYkM7r//IX7wUpcQCHqRSacQikXQNMRsne5Ooad/gKnLtUoFuXwOC/OzmJqcRG59A/0j/Tj5xGPQLlRhTqyj99AYvI4Op2qLZGC6/cWJ5bmdSX7UelMhkOGn/OhXgaEyL0C8i/w18QdgJ0SJvkkdAScLS1kuc3CEHoE7dYLW1WdWSkBFPlJ6ArY1k226YkLSDk7RlOiA+z3Qe4jQJdt8xQFQ35JKCCIwk19HK05p+ilGemkjLguLpEJzn8DpKqK35w9n09DSdDWfRyMVpZGtob5SdusrZa1Vc9x4IIEbhRnthcpZvFg8515dvK4d3HMIly6eJ2cg/JOjn8f93v3IVrJiBGg6aDouA3/k4eC0TFh2Ew3LQKmxhrdLZ3C+tHih0Kgc/XFFQe/HAiDK/vdjAermVwVgeyeg5n8FCqotgDrwpBakt1F4gMAGNC011jl86F8e/cWEX/fhbG0RJ+4bw55MD659aw2end3o+eJtCEX9INXst5/6Fr79F9/CoUQPPv7hB7Awu4FLby0g2CBSUJLxgxAXgTDnASRCcXT0xNG1K4zobg+8Wgj1VQ2lxSI251cwuTqFRsrFbZ94GGv+Ouan5lE2ikimY6iVNqDbNu6//2FEwlFMXL0Mny+K++6/GyG/D1NTN1AsldDT142unh6kUxmQ4qxUKqKY38D01BSmZmbg0zTc+di92JnZgezfXEVmtBfpZBpWviEShnQv7/3pka6DnIWYDsdxWBSswvevTA0SUlwyHFX3kUrwFe2zeL0K/qNaoIZx6RHAwJ6k8SrZMHNrZcevgLytTAHZTMjpoZ3tJ25qEeaBzgD0FKk4pTcg3/bUFMiU4y2JsPARFB6JKlNIAIa89uPufys9yKWfARUBaZLGUxJ9UHOzBmOxpDVWK3DqTc0nzCO012oXWt+dfRHZYF0/deq0u3f3XnSk0tpGPsu3/aeGnsB9wcMocgcgVoFWkzAc2gCIEYAwHaPpoGgv43LuPM5Vl4xwNZOcxruag8i259Y9wvu1AMh+8b8ABJU8uH1NqA69Mg9t9xNU6kAqAMo8lCLJlXw44vMH+j+2+5FdXxj7oP+6u4m+owGMhYaw/LdF6GNpDH3lDvjDYfyv/+Zf4y//4o/huE30x0fxK4//LA4dHsGpF6exMplHjFaCXnIQDiFB0WLUBQSDSIaT6BwJI70/iFCfD82cjvKSgdJiHmtrmzhfnMTYiX0YePggFjbXsTq3DM3fwmZhFVa9jH079jBPgNaChVIRQ0PD2Ld7F7x+Hy5NXGMS0M7dOxCJxOAL+OHze2A3CBCcw7lz57C2vIadB8Zx/6OPQ3szh4DtQ7ovg1bNZq6ARyfdgeLOC5quRpsB7viJCk23sC3uahFJzLjD1rAvPLXVCRYtNL+NvIJVpyDRQsHsE79e7gL44SsfptIbkF4uugnFgWtv++XIot7NcqEFAb0vwrRusYATDtCsJJRfHmN4/DIPg52CBKTyEWUBEDafIjGJxwEZdOIhZ+UWnGLdbcyX0Fgra07dRtQTcMmQ7NzmZOuFxhntO9df1kythY5kyrUNSxscGMDq6pr4ZnTgeGo/Pp54GDYBfU2LVaJ2i/6mBCEaCci2nSLgLOStFVzKnseVxmotXO5OT+BdzUF+qgqAKjiSqf2eJ5f2gqW6AOUY1L4JUAWg3VFYyYVVIVAEIbUJaC8GVAAIKIxpmpboy/Tt/cruT3b09Q7Cv9/GzkA/im86aKWCuO1ffxB//tzf4Dd+7Z/CNAz4A35+wN63+yT+6Wd/BvVaE+98dxJOSeOY8agvgaQvwh0AiYaiwTAy6TBSwzEuArq3BWMNKK3WUV0rYzo7ixU3h70fuAPhvV1YW95ErVLDxNQ5LK/cQH9PH0VJM0+gbtVQq1m46847sXP3GGZm5lEoFuHRPEikUugd6EMykeR2fXV1GZfOX8SFCxcRC/nx0Ec/iNFmH+yrZSQGu+Cp29AqFhuD6GyYKtZpcujlOVmRi9golJ5nxKvtDz0rL07ulWVrzpo8Hi3ELX1zNShBRAb/b8aZiYMuCof6t0L8RR2RQwrLFBkIEJ9K8RWIst0bhJ7xC29EBgDlQ0l6AoiOQKQD85BDCJ640QXwR10BfWglMKLNB/sWAM2y4dbnipqxVnGtqq354HGjoYiW9Zbwjdnn3Hfyk7iRW3Bnrs7od548ifn5OYzvGEcikcD8/DwM02BG5R2pffh0+oOwaO3nmLQ2hEkYAs3+TYEFcFSbp4WV0jRmi9dxqrFYX6nmUwDezR3o/3cF4FZFQOEBiiGogMH2tWC7RqB9FGgvAOrfChSkQhD1en2dR7sP7fqZ/Q+Ehu+IY1doDI0LGkIE6H1pD/773/5NnH/jNfT09aBYLCNXLCPkT+NXHnoSjz54AJdOr+D6O6sItsIsFEr444hSGKgvzJqBeCSMTG8Cqd1BxAc8MKsaGnkLjWwD2VwB06vT0LtDGHviBOo+Yex57tIZPP/K0+jv7MXY2E6k4gnYmoNsNo8PPPgIjh2/DQvLK5iankG9VsPY+CjGdo4hmU6iSY7ClSouXZngIlDY2MTR+4/izr13wXOxjmgizhHppBTULR069bCcaUuHnNZ4kvvOHB3JsJM7fQUXCMdhGUbCCJ88lAJEkLpZmRjUEqQeYVWu+nlxELeYPIy3yzgvPonqDIuTLhYPYlPBZUrK/cRtDWhkkz4WFVsK9uoQ4CMHfDLFWRiUiHwAwdzjpmYrNky+hL4OLjJNOGUxvgU1AAAgAElEQVQTxkodxkrRtUomw5uJYAJFs4SXS2fdr11/BhOrUzh88BA2N7KICmt37fqNacTj1GjC7evt0xLpJK5MTuLJ7odxT4hGgCIXAbJto26AHKApP4DWgASxUH7g7OZVrFXm8VL1eq1g1TLgndMt//xUFYD3fOVve4f2w6/WgAoYVMQg5RrU3gW0OwepQqC8ArYXgHZQkAsAdQLRYGzsAztODHzw0aPYn9oNz/UkEv4Y3gxew2+/+rvoSsTQlUmjUqnj9MUpFIsVHBk6il/75EcQ7wjh7WevozhvIO5PIKJHmRQUpahwn5/Xg5QylB4LIbnTy1HgzaoHdQoqzVawvrmJmewN9B3Zg8jxQRaFZJey+MZTX4PRqmN8aIw5AgQQ1U0bH/3wE1yM3njrLeQLRXh0P/Yf3Iujd9yGaCyOpmmgbli4MTeL6anrvFGIp+N44IGHELrmIOqNIuD1wVOwAYtyEQQzRrj8SFcd1abzpkwcTDGDq9tXNnn8PqoYSKsuNcvTm0tSEK/eiEEoP5CA1eijibZbvFgUD+bb8PNCm6+qhEDyVZ9BN7f8ouigUxHoDcHTFRQCH049ll+z/AdRdrc0AmyXJrsF6YIkNoAuSPthLpRdc7WotSocItLyaz7KXcZbGxfwfPltLHuK7pWrVzSnYSPd0eHWahWcOHHSdRxLKxSKGuUwHjx0CHefPImp6Sn85699HZ8a/jDuDh5CrpZj5p9DeZIOxbfTk82/Bz0AVIw65tauYKOxjDfM2VrO+IEF4N3OHJ+l9zMG0H7w28eB9gKgwEDFFVDbgXZOAB14OuhKI6AOvXr5FibQGenc+d9+6mPJY3170LU6hM5AJ/6vy/8vvrP+Im4/tAddqRQfrMtXZzAxMw+fG8Enbn8Yn3nyfiwvFnDmewvwNTzMCgzpYSSCAQYFaS2YCkXR2RNHfIcPkX6KDvPDqLdglgxUs1XMLS9gtbqBsZNHoB/sBMwmnn/pb3F64nWkwnFYLshuGtFoHMduP8YMwBtLs2gaLXR39+Ajn3wCo+MjtIjjmb5arWF5eQW5HPEJ1lGuFHDnA/cis+RHvBlBWPcyNVinIEzy//f6tnj1AhRUh5LyCOUMzrLo9rlczPLiDBPg1jYT8MNS3tgCQOCTK8YD8fZbJ5+JR2J+Fze//DfN7copSCzepIyZFhYiwouCWunWZ5yCNgI7UtCIgEniHuYPKD6AJBFJnr9Q+Ak9BD0RP5/ex1gqw16qsimMazquzxfUrKaBU6sX8bWr33XfXj+vxTqS/KWaNdN94N57sLiyrK0uryIcjbjpdFI7euw47rv3Pre/f0DL5bP4k6/9iXvq7Xe0zw58GLd79qJoVWHZltADUD4D5ze24AkJUVClWMb17HkUnCzeMRZrWavSAcB4D7fr1rl/PxcAVcDa14GKI7CdGMSZNNJLoL0DUOQfVQDo0NOBj+q6Hm21Wu2AYGh8dHDwyZMPDIx5evXDOIzhjgH8yzO/jVObl3Hi8D5kC2Wsr+cRj4e5EFyZXcBgaAz//KOfxI79HXj72XmsTuQRoiQhNyQ2AjRG+P2I+6NIJ+Po3BFCdMSHQMQP29ZhUZtZaHBO4fXlGXYR7n/gIHwHUrh6bgJ/+c2vsUOM5ThIxJLIJDvQ292JYCSG4f4BDPR1IxqPYmBkALsOHuTHSL1WQbFQQKlYJt9KrK6uolHKY+zgHvTUk4jlfAg1PXDLBgNj7PUnWX5MrVUBG7QJI22AlAbfbNcV604y+9RaTkjrhWHIllvvzVZfOA3JFp7bemU9JNODVN9PtGK5viPerdjC6RzKyp+5Lwinh7IDdWhFC+6CCZf+1lrw9IXg6Y/eDAKh3b2g9YoDT+0BdQgsAeLhgk1SnVwDxnwJTdqOuDp8uh+NZg03Gsvuf555XptoTPOGZXV5HV0dXazu7Ozqcru7ut1AMKAnk0m3u6sLd508iaPHjtH3pl2dvIpXXn0VL73+CoK61/1k8kPaiN3tFs2S5qgRoNlkwxmybSOBoW06WC+tYalyDVW3jNPWYj1rVNM/YAS4VV143xYA9c2o27+9C1AjgSoC9DoFArZ3Be3bAAL61OqP3YGoG9B1PdZqtejlqgBsMQYfuOvYoG8j0PnP7/g8jowfxK++9K+wZK5h12A/3jwzwR5/FDiSSER5tZNdM/DhvQ/hFz5xLzbzVbz9nVm4dZ1JPAGd8gQICwjxGNARTSA9GEdq3I9IdwDweWBVXJjVJprFKkqFMmYWl+BLhtD56F7YaS/++A++iu88+01oug9dPRkMdg9haGAUgz296OvrQSqZRDAcQjQWxtCenegfGmTn4Fw2xzMmbS02NzdQyG+ia6AXw1o3QosaIsR8rJqkapFaABe6l2ZnZeAhlHLiVmaPfOku3CawYfcPNTuLX51Qxclfo1Td8VuoWVy8BR8ykWOoHqtSnbgFHnJGkiDhUB46K258cG9PwR0MoT5fgFZrotnpg+71wH+qAm3F4d+od18SnqBP+Buw05di/ckuQhYFUkI2sw3Ul6pw1ir8/fq8PtiOhfMbE3ilfB5PTb2MjVIBB/ceQL1cQXdvj0vt/eTVa9i1c1yLRGMYGBhwH374Ee3AgQMu3exXrkzi7Nmz2traKhYWFlBuVNDn6cSTwYcQbYZQtSvMLaHfD21dWT5MwmCriXI9i9XyHMpOATXUcNZarW2a5R+EAfzAxuD91gHcqgAodqkaA9qZgu0dwXYDEcUNUIf7JglIjAT0RAUg0aYYjMfj0ZReCwz8Lw9+xf/gbcfxWxd/F6u1LGfHXZicFjNrq4lAwI+OdByOriNpd+OfPP4h7L19CG8/cx1zlzYR8caEjZiHmIIhNvlIBOPo6U6wi3BywAt/wgOLcjrKOsxKHW7ZxkauhKXFJQQG4uh+fD+urM7i//ydf4v5xVlEYxF0EzuxdxB7xvZjsLuHOf8UnpFIxxFPJbDr0D7EaVSpVFCrNVCplBhZXltbQbwzif5KGuF1DQmfD1pVxISxwo/bcLqJ6JKk1pnmdSnVpRtZ7MdEUWCoQDHuttYAosVnhF8ZGirYQBx6riXEMKR1H2kQyGFLSY0J+FMs4y1lL72AZM6UydeCdiAOd2cMpb9dwOKZaZQt6nCA0ccOIj3eBf/FBpolA96OIHyjceF5QEQk2mryOCEBwpYNp2TBXKjAztYAU2PzFWLgnctew1MLL+FKeRpW0MWNa7PoznTA4/OBXH4PHDzo5nM5LdORwb69+3D06DHs2bPbJVDv9dde015+5VW89dabbjQaQUemQyvVK7xNucd7GCe0A26xWobVsjS69WkEYHNWOv6OiXwti0J1FbVWFVW3gUarggv2Wm3DrPyjLgCqC1DwMT1E28eC7Z3A9iCR9nWg8gegw08HXz2p0YCej/p8/s6f2/1E+jN3PaJ9r/kGzt64hrm5DXj9YRw7fhRzc/OYmLjI2XzpjjjcRhCPjNyDz/zsnchlq3jjqWme2ILeCIKuHxE/yYUDiFIXkEqgezSD1JgH4U4fXL8Ou6LBKelwanW06i7WCwUsLc4i1JdB/JFd+IuX/gZf/7M/4BuDYsZHR4Yx3DOCge4hdHV2cvZhXTPh073YeXAv7nrwJN/C9WoFpXKZ0eVSPodgOoKuGT8imx5Egh5oDWsL2GMuPI/zMo6bu3ip3lPcei5+pIlRQKEwFeUbXZVpfpUECuXaUNz04g22CDcy0ZfeUThtyrZfzv/sXci4oCvyCiIBuHd3wJjchHOuAE8mjFZYQ86pQOsNouOeUfiDAdivrUO7VIJvRxJagvwDdbjkNERnn1yPGg6sxRKM1Rp8JInQNZR8dcxVl/H07Cu4XFvAxNwEkpEE4yPJZBL79+/F3PyC6/N5NeJh9PX3uR964kMYGRl1s7ms/vabb+LZ557D9MwMMukM8sU8BocGQASgbC6HQ6Fx94n4g5rf9rrVRk0j6y+iAFMRoJ+HZdZQrK2j0MjDchuw4KDqkm+AiXPmSmPdKNEI8F4wgK2u4P3aAaj5v30UaH+ZKgLq+7uVfRhtAVSKkPpbHXRVAJKyCKhxgJ4nhmB0MN3f9esf/Eyg0FHGs2+/hYW5DXzpl34Z9z/4MMr5HH7vq/8PXnn5FWQ6yVzUg1HPLvzq409g/EAnXn/6OuYm8iAfuKAeRtwbRtwfRJgchcMx9A+mkR6LIDoUgD+ugbvwioZmzkHTtKA1daxki5ien0Z8sAv+k334o7/9Uzz99LfIzgNdHd3o6e5Cd7oHqWgK8WAUTd1FMpHGyI5RHDh+EGM7R/nmpBw6MjrZ2FhHoq8TgbMGOnIBhMManIbJM5RIwCDQjOzPqACIHb5qnQUgL0Q0fItKxJ5Bdkbi5c6O53WZziMJOWJCoDwNJdcVY4a47gVSL0jBsgAosE/SjPn1RhMYjMLZn0DrRpnbdM94HEj7oaUp6s0LxzC5CNlns2g9syo+bdgHT8oHPe5jH0GnaKKxWEazYiEYCcET0nGpcAN/du1pPD3xIkLxMIb6hmE1Gkz1nr0xg76+XuwY24l0Zwb79+7Bjp07MT6+A4VC0X399Ve157/3Aq5everOXJ92Bwb79cHhESQ6UgiGAygvF9zeelo77t2LmBtD0ay4LdvSbJtEhbT+M7W6WUaltom6U4PlEjPQgKE5MFsmyloZ1+zNSrBR6pr7R1gAfpQiQG/Tvg5UmMB2qzCFC7QXAGr/6cDTE/1bPU/FwO/xeBOfe/yJzqGxDv2pl9+Azx/Gv/yt/5kf6709KVyamMR/+Pf/AZNXJ1mbn/J34+cOPI6PPHkEyysVvPxX1xihj3CeAK0EyUhUkIM6OlLoHk4iOe7nLkCjr87yolVwYeYd2I4JD7xYLxawODsPbyYC90gXvv76n+Gl116EX/MynTdGNmGxOLpTGXSke5BMJBCNh9HV14fjd96O7sF+WJaJPDkLFTaRiqQRettAp61BD0iffDgSgJfGHEL9Km5kVgmK1pk98KVk+CYY2OYaRAVDxooJkZ2E2CQAwC242C0IlSHZkskbnl/Dikbxsi21IfEHKLAk7gfu7YXbFxTGI1EvKye1Rgt2zYSzXoelNzk01XxrA6Gsy+QoNj82bLFSDGpomjYDgRFfFFmjgL/eeAGvVS9iObuKpmFxp7axsYF9B/bD5/EgHIli75492LFjHHt27XH7Bwa0+fk599TpM3jqqafw5htvMAYzMjbKdgjp7g7MLi1ouqXhcHoPjkb2oc/IoFo3ULGrPG45jgvbacCo11Ctl1A3inBcm1mApuvAhglTJ56CgQUU3UWt9tWNwsaXb4It72EX8D5cA27/7m4ugcVrFA6wHRzczg1QgSLtseJqDchbAHnz07+JZaXAQNEBiESiyNjIYNfdxw9F3j5/GcfvuBe/+uUvY2llDf09HTAsB+fPXcZ//OrvYG5hCYFQHPcP3IOv/Mwj6BiO48VvXMfSVBGhcIjThchGLO4JIugPIB1JoK8/iY6xCOLDAXg7yQtPh17XYW+6sMsGbNeGx/KhUjcxce0iLDKQ2J/GM9dfxZnzZ1CpF5GOk5VYPzLxTt4QdHamEQ5F0JHKYPf+HRjZuwMUUV3YzKNgFRBacdB3WUMipKPlFwg+24KojbHci3O7zvM+YQByty9tdtgvUDL9BOFOuO2IG14w8Hhm50KiZn+ZP8ALBhnTTZ/ZFXFfrNtXgR6K48/v6hG3PyH7HxmDmw6hVagzcFfdKCG/lIUxXwBWDUQeHsLa1UX4LtWxc3iMCxhxfPjjciKSzvwKwhwaTQt/MvlX+E83vgM/OUPXHezZu4vt2I1GAz29fSy6euwDH8DI6BiDn/Ozc3jn1CmcPn0ahXzBnZy6qtFIceDgXooRRHdvl5uJpDV3zcJAowMj+qAbc4NatWm4DdPUmnS4GzZss4ZatYCyUYHTNCmCDLbbguma4LfRyBnYhOUxMNequMVg6PjC6tUztzjL7Wzb9k5fvVz9Vt9bxfgpe+vtBUBtAiSuzB2swgO2C4YUcUh5AyjHoHYAsL0DUGPBlmAoGAymjh7Zm1xaWtc+/bkv4Iuf+zlM31hAnMC4nl5cn57D09/9a/zRH/4RW+uPdu7DLx/7EB55dBeuXMnizAvzPJf7fQEEm16E/RFWCSZ8AXR3ptA3kkJiRxihcT/5YQK2DrekwSqYIBfZpkmAmR+2x8XMtUmsZbMoZzyYtDdwbuks1tfXkYonMT44jr6+QfRkOtibkIxLE11p9A50waHI8ICOcCwC78trGKqGEE35WOnH/vrC65I1/wIoEwIaJsyw242c81nDL8k11Amwd7YIC1GJXIy3M59e7vO5zSdfTXb/lFJcycPnEYO+aVUo5JihwEIRQAbd0dHw2NgcdOAdSyEVTcN9fQPZyyvIlYvQaTuwJw73YAzFF+Yx5utHOhxjExHhzeWibNawVtnAUnUVlqeFa/UbeH7tFAVGwCg10Go2kaBk5mQGJ++6C3v37kUqk0IhV8DK0jLePn0KN2am3SuTV0gljbGxUd6W9gz0s3dkcS3vjoaGtH2+UYzovQi2Qqg36qhYVY6eo2CQRqOMRq2GRr0E06m7dqup0YaGNkl08MkO3CH2oceCpTdgeZs4lV/Ap7/40WO/89U/+kddAFRNamcGKiZnOyDYXgDo0aaeV7Jg5Ryk5v3tI4AqAGozEA6Hw8kjB3dm5hbXtC9+8efxK7/0q1hcWUW5mMex43fg0sRFTM9M49//7v+NS5cuI57sxsdGH8PPf/huWIEWXvv2DOqlJoK+ID8Ywzr5BwaQ9IfYNah3MI3O0Qhie4LQ6bNSa2xqcCpN2MUGmjWHV0OecBBayI+NlVXMTk1jo2liPljGgl1EpVVBVzLF5qYZfwpeeJBJpdi/L5qMItoRg9/vR3S5hdR0Ff3JKPzREK/OPBzvLcUvdPDFkYHDJBnB1xfhN0IUI73wBdWWab2iSxCJvByouaXFZ969bOdJ88+dgWQSskqPY3a8HFTCOwauD/RxFCFIUQW9LI/dyG+iojsIHO9BLBRFc7HONGYno2ElVkHzSgE7q93ojKeZVVe2algsrWI2v4glYwP5VgXpVAqpUALfnP4e5irL6E/0Mgdi1+6d2L/3AHbs2oGerh7WV7z15lt47bVXsbq2yluZ3bt2kZbA7e3r1ep2w13dWNWGuwexIzyKca0f/ehCyPKx9r9u2WgYFlzbhlWvo1YvwyATEMtwraajKS9ASnqmzAlaA5JAydZN2F4LTd1BWbdx1dz83h/+wf/4uUee/LUNRb/a1gl8322vlq/tl/j7GQRsXwm2/1vhzbfaCiiCkCIFKTpwu31Y+/6f2n/qAlRXQM/TE68GvV5v4sC+nZ1rm1n9sz/3RXz+859D9P9j7z3gbrurMuFnt9Pr2+vtJfcmuekFAgQC0ptgQldALFRF/UTEEhzn03H8Rv0pjjOfCIo60gYdwHGQkkAg9Sak3JLb29vf9/S6zz57z+9Ze/9vNtvz3ntDgkqSm9+b0/teaz3rWWs9K13Aw488gGfdcL0cGGfm5vCdO76NP/qjP5aIddXUdXj3DS/B7msncPe3zuDEgQpMkw3eQNKLI5NIoxBLoJDIYmJ8GBNbcijsTCA+bUCzNBn58Jo2eo0+3HofTou1+h76SQux4WGZG5979CjmTp1BPWlgIdNCI+5JXTmdyiKTSmEonQblPhKZDEbzQ3AOryB7pIKNI0PIj2SRiMdllbjs6Quk+vwSnG+kfpnO1wN8rO/edxQijxUYt9xXxmh9aTFasTTc+At0z8pyCZIQ6TEavGoA8tuAvX6w9VeEOnzlIeUofKfh/9x630C13sKqXkVnQwxu3oLDQRqnD2vOxmyrgFg8gTOVeZyuzaHk1LDs1tBCCxOFSWwf2YzthS3YN38Qv3/vn0vVZMeGrdiz5zJcefVVmBgfxb5HDuCee+5BqVzCgQMHMFwYErHVdDotq9rr3SYKwwUvYyQx1Mlo2/VN2GRNo2Dl0O3ZaNgtj119vXZL4+/WbNTR6TbR7bc5cu05jqt1WYKkFJiIgbJNq+//33Bg0wFoDvox4FBpCa95+42/+Tv/9VO/tQ4qH2Tb/8IhPNUcQJgHCCMD1Q8QJgXpDBQHoDgBNRKs5gOUwSsHMAqANVfpEdB1PTc7MzneaHWMd7zjHbjpBTfhysuvxCMH92NidBSaaeLo0aMwTQ8f+MAvygz+aHEz3n7JK3Hzq6/E/HId93z9JLpddiwZsFwLSdNC1koKcz81NIypjQUUd6WR3RaHlvKlqzXbFRQgJFfLgdulUKQD1zAQGxuDmYmjPb+K5f0ncGpxBQ3DQSenIzk2gqGhYWi5JGKsAJxeQXNuGbmai43DBQyNDSOWTECPm7L8lIrdNDKR/PIXYvgkHINwMBEspB2jdLBxx0f4wRINGnzQSus7CzoEGnAQ4WXPXtDJR45AIj7vxOlCqgTxvgE68FV4xImefQxlyISM5Hvk+RicbgftbgcdyyNdJp2U5WYJS70Kqv0mXGqDZGLIpQoYT4ygwO1NXg5pLy6LXv780Ofw1fq9eM41z8azr78e2VwO8/ML2L9vP+6++24cO3YU8WQcjVoTz77h2WCPf3FkCPVuC3apg43eOC7P78aMNY6knvQ4wdfoNjR28Nmdjue0W7AbDer6adT373m2yIgR6nPph+32RHOBgiCypU0j/O+jZ/hpQHo4gQ76uOvU0c7v/N7PvP8N7/71j3Px2AAn8LRxAMroo8hGIYHgkPXXUISqAjyv1omxFyC8S1ANBCkHoNIBOgDWXKU/QNO07MjI8KRj98yffffP4qorr8Lll18mgxzstBseGcLR40ewY9sO/N5/+s/4+F/8BRKpPF628aV4z+uej+ywiTv++QxW5pow+Gv3dVgGm4MSKMRTGMkWMDNdxNiuHHIXJWENcc6+72vytx2ZCnQ7Hlwigm5fWGzq52ljRSRHi+jVO2ieWEH18GlUV0twdE20C8xCEZ6lYeHRA0j1PWyYmhRFmng6CSsZlwWk3DHg4/xgW68SxOCorBB9hOhUBpJMXCKxFAclKpMLCPgBRfyJTBadgy/S6W/b9b0I+9v90iGdjD8Z6EMNX5nY7zEK0glNh0FyUnJ4zu4Huvueho7joNqpYL6yiOOVeay2K+gbHlJDOYyMjEhJdEjPYSReQNy1YPX4nfuz9vQ/lXYVn65+FcbOLK679BrpmJybn8P9992PgwcPyFTlnj2Xy3j08soiktkMGvU6JpIjuHb0cuzIbEK6l0aspXu9vqO13J7X63U0u9mBXWug266j2235MwVuV/oOJM/3WPfvoS1iK37tv6/ZIpnWN1y4Zl/KfvF8DLuu2oLDJ+bRznt7f+N33veanZe/au48vNw5g/xTAQGcK6UJdwmGdQPCxKAy/PCI8HoOgEMX/BNykA6gmC9O99y++Ys/90Hs3L0L4+OjmJqexuL8HCwrjtOnT+E5NzwbX/ryP+EDP/c+rtjDZRPX4edf+kpcefUMHtq7gMPfLaHb8uD2NNGsSFoGclYOI0l29g1jelsRxcuTSE2b8GI+vaG3AY1bezr+dBq5ALfjoNdh04ABZNKIDedg5hPoVbpoHpxD49giurU6jJSFbj6B04snkNcNbJvYCiORRiypI5ni9mFG/6S/5ksgP3NQj9u3fFgeDPqSAJBugL4rs+uyl4OvLb30gfCG7BEI0gIqDbNyIN3FLkwuK5HnFUFymKIOzFl8vy/AdfyUgBUPOh1Tj4kqbsNpyQx9t9dHpVvDYnMVpxtLKPVaMGM6LHZVpouYHp1GIZFDBkkUkIblWdB7PjnpD9iQVvN7nWK6iWPdOdydOYTYeAblhRXcc999Eo3HxsYwt7CAXr+H7RdtR6VWw0iqiJybwmRzCJuTGzESyyERS8Fmua5ro9vteHajrUm0b7XE8D2KerqB1h+XkFDzj9FexD9J9pHoc3yEZbAK48KxmAhQdbmPLXumseWiaXzt3odw+Y1bf+mXfutP/7/zRP5BHIB6iJruOI//+OG8OezY1Hll9KpUqHiA6HLRcEswEQAjvuoDoPGPBWmAcAOZbHZKh5Z47/vei2c/6wY2b2DTxo1YXFgSuP3o4QN40U0vhGO7uOUtb8I999yJqZGdeNc1r8TrX3EZSpUO7vvWHEqLbXQpx01ywWBXYAb5WAqjuRw2bh3G2CU5pHdYiOX99dsyp24zDYCgAIfqMS1HiCWvDdgd9uZ7iE2PQOeikB6oWIPmoXnYyyWYE3ms6S10F1axYWgauWwWRlzzDcgk7DbgWXEpl0neTmZfunH95ZoC+QXiy1qcYFGq3+pLqTyWxriWw+DzMLLpBhy7A4/0uGGi02hLK7JnulIDb/e6Un6r222RG9OsGGJWAoarYVjPyE6CM80llBoVlJpV1PptNNBHKhnHxMgYsqmCDOgUUjmkE2kkezHEuro8jv0Hvlgv3a+/sYi5tb+PyNf8i3sW7qg9iM+vfY0/qr+Km1OA1AbwXLTdDjZMz2DYGIJV1XBJfBMmEtNgMkWQQ+WertODy8GhVgftWp25Ppyur+nfd2zP61MOtM/VglrfpeCHA5vRXlCA328R103pWejoHTimTACIAxjbWMRlz70ICwtVfOX+b8295EevvfZDH/2L+SdQyn9aOoBBvEC4OYgoQLUG0xGEUwA6AaYAk4EToANIp9PpWdO00q/70R/FL3zwF/DI/n3YsWO7HDhUwF1dWcX0zCQuueRS/Mff/l382m/8KlKZPH5k4/Pxvje8DJMzGdz3zdM4uq8k6kGMoHHNRcrkDoEUhpMcJhnCzKWjKFwRR2LUEEMlCedSAqLncSwVbtOF0+kLw631PNle7HYZZQxY2RT0dBJmIoHOch2dowvQYzpKGRdrq8uYjQ1jqJiHrmsC/ckhkPHvdXrC4utUOTJ1KRmyIUeUfXn4UBRU92T0eKW6jE6/i+BEkZEAACAASURBVHg6L2O/jHqlbhPlXhsxy0Sj2cBqtYS210fCjMnBXuX2YqeNhfoSVptlVBot9EwdzVYDyXQKqUQChqdhW2YKl4xuw2x8HEY2hmwxJwiJa8xiMBFHDBbJQjb1MKtgtsBFqDLjQ0MPSpYS74ku/KEEXyKQDkyDq7v43Mmv4FMHv4CkG0cmm8Hk7BTGZ6awNr+EkUYWu3JbsXN0J3JuAk6XlQk27riCDJxGh4y+1+u0tX677dk9RyOs71Pay+FmH6738ohm2OWnuV7fc1xHY35Ph0TNyYbRwjzWvFW3rA2bKUzEhtHVesgWM7jsuTuRyaXx+f/9TTzrR1/8nl/48If/LMj9tVtvvVWC3K233jqIC1gvhD8tHEAwl+qj5uCbCLcPK1SgUADTBCUdrvQAVBWAef9U8EcUwMvZTCY7ZRra0Mte/nLtv/z+H+Do8ZOoVEu4Ys+lWFnjLkEyvB6uue56fPy////4uQ/+PNo9G5dPXo9fePmrce1zNuDAg4s48MAy1pZtOEIIakjqGtIcF44lMVUYwbbLJjFydQrpTSYMrrwyqBIDeLYHl+u8Wn047WCdt20DPQ29Xh8gQiDZxum+eFyiuVNuINUH9tUX8KlHv4Gm62CiOCblQG4RYqTPpFPIZ3Mi81Vr1WQwpZAriLGvVcoyd0Dz4agxexkq0rXWQrXRgGmYGB0exqmFeRxZOINE3MT01AyWV1Zx6vQpQRBsgNqyc5usVjv06KPI5/KYmJrB/NxpOI6NTCqL02fmEI9bmNq4ASnDxOt3vRRvvuxVkk9zTJkDQLK0w/HnBcg9MHWQagUNnXCaA0tSTfCjPw2ePQoyqxTsAbCMGFacMv788Kexr3oI+WQefdvB5uQMnjVzJcaMEeS1LBKaJQ1ZHL0mZHe6DnqNFrx2G3argx5JPSIGwvl+F12KeBDiO45n9/2ZPsejnnhP44iVcCaahpbe9I6ZizjuLGqr/SpipoXnZ/dgQsuhm7Rx8XXbMb1tHHvvOoi/+9Zt9//8rR96xXvf+95F2TesafjMZz6j79+/36MDoDO4QEfwlHYAYa8XJgPV9eFOQUUMKtEQVRpUDkA1/hANbAAwG3AAdADFRCI5kUjEJ6+88ir9E5/4JEbHRvDN227D5CS1+grYf/CASHJnMknc8e078bGPfQwnTh3H1PBF+CmmAa/Zg7VyE4/ctYjTJ5poNx0YmocYDCSpFmTEMZotYNu2CcxcU0ThsjSsnA6NAyxEAZyEbZEA7MvUGvX8aVRskHH7mrTK9ruerJmiaJTA4Z4DU+PH9fAnD38ZXzh0F0z4BGQsHhfyq9vpYmJ8Aul0kuy1kHHNRgvNdksqBCxrkexvtVpS1hsaLqJZb6G0topUKi2ipHQS3E6UzebR4NCR18eWDZtkSzFhdaPZRLVaxc4dFyEVj2N+cR7TU7MYHR3BowcPot3uYmpmSrTw7F4HxUwBP7nj1bg2sweNViWoCvgLRbn4RFqM/QWDkorwNfyuQ576cwiiASrVBz/68z5c6360eRp/M/dFUeO9OLUZu5LbMZUch0VR1EA7lENTfRp/x2/E6jVb8BwKd7B058t4c4EnuQVKefnlPDqcvudSPdhlQQ9CYHY1D12jjVPGKo6bS+iYDuqNKjqOjZnsGJ6X3oOsbmLsshHsuGwjjj26iE9+9h/d/+cPPvr6N739Tf/A6E8H8NGPfvR7eLwLNP6z9vFUIwHXgzvRz6kuR9FAeImIiIIG+T+bhWjwE0EKwFSAKGBM1/WhbC6zcdPGjeaf/PGf4pprr8baSgkHDx/Grp1b8Z3v3CVGw/zT0Cx8/gtfwD988YuIJ9J49fYfwfvf9GKkchYe+M4ZnD5WR3mVB7IHCy5SbBG24iI9NjMxjG1XT2Di2RkkJkyB61zI2bc9eB0dlJ7S6AzIBZAcZGrAP8eTmQNp2e068CjxxRnjvoZ0MoNvnngYf3DP5zBXXobpabJGnGWuDVMzKFUqOH3mDIrZHCamJrFWKomSkGFoGB0dh2nIdmyZJ+D9+Jb8NWVxzM/NwdB1zMzOSomu2W6KBmKj3RQnSeexsraMVDqNRCyGRCKBDRs3im5ep9tFPpfD0NAQarUa2ly9rhO6QwRVn+XtQr4SQ7takxQnWNvhcxLSL/AYCSl5PpGB4iwY/YM/0RIIdAiWWmsotSqYzk7K9y3EnEcRTk0cZq9jy9xAv9lGr9OB4/Sl/0Iadcjms17PnN7pBOQeSUafLg0ckMgR9nRXW0YNp/UVLCTKqDp1EVThYlddNh4Bs/oYLo9vxOxFw9j2rI0ozbfwV5/6e2QumvkPf/TJP/1/N2/e3PGCBojPfvaz2s033yzF06gzUMZwLqfwdHEAg0qF6rqwMwhLiCu1IOb+akyYPQB0AtPBnziAfC6/uVgcin/4V38FszOzEvlp9FysUanW0Wl3UKmUMTo6jHvvvR8f+9ifotFp4oqp6/HLr30Ndl8+jsMPLuHkkRpOHWepqCc9dwndRNaKI2MlMJ4tYtvFE9jwgmEULkmTBfR395E178JvC2ZZkKVALgHmkAwjHdN4svQdR1Z9ux3Dh+8OJL8mVP7rQ7fhG4sPCWFHhFAsFqB7HtqdDgqFokDmUydPiCwY15TTQayurIhRZtMZtNodyen5uW3bRrPdFl0CoqBGo45Wo4WhwrAQXclkXPgRfsaNmzYgl+NjOuIAxscmMDQ8BNPQRAuPm4sarSaWl5ZkxLq0VkK5VUKxncLrCxTPSMMWaE8j82XExegkHfDdgqjoKi4g0P8Xh0AkFAgM8DGE65ahwzRjspZLJMFbPfTbNtx2R6TU+z2u57alJCkRX5aIeOixeUc4B5ZGe4IqSN9xqEmKnBo027O9lXhDmzNWvUP2Kc22XFhBjwOrIfyuY3EL6XQOe8xNePa2nZi9ZhSteg9f/vs7cMZtHv+Nj/3Hd9x00023M/Izpf3sZz+L0dFR7fnPf76UhugMmApciOGHofAPJ8//xN51dIZAVQZ4qohARQYq1SCmAqwC0PhnQkigmMvltieS8fQH3vdz2LJ5M5KZNMZGhrG4tCzl7c1btuDI4UNiSIsLK/gvf/gHOHXqODaMX4yfffbL8eqXX4JKpYUDDy7j8MMlVGodIaZiuoGUYSAdS2EkkcHmjePYduMERq/PwcwEajs8BmnwbATquLC5CINS3my95fV9HsR+C26fjTRtfxUWV1FRSJCaBEeq8/jc8l64GRP5TBbJREJIvlQqhUQ8IZuFedCns2kYuoGO3UUySUmzuOgJGJaByYkppNMpcQAxK4ZcLg/TokFZwi3Q+bB6kUikhBhjzZ8779i043S7KFfrWF5elPkF7jDs2l0ZAWYn5enTZ8SBEjbkCnnk8wVcm9qJm6deJYbmeLa0I6uNPrLOnO2zMkHopwKy6y8Q+pLmpEDFyJ9nIJJxfYUgx0Gfht9sizPlFCCfn/14zO/5HbKE6HqM+awSOLJ7hM5WOIdgFNIvnTro6g7mjRIO2ie9ZVTgJIB8Ki9dDLV6XTiOXrcnKgqeYWAqMYJX7LgGVzx7K9rdHr7z1YfwlQfuWXj7re97yy/+4i/exnyfRs/D//bbb8eNN94I5QA++tGPYvfu3WedwIDIr4LdWW7s6YQA1usXCPMBkqIFlQA6ADU2rNIBRn8aP50ACUFWBArZbG5rMpkovuGWN2gvuOkmGKaO0eERyT/Z7rl9+3YcPnIEp8+cFsP+4z/5GB54YC+S6WG87cpX4d1vf74IVx64ax77H17F4nxXDlVL15AyNGRNDgilMDUxjJ3XzmL2xiISU9x0Q70+XQyd8J5kYI+w39ag9WwhwHpEArYtBkCyzE8ZHJ87sKWvCDANHEzV0N9aFGFTbgNKp1KicEOSybRMIaasWMzf5WfwIT4hJiyqboqjYd7LfFhWknc7aFBroNFAu9VErdlApVSWPvpapYrl1VVUK2VBEiJ37QFz8/No1OqoVCuCEiYmJxGLWUgl4oI+SC7Ozs5Krdyp23jDxMtw9fAlaPZbEm3F8EVUxJPSmtIuFONWXYkUCJVIzR4HGjy/F3IpPfQbhPkd9Ph9UZVXyLze99TruR7db14SNWDp1GMbM8ulhmZK0a6td9GMd3C8N48TWERVb8OKm/KcbKqMJzLyBpJMd9ottNpteb9j6VG8YMMePPfai9Eze7j/jsP45oMPehe9+Kqf+m9/+eefJMF34403misrK265XPYWFha0yclJb8eOHfLB6RD4b9++fXL55ptvRkAOrlsJeDo6gKgXDPMAyjMqLiC8W5AIgHk/jZ+GrxzBcDwe35jLZ2dvePYN+tve9hNwel2MEs4OFbAwv4jduy+SvPa2229HMT+Mr331q/jLv/4r2G4fL975YvzaT70KoxMZHLxnEfsfXsaxR8uic8fFNTE9gaxJ1aAEJgp5bN01ia0vnERhZxqa0Ze59z4VcUQ6mgc0IytnBrhck+hARSwXLqWDuywX8jq/isDmI8MBanEXczMaUmNFIb7ipiZGZ1kxWRDKnNdfUdWD6zjodLqyoITNKiw9rpXLWF1dlbZZGnDMsrC6uiJRjqKji3PziMXiMkXH61zbEchMR8HUgX0I2Twn7vLiONgUVG80ZFJu48ZNoq6UyWdk+Ga1XAa3E1+X3YO3Tb9Gtv9Sa4/eSUp7Evn9JZ/k3qUqoIaaeD2doM3GiD76LQf9TleEVthsJOkJP6MQevxjLs+I7wuEulwAKKQgR5j4nyapEHv0y3oDS0YF81YJp7Eio7skW7vNtoiUUJLdMk1Z783yoRWLebZja3QmG9KTeO7YHlxy8SzcTB+P3n8GX737LuzvLh74b3/z8Zs/+pGPHHrnO98ZN03TbTabXq1W84aGhrx4PK4G37B3L4cC/X/lctm9+OKLPSKCW265Zd3y4DMOwP++wgNEvBxdKKImBVkSHA/xAKwIjJqmOZvP5y/evHmz9YH3vx+WxVwuLQIc3M930UW7MD0zja9/7WvYtm0H5s7M4S1vfRuWluexa8vV+O2feAOuuWYzDnCByCNreOTBBXTbDnTdg+maMiGYjZEMTGDz5jFsf+4GTF5XhJX3R2u1viEHLHN71uBpC4SpOmW8+po0IUlO7JAEZNMQKwE89bf9el0P9XoTXzq1F3vLxyTCsReIebhpkhdwkEykZc0YjZr1eXbDUVmYq9HZ9EM0sLS4iJXVNR89xOPI5vKYnJwQWN9qtYX8I3GYzeQwNjYqqQWrBCyIVWtNpFMJJNMZjI2Pwe620ep2kcqksDC/IAIcbqcPu9GV6cmcEcelqc24PHcZLDOFvmv7KED4AH+bseT/THvoEETui/yI45/2yIko42bqxJo+a/b8Y/chGwr8vN43EiWI4op2gLQhGy66potyoo7j7jyOdubQywAGYX2tiWQsLd2UrEiwAhC3qEfuQTMN+d7KrIzYNq4cvRg3TV2FoYm420629FNHlvHP99yFuxcP1bfs3nFrJpX4r1dccYWxceNGrd1u96vVqhj05s2bXeUAFhYWvPn5ee3QoUNy2+jo6Fmj/+xnP7ueA3hsjeMTS6l/6B89qCqgRokVFyAiIEEXIJ0AUwA6gElN0yaHhoeuy+UKqQ984H3YumWrwFXDMGTue3JyEhfv2o39j+7H2Pg4nG4ft9xyMx747gMYGd6I3/3Jd+FlL9qJow+XcHTfGh66fx7lCvNudtNROzCGopVAxrAwMTaEi67bgI3PG0NmOh7ss/fLfK6jCXnnEAVQR4w/O9tqezZ0V5d2XVGd6Xqy8ksipKNJKsDofuz0aXxi75dxoHxaXpP3r9WqwqoPDxclGhIeM2KRuMrl834JrEcijqv3DAyPjvmryGtVjHDwCDpiqQSmJidQWltDixF/ZAjtRkOcRrE4hI7dkui9srIi03skJ9kLsW16K7SuK9WNtBtDvAGMJcdQTGaRNGKI6wbIZ7p97ixQyz5JgPYFbtPA3Tb7Bdihx7Iluxj9zj5BBuRCyfC7PVnBRQafpcqzmgWUPvM0qXqw+Ym/JysdTc9GI97FvL6CY+4CqvE2mv2mpABUd6KRJ9IsHOmo1xtC0vC7MmNx1NlDQdREQilWxJW5i3BFfgu8nA0n38XyXAP/fO+9+Orxu7Bj967PvONtP/6h+++/v7xt2zYzHo/3G42GfNlEAFNTU1LV5OX5+XkxcuUAeL5er2t79+4NFiz8CxuVY/7piADO5a3C5KCaIFQ8gJoUJAogGUgHsDFIBcby+fz1iURi5J3vfCfe9/73SYyYX5rHoQOPIpvN4rIrrsCB/fsFVl5x2VX4+Q/+PD7zmb9DIpnHr//ET+Itr7sei4crOPbIGg7uW8apk3V4Hte9eUggjhxRhUHp8Ay2XT6DHc+fxtAlPMg0gf7Sb+9wfp+1ar9F12MfQMCKc+MtewO4ZsolYmA6QAORVVge+j0PZj+G7545ir/d/39Qc3rI57KSs5LUo3gl6/9DQ0WZWiM/EI8lBSHU63UsLS8Lk89+AI4Sp1IJlCtlNGoN6c3vtLtIpBIS3ddWVoUbiFtxtJstDGfzSNg6tJaGPGcSXAsjxVEU3DTS/RgK6ZzMCxgGf4pAup/Tc1Jvp1NjOzTlk3vCiwgh2rX9qE9jZ9lPmqH89IBRnbBetu8y8lNww7F9vQKNkJ4nuvQHmDqNXhPh0LLXwJK+ipVEC6vxOkp2WQQ/6FTJwVBzUWoLricj3jI0FegbGoYp676YrrDHY9IbwdWFXdg0PAo720Q/4eHI0TP4xoMP4N6TjzjFyaGvv+dn3/t7v/mbv3nfS17yEuPSSy81+/2+U61WexxsOn78uFMsFjXbZjcUiLK8U6dOfU+kTyQSHh3AVVddpe/duzd829nzzziA73UHYQegzivhENUhyH4AzgeQB2BjEE/H05nsVclkcscLbrxR+4tP/AUymQyOHT2K+/bulWESsunzC/NiKM++7gb87d/+Lf7oY38kB/CPv+y1+Mg7X4NOs4tH71vGkf0lHD66CrvrVwPiJqsBCaR1CwVWAzZNYsfzZjD9rCKMjAa37U/P+Uw3D0DCTvov5rTBym0ulyACICdA2M+I2SOb5Q/ycOtsn7qyjoGHFo7ha2cewKrTwOjYOKid1aMB9fsy/VagkRsabBJnTh/1WgPxuIlEOi1RPmbGYGo6YpqBbL6AeqkiBj89NA60XcR6OiaGR2HZHAzyUEjmEe9qyFoZJLS45P+EyWzKoeHSjsi4C9NO0o6Epgw/UdKbqQ/FUh05z1ZlOj8an2r2kRxehEtcISqFvacjkFq/L2dOspPRnduCEkYMFjsJTQ9to4s1o4YFs4RT3UXM95aRKGaRIAnqcT9kEq1WAwYNnn0AtoNiYUjSkGazJt9zOpsV1SESfpOJcVxX3I3t+RmY8T7cXBeO6+G7h4/iH/d+B4+unMDw8PAXn/WsZ/36l770pcV3vOMdsXQ63e90On3btp12u03Dx4kTJ5y1tTWiAHIvYtCnT58+ezTn8/n+6Oioe9ttt4W7YdXtzziAc8CAKCmoREXDuwQVF0AUwKagKcuyduWLxefOTk+bf/anf4Zrr78Wd9zxbamD79q9G/fcczfKlSo6XNS5eQe++a3b8fGP/3eUajU878ob8J/e81YMF7I4ePc8Du9bw+EjS7LplwcQF3QT/ifJBVgxTI+OYMeVs9j+0nGkuAWn7fmwngdyP+AF/J4SOHQAUgsLFmLywCdCULkxp9N67BpkjwCNyYPRs3Bo5Qz2dxZwYnEBtXZNoHqz1Zb2/3arLfzBeHHM76bruShmMlJ6TBi+ulFttYYRPYNcJiubkGlQFicFOxBJMt6HBFqMQIQknc6ZePbK+++NUVU2/ZC3EGfVh8ZI3/VJSMJ7kPQkcRfMHvqDPb5UuLD04gx8HkCcQtD5JzyBYCu/UsCGJU4DJk1uZzbR0Juox1s43V/Csc4p1K0uujEKBxpIm0l5fT4umytIhYDOgwQnNy5RyltWifVdcQocHa51GsgghSsKO7ErvQFD+SScVA993Ua10sY39z+IrzxyF0qtaufSyy77p8v3XPGpT33qkw++6lWvslzXtflHw+fP2e12XS4W5enKyorMWCsHECCBs3tNfazkD1pHjnd1n2c4gHUcQRgZKe1ASceDHYLsEGRTELkAOoBpXdc3Z7O5V+TzmdxHPvJreNOb3owvfvkfsXHDDGamZ3HvPXejWm9IClDMFnDnXXfhU3/z1wKTt27cjv/wk2/HtZfM4sSDK9j34CIOH15FpdoS9l1e2GA1IImspSOfzmLL5mlc/IoNGNmTE6OVvDeYDWAo0zl2z0YUjemB7ke6vg7doKAIZb3YP8/hIybRzJtZFuyhF0wXMu9u9G3ML6+g2mr4st+GIZC/VW/BcA0RLmFpkBGOWgR2rS1IR3rcaQcs97uOVAQYWaXU5mlwqAgUTOkJ+iC6YDGdOvyM8ExnSFCytMkSodyHtc5gGFmUiP2jOpAkDZqAGPX96C7JMT+y/MD+BKAsEyVhGQwFkcxjqTVuxOAYDpaNMpa0NcxhBZV4E7ZJMrAvrb+cd+A26OLQELi2i86l3e5IR2Ymm5UV3vwsTIPo9Ku1Cnq6JhJk25MbcFFyGlP5YVjpPppeG9VaC0cX5vHP++7C/rljFAJpbt9x0f9KpxKfqFQq9dnZWdcwjBaN3nXdbrfb7TmO019YWOgRXbZaLZcVgVqt5upki31HoKabA9bysSXHoePc/9qCf8+kAOfnL8PbhRQKYF8AUwFyAewNIBLYkMsVXhaz9C0/dvMteNdP/TQOHtiHXTsvQiqbQaXsS38dPnQYdreHY8eP4ZN/+UkpkeWHhvErb3wrfvQFV2D5VA3333kGRw+tYq3URKfH2QBOKMVQMBNIWQaSsRgmC6PY/awN2PzCcZhJQ3YHEAazUYVpg24xxvqcgKHpIivFGhm7E9nqIE1BzHnZNyDEoYc+BSo7HjpCnBFes3eVG2r8/gI+BTfW8no6BBKPsreOR6l0w/g5uS/ro0sUpuXRMETPz89QpBTpdv3SpQzzKAcg5J0/nisLQuiggh0EviApIXqgHSgGTVMO6v0sARLqsx1HBEr52X1dAfY7Mrdn6ZDzDlRfElUzuCjrFczpy1iL17GKEkp2RV6H0TsRT8poMUt4XbsjTU3kDWiANPQ6W5EDYRRCf0bmVq+FWruFbCyNTfEpXJLZjMlsDvEUs58Oms0O1tYq2HvqML526B4s1VZ5XBx60U03fbnWaNxz8ODBtdHRUSeTyfR6vV4rmUw6juPYzWaz0+v1WAHo67repwPgqa7rLucCWPYLDFt9y8rQ1eUo/Jfbn3EA53cA4S7BMApQnYGqLDiTSKWuyqTTL9lzyaV4z3vfj17PxtatmySiJRIsixXw4IPfxerSCsq1Kv76U5/CoUcPwUjE8TOvfT3e9YoXoNd2cN/XT+HggTmsldpo29Sqp1wRy4ExpOkENBP5WAazs+PYfuMEsrNZic6yW5cHOt+xy6ETTzbiUt2XhmMIDPa5AZbM/GjLNdS+BBd7AlihoKgIW3VJprGEyLHjrk2tgWB7DoMyjV/ycbLt/pJQX0HYV/th+VEjE8/H09DVfSSa+85Idn+qIR05HAXE+116Qa1dlpBIy/JjK8Vkmafk7fwk/j4Bgf2SvBHlmDK+LHm9rguRxzVsZPe6Wgs1r4FFLOO0O49VrQrbdGAmLSSSyYBnEMJAeA6u7YpxgUsqKU6FTU10Dp0O25dTUs6rlsto2m3pBUh6MWzLbcZVoxdhPJ2FRx0/z0az3kaz3sH9pw7j3tOP4NGlk3yMc9GuXXuHisWvnjx58ojruvWRkZF+r9drd7vdtud5XY4O8pQooNFoOJqmEQ7wtN9sNp1cLseRQK9arUahf9gh+F/096YCzziA89v+99xDIQG1UYgzAkohSHgAXdc3FYrFWwr5fOH97/8ANm/ehKHhAuyuIxNy2WwG1WoNtVod+/YdxGc+87fYv+8RWe392pt+BB987SuRz8fx0LfO4IG9p7C8VEe3RxluBxYsJLhL0IwjCRMJPYHh1AimNuRQ3JxGaiQLK5uAGQdM6zHdfYMNPYYGI64H67Cp38cuNxe9tisR3ZbuQZJsbHzxxFkIicZmnS7gdFy/PbbjCdSlk3Ka1K7zJcG0HpuMaDQ+lBdkIQ5B8w1f7fILNoIJHS9bgH304a8PPzvSI1+67AyQ6M1hn2BoR3RF/QqHHMvBZYqMMMWAocMwY6JpaJiGfEfsH2i7Laz217DkLmPBW8aCuwzb9CW32IcQ1xNStjWD/g06EJZRGfWZIumaKSIpfO1MJotO10ar1RSHR5VfRwOK8RymMYJLh7Zh08g4XN1Gu8dpxwZq5TpOlJZwcOkk7jh+P0qtGt/70rXXXLu3Vqt9t1wur6ZSqabrug3IADcnjp1Wr9frEPv3+307kUgQEZADcEgIplIpt9Vq0YWqUqCK+NHrorer9CBIjh6nFTyN766QAGtRaj6AZCC5AFUVmM5msq9Mp1KXvuRlL8XNN/+YNATlC3kpgzU5OutpXBaJr33tG/jDP/wDHDpyWJjpyy6+BB++5Q3YtW0CRx9cxnduO4alhTLaUq8nD2CdnQ1IaTEKTiJvZZFNpJFJxZEoxEUwMpYxYCV0WWbZF51BTzr5WEGjzDcHXzgx6LRt2G1/pp1OgC3D1NAXgQwapxGkAJKrU/LGJ+Z4f+mek775QCRUdgJSwsrPt0VI1PNTAKmpn62tUDvQ3/d7dq8gqTjJSP3Xli67YJBH7hmsDPPDV7CNQH4JDx4NnmU6Mw4jZsJMcpVaEvFUQqTC5xvzON09hbX+GkpuBTWdWgVUVIohHotJL4MYvsHFK0bQ0OR3QNIZkBxkExR7BDiYZMWTgijYD8Hvt1KvINEzcfXk5dien8JwPC3OltqCS6UVtOptdLoO7j2zH/echf7S5QAAIABJREFUekTgfs91ulu3bjuSy2UfnJubW2SebxhG07Kspm3b9X6/32LE5/S1bdviAGKxmK3rujiAer3OPgAaucr3lcHzWyQpqAw+fBpFAM9wAN+HIwuXBdUyERbilXS4cAHJZPI5xWL+1VNTM3jPe9+Lbdu3yaDM8tIKWq26IIDrrr0G8wur+PBHfgV33vkdMRpuk/3wG9+KF1y9CytzNXzrH4/g+KkltAnDe5xZZzkwjqTHNl0TKT2GDP/MjK8obGgyWBJPuIjFDcRipqztkm4/RlLpQPMnA6kTIHwBIbocNmQIgtW7IurpD8gw9yCRxtTBZYQNFnbKLI2Ysd9jLzYayHPT8Km4498nnGSyLOFvB/KJOz538BzK8PkehDZQyIAG76MFHzG4/hg0Dd8wxIitRBJaPAE9bcFOOljoL+NQ5RAWm3OSc3f1rsxL+PMMCVEnMq2Y9BQwbaLAqGwepHCI7n9ekTsTv2WIRDodJ7sguaGnVi3DspKYSo3g0txWbMxMwOL7hYdSvYT5tWXU6k08vHQMJysLWKuXMFdZlqnFdDq1fOmle/bPzc3NNxqNaiwW6+q63nYcp6nreqPX6zU8z+vwOtd127qud23bbhMBaJrWazabNH6pBoSMXTkDfqm8XjkGlfuHUwNl+M84gMfpAJTx++zWYxODdACsCKiy4LhpmjsKxcLb06n0yC0334w3v+XNSCazOD03h1w2JZ11Re7qKwzh1269FV/4+/8ppmTE4/iZ17web3nRs9Bvu/jOPx/FQw+dRkNKgWzx5XSgJYaf4jYh6EhJSpBGTIvB6GsS3bjMx7J0sOuUm3qYGEtDDPUD5UANFmywzVV6BWhUBlxhxxn92SPA2TQWEHy1X01kiBUAUkt8/IUBPlL3DdSH5v4/tTyURus/s5/bq1bdAAMEeXwwwy/fsv9cwmPIe2IKw3yexJzhR+eYBcfURCq7rjex6lVwujePk62Top7LMWk6Ck4hWvE4LINKx37EZ/4uqIGciaQYPkKRPYcyJOSTg6wk8DIRU7PTRLFQRM7KIN4xcPnILmxIjqPba6DrttFoNLBv/gTuO7kf9514GPVOS4Z7fATkUV6sOjM9farXc+aq1WqVhh1A/Va/36eh85R/DUJ/TdOUE+h0Op22pmniAGjcNpsvfEP356AfQwPq+jDLf7ZTMMIBnJ0feIYEvDBPEHYAfISSEFP7BFV3IIeFJnK57BvTmey1F+/ejd/6rd/C8MgYDj16EBs2zUhPfGWtjPHRSfzu7/9n/OOX/xc0w5LutFc+93n44OtehVw6jgfvnMN3bj+KcrUpBB0Fsjmkk0RCUoE4o5NBxSBek5BIRgIsIQ0tfnlLZ7srYy3ZddcBt3b7tXIe8b5OnhivMnjdh+BCuslewGCIhqy6DL34UVGGaQO4T2ehkkqB7ppa5e1HbGEwg3uwBMhKgShjBDsCZZuQIAW+X1N0BWiQ7JxjlJc/S0Oj30FDb6NOEs9sYrVXwkp3FfOdBdiajYSVQjyA7mTtafCxOFeqxYQE5HXkNpjfC18gn/MxJMOqiMilMZXp90XclcNaST2BTdlpzKbHsSEzgon0CNpOA7VeHSvLJdx24H4cWTiFY6VTXqlTl8ZM1/X6pmk4lmXaW7duK7Xb7TOrq6t1wzA6hmEwqpPUo2EL0ee6bpOGr+s6eYAWb+Npv9/vWJZFPkA5ACfkAFS0V5GfbaPh6B+tAoSj/1MeASjH9lhIujBDP9e9wtJifH7FBbBDUFUESAaOWpZ1VXFo6CezmXT8Pe9+N17xylfjkQOPYtumGSHZHj10CLOzMyIMwi2yFKFwejYuvmgXPvKmN2HnxgmcPLSK2//pME7NlZg3Sm88O+uSmklzl0hGRdqMlkTSTApVZpHxhokY+9YpsR2w475Wv5qQCxpVznbAMX33teloF5KQk0HnEAv74Am5g52rzH8FKovUro8efBvyobN4hmDcVkV7f3EHnYIv1skBGnIMPkzgMg/6Ig7aMJfX/RzbcFHpV1Fxm6hoNZxpzSE+nEGj18JqewVtvYNWsya9EZTiZqRniZW5PI2eE4ws2REtMNoTORARcIBHgMxZUpLlRr+S4U8CBoIiXh8zI5PYPb4V414eo7E8srkE6nYFy/UVHFtYwO2P3IdHjhzxztRWPTMR60xNTdQ3TG+ou67bYb9+p9Ox19bWms1ms22aZi8WizGHJ8HXowNglA9Yfp42iQDoCDRNI+nX0TRNHACjP0lBIoABxq+cAA1f5f/RFEDl/8pPf49NPFURwA/aAfBLVKPCakhIoQBWBibz+cIHEon4tquuuhK//KEPodVi2SiOZCqHhx58CLsv2oJP/dXf4H98+u8kKrGxbXikiA+/4W14wZXbsbbcwn3fPIEHH57zewG4OMt1keQkGfxaNnXuWRZMaAmR5aYDYM2f6EDWZggKCCxPeAAfyvuruAJhTGHhKZ/td8v5qlTMhxXR7sNxqb8LIlBsvZ+fcxxYrepSaMKfDiQaUKvEfcggb0UTWSxfyMPwYHt9tAKWfrFXRjNlo+JWUKqWoMVNdLgDoNeS8WpqEuSzRVRLZZEhE4jPJSaM8hbPW2L4jPaE+PInPQGB1dNRSUuCL57KeX+WJPkdxbmQJZbAtolN2DO2DZOFPGIxTlI6mC8v4fjSaXz3yBEcOHYMdx560I2lUvbIyGhtZHi47Pb7rXK53KlWqx3XX48syp80fJfQizNHvR4NncbM62jkwvYz5/c8jw0/RAPK6Okguo7j8FQ5AJutwKH8n9eHU4Aw6ef3Pz1W9ovyAWft/qnqAJ54vB/8DOHvKzwtyA5BogBWBOgARjOZzKsymcyPsU780z/9s7ju+hvQ7nBENIZ9Bw5hw8w0vvilf8BnPvd5iY59l+yziZ9+9S142wuvlUB86LtLuOP2YyhV62I4FjzENRNJ10cBcS0megFsYTU1Q1qGiQBY+iJxJ7kzTwPigucEF8pCD9U2wtkAaRrw9f/9thkZLhJCQYyejoTOgxHb39xDh0QnI0ss1LHGdd1EBazdc/02xTE0Gw2niS56aHsdNNwWWqYtu/lK/QpKqKHltVCrVUT8gyu4OTM/PjkFu9tFbW0NQ8URf7dhJi1jxn4dgYSmI+vXOKxEFMUuRWm/JfoJ0IriJlyKdcpCEH9Yh86rmM7LarDZkTHsntmCDflhUAG90WugXm/h1MIi7jtwEA88egjf2Hen1/FcZ3Zmuj0zNVPr9Xpr1WqVOTvr9NKN1+/3afhs3ZXmHbbw0mg9z5NuPl5mJFeRP7jM6+k4JCXg+SDi231KC/vRXxwBK4Kh/F9VA5QTiPYBhCO9cgDqumccwBP0EOElI+GNQmqRyJBpmtvz+fwvGYY+tmv3xXjXu35GZuCpgkOpMMLVz37+07jvnvtgWBxn1URy6vmXX4ePvPUWjIxkMHd0DXd89ShOzJWCsrffyZfwdKkGEAfQIcSNBFIGF1Sw2YewnX33upCBhP8mS+SU8SGhZ9I4/c44Rkdf6MKv2cuWHsOARWgesPviEETcksbDiTkShL6hM4LyFtvooeV2ULXraLod2FYPy+0SWuig4bXkr4kOTpdPy/2Gh0ZlNr7X6aKQKSJmmtLYQ6Ot12ow2UI7Ni5MPQ2+022Lk0xlsqjXykjEEqI1QOSkOAie98lCP/3h83HphrQSE9nAkCGj0ewINhQnMDFUwLaJGUwXikjGDFQ7NSysrGB+bhUPPHoQdz38EA6dPoVTzRUnV8x3N2/aVM/ncqWV5RXyeN1UKsUGHBo2o3ufbbqM/oz8/X5fojzP0xMEl3tBNJfTUHTnfQn1Je9XcJ+OQt1HOQDW/wPyL1wKjDqAaO4fRgL/4rB/BgE8Pk/gl7Afq2yr7UJKR5DtwUwF2CRUTCaTrysWim9mQ8kLX/givP3tPy7DJidPnMHpuXn8z89/GqdPnoIVS0h+3LFtbBifxW/+xNtx3Z5NWFtt4Lt3zmH/vjPoUtGXRul6iOuQkVn248cNA9lEzB+X1di15st3UaeP5UKpmlmUzgYsw/R7AvyxN7/ZJpDNJn0U00yB5m2Xfe1+sxCVjAhqm04XbaeFUqeCer+JFhystFbFoNsS3/voeDba/TY66KJvalyPBbtjY3RoGKlEGp1qQzrtmCJwAcnQ8KgYarPZkGEjfrlOvydjwvVqGZlcQQhUQvZ0Ko1qtQS7648iM9LHk2lJAUTXIFg/xlkLsu8UZSEyimsWJgoj2DI2hZnCMCaHihjOZ5G0TKzVajiztIAHjxzEqVMrOHDoOL61fy/K/Ua/MDzcHRkeasxMz5Tcfr8yPz9fZ26fTqc9y7Jc1uRp+J4nQv80fhq+EHI0fEZ3Gn7gAIS1jzoAFemDU6IAmcek8SsnETyux8qBGggKlfuiNf9ome9flP2ih/szDuD7cwDqUawGKIRNMpCGz7Kg7BTQdX3nyMjIr2nQJklEvfGNb8CLfuRFWF0p4Z/+z1fwja9/VQRDmLcSnjLfNK0E3vPqH8NPvOy5kvufOVHFg/ecxMpKQ6S/ZN2X8AEGdMeUisDIZAappIF0LoFMIQ6LVDrhMIG6lLd8/pK7/WT8l23AogPAdl6WGCHKQ51uHw/VDuFQ/TjWuK++30XFbooIaLvbklZZCmZw+Uer20Q8nZGuu3q5gl6bUt4FWZNNQiOdTIvaDSMyjZx6+ZyXp35gjfm9piGRjCOVSCGdzUl5lDP5E5NTfgmRkVvTpPWW+T/bqBn9OUchOT1TFun8pfAol4rSqcRQTBWQM5OYHh7H5okpzOSHMJbLwYrxOXso1co4vbCE/ceO4f7DR3Dy9DxuP3SfZBSWZXW2bt/ayheKa3HTWi2Xy81KpdIhzE+lUpphGFKGY6TnP7bjuq7rBhCf0F7snWkAz7N+Hwzz0KjpBJgW0LglJQhFe4H4dBghg7fJGvK+dAi6rnMeQJF+6xF+4RJg2LbXJcOfcQBPzAEoBKB6A1RZUImIjiSTyTeOjo2+lYs2OEBy1dVXSTvpPXffifn5RTlopclFBnJctLtd/MiVz8Wtb38TsoUEKpU2jh9cxsEDK2jWu1INILtvUv2H24Q1Axt2DGHTZWNIZWNgyzsJPRH/pLFzIq+n+ao40pNPWXCO13KslnMAHPgBDNfENxbuwVfW7kTTtVGrVqVpKJPNi3Ivtfn4/uIxv72WOXnMiiNBUY821YuIUPzaPfscerYvrplOZfwFmL2ukHPM16nvxyaceqUk11EzgP/iiZi8J0Z3ooNOq+WXFWHKYhCuLmfdgSiBnXskQnOJLKbyExiN5zFZGMfs6DimiwXk40l4hoMGof3aCuaX1nByfkGm7xYWlvHdU49Kz5EZtzqz07P1DRtmy67rlculUrlWqxGOs7JApyARnpYdnDLSS/cdjZOGTjRA10qDp2hHUI4TJGBZlhCBNPyAIKRB0+AFJdBB0LiDiK8Mns/J83JZ13X+9er1erjTL9wNOLDEFxL8edo6AAXZH5+Zn/ve4edUXICaEyAZGB4Zzuu6fvHw8PCvptPpaXaTcZMOjxcSXiKXHbS7sqeeULfVYRqwCb/9tnfiyktnUW21Ua/a2PfdBSzN16Wph1t8uMRD73HgRsPGnSO45IXTiKcsf7Ku78meQGr9OT1uEWarL3wRDUeDx52BXbb1coTYgemYWGvV8FfHvoxDjVMy1y8NQKBopy0EGyM7A1StUZPUgTk6lYhKpVX5tvIUweC2XQ4XOX3pnc9m8sLWE5ZnUmkhD1uNOnL5grTa8vNTULRSqQjBVxweFUaeX3BHWm9jSGQzKNd86E9jH04XMZIdwVh8GGNWARPZYYwVh1DIJBGPsdW5i9XWGk6tLKBcauDM4hK+fuBezK8uY7VUxlqv5qZy2fbM1FR9bGS0FIvH1paXlmurq6tsvnFisZjHCTtpl/I8DubQqPuM/jRuwv4A5nMcl9fRIdBA5TwNXYSJg0ivGnjUaXC9EIR0FOEIT6RBVKGMniPAfE9BB6CC++HOv/D4rzouw8Z+rmrY2S6IJ9M4ni7PFRTJ5OOqQrnaK6gqAmrF+HAikXjtyMjI23VNM2lQnCf3WWp/PbbUpaUJBaJua+gJvO+lt+Ctr3geOloH3baLuVM1HD+6hm6jB7bpC8CnzHfHw+R0ThxAdjQJR0Z6fSfQZxswtQJsLg31Zb9kYShFQzkDQGFMu8/VmjhTWcbnFm7HifoZ1KtVGEYciWRKIrn/FjUZd222mqJUZDEPl7547t/TgmifEnKuUi7JQsxUMuOLfnISUYhDT4ai6BR6dhfDoxPC5JPt978DD4lMSpIqLgTh/P1wrIjxzBCGY0MYTRYxmRzGWLoo8w/pZAya5aLlNtHstnGqtIh9J4/g+Pw87j3yCNZKFaw1KqDGrxEzG9u3bmuMDI+U4vH42vLycm15eblFI8tms14sFtNoyMzjg0hNKl+66+gIArgvRk4HoSJ9cL3AdD7OMAzm/fI43qaQAh+nInpg5HQc7PGX+/EvaPhhmkEBkCjRFy75hWv9YZsbFOnXC4JPGwfwZPYEqOeKkoG8rNIAJR2mHAErA+OFQuE9mUzmuRwRlpZZIeKDMpu0oPpSV2TWuaXmhh3X48M/dgtGZlOyIKLe6GLueBWl1aYsASUBKJt8uhryhRT23DSBoak07IYrTkBGfYlUZYTX3xzk7wSgM6AAiC+N3bNdJLyYEHr/4/RXcKh+SsZ+Gf05AswlIYTknPDjhqNEIikDTtT+57KOZColizpo1ETG/EhMDdiJxzSCzDxTHnF0MrDHwRu/rZcttOw+yhWygoSYMuSMDEbjRWwYnsJ0bhxpxDFTGJG138mECS3GISAHFbuKtXoFc6Ul3HHoQTTKHZyYn8fDpw/L8lXJpQ2tumfPnvLYyFi10+mU6vV6rVQqsV7fMwzDSyaTGo2Z0ZhGzn9M6TlyS2MmtLcsSwg8Rv5g9p5wXhm2oAFeDkp64giU0QenNDTJ+VVkDzkAifiM8DztdDqqzj+oxDeozh8NuIMcgCKtBzqKpwoHsN7nCH/4J6MrMOpMeJmRX12vWoTZHKQ6BGWLsGVZF+dyuV82TXNKNtNI/43/MFHskmqVK4M/fa+HbLyAD73kXXjuc7bBjvXRadoolZpYWaqjXaPopd+rj7aGRMLCRdeNY2JbTgyfU34S7Tnnz3HdQP+PGnpcHsKpPjoDCoNy3j/mUfCii08c+QL2lg4hn85JxUB23dm2nGf/PUeBCd3ZdOTr7HMfHqW2+xL5+bmq9RqsRFyIRXb20bG12k15PPmAvm2LJBi5BO4GyCey2DI8i42FaRSTGV/rIJVGLp3CMFeNW5pEeNttY76xhlqzibuPPYJ9xw9jebkq+wjmypKGeLpptDOZbHXb1i1rE+Pja+VyhdC+VqvVugFj7yQSCRo9o71i76V0x1p+UMYT45aORMehQduGYfCsYxiGQgdS8mNaEJB7vBw2fvIDNGJxJor0U/CeKKHZbErUp2fpdLiH/eyE3yCIH574i871K8Ne7/h+2juAH2RaouC/OlX7BFQ6EN4wnEkmky9NpzPv1nUtIcMnZxXZ/CYc0dfrU4HHFRGP50xfi5979c0Yuzgpctml1RbWlhpo1G10W36Or3VI8OmY3lnApkuGhO3mejC3wz0AvliHr7rDFjwNfc7ncxIwWCLCVIAS+Gkvjm8t3o9Pz38VXdeR4aJkMiUognCe22u4+ot5eavTFtieyeWkE5ALP9nNG9NjyGVyiHmm5OzZFMttSWkqouxWwoxjLJMXEVDOz4+xzJfJIxVj266GXCot6QJVdegMH146grVaA4cWT6JSqeLOow+JWMnplSVV224PjYw0piYmS4lkvBSPxWvVarXJv0aj0aXBBnm6Q0JPeof6ffljpKcRk+RTuTdvp6HzRpYRFXlHBxAYsxi+arsNIL0YciifF4MPjF2Mlee73W6Hst6sEtDobdsWoc+Q4Ycn+QaN9IYHewYZ/SBDH3TsPyVbgc+FAH6QDkBxAFJlC5UE6QhUKqAqA3QGxVQq9bpUKvVmXdetsBPwd9iRufd8BV64yBhJ/Mw1b8TLX3kVklMa6uUulpeaaFY6aDccdJskDQCn5SKdj2HLpaNI5a1g2IdTgI6o7kgjj+Mr8DId8KcDXVHQZQc503hqAdg9F9+tHsJD1UPgYAvFLMnac2deUo9J41DKSiBhxKWxJmX6XYipWFrSCXYmkuzLJJKy4JPNPqlkEoVMGtlMEgkrJrJcrHRw9XkyHhO43rI7aHabOL22hAdPHMGZtSVk9BTuOPIASvUaaq2mv4gTaAJo7dq1uzI+PrZWq9XKtm032IbbaDTYKcf2WycejwuRp/JzRneVswdRXXXNiQEG0fvseaYHQb/H2QivDDkE72nYZO/P5vBBtBcHQFKQlwODl/yeKUVg9IrNl8Js8Frh66IOQB3DqsX3GQfwg7bqx/H8KvqHKwLhnYIsCYb/8slU6sWpZPKtmqblSJKd3WZLRVzhAhyv1/ejxGXFPckfv+G12H71KNIFLuZ00ap10a730Gr00GsBvRZhuIfJLXmMjGf8XDvOvF1inqyfFtlwGj91ATjLQ40/6QXw0wT6Aq1nyH3LnRqaTht1yl2z3ObpSBlJn91HTGTKzZgmmnmxeAKZFBl9E4hzaWBfxEd42bDYj+DX6lkhqLfasnI8089i/+JRnCjNY660goOLJ9Dt9HCGTH21DFsqafKP/fL18fHx0s6dOyuO41RrtVqzVCoJrA9q8IziJFUVOy9wOajNK+hMByDkXdCbf5ZEU1A+IO3UZJ18czTgAObL/UOknjgLluZUpFdEHh+jKgKE+aHSnTL28BSfatFVBN9ZxxPR91vPAVzIYRpFBk9JBLDeF3FBzRAX8i0OuE+YDwiGWOVeCgkQAaiSIB2AWi9GJFCIxWKXx+PxV3CtmKZpFhvtu11bRj+DtlLN8zzD1KzY5vyW1EsvvtHcuW0jhiaSyBUTkuO3mAo0eug2e2hVbSSSCYzMcKmnITqDlMaTll8pz7N331fq0qTMF8h2yTI9n8aQuOdvu/P1BIXq9GWz+celFkTSFNjQTMpvcRbAn6uVhgi25vIxNrBWrmGhtIhWs4OHF49jZ2YWR9fm8IX9t0l6UunU0Gi3ZVmGiIcCvVgi3ink8zUNWjmby5aKhWKt3W5zqq7TbFIgx7YJ5Wm0QW2cxkZjF8NWUT6A7mJUBiV6fGhP8Q3J2wMYf9bYgoivYPxZp0GjDlIHIQhN0xQnMMDoRaiTvxsdABt2iEgGiHOEIb/K5aMz++qyMlR1v2iOry6fi8dbjxc4Wxl4KpCAg1j+QZ/riZKA5/uuokiABk8ykE5AOQMaP/+YFlBGbFbX9VnP8yZ0XS+6rpv2PE/1EhBFiAkbmmmM56Yz+VQ2vWViHDfsuQpbN08gaSXQaffQrrbRXHXQqvWQGYohmfa318XScViWb9AEAYTl/porf1qP47/sR6C8FY3Z/9MQ4/isERLLoKiIdA1yr14f3Q7LiY7IkHMvIXkFjjOv1dbw7RMPiaBop9vDV47dhWqjLuPMbFiSCoc0u0G64KZnZxqTE5P1Rr1OKE+hjBrVb2WSxrZp0Gyt82h40iXsR3HJ3VXLbVgCKwLlVZRmLq966MW4yQ0ogQwV1YMcXq7n7RTa5HXkEILnJY+gBUZO1ME0Q5wBHQ+NPugRoGjnWZ4gJMShEIBCH2GYHzb2Qbm+SlkU9xGOR+dzAIPKgGcfc76D+vsMjv+qD/u3cgBRD6xKgeGVYjRgZcg0ehq/MnCZFwg2DnO7ELUE2BLHVmJOFtJ5qMfqmm4kNUMfp5zFaG4Em2cm8YKrrsHuLZuR1FNYmS9j6XgNaJpIxWPw9D7MuIbMcFoahCgV7nfQ+nP3Zox6eDpicV1Olc6mP2DqS3mzdMgRYo/VBseF4RjSPNRt99DqtmX0uNyu40DpOE5W5nBw9TiOlealXdjHDhwvNmz2/1DyamhoqDE1NVXhartKpcLcvUkGnAbEIaRYLCaRnCW5oJnmrGHQymhwQclNYHbQTMPHCFQPSD4x/CDSKxQQ7qATQwyM/OwgTcgRkDgU1KBYe54ScQQOQF3PeQB/7M+2RawzOOrDDTvhKK8cQDTyKySi0oFwoFK3hQ0qfPuF2m80+D0lHcD5vM6TjQCiP4QqCSoHoNqElRNQKECRg2pmQOkI0AEQFSgnQEehyonUtI6bVmJM05xsr2frnNYbzhcxPJSVLr2LNm7EJmMDjhyZx2KtjPF0ATPZUaTTGaRzFmyv6/cHuBTkoNIO+wmD2f8+MQKhfaAfQHERM4l8PAsO9RILrDbLOLR2Cl2nh03ZcWwvbMC35x/A/z7ybSw0V4VJMw2zF0/Gmxq0hqZplUwmUx0fH2/U6/X22tpaO2ixlRyYkTwoyUnHXWDwUpoL6uYS9Xg/Rt3gx5VITgY/IO/kviq3pxMJIq4yeDkNIr68RhDZVa4veb6C+TwfvI7iANgZKAbP92BZlkaj5/1KpVK0dKeMNUrghQ1cpRfh68I8QPgYDkd9Xq8i+YU6gHDuv+5jLtSDnM+4/i1v/0HA/UGfZxCUUj+MOlU9AYoQVGVBFc15uxIQUamAcAKB8RMR8E8NFSlnQSRAqY6kpmlpDV5eN4xM3+1bnutP+nC6jn35nChk2W5LYRaXDu9ESk+h4/VwoHpEOv/Yx08oIGIhopDzWErgdyVr6PQ7GE2M4rqJPfC0nlQnjtfm8I0Td6Nlt8WJsKTXstvcpeuk0+mKYZonc9nsXKfTadFYApLubD4djvCh3FiMiVFftd8yoga3M8oTcodzYon6vF4Jb4Qm4wRaB/k80wWJ8ryOBq6gu7ocEtPgdJ9i+wW5KCfBqM/SnW3bHv8I8QN4H47yZwnFgLgLv9+ocUfz+bM8REi8Y5Chhx2AOjajCHRQgDsXOpb7/zA6gCgNSur/AAAMEklEQVSxN+hD/ms5JJX3q9dTaYA6VdOCSj0oMOSzhCDTAiUxzoYhGj7/6BD4p1KGcFWBz8kDydQ0bVTX9bzneXQUcUpx6Jro5mpsyvE4P/zEcM8gOOolkgkx3EK+sBSLmftPnpStlMrYRVOAUTOA5YzqrK1zuIb5u3TOsdFGRf1QLVzgfOgy83cxIkXUBSO36rUUqXYWyqtoT/5AvY9oqY0Gr4w1iPouZwBU445i4JlmBFr8zOvDhh2O8mEHIKlD5C8c7VUOPwgBhA1aRf/wsT4oAJ3r170gu3jGATwxV6EMPfxDqIqASgnUdmHlBNSyUUUO0gGohiHVM0AUIB2EoTQgTA76gnw+SSjdh5qm8b6WpmlczkfZHItGNjIyFjc1T+NeQitmaVxrFRgVwz0L5HQU8v513SChroRBGEUpUSUHeLfbbVHyqlAoeLl8vj45MdF4+OGH51qtFtl1UcQJoLiQdipXDwQsaPT8PiSP5/OFDF19d2I4AakWNnBlVCoN4P3DpbRozq0gvUoHwqy+OAo1z8/+/4D8k/fAcqJi8flegmgfjuLhCB49H04fJEUJfqOo0YcjfNQRrBfd1ztKn3YO4IK82hOz6XM+epDDjHppdTnsAJShqnkBpgH8C68aU70CdAIKCUR7CNTj6EwUglNEoUo/wqhEGxoaMiiYWa/XaZh6Op3m2JrkxbR2Nq0wugZNK9I5x9tYfiuXy9SkD+fkyvjOGqCK6qpxhk4nVGY7m2sHBk+oH478yniVkUShdfh6dbDzVOXfUeOMRl9+HjHq8NKMUNSXJv9QzV3gf6fTGWT0KtKv956iqYB6jrADiOb1ygGED7r1jFrl9NHbn5BN/DAigHNZaPTzPDEAvP4rrfe9fY/xhSJ02DgVKRgWFVWEH6+jA2AVgBFd9RGET3le2K7gVKUVfG3laKLvXEUr9f7CUTUcTcOQOrp84ntm0YONtHKQB3m5OphVs43cFpTtosx3lAy7kDxaGVT49Gx0HwC9lbFJW69q11UNPuEyYKfTCUfzs58jEsEVAlnPAUSjvrqfQiLqNwk7gejxea7j9QdyLD/jAL4/uHCu703dFlYLUpLiqkKgblOkoEIDaoaADoBpgWoeUv0EdA7KAYTlyNTzqnRDoYPw+wxHGwVDpZtNGU+Qm59l5AOGXR3Y4gBC5BshvxzkwQy8MmJBDCHWOhrlFYoIQ2aVw4ej/CCDj5Jo53IAYUMW7YFgcEf4C36W8xh+2GmGo3nUAYQNU30OdZ8w3Fe/hXre8H3CzmG9Y+sZB3ABtnouw3wyvsALcZgqyoajvuIFwvMCKmKrCK6it9o3EDZ2JTwa5gEUlxBOAZQ8meImlOMZBDHDZJsyckEAQdSODqeEjU2GY0JNLmdJuFAkDhsKHxs2gEH5cTTCDnIA6jnVfcNIIuxoovk5Hyf3pSpTaAgn6nDC0D8MudX9ok4rCuHDl8OPGeSI1e1hCK9eU/1e4ctPxvH7L0zoQg7oC7C7f9O7RL/cJ+PNnO97if5Q6jXDEFtFYWX84VkBZaBhJKDOqzyf+T/Pq+guTH/oL1xhCD9PGG2EHYB6b2E4HjWgKKseNtRwfh0m6cLRcZARhuF92CkoaByOiOo6ZUjRU/V45YDCUX7Q84QdwaA0I+xkwlA9Gv3DjuJsahH86OpYCDuH8PERdmzqmBjkKAYdtwpBPBnH9MDnON+B/gN74Sfxif81HUDYC4df91znw3oB0QpBtGkoShIyuivHEW4tpmNQaEIhCJUSKH5AORl10IWjijrwo7l4lISLOoiwsYedRTSShp1FGN4qA1b3DzuYQRBZIYewoSu0oj7XoNcKG3bUyKNRPmyM4fw87DzCUD7saBSXEobzYUcQ/bzni+xRg3/GAXyfjmKQY3siEEr9EOs5zOj1KvLyNZWRq6ig7qvgejQ9ULxAODVQuX24tTicMqjnUEggjETUbYMipDLi8IEaNih1PmxEYQQRvm84WoeNQBlJ1FjCzmQQHA6jiWjEVM/P5wxzD8opDGLkw8YX/lxR5xU+5NTzDHIAUegeRoGDPlv4eaOfd9Bt3+eh//ge9lRAABf6ib8fbxpFF+EfXR1sg7x2FBEoh6AMUzkGFaVV9FaXw1FdnVdoQBk+TxViiHIL6nXC6Yc6mAchgWjOHI6S0dsGseGDrgsbTRgSR2G+cj5ReDwI/kcjajSar3f7oM8cRRWDjFDdJ/pZwk4j/Nzh5wijiegxup4DeCJB6kLt4Hvu98PiAKKGGP4QFxrtH48DWO85L9QBhKNB1BkMuqwIvbBDUKlDFOorh6CgftgxqOeOOoBBhhE1irCDGOQAlOGGHULUEMKROvyaUQcwyAmo3ycM+xVqCBtGOLqq14hC97AzUc5pUBQPf85Bx1j0ddXnGGTc0evCRh417GccwON0Vz9sDkD9wINY+Oh1ypDDfIDK+8OGHIX8/ArDj1HOQ50qI4hC00EHYzjaho1KGUj4MdGcO+xYo1A9HN0HRcFBBhaOutHoGn2f6vZBubs6ZsLoRDmUcIoSTY0GvWf1uPBt66Ga6OccFHiecQA/YAcw6OkfD7xaDxmt98NFEUn0foOeLxztww5DQXtl/MqQFQ8QZfkHOYtBjieKXgYZTzQyD3IAg+BvNNoPMpRB33/UsYSfO/qdhSN/OJpH0U2YwVfPETXyqKNaL0JHo3j4cedzaFHHO+j+USd9Lof5OE3mwu7+w5ICXNinOf+91jOC9R75ZH0/YVJQRY5wRSBq7OHIru4fnTSMGn4YAYSfL3wgRg1z0AEXhfiDono0MivHsd73uJ7hRBHAoOeN/mbrOY2wQ1vP2ayHONYzzvXQ0oV8zkHHTjQwPJ6gdP6j+/u4x5N1gH8fL/1D8ZAn4/sZFMn44c/nANR9oqfRvgIVRcLlxuhrrncwnivyhR3Bej9WGHqf62BWTmw9Ymy99xF93SicHuRYBkH6KEoIXz4XMrnQ93W+z/7v9mB/Mg7wf7cf7kl4Y0/G9xN+jnAEiEZpdT8VydXbVwbPxypkoB4bbfQJVxvCH/9cn2M9I1bGFT64owYYLsedCx5HI/t6TnEQAlgvOq9333M5mfBtfA/hDsVB6cczDuBJMKIfxqc4n+FHodygzzjI8FW0Dp+qxyqjDjsGZfRR56AuRx1A+H5RBxCF0uryuUiwQZ9zUEoQdQzh1x4E86McxeOJoHy/4dc7V4oQfR/R1xnkLNZ7L+ulK+c7vv/NYf653uD5DvTzfbin6u3n+14uxAEMilBRgw1DUZXTR7/TMAIIOwd1/XqRXlUXeLsymijqCBuTOr+e8Q66Pvw9PB4jPh8CONd7CEfqsPMMf5eDjsv18vn13otKWwb9jlG0c67j5RkH8EPkJc5n+BcCUS/U4Q6KyDTaKOQOE4jrRXWFKMLvP+xsoqlH9HOsB9/DKGGQowlHUL5e2Imo1+T1j9cIolD9XM4njKYGvc4gh3Ehv+O5nks5m6gDuhDn+e/KHC70gP939aZ/gG/mQr+Px3tADzpQBjmAKJQOR/n17r/ec0cdyRP52i4EFp8rDVBGeqHf26D7XQhqOF/KEv0OHg9qiRr9+b7fC/2sT+R3ecKPvdAD/gm/0L+TJ4gaUTSq/aB/tHN934NuC18XvT2aAkQPyPMdoI/nJ/m/7VrLDgQhCPv/v96TCdsUqIIzJuN5R8DyKri7ccHksl2ddWssNqp9WVePMFF0MMyVczO+aP32awUgo4ut4CbCPOy9ToeU3j77MUqK9Lxyt+h/7SiXMZVh38yszHCwYwV7vViJZ3Wez9iC1X100mPXqwTGPbuOgJcoisSxzFMDHjsmBqsn581AjgqAxwDYPdQ7KN2bjRjIUCKWqfj20W/UAHrUqI8oqxQAbzFoocOntogReElyWnzYBLQ2K4mZhdUtABlC9/ftCLCux/YAnV0m2tKvFICRSJiUM7KykQMZQMUx3sIxo/y4p8D7qsyjYnv57IxTysqugBICg/bbeT+i7t5MyphHZ0HplOUBNlMAPHaQJXi2r2DFetj7BAalYEJDW4RdIVsRYAHZVQC2Gv6y8M4C0DFqvAzHv/rLAI5yR2gM+mpHl+mIB+ys1k5VfvaE6emw7KjqWabD20HMMJKqXa3nf8qcN/xmo34BAAAAAElFTkSuQmCC",
            scaledSize: new google.maps.Size(37, 37),
        };
        var person = {
            url: 'data:image/png;base64,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',
            scaledSize: new google.maps.Size(30, 46),
        };
        //   this.uid = 
        this.driver = new google.maps.Marker({
            map: this.map,
            position: new google.maps.LatLng(driverlocation[0], driverlocation[1]),
            icon: car
        });
        this.client = new google.maps.Marker({
            map: this.map,
            position: new google.maps.LatLng(this.lat, this.lng),
            icon: person
        });
        var bounds = new google.maps.LatLngBounds();
        bounds.extend(this.driver.getPosition());
        bounds.extend(this.client.getPosition());
        this.map.setCenter(bounds.getCenter()); //or use custom center
        this.map.fitBounds(bounds);
        this.map.setZoom(this.map.getZoom() - 1);
        if (this.map.getZoom() > 15) {
            this.map.setZoom(15);
        }
    };
    MapContainerProvider.prototype.moveDriver = function (driverlocation) {
        this.driver.setPosition(new google.maps.LatLng(driverlocation[0], driverlocation[1]));
    };
    MapContainerProvider.prototype.showCloseDrivers = function (lat, lng) {
        //let pos = new google.maps.LatLng(this.locations[0], this.locations[1])
        var pos2 = new google.maps.LatLng(lat, lng);
        //console.log(this.locations.length)
        var distance_from_location;
        this.value++;
        // console.log()
        var mix = [];
        var j;
        for (var i = 0, cont = true; cont; i++) {
            cont = false;
            for (j = 0; j < this.locations.length; j++) {
                if (i < this.locations[j].length) {
                    mix.push(this.locations[j][i]);
                    console.log(mix[0], mix[1]);
                    cont = true;
                }
            }
        }
        var pos = new google.maps.LatLng(this.locations[0], this.locations[1]);
        //  console.log(this.locations)
        distance_from_location = google.maps.geometry.spherical.computeDistanceBetween(pos, pos2) / 60; //distance in meters between your location and the marker
        //  console.log(distance_from_location);
        if (distance_from_location > 90) {
            document.getElementById("timetocar").innerHTML = '0';
            document.getElementById("timecar").innerHTML = 'mins';
        }
        else {
            clearTimeout(this.timetoRefr);
            var cusd = Math.floor(distance_from_location);
            document.getElementById("timetocar").innerHTML = '' + cusd;
            document.getElementById("timecar").innerHTML = 'mins';
            console.log("close enough");
        }
        if (this.value < this.locations.length - 2) {
            // this.timetoRefr = setTimeout(()=>{
            //   this.showCloseDrivers(this.lat, this.lng)
            //  }, 1000)
        }
        else {
            clearTimeout(this.timetoRefr);
            this.value = -1;
            console.log("tracker stopped");
        }
    };
    return MapContainerProvider;
}());
MapContainerProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_anim_control_anim_control__["a" /* AnimControlProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_geocoder_geocoder__["a" /* GeocoderProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
], MapContainerProvider);

//# sourceMappingURL=map-container.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectionserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_pop_up_pop_up__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_geocoder_geocoder__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_native_map_container_native_map_container__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the DirectionserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var DirectionserviceProvider = (function () {
    function DirectionserviceProvider(eProvider, loadCtrl, platform, cMap, gCode, popOp) {
        this.eProvider = eProvider;
        this.loadCtrl = loadCtrl;
        this.platform = platform;
        this.cMap = cMap;
        this.gCode = gCode;
        this.popOp = popOp;
        this.canDismiss = false;
        this.hasGottenTripDist = false;
        this.calculateBtn = false;
        this.pricePerKm = 55;
        this.fare = 200;
        this.canUpdateDestination = false;
        this.isDriver = false;
        this.service = new google.maps.DistanceMatrixService();
    }
    DirectionserviceProvider.prototype.calcRoute = function (start, stop, isDriver, canUpdateDestination, destinationName) {
        var _this = this;
        if (!this.platform.is('cordova')) {
            start = new google.maps.LatLng(5.4966964, 7.5297323);
            this.gCode.locationName = 'Umuahia - Ikot Ekpene Rd, Umuahia, Nigeria';
        }
        this.service.getDistanceMatrix({
            origins: [start, this.gCode.locationName],
            destinations: [destinationName, stop],
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false,
        }, function (response, status) {
            _this.callback(response, status);
        });
        this.isDriver = isDriver;
        this.canUpdateDestination = canUpdateDestination;
        this.destinationName = destinationName;
    };
    DirectionserviceProvider.prototype.callback = function (response, status) {
        // See Parsing the Results for
        // the basics of a callback function.
        console.log(response, status);
        var loading = this.loadCtrl.create({
            content: 'Calculating...'
        });
        if (status == 'OK') {
            loading.present();
            if (response.rows[0].elements[0].status == 'ZERO_RESULTS' || response.rows[0].elements[0].status == 'NOT_FOUND') {
                loading.dismiss();
                this.popOp.showPimp('Destination Not Yet Supported. Please Choose Another Destination');
                if (this.isDriver)
                    this.popOp.showPomp('One Or More Destination(s) Is Not Yet Available On Google Platform, To Aviod Wrong Calculations And Loss Of Money, We Cannot Process It At This Time. Try Changing Your Location.', 'We Are Working With Google To Include More Routes For Easy Access, Thanks For Understanding.');
            }
            else {
                if (response.rows[0].elements[0].distance.value >= 1000) {
                    var fareTime = Math.floor(response.rows[0].elements[0].duration.value / 60) * 5.5;
                    this.price = Math.floor(response.rows[0].elements[0].distance.value / 1000) * this.pricePerKm + this.fare + fareTime;
                    //this.popOp.price  = this.price;
                    this.time = response.rows[0].elements[0].duration.text;
                    if (this.calculateBtn) {
                        this.popOp.showEstimateAlert("Price Estimate is NGN " + this.price + ' At NGN 55/Km ', "However, this may vary due to Weather or Traffic conditions ");
                        // console.log('Estimate Cal:' + start, stop);
                        this.calculateBtn = false;
                        loading.dismiss();
                    }
                    if (this.isDriver) {
                        document.getElementById("header").innerText = "Driver Arrives In " + this.time;
                        loading.dismiss();
                    }
                    if (this.canUpdateDestination) {
                        loading.dismiss();
                        // console.log('Time To Arrive User Cal:' + start, stop);
                        this.eProvider.createHistory(this.name, this.price, 2 + ":" + 40 + ":" + 12, this.destinationName, this.destinationName);
                        this.UpdateInformation(this.destinationName, this.price);
                    }
                }
                else {
                    loading.dismiss();
                    this.popOp.showPimp('Route Locations Are Too Close. Please Choose A Farther Route');
                }
                console.log(response.rows[0].elements[0].distance.value / 1000, response.rows[0].elements[0].duration.value, response.rows[0].elements[0].duration.text);
            }
        }
        else {
            loading.dismiss();
            this.popOp.showPimp('One or More Of The Adress Input Is Not On Google Maps. Please Change Location And Try Again.');
        }
    };
    DirectionserviceProvider.prototype.UpdateInformation = function (destinationName, price) {
        var _this = this;
        this.eProvider.UpdateDestination(destinationName, price, this.id).then(function (success) {
            _this.popOp.showPimp('Destination Set');
        }).catch(function (error) { });
    };
    return DirectionserviceProvider;
}());
DirectionserviceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__providers_native_map_container_native_map_container__["a" /* NativeMapContainerProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_geocoder_geocoder__["a" /* GeocoderProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_pop_up_pop_up__["a" /* PopUpProvider */]])
], DirectionserviceProvider);

//# sourceMappingURL=directionservice.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnesignalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_onesignal__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the OnesignalProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var OnesignalProvider = (function () {
    function OnesignalProvider(One) {
        this.One = One;
    }
    OnesignalProvider.prototype.sendPush = function (id) {
        var _this = this;
        this.One.getIds().then(function (success) {
            var notificationObj = {
                include_player_ids: id,
                contents: { en: "New Passenger To Pick Up" },
            };
            _this.One.postNotification(notificationObj).then(function (good) {
                //alert("Notification Post Success:\n" + id);
            }, function (error) {
                console.log(error);
                // alert("Notification Post Failed:\n" + JSON.stringify(error));
                // alert("Notification Post Failed:\n" + id);
            });
        });
    };
    return OnesignalProvider;
}());
OnesignalProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_onesignal__["a" /* OneSignal */]])
], OnesignalProvider);

//# sourceMappingURL=onesignal.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(318);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_vibration__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_browser_tab__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_maps__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase_app__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_onesignal__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_diagnostic__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_in_app_browser__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_call_number__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic2_rating__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_auth_auth__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_event_event__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_profile_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_rate_rate__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_map_container_map_container__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_geocoder_geocoder__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_directionservice_directionservice__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_anim_control_anim_control__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_pop_up_pop_up__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_onesignal_onesignal__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_native_map_container_native_map_container__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__config_json__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__config_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30__config_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//native modules






// import { BackgroundGeolocation } from '@ionic-native/background-geolocation';





// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';







//other

//providers












var firebaseConfig = __WEBPACK_IMPORTED_MODULE_30__config_json__;
__WEBPACK_IMPORTED_MODULE_12_firebase_app__["initializeApp"](firebaseConfig);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_22__pages_rate_rate__["a" /* RatePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/autocomplete/autocomplete.module#AutocompletePageModule', name: 'AutocompletePage', segment: 'autocomplete', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/card/card.module#CardPageModule', name: 'CardPage', segment: 'card', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/entrance/entrance.module#EntrancePageModule', name: 'EntrancePage', segment: 'entrance', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/history-details/history-details.module#HistoryDetailsPageModule', name: 'HistoryDetailsPage', segment: 'history-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login-entrance/login-entrance.module#LoginEntrancePageModule', name: 'LoginEntrancePage', segment: 'login-entrance', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/phone/phone.module#PhonePageModule', name: 'PhonePage', segment: 'phone', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/promo/promo.module#PromoPageModule', name: 'PromoPage', segment: 'promo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/startup/startup.module#StartupPageModule', name: 'StartupPage', segment: 'startup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/support/support.module#SupportPageModule', name: 'SupportPage', segment: 'support', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_17_ionic2_rating__["a" /* Ionic2RatingModule */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_22__pages_rate_rate__["a" /* RatePage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_19__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_20__providers_event_event__["a" /* EventProvider */],
            __WEBPACK_IMPORTED_MODULE_21__providers_profile_profile__["a" /* ProfileProvider */],
            // BackgroundGeolocation,
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_browser_tab__["a" /* BrowserTab */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_23__providers_map_container_map_container__["a" /* MapContainerProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_24__providers_geocoder_geocoder__["a" /* GeocoderProvider */],
            __WEBPACK_IMPORTED_MODULE_25__providers_directionservice_directionservice__["a" /* DirectionserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_26__providers_anim_control_anim_control__["a" /* AnimControlProvider */],
            __WEBPACK_IMPORTED_MODULE_27__providers_pop_up_pop_up__["a" /* PopUpProvider */],
            __WEBPACK_IMPORTED_MODULE_28__providers_onesignal_onesignal__["a" /* OnesignalProvider */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_22__pages_rate_rate__["a" /* RatePage */],
            __WEBPACK_IMPORTED_MODULE_29__providers_native_map_container_native_map_container__["a" /* NativeMapContainerProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_vibration__["a" /* Vibration */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_native_map_container_native_map_container__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(zone, cMap, loadingCtrl, One, ph, auth, platform, statusBar, splashScreen) {
        this.zone = zone;
        this.cMap = cMap;
        this.loadingCtrl = loadingCtrl;
        this.One = One;
        this.ph = ph;
        this.auth = auth;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = 'HomePage';
        this.initializeApp();
        this.pages = [
            { title: 'Promo', component: 'PromoPage', icon: "trophy" },
            { title: 'History', component: 'HistoryPage', icon: "clock" },
            { title: 'Payment', component: 'PaymentPage', icon: "card" },
            { title: 'Support', component: 'SupportPage', icon: "help-circle" },
            { title: 'About', component: 'AboutPage', icon: "information-circle" },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            if (_this.platform.is('cordova')) {
                _this.One.startInit("61ee0e36-8694-4ec8-9436-29982b7f8d57", "890704209838");
                _this.One.inFocusDisplaying(_this.One.OSInFocusDisplayOption.Notification);
                _this.One.setSubscription(true);
                _this.One.endInit();
                _this.statusBar.styleDefault();
                _this.statusBar.backgroundColorByHexString("#BBBBBB");
                setTimeout(function () {
                    _this.splashScreen.hide();
                }, 500);
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.push(page.component);
    };
    MyApp.prototype.gotoProfile = function () {
        this.nav.push('ProfilePage');
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Temp\GitHub\ThinkAM\taxi-booking-app-built-with-ionic3-\src\app\app.html"*/'<ion-menu [content]="content" id="menu1">\n\n  \n\n  \n\n    <ion-content class="main">\n\n\n\n     <ion-item color="light" *ngIf="ph.user" menuClose (click)="gotoProfile()"> \n\n     <ion-grid>\n\n     <ion-row>\n\n      <ion-col padding *ngIf="ph.user.photoURL">\n\n          <img class="profile-pic" [src]="ph.user.photoURL"/>\n\n      </ion-col>\n\n      <ion-col padding *ngIf="!ph.user.photoURL">\n\n            <img class="profile-pic" src="data:image/png;base64,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"/>\n\n        </ion-col>\n\n      <ion-col padding [ngStyle]="{\'margin\': 10 + \'px\', \'font-size\': 0.9 + \'em\' }">\n\n          <div *ngIf="ph.user.displayName" class=\'left-text\'>\n\n              {{ ph.user.displayName }}\n\n          </div>\n\n          <div *ngIf="!ph.user.displayName" class=\'left-text\'>\n\n                {{ ph.user.email }}\n\n          </div>\n\n          <div class=\'left-text\'>\n\n                {{ ph.phone }}\n\n                <ion-icon color=\'deep\' name="create" [ngStyle]="{\'margin\': 10 + \'px\'}"></ion-icon>\n\n          </div>\n\n         </ion-col>\n\n     </ion-row>\n\n     </ion-grid>\n\n     </ion-item>\n\n  \n\n      <ion-list  no-lines>\n\n        <button [ngStyle]="{\'height\': 55 + \'px\'}" menuClose icon-start ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n          <ion-icon color=\'deep\' name="{{p.icon}}" [ngStyle]="{\'margin\': 10 + \'px\'}"></ion-icon>\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n    </ion-content>\n\n  \n\n  </ion-menu>\n\n\n\n<ion-nav id="nav" [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Temp\GitHub\ThinkAM\taxi-booking-app-built-with-ionic3-\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_7__providers_native_map_container_native_map_container__["a" /* NativeMapContainerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 443:
/***/ (function(module, exports) {

module.exports = {
	"apiKey": "AIzaSyD85AU-MxyCfF6wvm9NDJv9rnb-YAwm9NM",
	"authDomain": "thinkcar-br.firebaseapp.com",
	"databaseURL": "https://thinkcar-br.firebaseio.com",
	"storageBucket": "gs://thinkcar-br.appspot.com",
	"messagingSenderId": "394163363461"
};

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileProvider = (function () {
    function ProfileProvider() {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user);
                _this.user = user;
                console.log(_this.user);
                _this.id = _this.user.uid;
                _this.userProfile = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("userProfile/" + user.uid);
                _this.userOtherProfile = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("driverProfile/" + user.uid);
                _this.getUserOtherProfile().on('value', function (userProfileSnapshot) {
                    _this.driver = userProfileSnapshot.val();
                });
                _this.drivers = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Drivers");
                _this.CustomerOwnPropertyRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + user.uid + "/client");
                _this.getUserProfile().on('value', function (userProfileSnapshot) {
                    // this.userProfile = userProfileSnapshot.val();
                    _this.phone = userProfileSnapshot.val().phoneNumber;
                    _this.paymentType = userProfileSnapshot.val().payWith;
                    _this.card = userProfileSnapshot.val().Card_Number;
                    _this.email = userProfileSnapshot.val().Card_email;
                    _this.cvc = userProfileSnapshot.val().Card_Cvc;
                    _this.year = userProfileSnapshot.val().Card_Year;
                    _this.month = userProfileSnapshot.val().Card_month;
                    console.log(_this.phone);
                });
            }
        });
    }
    ProfileProvider.prototype.getUserProfile = function () {
        return this.userProfile;
    };
    ProfileProvider.prototype.getUserOtherProfile = function () {
        return this.userOtherProfile;
    };
    ProfileProvider.prototype.getUserAsClientInfo = function () {
        return this.customer;
    };
    ProfileProvider.prototype.getAllDrivers = function () {
        return this.drivers;
    };
    ProfileProvider.prototype.updateName = function (firstName, lastName) {
        return this.userProfile.update({
            firstName: firstName,
            lastName: lastName,
        });
    };
    ProfileProvider.prototype.UpdateNumber = function (number) {
        return this.userProfile.update({
            phoneNumber: number,
        });
    };
    ProfileProvider.prototype.RateDriver = function (id, value) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client").update({
            Client_HasRated: value
        });
    };
    ProfileProvider.prototype.ApprovePickup = function (value, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client").update({
            Client_PickedUp: value,
        });
    };
    ProfileProvider.prototype.ApproveDrop = function (value, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client").update({
            Client_Dropped: value,
        });
    };
    ProfileProvider.prototype.SendMessage = function (value, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client").update({
            Client_Message: value,
        });
    };
    ProfileProvider.prototype.CanCharge = function (value, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client").update({
            Client_CanChargeCard: value,
        });
    };
    ProfileProvider.prototype.UpdatePaymentType = function (number) {
        return this.userProfile.update({
            payWith: number,
        });
    };
    return ProfileProvider;
}());
ProfileProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ProfileProvider);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeMapContainerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_geocoder_geocoder__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_anim_control_anim_control__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the NativeMapContainerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var NativeMapContainerProvider = (function () {
    function NativeMapContainerProvider(googleMaps, zone, myProf, anim, gcode, platform) {
        this.googleMaps = googleMaps;
        this.zone = zone;
        this.myProf = myProf;
        this.anim = anim;
        this.gcode = gcode;
        this.platform = platform;
        this.onLocationbarHide = true;
        this.onDestinatiobarHide = false;
        this.speed = 50; // km/h
        this.cars = [];
        this.car_location = [];
        this.car_notificationIds = [];
        this.delay = 100;
        this.hasRequested = false;
        this.isCarAvailable = false;
        this.onGpsEnabled = false;
        this.isNavigate = false;
        this.onbar = false;
        this.onbar1 = false;
        this.onbar2 = false;
        this.onbar3 = false;
        this.toggleBtn = false;
        this.onPointerHide = false;
        this.pan = 0;
        this.hasDone = false;
        this.hasStart = false;
        this.hasShown = false;
    }
    NativeMapContainerProvider.prototype.loadMap = function () {
        var _this = this;
        console.log('map called');
        var lat;
        var lng;
        var zoom;
        lat = 5.4982219;
        lng = 7.5019607;
        zoom = 6;
        var mapOptions = {
            camera: {
                target: {
                    lat: lat,
                    lng: lng
                },
                zoom: zoom,
                tilt: 10
            }
        };
        this.map = this.googleMaps.create(document.getElementById("map"), mapOptions);
        // Wait the MAP_READY before using any methods.
        this.map.one(__WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            console.log('Map is ready!');
            _this.map.setCompassEnabled(false);
            _this.map.setTrafficEnabled(false);
            _this.map.setIndoorEnabled(false);
            _this.hasStart = true;
            _this.map.getMyLocation().then(function (location) {
                console.log('sucess location found');
                _this.AnimateToLoc(location);
                _this.location = location;
                _this.gcode.Reverse_Geocode(location.latLng.lat, location.latLng.lng, _this.map, false);
            });
        });
    };
    NativeMapContainerProvider.prototype.checkGps = function () {
        var mapOptions = {
            camera: {}
        };
        this.map = this.googleMaps.create(document.getElementById("op"), mapOptions);
        this.map.getMyLocation().then(function (location) {
            console.log('location now on');
        });
    };
    NativeMapContainerProvider.prototype.PumpControls = function () {
        var _this = this;
        this.map.on(__WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["b" /* GoogleMapsEvent */].CAMERA_MOVE_START).subscribe(function (start) {
            if (!_this.hasRequested) {
                _this.map.refreshLayout();
                var centerBar = document.getElementById("onbar").style.display = 'none';
                var location_1 = document.getElementById("location").style.marginTop = '-140px';
                _this.onDestinatiobarHide = false;
                clearTimeout(_this.timer1);
                var bottomBar1 = document.getElementById("bar2").style.display = 'none';
            }
        });
        this.map.on(__WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["b" /* GoogleMapsEvent */].CAMERA_MOVE_END).subscribe(function (start) {
            if (!_this.hasRequested) {
                _this.map.refreshLayout();
                //this.onbar = true;
                //  this.onLocationbarHide = true
                var centerBar = document.getElementById("onbar").style.display = 'block';
                var location_2 = document.getElementById("location").style.marginTop = '-50px';
                var center = _this.map.getCameraPosition();
                _this.lat = center.target.lat;
                _this.lng = center.target.lng;
                // if (this.locations != null)
                // this.showCloseDrivers(this.lat, this.lng)
                console.log('should animate end');
                _this.gcode.Reverse_Geocode(_this.lat, _this.lng, _this.map, false);
            }
        });
    };
    NativeMapContainerProvider.prototype.AnimateToLoc = function (location) {
        var _this = this;
        console.log('ani to loc');
        this.map.animateCamera({
            target: location.latLng,
            zoom: 17,
            tilt: 10,
            bearing: 0,
            duration: 1000
        }).then(function (suc) {
            console.log('camera done');
            _this.lat = location.latLng.lat;
            _this.lng = location.latLng.lng;
            _this.startChecking();
            console.log(_this.lat, _this.lng);
            _this.PumpControls();
            _this.showDriversOnMap();
            _this.hasShown = true;
            var centerBar = document.getElementById("onbar");
            centerBar.style.display = 'block';
            _this.hasRequested = false;
            _this.map.addMarker({
                title: '',
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAEcUlEQVRIS7WVfUxVZRzHf7/nuQx8QZJLEC81MXpZsjSuZOrEc869CDhoZTW16GXiRXvbrCxa/lFuQdqLmE5mMuacq1Z3gxISHPc8B1dopGEMxlTYNZp6s4WUFl2unOdp5+DFc4GL9EdnO9vdOc/9fH+/7+/lIPzPF96Ej7mS5OCIRQIxi3OeZJynAL8iIe0c4BBj7BQAiEiciAK5suy8JsR7lJBsrutXgJB2iug3QBwgRej6A4TSWQjQhkKUNWva0YlExgk4HI6o2bGxOwQhLwEAQyHeHxZCbWlpGbYCJEmyEUJyAaAMAZYj5zuHAV4fey5MwIDfEhf3Jdf1FcRmK1VV9bPJ0r8uiE6n8xkQYi8ANMTb7Ws8Ho8eCiZMwCVJu3Uh1tkIWdGsaa1Tqf/iwicfjNYDF6MCA3dyxCYuRJWmaa+NEzA854heQCxWVfXTqcCz1m5Wfk5fVT3zSt+lub7aVbZ/fl8pEGsAMUdV1W8NRigDlCSpjRJyVWXMNQVbwID3pRXV9KflzDF6aM7pgydmnDuanxj0fU0QicrY0lGBXElayAk5gULkezXtiPEiLy8veZjSWPXw4bNjszHh6UU1/ckj8NB9T8dHx5PPNeyghHi4EAs0TeswM3DK8lbO+SaBaDe6YNHDa5Mu3P1o7bXouBm3d9cVn6zb2xUSMeFzi2r6U8LhMX/7A2m+r7bcdb5+T2Bw8DJSWsEYKzcFFEWpF0LM1DRNdjxRGjeQuqTZN//ZbCOytDP13Um+hjU/evZ1Zj29Wem744YtocgNeEZXdWXXwbffMniSJB0jhPgZY4+ZApIk/WAjpHeY83W/ZK4+4svemGNNPaX3m+64/tObfkvM3hfyfBT+lz+Q0XkDbjqiKB4ASDHqECbgZeypee6KD3uyN7wcjI6PsorEn2/TL6csouYzPuJ7TAh+YCTy0DVOwClJhwQhsxhjknEo012+qydr/fND0xNtVhHr75ir/kBGR3Vl1xh4yCJK6UVVVR83M3Apyju6rr8SKrLxbF5J+Z6ehe7S4PRbx4mY8FMTwwsKCqKDQ0MDgPiuqqoVpoAsyw6CeFIArGSMNYZSvW99eVWvw+22isT8GRlu+u90PgJC1CEh93u93s7RQXMpynEOEGCMydZByyzZWnU2+wV3cFqCLeYPfyDjp+rKrv3hnlvsNwa2FRF1TdOWWScZcmV5OUdsAcTnVFU9YC3avRu27bqULpeknmn6eBI4uGS5VCB+IgCWMsaOhQmYtZCkSkHIRiJE/tj9vrRg9UOtjV98H2lHKYqiCF1vpJRWehl7c8Jtaux4SsjnAFCIQrzo1bT9U9hL6JJlt875bkJpbbzdXhxxXV9vMRsibieIr3IhvgOADxISEpo8Hk/QGr3ZLcFgga7rb1BCFiPA9tl2+xYrfJxFYcPidC4DIbYBwBKu64MCsYMScsE4o3OeSglZAADTjCAQsSzk+VgLb/bRN1p4PiIWAkAWAtxmAka+ze2IWG+0YqS6TJrBZH/6L+/+BedwGDdvfYzpAAAAAElFTkSuQmCC",
                animation: 'DROP',
                position: location.latLng,
            })
                .then(function (marker) {
                _this.marker = marker;
                console.log('marker added');
                _this.map.addCircle({
                    'center': location.latLng,
                    'radius': 300,
                    'strokeColor': '#A0BAE7',
                    'strokeWidth': 5,
                    'fillColor': '#5992F5'
                }).then(function (circle) {
                    setTimeout(function () {
                        circle.setRadius(0);
                    }, 1500);
                });
            });
        });
    };
    NativeMapContainerProvider.prototype.startChecking = function () {
        var _this = this;
        this.timer1 = setTimeout(function () {
            _this.map.getMyLocation().then(function (location) {
                _this.location = location;
                _this.map.moveCamera({
                    target: location.latLng,
                    zoom: 17,
                    tilt: 10,
                    bearing: 0,
                }).then(function (suc) {
                    _this.marker.setPosition(location.latLng);
                    _this.startChecking();
                });
            });
        }, 5000);
    };
    NativeMapContainerProvider.prototype.RefreshMap = function (address) {
        var _this = this;
        var centerBar = document.getElementById("onbar");
        centerBar.style.display = 'none';
        var geocode = new google.maps.Geocoder;
        geocode.geocode({ 'address': address }, function (results, status) {
            if (status == 'OK') {
                var position = results[0].geometry.location;
                var matLatr = new __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["c" /* LatLng */](position.lat(), position.lng());
                _this.map.animateCamera({
                    target: matLatr,
                    zoom: 17,
                    tilt: 10,
                    bearing: 0,
                    duration: 1000
                }).then(function (suc) {
                    var centerBar = document.getElementById("onbar");
                    centerBar.style.display = 'block';
                    console.log(_this.lat);
                });
            }
            else {
                // alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };
    NativeMapContainerProvider.prototype.Reset = function () {
        var _this = this;
        var centerBar = document.getElementById("onbar");
        centerBar.style.display = 'none';
        this.map.animateCamera({
            target: this.location.latLng,
            zoom: 17,
            tilt: 10,
            bearing: 0,
            duration: 1000
        }).then(function (suc) {
            console.log('camera done');
            _this.lat = _this.location.latLng.lat;
            _this.lng = _this.location.latLng.lng;
            _this.showDriversOnMap();
            _this.startChecking();
            console.log(_this.lat, _this.lng);
            var centerBar = document.getElementById("onbar");
            centerBar.style.display = 'block';
            _this.hasRequested = false;
            _this.map.addMarker({
                title: '',
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAEcUlEQVRIS7WVfUxVZRzHf7/nuQx8QZJLEC81MXpZsjSuZOrEc869CDhoZTW16GXiRXvbrCxa/lFuQdqLmE5mMuacq1Z3gxISHPc8B1dopGEMxlTYNZp6s4WUFl2unOdp5+DFc4GL9EdnO9vdOc/9fH+/7+/lIPzPF96Ej7mS5OCIRQIxi3OeZJynAL8iIe0c4BBj7BQAiEiciAK5suy8JsR7lJBsrutXgJB2iug3QBwgRej6A4TSWQjQhkKUNWva0YlExgk4HI6o2bGxOwQhLwEAQyHeHxZCbWlpGbYCJEmyEUJyAaAMAZYj5zuHAV4fey5MwIDfEhf3Jdf1FcRmK1VV9bPJ0r8uiE6n8xkQYi8ANMTb7Ws8Ho8eCiZMwCVJu3Uh1tkIWdGsaa1Tqf/iwicfjNYDF6MCA3dyxCYuRJWmaa+NEzA854heQCxWVfXTqcCz1m5Wfk5fVT3zSt+lub7aVbZ/fl8pEGsAMUdV1W8NRigDlCSpjRJyVWXMNQVbwID3pRXV9KflzDF6aM7pgydmnDuanxj0fU0QicrY0lGBXElayAk5gULkezXtiPEiLy8veZjSWPXw4bNjszHh6UU1/ckj8NB9T8dHx5PPNeyghHi4EAs0TeswM3DK8lbO+SaBaDe6YNHDa5Mu3P1o7bXouBm3d9cVn6zb2xUSMeFzi2r6U8LhMX/7A2m+r7bcdb5+T2Bw8DJSWsEYKzcFFEWpF0LM1DRNdjxRGjeQuqTZN//ZbCOytDP13Um+hjU/evZ1Zj29Wem744YtocgNeEZXdWXXwbffMniSJB0jhPgZY4+ZApIk/WAjpHeY83W/ZK4+4svemGNNPaX3m+64/tObfkvM3hfyfBT+lz+Q0XkDbjqiKB4ASDHqECbgZeypee6KD3uyN7wcjI6PsorEn2/TL6csouYzPuJ7TAh+YCTy0DVOwClJhwQhsxhjknEo012+qydr/fND0xNtVhHr75ir/kBGR3Vl1xh4yCJK6UVVVR83M3Apyju6rr8SKrLxbF5J+Z6ehe7S4PRbx4mY8FMTwwsKCqKDQ0MDgPiuqqoVpoAsyw6CeFIArGSMNYZSvW99eVWvw+22isT8GRlu+u90PgJC1CEh93u93s7RQXMpynEOEGCMydZByyzZWnU2+wV3cFqCLeYPfyDjp+rKrv3hnlvsNwa2FRF1TdOWWScZcmV5OUdsAcTnVFU9YC3avRu27bqULpeknmn6eBI4uGS5VCB+IgCWMsaOhQmYtZCkSkHIRiJE/tj9vrRg9UOtjV98H2lHKYqiCF1vpJRWehl7c8Jtaux4SsjnAFCIQrzo1bT9U9hL6JJlt875bkJpbbzdXhxxXV9vMRsibieIr3IhvgOADxISEpo8Hk/QGr3ZLcFgga7rb1BCFiPA9tl2+xYrfJxFYcPidC4DIbYBwBKu64MCsYMScsE4o3OeSglZAADTjCAQsSzk+VgLb/bRN1p4PiIWAkAWAtxmAka+ze2IWG+0YqS6TJrBZH/6L+/+BedwGDdvfYzpAAAAAElFTkSuQmCC",
                animation: 'DROP',
                position: _this.location.latLng,
            })
                .then(function (marker) {
                _this.marker = marker;
                console.log('marker added');
                _this.map.addCircle({
                    'center': _this.location.latLng,
                    'radius': 900,
                    'strokeColor': '#A0BAE7',
                    'strokeWidth': 5,
                    'fillColor': '#5992F5'
                }).then(function (circle) {
                    var y = setTimeout(function () {
                        circle.setRadius(0);
                    }, 1500);
                });
            });
        });
    };
    NativeMapContainerProvider.prototype.showDriversOnMap = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var allCars;
            var id;
            _this.myProf.getAllDrivers().on('child_added', function (driverSnapshot) {
                _this.isCarAvailable = true;
                _this.locations = [driverSnapshot.val().driver_details[0], driverSnapshot.val().driver_details[1]];
                _this.locations.push([driverSnapshot.val().driver_details[0], driverSnapshot.val().driver_details[1]]);
                id = [driverSnapshot.val().driver_details[2]];
                var marker, i;
                console.log(_this.locations.length);
                var CARS = [
                    {
                        position: { lat: _this.locations[0], lng: _this.locations[1] },
                        icon: 'data:image/png;base64,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'
                    },
                ];
                if (CARS.length <= 3) {
                    CARS.forEach(function (markerOptions) {
                        _this.map.addMarker(markerOptions).then(function (marker) {
                            //  marker.setIcon(icon);
                        });
                    });
                    _this.cars.push(allCars);
                    console.log(_this.cars);
                }
                console.log(_this.locations[1]);
                _this.car_notificationIds.push(id);
                _this.myProf.getAllDrivers().off('child_added');
                console.log(_this.car_location);
                //console.log(driverSnapshot.val().driver_details[2], this.location.length, driverSnapshot.val().driver_details[0], driverSnapshot.val().driver_details[1])
            });
            _this.myProf.getAllDrivers().on('child_changed', function (driverSnapshot) {
                _this.locations = [driverSnapshot.val().driver_details[0], driverSnapshot.val().driver_details[1]];
                _this.locations.push([driverSnapshot.val().driver_details[0], driverSnapshot.val().driver_details[1]]);
                id = [driverSnapshot.val().driver_details[2]];
                var marker, i;
                console.log(_this.locations.length);
                var CARS = [
                    {
                        position: { lat: _this.locations[0], lng: _this.locations[1] },
                        icon: 'data:image/png;base64,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'
                    },
                ];
                CARS.forEach(function (markerOptions) {
                    _this.map.addMarker(markerOptions).then(function (marker) {
                        marker.setPosition(marker.position);
                    });
                });
            });
        });
    };
    NativeMapContainerProvider.prototype.setMarkers = function (driverlocation, uid) {
        var _this = this;
        this.driver = this.map.addMarker({
            title: '',
            icon: 'data:image/png;base64,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',
            animation: 'DROP',
            position: {
                lat: driverlocation[0],
                lng: driverlocation[1]
            }
        }).then(function (marker) {
            _this.detectCarChange = setInterval(function () {
                _this.moveDriver(marker);
            }, 4000);
        });
        this.client = this.map.addMarker({
            title: '',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE/0lEQVR4Xu2aZ+i3UxjHP4+9iYx4ISSREdlblJHx4OnJ5gXZJUKRUBQhygjJlpGV7K3M7C3Ze2Uke/bRuet0+41zj9+5X/zuU/83v/91zvle33Nd17mu69wzmPIxY8r1pyegt4ApZ6B3gSk3gD4I9i7Qu8CUM9ClC6wDbAMsDnwG3AW8m/s8uiBgSeBKYIeSsn8DlwJHAb/lIiI3AYsCTwGrjlDwHmBHQEImPnITcCFwWIJWhwCXJMg1FslJwILAN8B8CahfA9ZIkGsskpOAjYEnKiBeBPixgnwt0ZwEGPEfqIByaeCrCvK1RHMSsALwXiLK78P1+E+ifG2xnAQI8llg3QS0FwOHJsg1FslNwCbAo8BcI5AbKA2AXzTWLmGB3AQcCJwFLDYC2/uA1+D9Cfgbi+QiYE7gCmDfRMT6/nHA2YnytcVyEXA6cEINlLsBt9WYlzwlBwFG/7eD33uyKXsWcp8CKwK/J2tUUTAFTMUl/yd+CnAy8AdwE7B3woJXA/sFuV2B2xPm1BLJQYDJj0nQfcBzwIkJSPcEzgGWDXHg2IQ5tURyEPACsDZwEfBdBQIsmjYDromsoZaSoyblIOAlYC3AStAML9UCvAq3AK4D9mld87BgT8CkmI3W7S2gd4EpjwFegeb+7wCzKgTBzwEbqB+GKnIi3pojCMbAT6tAwA0T0bi06KQJmCdcZVsB64VeQFwJfgR8DawGzB9h8/TtHTwZukjmEhMZkyLAR4/Dgd0BW+HDxpHABUBxUwyT0w2uBWyUfNImE20TYOFyLrBzCaQKPA5sCKwU/W8YAY8AdpElMm6eWBRdBpwEfNsGEW0SYLZmL3+BAEzzvjwUQG+G3+4Ftk0gwFrAGGBnePtQQPmSZF/BYbfIourhpiS0RcDBwTwLcKa7VnR/lgBWJSCeruWcGlWTVpd7ATc3IaENAjTTZ4KpqqCgLHoGjSYEFOtpCdcH6/gV2AB4pS4JbRBwB7BTePQw2nsyw0YbBLi2VaJxQpfQDbbuggDL26WC8l53Xlv6fTG8843u8fDhc7uEGLAHcGNp7szS3F2AZYKMbTMfU22le60mjyYW8AGw/IidDF6eeDy8yuKO0LBbwBMtB7gzgOPHaGb7TVzJowkBVwE+X2mORn4jfWwBBsLnS0g2D6Y7R/h9EAFvhOKpHECPAA6I1vOJ3X09+eLJbX/gy2TtExuU49bzo4aDgJcBHz5+GjNBU7ZL7Gk5z4aH7TLnqoikjEt2tgQeDDHgzuCG43AO/H8TCygWXC5EYT91eRqYDXxcC03apDjf+Dmk10WekbZCJNUGAS6nG9wNLBSetH3QOH/EdVgZKLApYIe5iPh+RmN1qQXUHm0RIAD7fkbuVQKaX8Kjxi3AQ8APA1AeHfzYgGfhEw+xrR4+lzEzjD+YMND5mxbXaLRJgEDmBY4BbGPHVd9fwOvAi8BbocY3WN0aiiVTaE9SdzLjU/H1gSVK2vnBxHnAmQmxJomYtgkoNtUV9FX/NgKKqJ8EqiTkK5E5hleo6fUgS6qz7n9zJkVADMiujlHblHVNYOVw0nMPQG0WaS/A7tGrIcU245vYU3kOAgadjvsuHKpFewZ+OmeO7+lO/KuQcqCpbT4tTCwyw8eClbSwZLUlurKAAqW5uwmQ97jJUfbRNQHZFS5v2BPQ+RF0DKC3gI4PoPPtewvo/Ag6BtBbQMcH0Pn2/wLJ+fdBzNOruQAAAABJRU5ErkJggg==',
            animation: 'DROP',
            position: {
                lat: this.lat,
                lng: this.lng
            }
        });
        var arrayOfLatLng = [new __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["c" /* LatLng */](driverlocation[0], driverlocation[1]), new __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["c" /* LatLng */](this.lat, this.lng)];
        var bounds = new __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["d" /* LatLngBounds */](arrayOfLatLng);
        var center = bounds.getCenter();
        var mapElement = document.getElementById('map');
        var mapDimensions = {
            height: mapElement.offsetHeight,
            width: mapElement.offsetWidth
        };
        var zoom = this.getBoundsZoomLevel(bounds, mapDimensions);
        this.map.moveCamera({
            target: center,
            zoom: zoom
        }).then(function (suc) {
            _this.isNavigate = true;
        });
    };
    NativeMapContainerProvider.prototype.moveDriver = function (marker) {
        console.log('This is the marker: ' + marker);
        var latLng = new __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["c" /* LatLng */](this.D_lat, this.D_lng);
        console.log('This is the latlng: ' + this.D_lat, this.D_lng);
        marker.setPosition(latLng);
    };
    NativeMapContainerProvider.prototype.getBoundsZoomLevel = function (bounds, mapDim) {
        var WORLD_DIM = { height: 256, width: 256 };
        var ZOOM_MAX = 21;
        var ne = bounds.northeast;
        var sw = bounds.southwest;
        var latFraction = (this.latRad(ne.lat) - this.latRad(sw.lat)) / Math.PI;
        var lngDiff = ne.lng - sw.lng;
        var lngFraction = ((lngDiff < 0) ? (lngDiff + 360) : lngDiff) / 360;
        var latZoom = this.zoom(mapDim.height, WORLD_DIM.height, latFraction);
        var lngZoom = this.zoom(mapDim.width, WORLD_DIM.width, lngFraction);
        return Math.min(latZoom, lngZoom, ZOOM_MAX);
    };
    NativeMapContainerProvider.prototype.latRad = function (lat) {
        var sin = Math.sin(lat * Math.PI / 180);
        var radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
        return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
    };
    NativeMapContainerProvider.prototype.zoom = function (mapPx, worldPx, fraction) {
        return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
    };
    return NativeMapContainerProvider;
}());
NativeMapContainerProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_anim_control_anim_control__["a" /* AnimControlProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_geocoder_geocoder__["a" /* GeocoderProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */]])
], NativeMapContainerProvider);

//# sourceMappingURL=native-map-container.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeocoderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the GeocoderProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var GeocoderProvider = (function () {
    function GeocoderProvider(platform) {
        this.platform = platform;
        this.geocoder = new google.maps.Geocoder;
    }
    GeocoderProvider.prototype.Geocode = function (address) {
        var _this = this;
        this.geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == 'OK') {
                var position = results[0].geometry.location;
                _this.lat = position.lat();
                _this.lng = position.lng();
                //this.pop.locatePosition(this.lat, this.lng)
                console.log(_this.lat);
            }
            else {
                // alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };
    GeocoderProvider.prototype.Reverse_Geocode = function (lat, lng, map, driverMode) {
        var _this = this;
        var latlng = { lat: parseFloat(lat), lng: parseFloat(lng) };
        this.geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    if (!driverMode) {
                        document.getElementById("location").innerHTML = results[0].formatted_address;
                        _this.locationName = results[0].formatted_address;
                    }
                    else {
                        var driver_location = results[0].formatted_address;
                    }
                }
                else {
                    // window.alert('No results found');
                }
            }
            else {
                // window.alert('Geocoder failed due to: ' + status);
            }
        });
    };
    GeocoderProvider.prototype.Simple_Geocode = function (lat, lng) {
        var latlng = { lat: parseFloat(lat), lng: parseFloat(lng) };
        var result;
        this.geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    result = results[0].formatted_address;
                }
            }
        });
        return result;
    };
    return GeocoderProvider;
}());
GeocoderProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
], GeocoderProvider);

//# sourceMappingURL=geocoder.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimControlProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
  Generated class for the AnimControlProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AnimControlProvider = (function () {
    function AnimControlProvider() {
        this.flipState = 'notFlipped';
        this.flyInOutState = 'out';
        this.fadeState = 'invisible';
        this.bounceState = 'out';
    }
    AnimControlProvider.prototype.toggleFlipAnim = function (animation) {
        this.flipState = animation;
        console.log('animate caleede');
    };
    AnimControlProvider.prototype.toggleFlyOutAnim = function (animation) {
        this.flyInOutState = animation;
        console.log('animate caleede');
    };
    AnimControlProvider.prototype.toggleFadeAnim = function (animation) {
        this.fadeState = animation;
        console.log('animate caleede');
    };
    AnimControlProvider.prototype.toggleBounceAnim = function (animation) {
        this.bounceState = animation;
        console.log('animate caleede');
    };
    return AnimControlProvider;
}());
AnimControlProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], AnimControlProvider);

//# sourceMappingURL=anim-control.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_native_map_container_native_map_container__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_anim_control_anim_control__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_rate_rate__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the PopUpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var PopUpProvider = (function () {
    function PopUpProvider(injector, storage, cMap, alert, ph, load, anim) {
        this.injector = injector;
        this.storage = storage;
        this.cMap = cMap;
        this.alert = alert;
        this.ph = ph;
        this.load = load;
        this.anim = anim;
        this.onRequest = false;
        this.canDismiss = false;
        this.calculateBtn = false;
        this.allowed = true;
    }
    Object.defineProperty(PopUpProvider.prototype, "navCtrl", {
        get: function () {
            return this.injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]);
        },
        enumerable: true,
        configurable: true
    });
    PopUpProvider.prototype.showAlertNormal = function (title, subtitle, network) {
        var _this = this;
        var alert = this.alert.create({
            title: title,
            subTitle: subtitle,
            buttons: [{
                    text: "Try Again",
                    role: 'cancel',
                    handler: function () {
                        if (network) {
                            _this.clearAll(_this.uid, true);
                        }
                    }
                },],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    PopUpProvider.prototype.showAlert = function (title, subtitle) {
        var alert = this.alert.create({
            title: title,
            subTitle: subtitle,
            buttons: [{
                    text: "Okay",
                    role: 'cancel',
                    handler: function () {
                    }
                },],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    PopUpProvider.prototype.pickup = function () {
        var _this = this;
        var alert = this.alert.create({
            title: "Have You Been Picked Up?",
            subTitle: "",
            buttons: [{
                    text: "No",
                    role: 'cancel',
                    handler: function () {
                        _this.ph.ApprovePickup(false, _this.uid);
                    }
                },
                {
                    text: "Yes",
                    handler: function () {
                        _this.ph.ApprovePickup(false, _this.uid);
                        _this.allowed = false;
                        //picked up true, disable cancel of navigation
                    }
                },],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    PopUpProvider.prototype.dropoff = function (uid) {
        var _this = this;
        var alert = this.alert.create({
            title: "Have You Arrived At Your Destination ?",
            subTitle: "",
            buttons: [
                {
                    text: "Yes",
                    handler: function () {
                        _this.ph.CanCharge(true, uid);
                        //  this.ph.ApproveDrop(false, uid);
                    }
                },
            ],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    PopUpProvider.prototype.showPayMentAlert = function (title, subtitle, canLeave) {
        var _this = this;
        var alert = this.alert.create({
            title: title,
            subTitle: subtitle,
            buttons: [{
                    text: "Okay",
                    role: 'cancel',
                    handler: function () {
                        if (canLeave) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_rate_rate__["a" /* RatePage */]);
                        }
                    }
                },],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    PopUpProvider.prototype.showPomp = function (title, message) {
        var _this = this;
        var alert = this.alert.create({
            title: title,
            subTitle: message,
            buttons: [{
                    text: "Okay",
                    role: 'cancel',
                    handler: function () {
                        _this.clearAll(_this.uid, true);
                    }
                },],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    PopUpProvider.prototype.showPimp = function (title) {
        var alert = this.alert.create({
            title: title,
            buttons: [{
                    text: "Okay",
                    role: 'cancel',
                    handler: function () {
                    }
                },],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    PopUpProvider.prototype.show = function (title) {
        var alert = this.alert.create({
            title: title,
            buttons: [{
                    text: "Okay",
                    role: 'cancel',
                    handler: function () {
                        document.getElementById("destination").innerHTML = "Set A Closer Destination";
                    }
                },],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    PopUpProvider.prototype.Send = function (id) {
        var _this = this;
        var alert = this.alert.create({
            title: 'Write Your Short Message',
            inputs: [
                {
                    name: 'message',
                    placeholder: 'Message'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        _this.ph.SendMessage(data.message, id);
                    }
                }
            ]
        });
        alert.present();
    };
    PopUpProvider.prototype.showEstimateAlert = function (title, subtitle) {
        var _this = this;
        var alert = this.alert.create({
            title: title,
            subTitle: subtitle,
            buttons: [{
                    text: "OK",
                    role: 'cancel',
                    handler: function () {
                        _this.cMap.onDestinatiobarHide = false;
                        _this.calculateBtn = false;
                        document.getElementById("destination").innerHTML = "Set Destination";
                    }
                },],
        });
        alert.present();
    };
    PopUpProvider.prototype.GotoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_rate_rate__["a" /* RatePage */]);
    };
    PopUpProvider.prototype.clearAll = function (uid, can) {
        var _this = this;
        console.log(uid);
        var customer = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref("Customer/" + uid);
        customer.remove().then(function (success) {
            // this.cMap.toggleFlipAnim('flipped');
            // this.cMap.toggleFadeAnim('invisible');
            // this.cMap.toggleBounceAnim("out");
            _this.cMap.onbar2 = false;
            _this.cMap.onbar3 = false;
            _this.cMap.isNavigate = false;
            _this.cMap.map.clear().then(function (s) {
                _this.cMap.Reset();
                _this.presentRouteLoader("Cancelling...");
            });
            //this.cMap.element = this.mapComponent
            _this.cMap.hasRequested = false;
            _this.onRequest = false;
            _this.cMap.toggleBtn = false;
            _this.cMap.onPointerHide = false;
            _this.cMap.onDestinatiobarHide = false;
            _this.allowed = true;
            _this.cMap.map.setClickable(true);
            document.getElementById("header").innerHTML = "Confirmation";
            document.getElementById("header").style.textAlign = 'center';
            document.getElementById("header").style.fontSize = "1.34em";
            //this.cMap.map.setOptions({draggable: true});
            _this.cMap.isCarAvailable = true;
            _this.cMap.car_notificationIds = [];
            _this.canDismiss = true;
            _this.storage.remove("currentUserId");
            _this.cMap.cars = [];
        }).catch(function (error) {
            // this.showAlertNormal("Network Error", "please make sure you have a strong network and try Again", false)
        });
        if (can)
            document.getElementById("destination").innerHTML = 'Set Destination';
    };
    PopUpProvider.prototype.locatePosition = function (lat, lng) {
        // this.cMap.map.setCenter(lat, lng);
    };
    PopUpProvider.prototype.presentRouteLoader = function (message) {
        var _this = this;
        var loading = this.load.create({
            content: message
        });
        loading.present();
        var myInterval = setInterval(function () {
            if (_this.canDismiss) {
                loading.dismiss();
                clearInterval(myInterval);
            }
        }, 1000);
    };
    PopUpProvider.prototype.showAlertComplex = function (title, message, accept, reject, iscancel) {
        var _this = this;
        var alert = this.alert.create({
            title: title,
            message: message,
            inputs: [
                {
                    name: 'long',
                    label: 'Long Pickup',
                    type: "checkbox",
                    value: "true",
                    checked: false
                },
                {
                    name: 'incorrect',
                    label: 'Incorrect Request',
                    type: "checkbox",
                    value: "false",
                    checked: false
                }
            ],
            buttons: [
                {
                    text: reject,
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: accept,
                    handler: function () {
                        if (iscancel) {
                            _this.clearAll(_this.uid, true);
                        }
                    }
                }
            ],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    return PopUpProvider;
}());
PopUpProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_native_map_container_native_map_container__["a" /* NativeMapContainerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_anim_control_anim_control__["a" /* AnimControlProvider */]])
], PopUpProvider);

//# sourceMappingURL=pop-up.js.map

/***/ })

},[299]);
//# sourceMappingURL=main.js.map