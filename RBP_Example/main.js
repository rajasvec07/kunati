(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<style>\n  :host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    display: flex;\n    margin: 32px auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card svg.material-icons path {\n    fill: #888;\n  }\n\n  .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n  }\n\n  .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card span {\n    margin-left: 60px;\n  }\n\n  svg#rocket {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke {\n    height: 100vh;\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a,\n  a:visited,\n  a:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #125699;\n  }\n\n  .terminal {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal pre {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer a {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  /* Responsive Styles */\n  @media screen and (max-width: 767px) {\n\n    .card-container > *:not(.circle-link) ,\n    .terminal {\n      width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n</style>\n\n<!-- Toolbar -->\n<div class=\"toolbar\" role=\"banner\">\n  <img\n    width=\"40\"\n    alt=\"Angular Logo\"\n    src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"\n  />\n  <span>Welcome</span>\n    <div class=\"spacer\"></div>\n  <a aria-label=\"Angular on twitter\" target=\"_blank\" rel=\"noopener\" href=\"https://twitter.com/angular\" title=\"Twitter\">\n    \n    <svg id=\"twitter-logo\" height=\"24\" data-name=\"Logo — FIXED\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\">\n      <defs>\n        <style>\n          .cls-1 {\n            fill: none;\n          }\n\n          .cls-2 {\n            fill: #ffffff;\n          }\n        </style>\n      </defs>\n      <rect class=\"cls-1\" width=\"400\" height=\"400\" />\n      <path class=\"cls-2\" d=\"M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23\"\n      />\n    </svg>\n    \n  </a>\n</div>\n\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rbp-insights/rbp-insights.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rbp-insights/rbp-insights.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-wrapper clear-fix\">\n    <div class=\"top-bar clear-fix\">\n        <div class=\"index-dropdown\">\n            <label>Index: </label>\n            <div class=\"index-txt-wrap\">\n                <input type=\"text\" readonly id=\"selected-index\" [value]=\"selectedIndexValue\" />\n                <ul class=\"dropdown\">\n                    <ng-container *ngFor=\"let item of indexDropdown\">\n                        <li [class]=\"item.subNav?'r-arr':''\">\n                            <a href=\"javascript:;\" (click)=\"setSelectedindexValue($event)\" [title]=\"item.text\">{{item.text}}\n                                <span (click)=\"setSelectedindexValue($event)\" [title]=\"item.text\">{{item.tagLine}}</span>\n                            </a>\n                            <ul class=\"sub-dropdown\" *ngIf=\"item.subNav\">\n                                <ng-container *ngFor=\"let subItem of item.subNav\">\n                                    <li>\n                                        <a href=\"javascript:;\" (click)=\"setSelectedindexValue($event)\" [title]=\"subItem.text\">{{subItem.text}}</a>\n                                    </li>\n                                </ng-container>\n                            </ul>\n                        </li>\n                    </ng-container>\n                </ul>\n                <!--<ul class=\"dropdown\">\n                    <li class=\"r-arr\">\n                        <a href=\"javascript:;\">Dynamic Asset Allocation\n                            <span>Directional Allocation Indexes</span>\n                        </a>\n                        <ul class=\"sub-dropdown\">\n                            <li>\n                                <a href=\"javascript:;\">Large-Cap</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:;\">SMID-Cap</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"r-arr\">\n                        <a href=\"javascript:;\">Higher Beta, Market Beta, Lower Beta\n                            <span>Directional Indexes</span>\n                        </a>\n                        <ul class=\"sub-dropdown\">\n                            <li>\n                                <a href=\"javascript:;\">Large-Cap Aggresive</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:;\">Large-Cap Market</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:;\">Large-Cap Defensive</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:;\">SMID-Cap Aggresive</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:;\">SMID-Cap Market</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:;\">SMID-Cap Defensive</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li>\n                        <a href=\"javascript:;\">Value\n                            <span>Style Indexes</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:;\">Dividend Income\n                            <span>Dividend Indexes</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:;\">Small-Cap Core\n                            <span>Small Cap Indexes</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:;\">Islamic Shari'ah\n                            <span>Islamic Market Indexes</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:;\">Low Volatility\n                            <span>Blended Indexes</span>\n                        </a>\n                    </li>\n                </ul>-->\n            </div>\n        </div>\n    </div>\n    <div class=\"middle-area\">\n        <!-- Dates area -->\n        <div>\n\n        </div>\n        <!-- Image area -->\n        <div class=\"img-area clear-fix\">\n            <div class=\"tab-wrap\">\n                <div class=\"tab-pill\" style=\"width:276px;\">Primary Signals</div>\n                <div class=\"tab-pill\" style=\"width:420px;\">Secondary Signals</div>\n                <div class=\"tab-pill\">Portfolio Allocation</div>\n            </div>\n            <div class=\"chart-wrap clear-fix\">\n                <div class=\"col1\">\n                    <div>\n                        <h3>Consumer sentiment</h3>\n                        <p>Conference Board</p>\n                        <p>Consumer Confidence Index</p>\n                    </div>\n                    <div>\n                        <h3>Economic conditions</h3>\n                        <p>Conference Board </p>\n                        <p>Leading Economic Index</p>\n                    </div>\n                    <div>\n                        <h3>Market momentum</h3>\n                        <p>Dow Jones U.S. Large-Cap Total Stock Market Index<sup>SM</sup></p>\n                    </div>\n                </div>\n                <div class=\"h-arr-1\"></div>\n                <div class=\"v-arr-1\"></div>\n                <div class=\"hor-2-wrap\">\n                    <div class=\"h-arr-2\"></div>\n                    <div class=\"h-arr-3\"></div>\n                    <div class=\"h-arr-4\"></div>\n                    <div class=\"h-arr-5\"></div>\n                </div>\n                \n                <div class=\"col2\">\n                    <div>\n                        <p>All signals positive</p>\n                        <span class=\"plus\">+</span>\n                        <span class=\"plus\">+</span>\n                        <span class=\"plus\">+</span>\n                    </div>\n                    <div>\n                        <p>Two signals positive</p>\n                        <span class=\"plus\">+</span>\n                        <span class=\"plus\">+</span>\n                        <span class=\"minus\">-</span>\n                    </div>\n                    <div>\n                        <p>One signals positive</p>\n                        <span class=\"plus\">+</span>\n                        <span class=\"minus\">-</span>\n                        <span class=\"minus\">-</span>\n                    </div>\n                    <div>\n                        <p>All signals negative</p>\n                        <span class=\"minus\">-</span>\n                        <span class=\"minus\">-</span>\n                        <span class=\"minus\">-</span>\n                    </div>\n                </div>\n                <div class=\"hor-2-wrap\">\n                    <div class=\"h-arr-2\"></div>\n                    <div class=\"h-arr-3 no-arr-head\" style=\"width:555px;\">\n                        <div class=\"line\"></div>\n                        <div class=\"arr-tip\" style=\"position:relative;border: 1px solid #1ab7ea;width: 25px;height: 30px;border-width: 0 0 1px 1px;margin-left: 555px;\"></div>\n                    </div>\n                    <div class=\"h-arr-4\"></div>\n                    <div class=\"h-arr-5\" style=\"width:34px;\"></div>\n                </div>\n                <div class=\"col3\">\n                    <div class=\"rhombus\">\n                        <p>Guggenheim RBP SMID-Cap Aggresive Index<sup>SM</sup></p>\n                    </div>\n                    <div class=\"rhombus\" style=\"margin-top: 110px;border-color:#467db7;\">\n                        <p>Guggenheim RBP Large-Cap Market Index<sup>SM</sup></p>\n                    </div>\n                    <div class=\"rec-box\">\n                        <p>Conference Board Leading Economic Index</p>\n                    </div>\n                </div>\n                <div class=\"hor-2-wrap\" style=\"margin-left: 18px;\">\n                    <div class=\"h-arr-2 positive\" style=\"width: 40px;\"></div>\n                    <div class=\"v-arr-1 negative arr3\" style=\"height: 75px; margin-left: -10px; margin-top: 75px;\"></div>\n                    <div class=\"h-arr-2 positive no-arr-head\" style=\"width: 425px;margin-left: -14px; margin-top: 227px;\">\n                        <div class=\"arr-tip\" style=\"position:relative;border: 1px solid #1ab7ea;width: 25px;height: 30px;border-width: 0 0 1px 1px;margin-left: 425px;\"></div>\n                    </div>\n                    <div class=\"h-arr-2 negative no-arr-head\" style=\"width: 425px;margin-left: -14px; margin-top: 272px;\">\n                        <div class=\"arr-tip\" style=\"position:relative;border: 1px solid #1ab7ea;width: 27px;height: 60px;border-width: 0 0 1px 1px;margin-left: 425px;\"></div>\n                    </div>\n                    <div class=\"h-arr-2 positive up-arr\" style=\"width: 50px;margin-left: -17px; margin-top: 274px;border: 1px solid #1ab7ea;border-width: 0 1px 1px 0;height: 75px;background-color:transparent;\">\n                        <!-- <div class=\"arr-tip\" style=\"position:relative;border: 1px solid #1ab7ea;width: 25px;height: 30px;border-width: 0 0 1px 1px;margin-left: 425px;\"></div> -->\n                    </div>\n                    <div class=\"h-arr-2 negative no-arr-head\" style=\"width: 50px;margin-left: -17px; margin-top: 375px;border: 1px solid #888;border-width: 1px 1px 0 0;height: 40px;background-color:transparent;\">\n                        <!-- <div class=\"arr-tip\" style=\"position:relative;border: 1px solid #1ab7ea;width: 27px;height: 60px;border-width: 0 0 1px 1px;margin-left: 425px;\"></div> -->\n                    </div>\n                    <div style=\"border: 1px solid #888;\n                    position: absolute;\n                    margin-top: 415px;\n                    margin-left: -15px;\n                    color: #fff;\n                    font-size: 11px;\n                    padding: 10px;\n                    text-align: center;\n                    width: 95px;\">\n                        <p>Primary signals from prior rebalancing</p>\n                    </div>\n                    <div class=\"h-arr-2 positive up-arr arr-txt gray-arr\" style=\"width: 25px;\n                    margin-left: 79px;\n                    margin-top: 419px;\n                    border: 1px solid #888;\n                    border-width: 0 1px 1px 0;\n                    height: 20px;\n                    background-color: transparent;\">\n                        <!-- <div class=\"arr-tip\" style=\"position:relative;border: 1px solid #1ab7ea;width: 25px;height: 30px;border-width: 0 0 1px 1px;margin-left: 425px;\"></div> -->\n                    </div>\n                    <div class=\"h-arr-2 no-arr-head arr-txt-blue\" style=\"top: 410px;\n                    width: 335px;\n                    left: 80px;\">\n                        <div class=\"arr-tip\" style=\"position:relative;border: 1px solid #1ab7ea;width: 25px;height: 25px;border-width: 0 0 1px 1px;margin-left: 335px;\"></div>\n                    </div>\n                </div>\n                <div class=\"col4\">\n                    <div class=\"rhombus\" style=\"border-color:#467db7;\">\n                        <p>Guggenheim RBP Large-Cap Market Index<sup>SM</sup></p>\n                    </div>\n                    <div class=\"rhombus\" style=\"border-color:#ffa500;margin-top:215px;\">\n                        <p>Guggenheim RBP Large-Cap Defensive Index<sup>SM</sup></p>\n                    </div>\n                </div>\n                <div class=\"hor-2-wrap\" style=\"margin-left: 6px;\">\n                    <div class=\"h-arr-2 negative\" style=\"width: 286px;margin-top: 30px;\"></div>\n                    <div class=\"h-arr-2 positive no-arr-head\" style=\"width: 250px;margin-top: 70px;\"></div>\n                    <div class=\"cur-arr\"></div>\n                </div>\n                <!-- Last column of circles -->\n                <div class=\"col6\">\n                    <div class=\"circle bg-green\">\n                        <p>100% Aggresive</p>\n                    </div>\n                    <div class=\"circle bg-blue\">\n                        <div class=\"semi-circle bg-green\">\n                            <p>50% Aggresive</p>\n                        </div>\n                        <div class=\"semi-circle\">\n                            <p>Market 50%</p>\n                        </div>\n                    </div>\n                    <div class=\"circle bg-blue\">\n                        <p>100% Market</p>\n                    </div>\n                    <div class=\"circle bg-orange\">\n                        <div class=\"semi-circle bg-blue\">\n                            <p>50% Market</p>\n                        </div>\n                        <div class=\"semi-circle\">\n                            <p>Defensive 50%</p>\n                        </div>\n                    </div>\n                    <div class=\"circle bg-orange\">\n                        <p>100% Defensive</p>\n                    </div>\n                    <div class=\"circle bg-gray\">\n                        <div class=\"semi-circle bg-orange\">\n                            <p>50% Defensive</p>\n                        </div>\n                        <div class=\"semi-circle\">\n                            <p>Cash <br />50%</p>\n                        </div>\n                    </div>\n                    <div class=\"circle bg-gray\">\n                        <p style=\"padding-top: 15px;\">100% <br />Cash</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shipping-cart/shipping-cart.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shipping-cart/shipping-cart.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>shipping-cart works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shipping_cart_shipping_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shipping-cart/shipping-cart.component */ "./src/app/shipping-cart/shipping-cart.component.ts");
/* harmony import */ var _rbp_insights_rbp_insights_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rbp-insights/rbp-insights.component */ "./src/app/rbp-insights/rbp-insights.component.ts");





var routes = [
    {
        path: 'shopping',
        component: _shipping_cart_shipping_cart_component__WEBPACK_IMPORTED_MODULE_3__["ShippingCartComponent"],
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _rbp_insights_rbp_insights_component__WEBPACK_IMPORTED_MODULE_4__["RbpInsightsComponent"],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
        this.title = 'portfolio';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shipping_cart_shipping_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shipping-cart/shipping-cart.component */ "./src/app/shipping-cart/shipping-cart.component.ts");
/* harmony import */ var _rbp_insights_rbp_insights_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rbp-insights/rbp-insights.component */ "./src/app/rbp-insights/rbp-insights.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _shipping_cart_shipping_cart_component__WEBPACK_IMPORTED_MODULE_5__["ShippingCartComponent"],
                _rbp_insights_rbp_insights_component__WEBPACK_IMPORTED_MODULE_6__["RbpInsightsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/rbp-insights/rbp-insights.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/rbp-insights/rbp-insights.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\n.clear-fix {\n  display: block;\n  clear: both; }\n\n.clear-fix:before, .clear-fix:after {\n  display: block;\n  content: '';\n  clear: both; }\n\n.main-wrapper {\n  width: 950px;\n  padding: 0;\n  border: 1px solid #000;\n  margin: 20px; }\n\n.top-bar {\n  background-color: #000;\n  padding: 5px 0; }\n\n.index-dropdown label {\n  float: left;\n  color: #1ab7ea;\n  font-weight: bold;\n  padding: 3px 5px; }\n\n.index-dropdown .index-txt-wrap {\n  position: relative;\n  min-width: 300px;\n  float: left; }\n\n.index-dropdown .index-txt-wrap:hover * {\n  background-color: #222; }\n\n.index-dropdown .index-txt-wrap:hover > .dropdown {\n  display: block; }\n\n.index-dropdown .index-txt-wrap > input {\n  border: 1px solid #505050;\n  background-color: #000;\n  color: #fff;\n  padding: 5px;\n  cursor: pointer;\n  width: 100%; }\n\n.index-dropdown .index-txt-wrap > input:focus {\n  outline: none;\n  cursor: pointer; }\n\n.index-dropdown .index-txt-wrap > input:hover {\n  outline: none;\n  cursor: pointer; }\n\n.index-dropdown .index-txt-wrap:after {\n  content: '';\n  border: 10px solid #1ab7ea;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: #1ab7ea transparent transparent transparent;\n  top: 10px;\n  right: 10px;\n  cursor: pointer; }\n\n.main-wrapper ul, .main-wrapper li {\n  list-style-type: none;\n  background-color: #000; }\n\n.main-wrapper li {\n  border-bottom: 1px solid #505050;\n  position: relative; }\n\n.main-wrapper li:last-child {\n  border-bottom: none; }\n\n.main-wrapper li.r-arr:after {\n  content: '';\n  border: 8px solid #aaa;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent transparent transparent #aaa;\n  top: 14px;\n  right: 5px;\n  cursor: pointer; }\n\n.main-wrapper li a {\n  text-decoration: none;\n  color: #fff;\n  display: block;\n  font-weight: 400;\n  padding: 5px; }\n\n.main-wrapper li a span {\n  display: block;\n  font-size: 11px;\n  color: #8c8c8c;\n  font-weight: 600; }\n\n.main-wrapper li a:hover {\n  text-decoration: none;\n  color: #fff; }\n\n.main-wrapper li a:active {\n  text-decoration: none;\n  color: #fff; }\n\n.main-wrapper .dropdown {\n  display: none;\n  border: 1px solid #505050;\n  position: absolute;\n  width: 100%;\n  z-index: 9; }\n\n.main-wrapper .dropdown .sub-dropdown {\n  display: none;\n  position: absolute;\n  left: 100%;\n  top: 2px;\n  width: 100%;\n  border: 1px solid #505050; }\n\n.main-wrapper .dropdown .sub-dropdown {\n  display: none; }\n\n.main-wrapper .dropdown li:hover > .sub-dropdown {\n  display: block; }\n\n.middle-area {\n  padding: 5px 10px;\n  background-color: #353535; }\n\n.tab-pill {\n  display: inline-block;\n  padding: 10px 15px;\n  background-color: #1ab7ea;\n  color: #fff;\n  font-weight: bold;\n  font-size: 15px;\n  font-family: helvetica,arial,verdana;\n  margin: 10px 20px 10px 0; }\n\n.tab-pill:last-child {\n  margin-right: 0; }\n\n.chart-wrap {\n  border: 1px solid #505050;\n  padding: 20px 10px; }\n\n.chart-wrap .col1 {\n  width: 132px;\n  height: 400px;\n  border: 1px solid #1ab7ea;\n  padding: 10px;\n  float: left; }\n\n.chart-wrap .col1 div {\n  margin-bottom: 40px; }\n\n.chart-wrap .col1 div:last-child {\n  margin-bottom: 0; }\n\n.chart-wrap .col1 div h3 {\n  color: #1ab7ea;\n  font-size: 20px;\n  line-height: 1;\n  font-weight: 400;\n  margin-bottom: 10px; }\n\n.chart-wrap .col1 div p {\n  color: #fff;\n  font-size: 11px;\n  line-height: 1.2; }\n\n.h-arr-1 {\n  background-color: #1ab7ea;\n  width: 15px;\n  height: 1px;\n  float: left;\n  margin-top: 200px;\n  font-size: 0;\n  position: relative; }\n\n.h-arr-1:after {\n  content: '';\n  border: 6px solid #1ab7ea;\n  border-color: transparent transparent transparent #1ab7ea;\n  position: absolute;\n  right: -6px;\n  top: -6px;\n  height: 0;\n  width: 0; }\n\n.v-arr-1 {\n  background-color: #1ab7ea;\n  width: 1px;\n  height: 310px;\n  float: left;\n  font-size: 0;\n  position: relative;\n  margin-top: 50px; }\n\n.col2 {\n  float: left;\n  margin-left: 15px; }\n\n.col2 div {\n  display: block;\n  color: #fff;\n  font-size: 10px;\n  border: 1px solid #888;\n  padding: 10px 5px;\n  width: 100px;\n  height: 85px;\n  margin-bottom: 20px;\n  text-align: center;\n  white-space: nowrap; }\n\n.col2 div:last-child {\n  margin-bottom: 0; }\n\n.hor-2-wrap {\n  position: relative;\n  float: left; }\n\n.h-arr-2, .h-arr-3, .h-arr-4, .h-arr-5 {\n  background-color: #1ab7ea;\n  width: 15px;\n  height: 1px;\n  float: left;\n  margin-top: 50px;\n  font-size: 0;\n  position: absolute; }\n\n.h-arr-3 {\n  margin-top: 150px; }\n\n.h-arr-4 {\n  margin-top: 250px; }\n\n.h-arr-5 {\n  margin-top: 359px; }\n\n.h-arr-2:after, .h-arr-3:after, .h-arr-4:after, .h-arr-5:after {\n  content: '';\n  border: 6px solid #1ab7ea;\n  border-color: transparent transparent transparent #1ab7ea;\n  position: absolute;\n  right: -6px;\n  top: -6px;\n  height: 0;\n  width: 0; }\n\n.plus, .minus {\n  font-size: 30px;\n  line-height: 0.5;\n  background-color: #1ab7ea;\n  display: inline-block;\n  padding: 2px;\n  height: 25px;\n  width: 25px;\n  vertical-align: middle;\n  margin-right: 5px;\n  margin-top: 8px; }\n\n.minus {\n  background-color: #888; }\n\n.plus:last-child, .minus:last-child {\n  margin-right: 0; }\n\n.col3 {\n  float: left;\n  margin-left: 34px; }\n\n.rhombus {\n  width: 90px;\n  height: 90px;\n  border: 2px solid #1cd61c;\n  transform: rotateZ(45deg);\n  -ms-transform: rotateZ(45deg);\n  -moz-transform: rotateZ(45deg);\n  margin-top: 5px; }\n\n.rhombus p {\n  transform: rotateZ(-45deg);\n  -ms-transform: rotateZ(-45deg);\n  -moz-transform: rotateZ(-45deg);\n  color: #fff;\n  font-size: 11px;\n  text-align: center;\n  margin-top: 20px;\n  width: 88px;\n  margin-left: 4px; }\n\n.arr3:before {\n  left: -5px !important; }\n\n.positive:before, .negative:before {\n  content: \"+\";\n  background-color: #1ab7ea;\n  position: absolute;\n  left: 0px;\n  top: -6px;\n  right: auto;\n  height: 12px;\n  width: 12px;\n  border: none;\n  color: #fff;\n  font-size: 16px;\n  line-height: 0.5;\n  text-align: center; }\n\n.negative {\n  background-color: #888; }\n\n.negative:before {\n  content: \"-\";\n  background-color: #888;\n  font-size: 20px;\n  line-height: 0.4; }\n\n.negative:after {\n  border-color: transparent transparent transparent #888; }\n\n.no-arr-head:after {\n  content: '';\n  border: none; }\n\n.cur-arr {\n  margin-left: 250px;\n  height: 36px;\n  border: 1px solid #1ab7ea;\n  width: 34px;\n  background: none;\n  border-width: 0 0 1px 1px;\n  margin-top: 70px; }\n\n.negative .arr-tip {\n  border-color: #888 !important; }\n\n.negative .arr-tip:after {\n  border-left-color: #888; }\n\n.up-arr:after {\n  border-color: transparent transparent #1ab7ea transparent; }\n\n.up-arr:before {\n  bottom: -6px;\n  top: auto; }\n\n.arr-tip:after {\n  content: '';\n  border: 6px solid #1ab7ea;\n  border-color: transparent transparent transparent #1ab7ea;\n  position: absolute;\n  right: -6px;\n  bottom: -6px;\n  height: 0;\n  width: 0; }\n\n.cur-arr:after {\n  content: '';\n  border: 6px solid #1ab7ea;\n  border-color: transparent transparent transparent #1ab7ea;\n  position: absolute;\n  right: -6px;\n  bottom: -5px;\n  height: 0;\n  width: 0; }\n\n.cur-arr-invert {\n  margin-left: 250px;\n  height: 36px;\n  border: 1px solid #1ab7ea;\n  width: 30px;\n  background: none;\n  border-width: 0 0 1px 1px;\n  margin-top: 70px; }\n\n.rec-box {\n  display: block;\n  color: #fff;\n  font-size: 11px;\n  border: 1px solid #888;\n  padding: 10px 5px;\n  width: 90px;\n  height: 75px;\n  margin-top: 30px;\n  text-align: center; }\n\n.col4 {\n  float: left;\n  margin-left: 58px; }\n\n.col6 {\n  float: right; }\n\n.bg-green {\n  background-color: #1cd61c; }\n\n.bg-blue {\n  background-color: #467db7; }\n\n.bg-orange {\n  background-color: #ffa500; }\n\n.bg-gray {\n  background-color: #888; }\n\n.col6 div {\n  border-radius: 50%;\n  -ms-border-radius: 50%;\n  -moz-border-radius: 50%;\n  margin-bottom: 15px; }\n\n.col6 .circle {\n  width: 60px;\n  height: 60px;\n  cursor: pointer; }\n\n.col6 .semi-circle {\n  border-radius: 60px 60px 0 0;\n  width: 60px;\n  height: 30px;\n  margin: 0; }\n\n.col6 .circle p {\n  font-size: 11px;\n  font-weight: 500;\n  color: #fff;\n  text-align: center;\n  padding: 10px 0; }\n\n.col6 .circle .semi-circle p {\n  font-size: 11px;\n  font-weight: 500;\n  color: #fff;\n  text-align: center;\n  padding: 5px 2px;\n  line-height: 1; }\n\n.line {\n  height: 1px;\n  width: 424px;\n  background-color: #888;\n  margin-left: 132px;\n  display: none; }\n\n.arr-txt:before {\n  content: 'All negative';\n  background-color: transparent;\n  bottom: -16px;\n  font-size: 9px;\n  white-space: nowrap;\n  color: #aaa;\n  left: 2px;\n  position: absolute; }\n\n.arr-txt-blue:before {\n  content: 'At least one positive';\n  background-color: transparent;\n  bottom: -12px;\n  font-size: 9px;\n  white-space: nowrap;\n  color: #1ab7ea;\n  left: 2px;\n  position: absolute; }\n\n.gray-arr:after {\n  border-color: transparent transparent #888 transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmJwLWluc2lnaHRzL0c6XFxQb3J0Zm9saW9fU2l0ZVxccG9ydGZvbGlvL3NyY1xcYXBwXFxyYnAtaW5zaWdodHNcXHJicC1pbnNpZ2h0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksY0FBYztFQUNkLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUVmO0VBQ0ksWUFBWTtFQUNaLFVBQVU7RUFDVixzQkFBcUI7RUFDckIsWUFBWSxFQUFBOztBQUVoQjtFQUNJLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBRWY7RUFDSSxzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0kseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWY7RUFDSSxhQUFhO0VBQ2IsZUFBZSxFQUFBOztBQUVuQjtFQUNJLGFBQWE7RUFDYixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksV0FBVztFQUNYLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx5REFBeUQ7RUFDekQsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBRW5CO0VBQ0kscUJBQXFCO0VBQ3JCLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLGdDQUFnQztFQUNoQyxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGtCQUFrQjtF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QixFQUFBOztBQUV0QjtFQUNJLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFNBQVM7RUFDVCxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxzREFBc0QsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JicC1pbnNpZ2h0cy9yYnAtaW5zaWdodHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmNsZWFyLWZpeCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcbi5jbGVhci1maXg6YmVmb3JlLCAuY2xlYXItZml4OmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG4ubWFpbi13cmFwcGVye1xyXG4gICAgd2lkdGg6IDk1MHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgIzAwMDtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG4udG9wLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbn1cclxuLmluZGV4LWRyb3Bkb3duIGxhYmVsIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6ICMxYWI3ZWE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDNweCA1cHg7XHJcbn1cclxuLmluZGV4LWRyb3Bkb3duIC5pbmRleC10eHQtd3JhcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmluZGV4LWRyb3Bkb3duIC5pbmRleC10eHQtd3JhcDpob3ZlciAqIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbn1cclxuLmluZGV4LWRyb3Bkb3duIC5pbmRleC10eHQtd3JhcDpob3ZlciA+IC5kcm9wZG93biB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uaW5kZXgtZHJvcGRvd24gLmluZGV4LXR4dC13cmFwID4gaW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzUwNTA1MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbmRleC1kcm9wZG93biAuaW5kZXgtdHh0LXdyYXAgPiBpbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pbmRleC1kcm9wZG93biAuaW5kZXgtdHh0LXdyYXAgPiBpbnB1dDpob3ZlciB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pbmRleC1kcm9wZG93biAuaW5kZXgtdHh0LXdyYXA6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgIzFhYjdlYTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMWFiN2VhIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1haW4td3JhcHBlciB1bCwgLm1haW4td3JhcHBlciBsaSB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcbi5tYWluLXdyYXBwZXIgbGkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1MDUwNTA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm1haW4td3JhcHBlciBsaTpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuLm1haW4td3JhcHBlciBsaS5yLWFycjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJvcmRlcjogOHB4IHNvbGlkICNhYWE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2FhYTtcclxuICAgIHRvcDogMTRweDtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1haW4td3JhcHBlciBsaSBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5tYWluLXdyYXBwZXIgbGkgYSBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6ICM4YzhjOGM7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5tYWluLXdyYXBwZXIgbGkgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4ubWFpbi13cmFwcGVyIGxpIGE6YWN0aXZlIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5tYWluLXdyYXBwZXIgLmRyb3Bkb3duIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICM1MDUwNTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk7XHJcbn1cclxuLm1haW4td3JhcHBlciAuZHJvcGRvd24gLnN1Yi1kcm9wZG93biB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDoxMDAlO1xyXG4gICAgdG9wOjJweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICM1MDUwNTA7XHJcbn1cclxuLm1haW4td3JhcHBlciAuZHJvcGRvd24gLnN1Yi1kcm9wZG93biB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5tYWluLXdyYXBwZXIgLmRyb3Bkb3duIGxpOmhvdmVyID4gLnN1Yi1kcm9wZG93biB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ubWlkZGxlLWFyZWEge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNTM1O1xyXG59XHJcbi50YWItcGlsbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiN2VhO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsYXJpYWwsdmVyZGFuYTtcclxuICAgIG1hcmdpbjogMTBweCAyMHB4IDEwcHggMDtcclxufVxyXG4udGFiLXBpbGw6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuLmNoYXJ0LXdyYXAge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzUwNTA1MDtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxufVxyXG4uY2hhcnQtd3JhcCAuY29sMSB7XHJcbiAgICB3aWR0aDogMTMycHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFhYjdlYTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uY2hhcnQtd3JhcCAuY29sMSBkaXYge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4uY2hhcnQtd3JhcCAuY29sMSBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5jaGFydC13cmFwIC5jb2wxIGRpdiBoMyB7XHJcbiAgICBjb2xvcjogIzFhYjdlYTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmNoYXJ0LXdyYXAgLmNvbDEgZGl2IHAge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG59XHJcbi5oLWFyci0xIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWI3ZWE7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaC1hcnItMTphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJvcmRlcjogNnB4IHNvbGlkICMxYWI3ZWE7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMxYWI3ZWE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTZweDtcclxuICAgIHRvcDogLTZweDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG59XHJcbi52LWFyci0xIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWI3ZWE7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAzMTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG4uY29sMiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbi5jb2wyIGRpdiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLmNvbDIgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uaG9yLTItd3JhcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uaC1hcnItMiwgLmgtYXJyLTMsIC5oLWFyci00LCAuaC1hcnItNSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiN2VhO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uaC1hcnItMyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxufVxyXG4uaC1hcnItNCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNTBweDtcclxufVxyXG4uaC1hcnItNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzNTlweDtcclxufVxyXG4uaC1hcnItMjphZnRlciwgLmgtYXJyLTM6YWZ0ZXIsIC5oLWFyci00OmFmdGVyLCAuaC1hcnItNTphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJvcmRlcjogNnB4IHNvbGlkICMxYWI3ZWE7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMxYWI3ZWE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTZweDtcclxuICAgIHRvcDogLTZweDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG59XHJcbi5wbHVzLC5taW51cyB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMC41O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhYjdlYTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5taW51cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xyXG59XHJcbi5wbHVzOmxhc3QtY2hpbGQsIC5taW51czpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG4uY29sMyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNHB4O1xyXG59XHJcbi5yaG9tYnVzIHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCAjMWNkNjFjO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5yaG9tYnVzIHAge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKC00NWRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVaKC00NWRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWigtNDVkZWcpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDg4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG59XHJcbi5hcnIzOmJlZm9yZSB7XHJcbiAgICBsZWZ0OiAtNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wb3NpdGl2ZTpiZWZvcmUsIC5uZWdhdGl2ZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCIrXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiN2VhO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdG9wOiAtNnB4O1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDAuNTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubmVnYXRpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcclxufVxyXG4ubmVnYXRpdmU6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiLVwiO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjQ7XHJcbn1cclxuLm5lZ2F0aXZlOmFmdGVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzg4ODtcclxufVxyXG4ubm8tYXJyLWhlYWQ6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmN1ci1hcnIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFhYjdlYTtcclxuICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlci13aWR0aDogMCAwIDFweCAxcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG59XHJcbi5uZWdhdGl2ZSAuYXJyLXRpcCB7XHJcbiAgICBib3JkZXItY29sb3I6ICM4ODggIWltcG9ydGFudDtcclxufVxyXG4ubmVnYXRpdmUgLmFyci10aXA6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM4ODg7XHJcbn1cclxuLnVwLWFycjphZnRlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMxYWI3ZWEgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnVwLWFycjpiZWZvcmUge1xyXG4gICAgYm90dG9tOiAtNnB4O1xyXG4gICAgdG9wOiBhdXRvO1xyXG59XHJcbi5hcnItdGlwOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgYm9yZGVyOiA2cHggc29saWQgIzFhYjdlYTtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzFhYjdlYTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtNnB4O1xyXG4gICAgYm90dG9tOiAtNnB4O1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbn1cclxuLmN1ci1hcnI6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjMWFiN2VhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMWFiN2VhO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC02cHg7XHJcbiAgICBib3R0b206IC01cHg7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxufVxyXG4uY3VyLWFyci1pbnZlcnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFhYjdlYTtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlci13aWR0aDogMCAwIDFweCAxcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG59XHJcbi5yZWMtYm94IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNvbDQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNThweDtcclxufVxyXG4uY29sNiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmJnLWdyZWVuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxY2Q2MWM7XHJcbn1cclxuLmJnLWJsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2N2RiNztcclxufVxyXG4uYmctb3JhbmdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmE1MDA7XHJcbn1cclxuLmJnLWdyYXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcclxufVxyXG4uY29sNiBkaXYge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uY29sNiAuY2lyY2xlIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jb2w2IC5zZW1pLWNpcmNsZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4IDYwcHggMCAwO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLmNvbDYgLmNpcmNsZSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG4uY29sNiAuY2lyY2xlIC5zZW1pLWNpcmNsZSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweCAycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxufVxyXG4ubGluZSB7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIHdpZHRoOiA0MjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTMycHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5hcnItdHh0OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnQWxsIG5lZ2F0aXZlJztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm90dG9tOiAtMTZweDtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgbGVmdDogMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5hcnItdHh0LWJsdWU6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICdBdCBsZWFzdCBvbmUgcG9zaXRpdmUnO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3R0b206IC0xMnB4O1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgY29sb3I6ICMxYWI3ZWE7XHJcbiAgICBsZWZ0OiAycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmdyYXktYXJyOmFmdGVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzg4OCB0cmFuc3BhcmVudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/rbp-insights/rbp-insights.component.ts":
/*!********************************************************!*\
  !*** ./src/app/rbp-insights/rbp-insights.component.ts ***!
  \********************************************************/
/*! exports provided: RbpInsightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RbpInsightsComponent", function() { return RbpInsightsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RbpInsightsComponent = /** @class */ (function () {
    function RbpInsightsComponent() {
        this.selectedIndexValue = "";
        this.indexDropdown = [
            {
                "text": "Dynamic Asset Allocation",
                "tagLine": "Directional Allocation Indexes",
                "subNav": [
                    {
                        "text": "Large-Cap",
                        "tagLine": ""
                    },
                    {
                        "text": "SMID-Cap",
                        "tagLine": ""
                    }
                ]
            },
            {
                "text": "Higher Beta, Market Beta, Lower Beta",
                "tagLine": "Directional Indexes",
                "subNav": [
                    {
                        "text": "Large-Cap Aggresive",
                        "tagLine": ""
                    },
                    {
                        "text": "Large-Cap Market",
                        "tagLine": ""
                    },
                    {
                        "text": "Large-Cap Defensive",
                        "tagLine": ""
                    },
                    {
                        "text": "SMID-Cap Aggresive",
                        "tagLine": ""
                    },
                    {
                        "text": "SMID-Cap Market",
                        "tagLine": ""
                    },
                    {
                        "text": "SMID-Cap Defensive",
                        "tagLine": ""
                    }
                ]
            },
            {
                "text": "Value",
                "tagLine": "Style Indexes"
            },
            {
                "text": "Dividend Income",
                "tagLine": "Dividend Indexes"
            },
            {
                "text": "Small-Cap Core",
                "tagLine": "Small Cap Indexes"
            },
            {
                "text": "Islamic Shari'ah",
                "tagLine": "Islamic Market Indexes"
            },
            {
                "text": "Low Volatility",
                "tagLine": "Blended Indexes"
            }
        ];
    }
    RbpInsightsComponent.prototype.ngOnInit = function () {
    };
    RbpInsightsComponent.prototype.setSelectedindexValue = function (event) {
        var e = window.event || event;
        e.stopPropagation();
        console.log(e.target.title);
        this.selectedIndexValue = e.target.title;
    };
    RbpInsightsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rbp-insights',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rbp-insights.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rbp-insights/rbp-insights.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rbp-insights.component.scss */ "./src/app/rbp-insights/rbp-insights.component.scss")).default]
        })
    ], RbpInsightsComponent);
    return RbpInsightsComponent;
}());



/***/ }),

/***/ "./src/app/shipping-cart/shipping-cart.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shipping-cart/shipping-cart.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoaXBwaW5nLWNhcnQvc2hpcHBpbmctY2FydC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shipping-cart/shipping-cart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shipping-cart/shipping-cart.component.ts ***!
  \**********************************************************/
/*! exports provided: ShippingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingCartComponent", function() { return ShippingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShippingCartComponent = /** @class */ (function () {
    function ShippingCartComponent() {
    }
    ShippingCartComponent.prototype.ngOnInit = function () {
    };
    ShippingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shipping-cart',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shipping-cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shipping-cart/shipping-cart.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shipping-cart.component.scss */ "./src/app/shipping-cart/shipping-cart.component.scss")).default]
        })
    ], ShippingCartComponent);
    return ShippingCartComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Portfolio_Site\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map