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

eval("\n\nconst img = document.querySelector('img');\nconst like = document.querySelector('.fa-heart');\nlet keyUnsplah = \"o3VmNfvsRnbUKRj_m5rsjK9sJ2YhSJ1NWkbtdC7SEXo\";\n\n// get day formated\n\nfunction getDay(){\n    let date = new Date();\n    let day = date.getDate();\n    let month = date.getMonth() + 1;\n    let year = date.getFullYear();\n    let dayName = date.toLocaleString('fr-FR', {weekday: 'long'});\n    let monthName = date.toLocaleString('fr-FR', {month: 'long'});\n    return ` le ${dayName} ${day} ${monthName} ${year}`;\n}\n\nfunction getRandomImg(keyUnsplah){\n    fetch(`https://api.unsplash.com/photos/random/`,{\n        method: 'GET',\n        headers: {\n            Authorization: `Client-ID ${keyUnsplah}`,\n        }\n    })\n    .then((res)=>{\n        // console.log(res);\n        return res.json();\n    })\n    .then((data)=>{\n\n        // console.log(data);\n        img.src = data.urls.regular;\n        img.alt = data.alt_description;\n        let link = img.src;\n\n        // give a random id to the image\n        img.id = makeid();\n        \n        like.addEventListener('click', () => {\n            const el = new FormData();\n            el.append('id', img.id);\n            el.append('url', JSON.stringify(link));\n            el.append('mood', 'happy');\n            el.append('date', JSON.stringify(getDay()));\n\n            const req = {\n                method:'post',\n                body: el\n            };\n\n            fetch('./bdd-script/like.php', req)\n            .then((res)=>{\n                return res.json();\n            })\n            .then((data)=>{\n                console.log(data);\n            })\n        })\n    })\n\n}\n// create a function hello\ngetRandomImg(keyUnsplah);\n\n\nfunction makeid() {\n    let id = \"\";\n    let possible = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\";\n\n    for (let i = 0; i < 5; i++){\n        id += possible.charAt(Math.floor(Math.random() * possible.length));\n        \n    }\n    \n    return id;\n    \n}\n\n\n//# sourceURL=webpack://api-unsplash/./src/app.js?");

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