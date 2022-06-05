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

eval("\nconst img = document.querySelector('img');\nconst like = document.querySelector('.fa-heart');\nlet keyUnsplah = \"DNOXP05XZ1QlAN2NxzLND4N6Gt2J5iSkIKnEtiJ_hAw\";\n\n// get day formated\n\n// get day fomated with name day and month name and year name\nfunction getDay(){\n    let date = new Date();\n    let day = date.getDate();\n    let month = date.getMonth() + 1;\n    let year = date.getFullYear();\n    let dayName = date.toLocaleString('fr-FR', {weekday: 'long'});\n    let monthName = date.toLocaleString('fr-FR', {month: 'long'});\n    return ` le ${dayName} ${day} ${monthName} ${year}`;\n}\n\nasync function getData(key,mood){\n    let url =`https://api.unsplash.com/search/photos?query=${mood}&client_id=${key}`;\n    const response = await fetch(url);\n    const data = await response.json();\n    let imgUrl = data.results[Math.floor(Math.random() * data.results.length)].urls.full;\n    img.setAttribute('src', imgUrl);\n    let id = 0;\n    like.addEventListener('click', () => {\n        let data = new FormData();\n        data.append(`url${id++}`, imgUrl);\n        data.append(`mood`, mood);\n        data.append('le :', getDay());\n        addDataBase(data);\n    })\n}\n\ngetData(keyUnsplah,'storm');\n\nfunction addDataBase(data){\n    fetch('./script/like.php', {\n        method: 'POST',\n        body: data,\n    })\n    .then((res)=>{\n        return res.json();\n    })\n    .then((data)=>{\n        console.log(data);\n    })\n}\n\n\n//# sourceURL=webpack://api-unsplash/./src/app.js?");

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