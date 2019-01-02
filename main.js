(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p>\n    Hi, I am Darshan Bhandari. Firstly, I would like to thank you for visiting my portfolio.\n    <br>\n    I am currently pursuing my Masters in Computer Science at North Carolina State University and will be graduating on\n    <b>May 2019</b>.\n    <br><br>I am looking for full-time positions as a Software Engineer, Front-end developer, Back-end developer, Full stack \n    Developer. I \n    <br>\n    am a team-player, hardworking and passionate developer with a result driven attitude, having experience with development\n    <br>\n    and programming in general for a little more than 5 years. I was introduced to programming in my 11th grade and things have\n    <br>\n    only got better since. I completed my Bachelors in Engineering from SIES Graduate School Of Engineering affiliated to the \n    <br>\n    Mumbai University.\n    <br><br>\n    For further details please contact me\n    <br>\n    Email:- dbhanda@ncsu.edu\n    <br> \n    Contact Number:- 9842183589\n    <br>\n    <a href=\"https://www.linkedin.com/in/darshanbhandari123\" target=\"_blank\">LinkedIn</a>\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: appRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRouting", function() { return appRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./courses/courses.component */ "./src/app/courses/courses.component.ts");
/* harmony import */ var _course_cards_course_cards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course-cards/course-cards.component */ "./src/app/course-cards/course-cards.component.ts");
/* harmony import */ var _categories_menu_categories_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories-menu/categories-menu.component */ "./src/app/categories-menu/categories-menu.component.ts");
/* harmony import */ var _course_category_course_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-category/course-category.component */ "./src/app/course-category/course-category.component.ts");
/* harmony import */ var _restaurant_management_restaurant_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./restaurant-management/restaurant-management.component */ "./src/app/restaurant-management/restaurant-management.component.ts");
/* harmony import */ var _attendance_monitoring_attendance_monitoring_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./attendance-monitoring/attendance-monitoring.component */ "./src/app/attendance-monitoring/attendance-monitoring.component.ts");
/* harmony import */ var _device_driver_device_driver_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./device-driver/device-driver.component */ "./src/app/device-driver/device-driver.component.ts");
/* harmony import */ var _library_management_library_management_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./library-management/library-management.component */ "./src/app/library-management/library-management.component.ts");
/* harmony import */ var _car_rental_car_rental_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./car-rental/car-rental.component */ "./src/app/car-rental/car-rental.component.ts");
/* harmony import */ var _expertiza_expertiza_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./expertiza/expertiza.component */ "./src/app/expertiza/expertiza.component.ts");
/* harmony import */ var _assignment_management_assignment_management_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assignment-management/assignment-management.component */ "./src/app/assignment-management/assignment-management.component.ts");
/* harmony import */ var _buffer_management_buffer_management_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./buffer-management/buffer-management.component */ "./src/app/buffer-management/buffer-management.component.ts");
/* harmony import */ var _ocr_ocr_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ocr/ocr.component */ "./src/app/ocr/ocr.component.ts");
/* harmony import */ var _makesoil_makesoil_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./makesoil/makesoil.component */ "./src/app/makesoil/makesoil.component.ts");
/* harmony import */ var _spring_rails_spring_rails_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./spring-rails/spring-rails.component */ "./src/app/spring-rails/spring-rails.component.ts");
/* harmony import */ var _openmrs_openmrs_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./openmrs/openmrs.component */ "./src/app/openmrs/openmrs.component.ts");
/* harmony import */ var _p2p_p2p_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./p2p/p2p.component */ "./src/app/p2p/p2p.component.ts");




















var routes = [
    {
        path: 'projects',
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__["ProjectsComponent"],
        children: [
            {
                path: '',
                component: _course_cards_course_cards_component__WEBPACK_IMPORTED_MODULE_4__["CourseCardsComponent"]
            },
            {
                path: 'restaurant-management',
                component: _restaurant_management_restaurant_management_component__WEBPACK_IMPORTED_MODULE_7__["RestaurantManagementComponent"]
            },
            {
                path: 'attendance-monitoring',
                component: _attendance_monitoring_attendance_monitoring_component__WEBPACK_IMPORTED_MODULE_8__["AttendanceMonitoringComponent"]
            },
            {
                path: 'device-driver',
                component: _device_driver_device_driver_component__WEBPACK_IMPORTED_MODULE_9__["DeviceDriverComponent"]
            },
            {
                path: 'library-management',
                component: _library_management_library_management_component__WEBPACK_IMPORTED_MODULE_10__["LibraryManagementComponent"]
            },
            {
                path: 'car-rental',
                component: _car_rental_car_rental_component__WEBPACK_IMPORTED_MODULE_11__["CarRentalComponent"]
            },
            {
                path: 'expertiza',
                component: _expertiza_expertiza_component__WEBPACK_IMPORTED_MODULE_12__["ExpertizaComponent"]
            },
            {
                path: 'assignment-management',
                component: _assignment_management_assignment_management_component__WEBPACK_IMPORTED_MODULE_13__["AssignmentManagementComponent"]
            },
            {
                path: 'buffer-management',
                component: _buffer_management_buffer_management_component__WEBPACK_IMPORTED_MODULE_14__["BufferManagementComponent"]
            },
            {
                path: 'ocr',
                component: _ocr_ocr_component__WEBPACK_IMPORTED_MODULE_15__["OcrComponent"]
            },
            {
                path: 'makesoil',
                component: _makesoil_makesoil_component__WEBPACK_IMPORTED_MODULE_16__["MakesoilComponent"]
            },
            {
                path: 'spring-rails',
                component: _spring_rails_spring_rails_component__WEBPACK_IMPORTED_MODULE_17__["SpringRailsComponent"]
            },
            {
                path: 'openmrs',
                component: _openmrs_openmrs_component__WEBPACK_IMPORTED_MODULE_18__["OpenmrsComponent"]
            },
            {
                path: 'p2p',
                component: _p2p_p2p_component__WEBPACK_IMPORTED_MODULE_19__["P2pComponent"]
            },
            {
                path: '',
                outlet: 'sidemenu',
                component: _categories_menu_categories_menu_component__WEBPACK_IMPORTED_MODULE_5__["SideMenuComponent"]
            },
            {
                path: ':id',
                outlet: 'sidemenu',
                component: _categories_menu_categories_menu_component__WEBPACK_IMPORTED_MODULE_5__["SideMenuComponent"]
            }
        ]
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    },
    {
        path: 'courses',
        component: _courses_courses_component__WEBPACK_IMPORTED_MODULE_3__["CoursesComponent"],
        children: [
            {
                path: '',
                component: _course_cards_course_cards_component__WEBPACK_IMPORTED_MODULE_4__["CourseCardsComponent"]
            },
            {
                path: ':id',
                component: _course_category_course_category_component__WEBPACK_IMPORTED_MODULE_6__["CoursesCategoryComponent"]
            },
            {
                path: '',
                outlet: 'sidemenu',
                component: _categories_menu_categories_menu_component__WEBPACK_IMPORTED_MODULE_5__["SideMenuComponent"]
            },
            {
                path: ':id',
                outlet: 'sidemenu',
                component: _categories_menu_categories_menu_component__WEBPACK_IMPORTED_MODULE_5__["SideMenuComponent"]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/projects',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/projects',
        pathMatch: 'full'
    }
];
var appRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-dark bg-inverse\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\">My Portfolio</a>\n        <ul class=\"nav navbar-nav\" routerLinkActive=\"active\">\n            <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"about\">About</a></li>\n            <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"courses\">Courses</a></li>\n            <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"projects\">Projects</a></li>\n        </ul>\n    </div>\n</nav>\n<br><br><br><br>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my Portfolio';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./courses/courses.component */ "./src/app/courses/courses.component.ts");
/* harmony import */ var _course_cards_course_cards_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./course-cards/course-cards.component */ "./src/app/course-cards/course-cards.component.ts");
/* harmony import */ var _categories_menu_categories_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./categories-menu/categories-menu.component */ "./src/app/categories-menu/categories-menu.component.ts");
/* harmony import */ var _course_category_course_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./course-category/course-category.component */ "./src/app/course-category/course-category.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _restaurant_management_restaurant_management_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./restaurant-management/restaurant-management.component */ "./src/app/restaurant-management/restaurant-management.component.ts");
/* harmony import */ var _attendance_monitoring_attendance_monitoring_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./attendance-monitoring/attendance-monitoring.component */ "./src/app/attendance-monitoring/attendance-monitoring.component.ts");
/* harmony import */ var _device_driver_device_driver_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./device-driver/device-driver.component */ "./src/app/device-driver/device-driver.component.ts");
/* harmony import */ var _library_management_library_management_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./library-management/library-management.component */ "./src/app/library-management/library-management.component.ts");
/* harmony import */ var _car_rental_car_rental_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./car-rental/car-rental.component */ "./src/app/car-rental/car-rental.component.ts");
/* harmony import */ var _expertiza_expertiza_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./expertiza/expertiza.component */ "./src/app/expertiza/expertiza.component.ts");
/* harmony import */ var _assignment_management_assignment_management_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assignment-management/assignment-management.component */ "./src/app/assignment-management/assignment-management.component.ts");
/* harmony import */ var _buffer_management_buffer_management_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./buffer-management/buffer-management.component */ "./src/app/buffer-management/buffer-management.component.ts");
/* harmony import */ var _ocr_ocr_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ocr/ocr.component */ "./src/app/ocr/ocr.component.ts");
/* harmony import */ var _makesoil_makesoil_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./makesoil/makesoil.component */ "./src/app/makesoil/makesoil.component.ts");
/* harmony import */ var _spring_rails_spring_rails_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./spring-rails/spring-rails.component */ "./src/app/spring-rails/spring-rails.component.ts");
/* harmony import */ var _openmrs_openmrs_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./openmrs/openmrs.component */ "./src/app/openmrs/openmrs.component.ts");
/* harmony import */ var _p2p_p2p_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./p2p/p2p.component */ "./src/app/p2p/p2p.component.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _courses_courses_component__WEBPACK_IMPORTED_MODULE_8__["CoursesComponent"],
                _course_cards_course_cards_component__WEBPACK_IMPORTED_MODULE_9__["CourseCardsComponent"],
                _categories_menu_categories_menu_component__WEBPACK_IMPORTED_MODULE_10__["SideMenuComponent"],
                _course_category_course_category_component__WEBPACK_IMPORTED_MODULE_11__["CoursesCategoryComponent"],
                _restaurant_management_restaurant_management_component__WEBPACK_IMPORTED_MODULE_13__["RestaurantManagementComponent"],
                _attendance_monitoring_attendance_monitoring_component__WEBPACK_IMPORTED_MODULE_14__["AttendanceMonitoringComponent"],
                _device_driver_device_driver_component__WEBPACK_IMPORTED_MODULE_15__["DeviceDriverComponent"],
                _library_management_library_management_component__WEBPACK_IMPORTED_MODULE_16__["LibraryManagementComponent"],
                _car_rental_car_rental_component__WEBPACK_IMPORTED_MODULE_17__["CarRentalComponent"],
                _expertiza_expertiza_component__WEBPACK_IMPORTED_MODULE_18__["ExpertizaComponent"],
                _assignment_management_assignment_management_component__WEBPACK_IMPORTED_MODULE_19__["AssignmentManagementComponent"],
                _buffer_management_buffer_management_component__WEBPACK_IMPORTED_MODULE_20__["BufferManagementComponent"],
                _ocr_ocr_component__WEBPACK_IMPORTED_MODULE_21__["OcrComponent"],
                _makesoil_makesoil_component__WEBPACK_IMPORTED_MODULE_22__["MakesoilComponent"],
                _spring_rails_spring_rails_component__WEBPACK_IMPORTED_MODULE_23__["SpringRailsComponent"],
                _openmrs_openmrs_component__WEBPACK_IMPORTED_MODULE_24__["OpenmrsComponent"],
                _p2p_p2p_component__WEBPACK_IMPORTED_MODULE_25__["P2pComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["appRouting"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/assignment-management/assignment-management.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/assignment-management/assignment-management.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnQtbWFuYWdlbWVudC9hc3NpZ25tZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/assignment-management/assignment-management.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/assignment-management/assignment-management.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Assignment Management CLI</h2>\n\n<p>\n  Designed by a team of 4 students, we had to replicate our actual assignment portal using JDBC.\n  <br>\n  Some features were that the test could either be adaptive or non-adaptive, a minimum score was required for a student to pass the test.\n  <br><br>\n  For more details check out the project:-\n  <a href=\"https://github.com/dlambright/Gradi-ents\" target=\"_blank\">Github</a>\n</p>\n"

/***/ }),

/***/ "./src/app/assignment-management/assignment-management.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/assignment-management/assignment-management.component.ts ***!
  \**************************************************************************/
/*! exports provided: AssignmentManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentManagementComponent", function() { return AssignmentManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AssignmentManagementComponent = /** @class */ (function () {
    function AssignmentManagementComponent() {
    }
    AssignmentManagementComponent.prototype.ngOnInit = function () {
    };
    AssignmentManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assignment-management',
            template: __webpack_require__(/*! ./assignment-management.component.html */ "./src/app/assignment-management/assignment-management.component.html"),
            styles: [__webpack_require__(/*! ./assignment-management.component.css */ "./src/app/assignment-management/assignment-management.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AssignmentManagementComponent);
    return AssignmentManagementComponent;
}());



/***/ }),

/***/ "./src/app/attendance-monitoring/attendance-monitoring.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/attendance-monitoring/attendance-monitoring.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F0dGVuZGFuY2UtbW9uaXRvcmluZy9hdHRlbmRhbmNlLW1vbml0b3JpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/attendance-monitoring/attendance-monitoring.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/attendance-monitoring/attendance-monitoring.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Attendance Management Application</h2>\n<br><br>\n\n<p>\n  The Application needs an NFC enabled smart phone to perform the desired functionalities.\n  <br>\n  The basic idea is to have an NFC chip with a unique ID associated with each Student ID card.\n  <br>\n  The teachers will have our application installed on thier smart phone, the smart phone should be circulated to each student who can mark his Attendance using his/her ID card.\n  <br>\n  The app has features for blocking any particular student or deducting his/her Attendance etc.\n</p>\n"

/***/ }),

/***/ "./src/app/attendance-monitoring/attendance-monitoring.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/attendance-monitoring/attendance-monitoring.component.ts ***!
  \**************************************************************************/
/*! exports provided: AttendanceMonitoringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceMonitoringComponent", function() { return AttendanceMonitoringComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AttendanceMonitoringComponent = /** @class */ (function () {
    function AttendanceMonitoringComponent() {
    }
    AttendanceMonitoringComponent.prototype.ngOnInit = function () {
    };
    AttendanceMonitoringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-attendance-monitoring',
            template: __webpack_require__(/*! ./attendance-monitoring.component.html */ "./src/app/attendance-monitoring/attendance-monitoring.component.html"),
            styles: [__webpack_require__(/*! ./attendance-monitoring.component.css */ "./src/app/attendance-monitoring/attendance-monitoring.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AttendanceMonitoringComponent);
    return AttendanceMonitoringComponent;
}());



/***/ }),

/***/ "./src/app/buffer-management/buffer-management.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/buffer-management/buffer-management.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1ZmZlci1tYW5hZ2VtZW50L2J1ZmZlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/buffer-management/buffer-management.component.html":
/*!********************************************************************!*\
  !*** ./src/app/buffer-management/buffer-management.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Buffer Management in Simple DB</h2>\n\n<p>\n  Modified the page replacement policy to LRU-2.\n  <br>\n  Basically, removing the page whose penultimate access was Least Recently Used. It reduced the page fault by 24%.\n  <br>\n  Also, Log Management module was implemented.\n  <br><br>\n  For more details, check out the project:- \n  <a href=\"https://github.com/leonardwkerr/SauronDB\" target=\"_blank\">Github</a>\n</p>\n"

/***/ }),

/***/ "./src/app/buffer-management/buffer-management.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/buffer-management/buffer-management.component.ts ***!
  \******************************************************************/
/*! exports provided: BufferManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferManagementComponent", function() { return BufferManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BufferManagementComponent = /** @class */ (function () {
    function BufferManagementComponent() {
    }
    BufferManagementComponent.prototype.ngOnInit = function () {
    };
    BufferManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buffer-management',
            template: __webpack_require__(/*! ./buffer-management.component.html */ "./src/app/buffer-management/buffer-management.component.html"),
            styles: [__webpack_require__(/*! ./buffer-management.component.css */ "./src/app/buffer-management/buffer-management.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BufferManagementComponent);
    return BufferManagementComponent;
}());



/***/ }),

/***/ "./src/app/car-rental/car-rental.component.css":
/*!*****************************************************!*\
  !*** ./src/app/car-rental/car-rental.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhci1yZW50YWwvY2FyLXJlbnRhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/car-rental/car-rental.component.html":
/*!******************************************************!*\
  !*** ./src/app/car-rental/car-rental.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Car Rental Service Portal</h2>\n\n<p>\n  The webiste was developed by a team of 3 students, as a part of a 2 months project.\n  <br>\n  The portal has features like renting a car, reserving a car and returning a car.\n  <br>\n  Fines were imposed on misuse of any particular feature, also a feature to block a particular user was provided.\n  <br><br>\n  For detailed description check out the project\n  <a href=\"https://github.com/darshanbhandari123/Car--rental-app\" target=\"_blank\">Github</a>\n  <br>\n  The webiste is hosted:-\n  <a href=\"https://evening-citadel-75427.herokuapp.com/\" target=\"_blank\">here</a>\n</p>\n"

/***/ }),

/***/ "./src/app/car-rental/car-rental.component.ts":
/*!****************************************************!*\
  !*** ./src/app/car-rental/car-rental.component.ts ***!
  \****************************************************/
/*! exports provided: CarRentalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarRentalComponent", function() { return CarRentalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CarRentalComponent = /** @class */ (function () {
    function CarRentalComponent() {
    }
    CarRentalComponent.prototype.ngOnInit = function () {
    };
    CarRentalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-car-rental',
            template: __webpack_require__(/*! ./car-rental.component.html */ "./src/app/car-rental/car-rental.component.html"),
            styles: [__webpack_require__(/*! ./car-rental.component.css */ "./src/app/car-rental/car-rental.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CarRentalComponent);
    return CarRentalComponent;
}());



/***/ }),

/***/ "./src/app/categories-menu/categories-menu.component.css":
/*!***************************************************************!*\
  !*** ./src/app/categories-menu/categories-menu.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMtbWVudS9jYXRlZ29yaWVzLW1lbnUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/categories-menu/categories-menu.component.html":
/*!****************************************************************!*\
  !*** ./src/app/categories-menu/categories-menu.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n\n<div class=\"list-group\">\n    <a class=\"list-group-item\">Structured Programming Approach</a>\n    <a class=\"list-group-item\">Object-oriented Programming Methodology</a>\n    <a class=\"list-group-item\">Data Structures</a>\n    <a class=\"list-group-item\">Design and Analysis of Algorithms</a>\n    <a class=\"list-group-item\">Operating System</a>\n    <a class=\"list-group-item\">Database Management System</a>\n    <a class=\"list-group-item\">Distributed databases</a>\n    <a class=\"list-group-item\">Object-oriented Design and Development</a>\n    <a class=\"list-group-item\">Automated Learning and Data Analysis</a>\n    <a class=\"list-group-item\">User Experience</a>\n    <a class=\"list-group-item\">Web Development</a>\n    <a class=\"list-group-item\">Mobile Development</a>\n    <a class=\"list-group-item\">Software Engineering</a>\n    <a class=\"list-group-item\">Software Security</a>\n    <a class=\"list-group-item\">Internet Protocol</a>\n    <a class=\"list-group-item\">Parellel and Distributed Systems</a>\n</div>\n"

/***/ }),

/***/ "./src/app/categories-menu/categories-menu.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/categories-menu/categories-menu.component.ts ***!
  \**************************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent(route) {
        route.params.subscribe(function (params) { return console.log("side menu id parameter", params['id']); });
    }
    SideMenuComponent.prototype.ngOnInit = function () {
    };
    SideMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories-menu',
            template: __webpack_require__(/*! ./categories-menu.component.html */ "./src/app/categories-menu/categories-menu.component.html"),
            styles: [__webpack_require__(/*! ./categories-menu.component.css */ "./src/app/categories-menu/categories-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SideMenuComponent);
    return SideMenuComponent;
}());



/***/ }),

/***/ "./src/app/course-cards/course-cards.component.css":
/*!*********************************************************!*\
  !*** ./src/app/course-cards/course-cards.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS1jYXJkcy9jb3Vyc2UtY2FyZHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/course-cards/course-cards.component.html":
/*!**********************************************************!*\
  !*** ./src/app/course-cards/course-cards.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-6 col-lg-4\">\n      <h3>Device Driver Implementation</h3>\n      <p>Date:- Aug 2017 - Oct 2017</p>\n      <p>Project duration:- 3 months</p>\n      <p>Course:- Operating Systems</p>\n      <p><a class=\"btn btn-secondary\" routerLink=\"device-driver\" role=\"button\">View details »</a></p>\n  </div><!--/span-->\n  <div class=\"col-xs-6 col-lg-4\">\n      <h3>Car Rental Portal</h3>\n      <p>Date:- Aug 2017 - Sep 2017</p>\n      <p>Project duration:- 2 months</p>\n      <p>Course:- Object-oriented Design and Development</p>\n      <p><a class=\"btn btn-secondary\" routerLink=\"car-rental\" role=\"button\">View details »</a></p>\n  </div><!--/span-->\n  <div class=\"col-xs-6 col-lg-4\">\n      <h3>Expertiza:- A Peer Review System</h3>\n      <p>Date:- Oct 2017 - Dec 2017</p>\n      <p>Project duration:- 3 months</p>\n      <p>Course:- Object-oriented Design and Development</p>\n      <p><a class=\"btn btn-secondary\" routerLink=\"expertiza\" role=\"button\">View details »</a></p>\n  </div><!--/span-->\n  <div class=\"col-xs-6 col-lg-4\">\n    <h3>Assignment Management CLI</h3>\n    <p>Date:- Aug 2017 - Sep 2017</p>\n    <p>Project duration:- 2 months</p>\n    <p>Course:- Database Management System</p>\n    <p><a class=\"btn btn-secondary\" routerLink=\"assignment-management\" role=\"button\">View details »</a></p>\n  </div><!--/span-->\n  <div class=\"col-xs-6 col-lg-4\">\n    <h3>Buffer Management in Simple DB</h3>\n    <p>Date:- Sep 2017 - Dec 2017</p>\n    <p>Project duration:- 2 months</p>\n    <p>Course:- Database Management System</p>\n    <p><a class=\"btn btn-secondary\" routerLink=\"buffer-management\" role=\"button\">View details »</a></p>\n  </div><!--/span-->\n  <div class=\"col-xs-6 col-lg-4\">\n    <h3>Automatic Number Plate Recognition</h3>\n    <p>Date:- Jan 2018 - April 2018</p>\n    <p>Project duration:- 4 months</p>\n    <p>Course:- Automated Learning and Data Analysis</p>\n    <p><a class=\"btn btn-secondary\" routerLink=\"ocr\" role=\"button\">View details »</a></p>\n  </div><!--/span-->\n  <div class=\"col-xs-6 col-lg-4\">\n    <h3>MakeSoil</h3>\n    <p>Date:- Feb 2018 - April 2018</p>\n    <p>Project duration:- 3 months</p>\n    <p>Course:- User Experience</p>\n    <p><a class=\"btn btn-secondary\" routerLink=\"makesoil\" role=\"button\">View details »</a></p>\n  </div><!--/span-->\n  <div class=\"col-xs-6 col-lg-4\">\n    <h3>Spring vs Rails</h3>\n    <p>Date:- Sept 2018 - Nov 2018</p>\n    <p>Project duration:- 3 months</p>\n    <p>Course:- Software Engineering</p>\n    <p><a class=\"btn btn-secondary\" routerLink=\"spring-rails\" role=\"button\">View details »</a></p>\n  </div><!--/span-->\n  <div class=\"col-xs-6 col-lg-4\">\n    <h3>OpenMRS Bug fixes</h3>\n    <p>Date:- Nov 2018 - Dec 2018</p>\n    <p>Project duration:- 2 months</p>\n    <p>Course:- Software Security</p>\n    <p><a class=\"btn btn-secondary\" routerLink=\"openmrs\" role=\"button\">View details »</a></p>\n  </div><!--/span-->\n  <div class=\"col-xs-6 col-lg-4\">\n    <h3>Peer-peer with Centrailized Index</h3>\n    <p>Date:- Oct 2018 - Nov 2018</p>\n    <p>Project duration:- 2 months</p>\n    <p>Course:- Internet Protocol</p>\n    <p><a class=\"btn btn-secondary\" routerLink=\"p2p\" role=\"button\">View details »</a></p>\n  </div><!--/span-->\n  <div class=\"col-xs-6 col-lg-4\">\n    <h3>Restaurant Management App</h3>\n    <p>Date:- Feb 2016 - April 2016</p>\n    <p>Project duration:- 3 months</p>\n    <p>Course:- Mobile Development</p>\n    <p><a class=\"btn btn-secondary\" routerLink=\"restaurant-management\"  role=\"button\">View details »</a></p>\n  </div><!--/span-->\n  <div class=\"col-xs-6 col-lg-4\">\n    <h3>Attendance Monitoring App</h3>\n    <p>Date:- Aug 2016 - May 2017</p>\n    <p>Project duration:- 10 months</p>\n    <p>Bachelor's Degree Project</p>\n    <p><a class=\"btn btn-secondary\" routerLink=\"attendance-monitoring\" role=\"button\">View details »</a></p>\n  </div><!--/span-->\n  <div class=\"col-xs-6 col-lg-4\">\n    <h3>Library Management Portal</h3>\n    <p>Date:- Aug 2015 - Nov 2015</p>\n    <p>Project duration:- 4 months</p>\n    <p>Course:- Web Development</p>\n    <p><a class=\"btn btn-secondary\" routerLink=\"library-management\" role=\"button\">View details »</a></p>\n  </div><!--/span-->\n</div><!--/row-->"

/***/ }),

/***/ "./src/app/course-cards/course-cards.component.ts":
/*!********************************************************!*\
  !*** ./src/app/course-cards/course-cards.component.ts ***!
  \********************************************************/
/*! exports provided: CourseCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseCardsComponent", function() { return CourseCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CourseCardsComponent = /** @class */ (function () {
    function CourseCardsComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    CourseCardsComponent.prototype.navigate = function (path) {
        this.router.navigate([{ outlets: { primary: path, sidemenu: path } }], { relativeTo: this.route });
    };
    CourseCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-cards',
            template: __webpack_require__(/*! ./course-cards.component.html */ "./src/app/course-cards/course-cards.component.html"),
            styles: [__webpack_require__(/*! ./course-cards.component.css */ "./src/app/course-cards/course-cards.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CourseCardsComponent);
    return CourseCardsComponent;
}());



/***/ }),

/***/ "./src/app/course-category/course-category.component.css":
/*!***************************************************************!*\
  !*** ./src/app/course-category/course-category.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS1jYXRlZ29yeS9jb3Vyc2UtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/course-category/course-category.component.html":
/*!****************************************************************!*\
  !*** ./src/app/course-category/course-category.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  course-category works!\n</p>\n"

/***/ }),

/***/ "./src/app/course-category/course-category.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/course-category/course-category.component.ts ***!
  \**************************************************************/
/*! exports provided: CoursesCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesCategoryComponent", function() { return CoursesCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CoursesCategoryComponent = /** @class */ (function () {
    function CoursesCategoryComponent() {
    }
    CoursesCategoryComponent.prototype.ngOnInit = function () {
    };
    CoursesCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-category',
            template: __webpack_require__(/*! ./course-category.component.html */ "./src/app/course-category/course-category.component.html"),
            styles: [__webpack_require__(/*! ./course-category.component.css */ "./src/app/course-category/course-category.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CoursesCategoryComponent);
    return CoursesCategoryComponent;
}());



/***/ }),

/***/ "./src/app/courses/courses.component.css":
/*!***********************************************!*\
  !*** ./src/app/courses/courses.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZXMvY291cnNlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/courses/courses.component.html":
/*!************************************************!*\
  !*** ./src/app/courses/courses.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n    <div class=\"container\">\n        <div class=\"row row-offcanvas row-offcanvas-right\">\n            <div class=\"col-xs-12 col-sm-9\">\n                <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/projects\">Projects</a></li>\n                    <li class=\"breadcrumb-item active\">Courses</li>\n                </ol>\n            </div>\n            <router-outlet name=\"sidemenu\"></router-outlet>\n        </div>\n    </div>\n</main>\n"

/***/ }),

/***/ "./src/app/courses/courses.component.ts":
/*!**********************************************!*\
  !*** ./src/app/courses/courses.component.ts ***!
  \**********************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CoursesComponent = /** @class */ (function () {
    function CoursesComponent() {
    }
    CoursesComponent.prototype.ngOnInit = function () {
    };
    CoursesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-courses',
            template: __webpack_require__(/*! ./courses.component.html */ "./src/app/courses/courses.component.html"),
            styles: [__webpack_require__(/*! ./courses.component.css */ "./src/app/courses/courses.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CoursesComponent);
    return CoursesComponent;
}());



/***/ }),

/***/ "./src/app/device-driver/device-driver.component.css":
/*!***********************************************************!*\
  !*** ./src/app/device-driver/device-driver.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldmljZS1kcml2ZXIvZGV2aWNlLWRyaXZlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/device-driver/device-driver.component.html":
/*!************************************************************!*\
  !*** ./src/app/device-driver/device-driver.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Implementaion of a Device-driver NP Heap</h2>\n\n<p>\n    Modern operating systems promote virtualization of their underlying machines and isolation among processes. \n    <br>\n    As a result, communicating among processes becomes an issue. You may need to use message passing interfaces, sockets or pipes that work only when processes are running concurrently.\n    Otherwise, you have to use files that rely on file system.\n    <br><br>\n    For more information, checkout the project\n    <a href=\"https://github.com/darshanbhandari123/Device-driver\" target=\"_blank\">Github</a>\n</p>\n"

/***/ }),

/***/ "./src/app/device-driver/device-driver.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/device-driver/device-driver.component.ts ***!
  \**********************************************************/
/*! exports provided: DeviceDriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceDriverComponent", function() { return DeviceDriverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeviceDriverComponent = /** @class */ (function () {
    function DeviceDriverComponent() {
    }
    DeviceDriverComponent.prototype.ngOnInit = function () {
    };
    DeviceDriverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-driver',
            template: __webpack_require__(/*! ./device-driver.component.html */ "./src/app/device-driver/device-driver.component.html"),
            styles: [__webpack_require__(/*! ./device-driver.component.css */ "./src/app/device-driver/device-driver.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeviceDriverComponent);
    return DeviceDriverComponent;
}());



/***/ }),

/***/ "./src/app/expertiza/expertiza.component.css":
/*!***************************************************!*\
  !*** ./src/app/expertiza/expertiza.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVydGl6YS9leHBlcnRpemEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/expertiza/expertiza.component.html":
/*!****************************************************!*\
  !*** ./src/app/expertiza/expertiza.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Open Source Contribution:- Expertiza</h2>\n\n<p>\n  It is an NSF approved webiste that was used in our course to evaluate other peers and solve all assignments.\n  <br>\n  Graded work was also shown here.\n  <br>\n  Basically, we needed to capture user behaviour, as to how much time was spent in providing reviews for a student.\n  <br><br>\n  For more detail check out the links provided here:-\n  <br>\n  <a href=\"https://github.com/darshanbhandari123/expertiza\" target=\"_blank\">Github1</a>\n  <br>\n  <a href=\"https://github.com/jerry-shijieli/expertiza\" target=\"_blank\">Github2</a>\n  <br>\n  <a href=\"https://github.com/shreyaszagade/expertiza\" target=\"_blank\">Github3</a>\n</p>\n"

/***/ }),

/***/ "./src/app/expertiza/expertiza.component.ts":
/*!**************************************************!*\
  !*** ./src/app/expertiza/expertiza.component.ts ***!
  \**************************************************/
/*! exports provided: ExpertizaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpertizaComponent", function() { return ExpertizaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExpertizaComponent = /** @class */ (function () {
    function ExpertizaComponent() {
    }
    ExpertizaComponent.prototype.ngOnInit = function () {
    };
    ExpertizaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expertiza',
            template: __webpack_require__(/*! ./expertiza.component.html */ "./src/app/expertiza/expertiza.component.html"),
            styles: [__webpack_require__(/*! ./expertiza.component.css */ "./src/app/expertiza/expertiza.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExpertizaComponent);
    return ExpertizaComponent;
}());



/***/ }),

/***/ "./src/app/library-management/library-management.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/library-management/library-management.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnktbWFuYWdlbWVudC9saWJyYXJ5LW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/library-management/library-management.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/library-management/library-management.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Library Management Portal</h2>\n\n<p>\n  This was a website developed by a team of 4 students.\n  <br>\n  The website includes features like reserving a book, checking out a book, return a book etc.\n  <br>\n  Fines are imposed if the books are not returned on time or not returned in the required condition.\n</p>\n"

/***/ }),

/***/ "./src/app/library-management/library-management.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/library-management/library-management.component.ts ***!
  \********************************************************************/
/*! exports provided: LibraryManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryManagementComponent", function() { return LibraryManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LibraryManagementComponent = /** @class */ (function () {
    function LibraryManagementComponent() {
    }
    LibraryManagementComponent.prototype.ngOnInit = function () {
    };
    LibraryManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-library-management',
            template: __webpack_require__(/*! ./library-management.component.html */ "./src/app/library-management/library-management.component.html"),
            styles: [__webpack_require__(/*! ./library-management.component.css */ "./src/app/library-management/library-management.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LibraryManagementComponent);
    return LibraryManagementComponent;
}());



/***/ }),

/***/ "./src/app/makesoil/makesoil.component.css":
/*!*************************************************!*\
  !*** ./src/app/makesoil/makesoil.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ha2Vzb2lsL21ha2Vzb2lsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/makesoil/makesoil.component.html":
/*!**************************************************!*\
  !*** ./src/app/makesoil/makesoil.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Make Soil</h2>\n\n<p>\n  The objective was to connect people who make soil with the peolpe who provide compostable materials\n  <br>\n  For more details, check out the project:-\n  <a href=\"https://github.com/NCSUMobiles/spring18_makesoil\" target=\"_blank\">Github</a>\n</p>\n"

/***/ }),

/***/ "./src/app/makesoil/makesoil.component.ts":
/*!************************************************!*\
  !*** ./src/app/makesoil/makesoil.component.ts ***!
  \************************************************/
/*! exports provided: MakesoilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakesoilComponent", function() { return MakesoilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MakesoilComponent = /** @class */ (function () {
    function MakesoilComponent() {
    }
    MakesoilComponent.prototype.ngOnInit = function () {
    };
    MakesoilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-makesoil',
            template: __webpack_require__(/*! ./makesoil.component.html */ "./src/app/makesoil/makesoil.component.html"),
            styles: [__webpack_require__(/*! ./makesoil.component.css */ "./src/app/makesoil/makesoil.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MakesoilComponent);
    return MakesoilComponent;
}());



/***/ }),

/***/ "./src/app/ocr/ocr.component.css":
/*!***************************************!*\
  !*** ./src/app/ocr/ocr.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29jci9vY3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ocr/ocr.component.html":
/*!****************************************!*\
  !*** ./src/app/ocr/ocr.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Automatic Number Plate Recognition using Optical Character Reader</h2>\n\n<p>\n  The objective of the project was to take a car image as input and provide the Number plate in String format.\n  <br>\n  For more details, check out the project:- \n  <a href=\"https://github.ncsu.edu/dgupta22/ALDA-Project\" target=\"_blank\">Github</a>\n</p>"

/***/ }),

/***/ "./src/app/ocr/ocr.component.ts":
/*!**************************************!*\
  !*** ./src/app/ocr/ocr.component.ts ***!
  \**************************************/
/*! exports provided: OcrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OcrComponent", function() { return OcrComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OcrComponent = /** @class */ (function () {
    function OcrComponent() {
    }
    OcrComponent.prototype.ngOnInit = function () {
    };
    OcrComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ocr',
            template: __webpack_require__(/*! ./ocr.component.html */ "./src/app/ocr/ocr.component.html"),
            styles: [__webpack_require__(/*! ./ocr.component.css */ "./src/app/ocr/ocr.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OcrComponent);
    return OcrComponent;
}());



/***/ }),

/***/ "./src/app/openmrs/openmrs.component.css":
/*!***********************************************!*\
  !*** ./src/app/openmrs/openmrs.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZW5tcnMvb3Blbm1ycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/openmrs/openmrs.component.html":
/*!************************************************!*\
  !*** ./src/app/openmrs/openmrs.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Open Source Contribution:- OpenMRS bug fixes</h2>\n\n<p>\n  This was a project done by a team of 4 where we had to find, fix and report atleast 5 bugs in the application OpenMRS.\n  <br>\n  For more details, please visit the link:- \n  <a href=\"https://github.com/SameerPoudwal/openmrs-core\" target=\"_blank\">Github</a>\n</p>\n"

/***/ }),

/***/ "./src/app/openmrs/openmrs.component.ts":
/*!**********************************************!*\
  !*** ./src/app/openmrs/openmrs.component.ts ***!
  \**********************************************/
/*! exports provided: OpenmrsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenmrsComponent", function() { return OpenmrsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OpenmrsComponent = /** @class */ (function () {
    function OpenmrsComponent() {
    }
    OpenmrsComponent.prototype.ngOnInit = function () {
    };
    OpenmrsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-openmrs',
            template: __webpack_require__(/*! ./openmrs.component.html */ "./src/app/openmrs/openmrs.component.html"),
            styles: [__webpack_require__(/*! ./openmrs.component.css */ "./src/app/openmrs/openmrs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OpenmrsComponent);
    return OpenmrsComponent;
}());



/***/ }),

/***/ "./src/app/p2p/p2p.component.css":
/*!***************************************!*\
  !*** ./src/app/p2p/p2p.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3AycC9wMnAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/p2p/p2p.component.html":
/*!****************************************!*\
  !*** ./src/app/p2p/p2p.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Peer-peer communication with Centralized CI</h2>\n\n<p>\n  The primary objective of the application was to connect multiple peers to a centralized server, and then provide some communication between them.\n  <br>\n  The communication shown in the project is in the form of downloading that takes place.\n  <br>\n  Basically, a peer can upload a file to the server and any other peer that is connected with the server has the option to download it.\n  <br><br>\n  For more details, check out the project:-\n  <a href=\"https://github.ncsu.edu/dbhanda/CSC573_Project1\" target=\"_blank\">Github</a> \n</p>"

/***/ }),

/***/ "./src/app/p2p/p2p.component.ts":
/*!**************************************!*\
  !*** ./src/app/p2p/p2p.component.ts ***!
  \**************************************/
/*! exports provided: P2pComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P2pComponent", function() { return P2pComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var P2pComponent = /** @class */ (function () {
    function P2pComponent() {
    }
    P2pComponent.prototype.ngOnInit = function () {
    };
    P2pComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-p2p',
            template: __webpack_require__(/*! ./p2p.component.html */ "./src/app/p2p/p2p.component.html"),
            styles: [__webpack_require__(/*! ./p2p.component.css */ "./src/app/p2p/p2p.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], P2pComponent);
    return P2pComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"container\">\n      <div class=\"row row-offcanvas row-offcanvas-right\">\n          <div class=\"col-xs-12 col-sm-9\">\n              <router-outlet></router-outlet>\n          </div>\n      </div>\n  </div>\n</main>\n\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/restaurant-management/restaurant-management.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/restaurant-management/restaurant-management.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnQtbWFuYWdlbWVudC9yZXN0YXVyYW50LW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/restaurant-management/restaurant-management.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/restaurant-management/restaurant-management.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Restaurant Management Mobile Application</h2>\n\n<p>\n  The app was designed for customers to customize their orders and place the orders ahead of time, inorder to avoid order processing delay.\n</p>\n  "

/***/ }),

/***/ "./src/app/restaurant-management/restaurant-management.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/restaurant-management/restaurant-management.component.ts ***!
  \**************************************************************************/
/*! exports provided: RestaurantManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantManagementComponent", function() { return RestaurantManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RestaurantManagementComponent = /** @class */ (function () {
    function RestaurantManagementComponent() {
    }
    RestaurantManagementComponent.prototype.ngOnInit = function () {
    };
    RestaurantManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-restaurant-management',
            template: __webpack_require__(/*! ./restaurant-management.component.html */ "./src/app/restaurant-management/restaurant-management.component.html"),
            styles: [__webpack_require__(/*! ./restaurant-management.component.css */ "./src/app/restaurant-management/restaurant-management.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RestaurantManagementComponent);
    return RestaurantManagementComponent;
}());



/***/ }),

/***/ "./src/app/spring-rails/spring-rails.component.css":
/*!*********************************************************!*\
  !*** ./src/app/spring-rails/spring-rails.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwcmluZy1yYWlscy9zcHJpbmctcmFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/spring-rails/spring-rails.component.html":
/*!**********************************************************!*\
  !*** ./src/app/spring-rails/spring-rails.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Spring V/S Rails</h2>\n\n<p>\n  This project was done in a group of 4 students, we together build 4 applications.\n  <br>\n  Each for front-end and back-end, for both Spring and Rails to compare, which one should be used for which application.\n  <br><br>\n  For more details, check out the information:-\n  <a href=\"https://github.com/darshanbhandari123/springwithJS\" target=\"_blank\">Github</a>\n</p>\n"

/***/ }),

/***/ "./src/app/spring-rails/spring-rails.component.ts":
/*!********************************************************!*\
  !*** ./src/app/spring-rails/spring-rails.component.ts ***!
  \********************************************************/
/*! exports provided: SpringRailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpringRailsComponent", function() { return SpringRailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpringRailsComponent = /** @class */ (function () {
    function SpringRailsComponent() {
    }
    SpringRailsComponent.prototype.ngOnInit = function () {
    };
    SpringRailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spring-rails',
            template: __webpack_require__(/*! ./spring-rails.component.html */ "./src/app/spring-rails/spring-rails.component.html"),
            styles: [__webpack_require__(/*! ./spring-rails.component.css */ "./src/app/spring-rails/spring-rails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpringRailsComponent);
    return SpringRailsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\darsh\OneDrive\Desktop\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map