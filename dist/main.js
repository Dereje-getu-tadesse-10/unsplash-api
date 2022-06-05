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

eval("const img = document.querySelector('img');\n\nlet keyUnsplah = \"6BWyhvXSEyO3egDZ8E8UXW01I4-pElsxeaTMjx8ZN4Q\";\nlet url =`https://api.unsplash.com/photos/?client_id=${keyUnsplah}`;\n\n// fetch await data from unsplash\n\n// fecth data from unsplash\nfetch(url)\n.then((response) =>{\n    return response.json();\n}\n)\n.then((data) => {\n    let src = data[0].urls.regular;\n    img.setAttribute('src', src);\n    let alt = data[0].alt_description;\n    img.setAttribute('alt', alt);\n\n\n\n\n})\n\n\n//# sourceURL=webpack://api-unsplash/./src/app.js?");

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