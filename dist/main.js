/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("const img = document.querySelector('img');\n\nlet keyUnsplah = \"DNOXP05XZ1QlAN2NxzLND4N6Gt2J5iSkIKnEtiJ_hAw\";\n\n\nasync function getData(key,mood){\n    let url =`https://api.unsplash.com/search/photos?query=${mood}&client_id=${key}`;\n    const response = await fetch(url);\n    const data = await response.json();\n    let imgUrl = data.results[Math.floor(Math.random() * data.results.length)].urls.regular;\n    img.setAttribute('src', imgUrl);\n}\n\ngetData(keyUnsplah,'night city');\n\n//# sourceURL=webpack://api-unsplash/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;