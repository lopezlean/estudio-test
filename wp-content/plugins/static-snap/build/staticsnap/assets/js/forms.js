/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forms/app/src/forms.ts":
/*!************************************!*\
  !*** ./src/forms/app/src/forms.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Forms)
/* harmony export */ });
// jQuery is available in the global scope
// eslint-disable-line @typescript-eslint/no-explicit-any
// eslint-disable-line @typescript-eslint/no-explicit-any
// eslint-disable-line @typescript-eslint/no-explicit-any

class Forms {
  selector = '[static-snap-type="form"]';
  submitButtonSelector = '[type="submit"]';

  // constructor
  constructor() {
    console.log('Forms class initialized');
    this.bindEvents();
    //this.bindPluginsEvents();
  }
  bindPluginsEvents = () => {
    jQuery(window).on('elementor/frontend/init', () => {
      elementorFrontend.hooks.addAction('frontend/element_ready/widget', scope => {
        if (scope && scope[0].dataset?.widget_type === 'form.default') {
          this.bindEvents();
        }
      });
    });
    jQuery(window).on('elementor/popup/show', () => {
      this.bindEvents();
    });
  };
  getForms = () => {
    // get all static_snap_type="form" elements
    return document.querySelectorAll(this.selector);
  };

  /**
   * Remove form submit events
   * @param form HTMLFormElement
   * @returns void
   */
  unbindSubmitEvents = form => {
    setTimeout(() => {
      jQuery(form).off('submit');
    }, 500);
  };

  /**
   * Clone forms to remove events
   */
  bindEvents = () => {
    const forms = this.getForms();
    forms.forEach(form => {
      // check if form is already initialized
      if (form.getAttribute('data-initialized') === 'true') {
        return;
      }
      // remove all jQuery submit events
      this.unbindSubmitEvents(form);
      // add a new submit event
      form.addEventListener('submit', e => this.onSubmit(e, form));
      // mark form as initialized
      form.setAttribute('data-initialized', 'true');
    });
  };
  onSubmit = async (e, form) => {
    e.preventDefault();
    // disable submit button

    form.querySelector(this.submitButtonSelector)?.setAttribute('disabled', 'disabled');
    grecaptcha.ready(() => {
      grecaptcha.execute(StaticSnapFrontendConfig.recaptcha_site_key, {
        action: 'submit'
      }).then(async token => {
        const formData = new FormData(form);
        // send form data to action URL as json
        const response = await fetch(form.action, {
          body: JSON.stringify(Object.fromEntries(formData)),
          headers: {
            'Content-Type': 'application/json',
            // recaptcha token
            'G-Recaptcha-Response': token
          },
          method: 'POST'
        });
        const responseCode = response.status;
        const data = await response.json();
        form.querySelector(this.submitButtonSelector)?.removeAttribute('disabled');
        if (responseCode === 200) {
          form.reset();
        } else {
          console.error('Error:', data);
        }
      });
    });
  };
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ./src/forms/app/src/start.ts ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms */ "./src/forms/app/src/forms.ts");

new _forms__WEBPACK_IMPORTED_MODULE_0__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=forms.js.map