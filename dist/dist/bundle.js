/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.js */ \"./src/weather.js\");\n\nconst img = document.querySelector('img');\nconst like = document.querySelector('.fa-heart');\nlet keyUnsplash = \"o3VmNfvsRnbUKRj_m5rsjK9sJ2YhSJ1NWkbtdC7SEXo\";\nfunction getDay() {\n    let date = new Date();\n    let day = date.getDay();\n    let year = date.getFullYear();\n    let dayName = date.toLocaleString('fr-FR', { weekday: 'long' });\n    let monthName = date.toLocaleString('fr-FR', { month: 'long' });\n    let dateString = `Le ${dayName} ${day} ${monthName} ${year}`;\n    return dateString;\n}\nfunction getRandomImg(key) {\n    let url = `https://api.unsplash.com/photos/random?client_id=${key}`;\n    fetch(url)\n        .then((res) => {\n        return res.json();\n    })\n        .then((data) => {\n        img.src = data.urls.regular;\n        img.alt = data.alt_description;\n        let link = img.src;\n        img.id = makeId();\n        let id = img.id;\n        // let da = {id, link};\n        // set addeventlistener on like button\n        like.addEventListener('click', () => {\n            const el = new FormData();\n            el.append('id', id);\n            el.append('link', link);\n            el.append('mood', 'happy');\n            el.append('date', getDay());\n            const req = {\n                method: 'POST',\n                body: el\n            };\n            fetch('./bdd-script/like.php', req)\n                .then((res) => {\n                return res.json();\n            })\n                .then((data) => {\n                console.log(data);\n            });\n        });\n    });\n}\nfunction makeId() {\n    let id = \"\";\n    let possible = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\";\n    for (let i = 0; i < 5; i++) {\n        id += possible.charAt(Math.floor(Math.random() * possible.length));\n    }\n    return id;\n}\ngetRandomImg(keyUnsplash);\n(0,_weather_js__WEBPACK_IMPORTED_MODULE_0__.weather)(\"6bb83d7cf2b4aee765f7bd3f53260c22\");\n\n\n//# sourceURL=webpack://api-unsplash/./src/main.ts?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"weather\": () => (/* binding */ weather)\n/* harmony export */ });\nconst city = document.querySelector('.city');\nconst temp = document.querySelector('.current-temp');\nconst desc = document.querySelector('.description');\nconst highTemp = document.querySelector('.temp-max');\nconst lowTemp = document.querySelector('.temp-min');\nfunction weather(key) {\n    let url = `https://api.openweathermap.org/data/2.5/weather?q=besançon&appid=${key}&units=celcius&lang=fr`;\n    fetch(url)\n        .then((res) => {\n        return res.json();\n    })\n        .then((data) => {\n        let tmp = `${Math.round(data.main.temp)}°C`;\n        let description = data.weather[0].description;\n        let high = `${Math.round(data.main.temp_max)}°C`;\n        let low = `${Math.round(data.main.temp_min)}°C`;\n        temp.textContent = tmp;\n        desc.textContent = description;\n        highTemp.textContent = high;\n        lowTemp.textContent = low;\n    });\n}\nweather(\"6bb83d7cf2b4aee765f7bd3f53260c22\");\n\n\n//# sourceURL=webpack://api-unsplash/./src/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;