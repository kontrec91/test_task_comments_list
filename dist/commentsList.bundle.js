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

/***/ "./src/components/CommentsList.js":
/*!****************************************!*\
  !*** ./src/components/CommentsList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CommentsList\": () => (/* binding */ CommentsList)\n/* harmony export */ });\nclass CommentsList {\n\n    element = null;\n    list = null;\n    page = null;\n\n    constructor() {\n        this.element = document.createElement('div');\n    }\n\n    getData(url) {\n        try {\n            fetch(url)\n                .then((response) => response.json())\n                .then((data) => {\n                    console.log(data);\n                    let page = document.createElement('span');\n                    page.innerText = \"Page: \" + data.current_page;\n                    let list = document.createElement('ul');\n                    list.className = 'commentsList';\n                    localStorage.setItem('nextPageUrl', data.next_page_url);\n                    data.data.map((item) => {\n                        let li = document.createElement('li');\n                        li.className = 'comment';\n                        li.innerText = item.text + ' : ' + item.updated_at;\n                        list.appendChild(li)\n                    })\n                    this.element.appendChild(page);\n                    this.element.appendChild(list);\n                });\n        } catch (error) {\n            console.log(error)\n        }\n    }\n\n    render() {\n        this.element.className = 'comments';\n    }\n}\n\n//# sourceURL=webpack://-webhome/./src/components/CommentsList.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/components/CommentsList.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;