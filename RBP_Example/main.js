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
/* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<style>\n  :host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    display: flex;\n    margin: 32px auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card svg.material-icons path {\n    fill: #888;\n  }\n\n  .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n  }\n\n  .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card span {\n    margin-left: 60px;\n  }\n\n  svg#rocket {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke {\n    height: 100vh;\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a,\n  a:visited,\n  a:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #125699;\n  }\n\n  .terminal {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal pre {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer a {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  /* Responsive Styles */\n  @media screen and (max-width: 767px) {\n\n    .card-container > *:not(.circle-link) ,\n    .terminal {\n      width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n</style>\n\n<!-- Toolbar -->\n<!--<div class=\"toolbar\" role=\"banner\">\n  <img\n    width=\"40\"\n    alt=\"Angular Logo\"\n    src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"\n  />\n  <span>Welcome</span>\n    <div class=\"spacer\"></div>\n  <a aria-label=\"Angular on twitter\" target=\"_blank\" rel=\"noopener\" href=\"https://twitter.com/angular\" title=\"Twitter\">\n    \n    <svg id=\"twitter-logo\" height=\"24\" data-name=\"Logo — FIXED\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\">\n      <defs>\n        <style>\n          .cls-1 {\n            fill: none;\n          }\n\n          .cls-2 {\n            fill: #ffffff;\n          }\n        </style>\n      </defs>\n      <rect class=\"cls-1\" width=\"400\" height=\"400\" />\n      <path class=\"cls-2\" d=\"M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23\"\n      />\n    </svg>\n    \n  </a>\n</div>-->\n\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rbp-insights/rbp-insights.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rbp-insights/rbp-insights.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-wrapper clear-fix\">\n    <div class=\"top-bar clear-fix\">\n        <div class=\"index-dropdown\">\n            <label>Index: </label>\n            <div class=\"index-txt-wrap\">\n                <input type=\"text\" (click)=\"toggleDropdown(indexDD, $event)\" readonly id=\"selected-index\" [value]=\"selectedIndexValue\" />\n                <ul class=\"dropdown hide\" #indexDD>\n                    <ng-container *ngFor=\"let item of indexDropdown\">\n                        <li [class]=\"item.subNav?'r-arr':''\">\n                            <a href=\"javascript:;\" (click)=\"setSelectedIndexValue($event);hideDD(indexDD)\" [attr.hash]=\"item.hash\" [title]=\"item.text\">{{item.text}}\n                                <span (click)=\"setSelectedIndexValue($event);hideDD(indexDD)\" [attr.hash]=\"item.hash\" [title]=\"item.text\">{{item.tagLine}}</span>\n                            </a>\n                            <ul class=\"sub-dropdown\" *ngIf=\"item.subNav\">\n                                <ng-container *ngFor=\"let subItem of item.subNav\">\n                                    <li>\n                                        <a href=\"javascript:;\" (click)=\"setSelectedIndexValue($event);hideDD(indexDD)\" [attr.hash]=\"subItem.hash\" [title]=\"item.text\">{{subItem.text}}</a>\n                                    </li>\n                                </ng-container>\n                            </ul>\n                        </li>\n                    </ng-container>\n                </ul>\n            </div>\n        </div>\n        <div class=\"info-dropdown\">\n            <label>Information: </label>\n            <div class=\"info-txt-wrap\">\n                <input type=\"text\" (click)=\"toggleDropdown(infoDD, $event);\" readonly id=\"selected-info\" [value]=\"selectedInfoValue\" />\n                <ul class=\"dropdown hide\" #infoDD>\n                    <ng-container *ngFor=\"let item of infoDropdown\">\n                        <li>\n                            <a href=\"javascript:;\" (click)=\"setSelectedInfoValue($event);hideDD(infoDD)\" [attr.hash]=\"item.hash\" [title]=\"item.text\">{{item.text}}</a>\n                        </li>\n                    </ng-container>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"middle-area\">\n        <!-- Dates area -->\n        <div class=\"Rebalance-Dates-Wrap clear-fix\">\n            <ul>\n                <li class=\"years\">\n                    <input id=\"showAll\" name=\"year\" type=\"radio\" value=\"showAll\" />\n                    <label class=\"label\" for=\"showAll\" style=\"color: #1ab7ea;left: -16px;\">Show All</label>\n                    <label for=\"showAll\" class='checkmark'>\n                        <span></span>\n                    </label>\n                </li>\n                <ng-container *ngFor=\"let year of RebalanceYears\">\n                    <li class=\"years\" title=\"{{year}}\">\n                        <input id=\"year_{{year}}\" name=\"year\" type=\"radio\" [value]=\"year\" />\n                        <label class=\"label\" for=\"year_{{year}}\">{{year}}</label>\n                        <label for=\"year_{{year}}\" class='checkmark'>\n                            <span></span>\n                        </label>\n                    </li>\n                </ng-container>\n            </ul>\n        </div>\n        <!-- Image area -->\n        <div class=\"img-area clear-fix\">\n            <div class=\"tab-wrap\">\n                <div class=\"tab-pill\" style=\"width:276px;\">Primary Signals</div>\n                <div class=\"tab-pill\" style=\"width:420px;\">Secondary Signals</div>\n                <div class=\"tab-pill\">Portfolio Allocation</div>\n            </div>\n            <div class=\"chart-wrap clear-fix\">\n                <div class=\"col1\">\n                    <div>\n                        <h3>Consumer sentiment</h3>\n                        <p>Conference Board</p>\n                        <p>Consumer Confidence Index</p>\n                    </div>\n                    <div>\n                        <h3>Economic conditions</h3>\n                        <p>Conference Board </p>\n                        <p>Leading Economic Index</p>\n                    </div>\n                    <div>\n                        <h3>Market momentum</h3>\n                        <p>Dow Jones U.S. Large-Cap Total Stock Market Index<sup>SM</sup></p>\n                    </div>\n                </div>\n                <div class=\"h-arr-1\"></div>\n                <div class=\"v-arr-1\"></div>\n                <div class=\"hor-2-wrap\">\n                    <div class=\"h-arr-2\"></div>\n                    <div class=\"h-arr-3\"></div>\n                    <div class=\"h-arr-4\"></div>\n                    <div class=\"h-arr-5\"></div>\n                </div>\n                \n                <div class=\"col2\">\n                    <div>\n                        <p>All signals positive</p>\n                        <span class=\"plus\">+</span>\n                        <span class=\"plus\">+</span>\n                        <span class=\"plus\">+</span>\n                    </div>\n                    <div>\n                        <p>Two signals positive</p>\n                        <span class=\"plus\">+</span>\n                        <span class=\"plus\">+</span>\n                        <span class=\"minus\">-</span>\n                    </div>\n                    <div>\n                        <p>One signals positive</p>\n                        <span class=\"plus\">+</span>\n                        <span class=\"minus\">-</span>\n                        <span class=\"minus\">-</span>\n                    </div>\n                    <div>\n                        <p>All signals negative</p>\n                        <span class=\"minus\">-</span>\n                        <span class=\"minus\">-</span>\n                        <span class=\"minus\">-</span>\n                    </div>\n                </div>\n                <div class=\"hor-2-wrap\">\n                    <div class=\"h-arr-2\"></div>\n                    <div class=\"h-arr-3 no-arr-head\" style=\"width:555px;\">\n                        <div class=\"line\"></div>\n                        <div class=\"arr-tip\" style=\"position:relative;border: 1px solid #1ab7ea;width: 25px;height: 30px;border-width: 0 0 1px 1px;margin-left: 555px;\"></div>\n                    </div>\n                    <div class=\"h-arr-4\"></div>\n                    <div class=\"h-arr-5\" style=\"width:34px;\"></div>\n                </div>\n                <div class=\"col3\">\n                    <div class=\"rhombus\">\n                        <p>Guggenheim RBP SMID-Cap Aggresive Index<sup>SM</sup></p>\n                    </div>\n                    <div class=\"rhombus\" style=\"margin-top: 110px;border-color:#467db7;\">\n                        <p>Guggenheim RBP Large-Cap Market Index<sup>SM</sup></p>\n                    </div>\n                    <div class=\"rec-box\">\n                        <p>Conference Board Leading Economic Index</p>\n                    </div>\n                </div>\n                <div class=\"hor-2-wrap\" style=\"margin-left: 18px;\">\n                    <div class=\"h-arr-2 positive\" style=\"width: 40px;\"></div>\n                    <div class=\"v-arr-1 negative arr3\" style=\"height: 73px; margin-left: -10px; margin-top: 75px;\"></div>\n                    <div class=\"h-arr-2 positive no-arr-head\" style=\"width: 425px;margin-left: -14px; margin-top: 227px;\">\n                        <div class=\"arr-tip\" style=\"position:relative;border: 1px solid #1ab7ea;width: 25px;height: 30px;border-width: 0 0 1px 1px;margin-left: 425px;\"></div>\n                    </div>\n                    <div class=\"h-arr-2 negative no-arr-head\" style=\"width: 425px;margin-left: -14px; margin-top: 272px;\">\n                        <div class=\"arr-tip\" style=\"position:relative;border: 1px solid #1ab7ea;width: 27px;height: 60px;border-width: 0 0 1px 1px;margin-left: 425px;\"></div>\n                    </div>\n                    <div class=\"h-arr-2 positive up-arr\" style=\"width: 50px;margin-left: -17px; margin-top: 274px;border: 1px solid #1ab7ea;border-width: 0 1px 1px 0;height: 75px;background-color:transparent;\">\n                        <!-- <div class=\"arr-tip\" style=\"position:relative;border: 1px solid #1ab7ea;width: 25px;height: 30px;border-width: 0 0 1px 1px;margin-left: 425px;\"></div> -->\n                    </div>\n                    <div class=\"h-arr-2 negative no-arr-head\" style=\"width: 50px;margin-left: -17px; margin-top: 375px;border: 1px solid #888;border-width: 1px 1px 0 0;height: 40px;background-color:transparent;\">\n                        <!-- <div class=\"arr-tip\" style=\"position:relative;border: 1px solid #1ab7ea;width: 27px;height: 60px;border-width: 0 0 1px 1px;margin-left: 425px;\"></div> -->\n                    </div>\n                    <div style=\"border: 1px solid #888;\n                    position: absolute;\n                    margin-top: 415px;\n                    margin-left: -15px;\n                    color: #fff;\n                    font-size: 11px;\n                    padding: 10px;\n                    text-align: center;\n                    width: 95px;\">\n                        <p>Primary signals from prior rebalancing</p>\n                    </div>\n                    <div class=\"h-arr-2 positive up-arr arr-txt gray-arr\" style=\"width: 25px;\n                    margin-left: 79px;\n                    margin-top: 425px;\n                    border: 1px solid #888;\n                    border-width: 0 1px 1px 0;\n                    height: 16px;\n                    background-color: transparent;\">\n                        <!-- <div class=\"arr-tip\" style=\"position:relative;border: 1px solid #1ab7ea;width: 25px;height: 30px;border-width: 0 0 1px 1px;margin-left: 425px;\"></div> -->\n                    </div>\n                    <div class=\"h-arr-2 no-arr-head arr-txt-blue\" style=\"top: 410px;\n                    width: 335px;\n                    left: 80px;\">\n                        <div class=\"arr-tip\" style=\"position:relative;border: 1px solid #1ab7ea;width: 25px;height: 25px;border-width: 0 0 1px 1px;margin-left: 335px;\"></div>\n                    </div>\n                </div>\n                <div class=\"col4\">\n                    <div class=\"rhombus\" style=\"border-color:#467db7;\">\n                        <p>Guggenheim RBP Large-Cap Market Index<sup>SM</sup></p>\n                    </div>\n                    <div class=\"rhombus\" style=\"border-color:#ffa500;margin-top:220px;\">\n                        <p>Guggenheim RBP Large-Cap Defensive Index<sup>SM</sup></p>\n                    </div>\n                </div>\n                <div class=\"hor-2-wrap\" style=\"margin-left: 4px;\">\n                    <div class=\"h-arr-2 negative\" style=\"width: 286px;margin-top: 30px;\"></div>\n                    <div class=\"h-arr-2 positive no-arr-head\" style=\"width: 250px;margin-top: 70px;\"></div>\n                    <div class=\"h-arr-2 positive\" style=\"width: 48px;margin-top: 360px;margin-left: 12px;\"></div>\n                    <div class=\"v-arr-1 negative arr3\" style=\"height: 75px;margin-top: 385px;position: absolute;\"></div>\n                    <div class=\"cur-arr\"></div>\n                </div>\n                <!-- Last column of circles -->\n                <div class=\"col6\">\n                    <div class=\"pos-r\">\n                        <div class=\"circle bg-green\">\n                            <p>100% Aggresive</p>\n                        </div>\n                        <div class=\"round-arr\" (click)=\"toggleRightSection(rightSection)\"><span></span></div>\n                    </div>\n                    <div class=\"pos-r\">\n                        <div class=\"circle bg-blue\">\n                            <div class=\"semi-circle bg-green\">\n                                <p>50% Aggresive</p>\n                            </div>\n                            <div class=\"semi-circle\">\n                                <p>Market 50%</p>\n                            </div>\n                        </div>\n                        <div class=\"round-arr\" (click)=\"toggleRightSection(rightSection)\"><span></span></div>\n                    </div>\n                    <div class=\"pos-r\">\n                        <div class=\"circle bg-blue\">\n                            <p>100% Market</p>\n                        </div>\n                        <div class=\"round-arr\" (click)=\"toggleRightSection(rightSection)\"><span></span></div>\n                    </div>\n                    <div class=\"pos-r\">\n                        <div class=\"circle bg-orange\">\n                            <div class=\"semi-circle bg-blue\">\n                                <p>50% Market</p>\n                            </div>\n                            <div class=\"semi-circle\">\n                                <p>Defensive 50%</p>\n                            </div>\n                        </div>\n                        <div class=\"round-arr\" (click)=\"toggleRightSection(rightSection)\"><span></span></div>\n                    </div>\n                    <div class=\"pos-r\">\n                        <div class=\"circle bg-orange\">\n                            <p>100% Defensive</p>\n                        </div>\n                        <div class=\"round-arr\" (click)=\"toggleRightSection(rightSection)\"><span></span></div>\n                    </div>  \n                    <div class=\"pos-r\">\n                        <div class=\"circle bg-gray\">\n                            <div class=\"semi-circle bg-orange\">\n                                <p>50% Defensive</p>\n                            </div>\n                            <div class=\"semi-circle\">\n                                <p>Cash <br />50%</p>\n                            </div>\n                        </div>\n                        <div class=\"round-arr\" (click)=\"toggleRightSection(rightSection)\"><span></span></div>\n                    </div>\n                    <div class=\"pos-r\">\n                        <div class=\"circle bg-gray\">\n                            <p style=\"padding-top: 15px;\">100% <br />Cash</p>\n                        </div>\n                        <div class=\"round-arr\" (click)=\"toggleRightSection(rightSection)\"><span></span></div>\n                    </div>\n                </div>\n                <div class=\"col5\">\n                    <div class=\"rhombus\" style=\"border-color:#ffa500;margin-top:210px;margin-left:85px;\">\n                        <p>Prior Guggenheim RBP Large-Cap Defensive Index<sup>SM</sup></p>\n                    </div>\n                </div>\n                <div class=\"hor-2-wrap\" style=\"float:right;\">\n                    <div class=\"h-arr-2 positive upword-arr\" style=\"width: 1px;margin-top: 170px;margin-left: -163px;\"></div>\n                    <div class=\"h-arr-2 negative no-arr-head\" style=\"width: 65px;margin-left: -99px; margin-top: 255px;\">\n                        <div class=\"arr-tip\" style=\"position:relative;border: 1px solid #1ab7ea;width: 32px;height: 45px;border-width: 0 0 1px 1px;margin-left: 65px;\"></div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"right-section\" #rightSection>\n                <input type=\"button\" value=\"Back\" (click)=\"toggleRightSection(rightSection)\" />\n            </div>\n        </div>\n    </div>\n</div>\n");

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
/* harmony import */ var _rbp_insights_rbp_insights_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rbp-insights/rbp-insights.component */ "./src/app/rbp-insights/rbp-insights.component.ts");




var routes = [
    {
        path: '**',
        component: _rbp_insights_rbp_insights_component__WEBPACK_IMPORTED_MODULE_3__["RbpInsightsComponent"],
        pathMatch: 'full'
    }
];
/*
{
    path: '',
    redirectTo: 'rbp',
    pathMatch: 'full'
  },
  {
    path: 'rbp',
    component: RbpInsightsComponent
  },
  {
    path: 'rbp/:id',
    component: RbpInsightsComponent
  },*/
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
/* harmony import */ var _services_rbp_insights_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/rbp-insights.service */ "./src/app/services/rbp-insights.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









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
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [_services_rbp_insights_service__WEBPACK_IMPORTED_MODULE_7__["RbpInsightsService"]],
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
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\n.hide {\n  display: none !important; }\n\n.show {\n  display: block !important; }\n\n.clear-fix {\n  display: block;\n  clear: both; }\n\n.clear-fix:before, .clear-fix:after {\n  display: block;\n  content: '';\n  clear: both; }\n\n.main-wrapper {\n  width: 950px;\n  padding: 0;\n  border: 1px solid #000;\n  margin: 20px; }\n\n.top-bar {\n  background-color: #000;\n  padding: 5px 0; }\n\n.index-dropdown, .info-dropdown {\n  margin-left: 50px;\n  float: left; }\n\n.index-dropdown label, .info-dropdown label {\n  float: left;\n  color: #1ab7ea;\n  font-weight: bold;\n  padding: 3px 5px; }\n\n.index-dropdown .index-txt-wrap, .info-dropdown .info-txt-wrap {\n  position: relative;\n  min-width: 300px;\n  float: left; }\n\n.index-dropdown .index-txt-wrap:hover *, .info-dropdown .info-txt-wrap:hover * {\n  background-color: #222; }\n\n/*.index-dropdown .index-txt-wrap:hover > .dropdown, .info-dropdown .info-txt-wrap:hover > .dropdown {\r\n    display: block;\r\n}\r\n.index-dropdown .index-txt-wrap input:focus + .dropdown, .info-dropdown .info-txt-wrap input:focus + .dropdown {\r\n    display: block;\r\n}*/\n\n.index-dropdown .index-txt-wrap > input, .info-dropdown .info-txt-wrap > input {\n  border: 1px solid #505050;\n  background-color: #000;\n  color: #fff;\n  padding: 5px;\n  cursor: pointer;\n  width: 100%; }\n\n.index-dropdown .index-txt-wrap > input:focus, .info-dropdown .info-txt-wrap > input:focus {\n  outline: none;\n  cursor: pointer; }\n\n.index-dropdown .index-txt-wrap > input:hover, .info-dropdown .info-txt-wrap > input:hover {\n  outline: none;\n  cursor: pointer; }\n\n.index-dropdown .index-txt-wrap:after, .info-dropdown .info-txt-wrap:after {\n  content: '';\n  border: 10px solid #1ab7ea;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: #1ab7ea transparent transparent transparent;\n  top: 10px;\n  right: 10px;\n  cursor: pointer; }\n\n.main-wrapper ul, .main-wrapper li {\n  list-style-type: none;\n  background-color: #000; }\n\n.main-wrapper li {\n  border-bottom: 1px solid #505050;\n  position: relative; }\n\n.main-wrapper li:last-child {\n  border-bottom: none; }\n\n.main-wrapper li.r-arr:after {\n  content: '';\n  border: 8px solid #aaa;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent transparent transparent #aaa;\n  top: 14px;\n  right: 5px;\n  cursor: pointer; }\n\n.main-wrapper li a {\n  text-decoration: none;\n  color: #fff;\n  display: block;\n  font-weight: 400;\n  padding: 5px; }\n\n.main-wrapper li a span {\n  display: block;\n  font-size: 11px;\n  color: #8c8c8c;\n  font-weight: 600; }\n\n.main-wrapper li a:hover {\n  text-decoration: none;\n  color: #fff; }\n\n.main-wrapper li a:active {\n  text-decoration: none;\n  color: #fff; }\n\n.main-wrapper .dropdown {\n  display: none;\n  border: 1px solid #505050;\n  position: absolute;\n  width: 100%;\n  z-index: 9; }\n\n.main-wrapper .dropdown .sub-dropdown {\n  display: none;\n  position: absolute;\n  left: 100%;\n  top: 2px;\n  width: 100%;\n  border: 1px solid #505050; }\n\n.main-wrapper .dropdown .sub-dropdown {\n  display: none; }\n\n.main-wrapper .dropdown li:hover > .sub-dropdown {\n  display: block; }\n\n.middle-area {\n  padding: 5px 10px;\n  background-color: #353535; }\n\n.tab-pill {\n  display: inline-block;\n  padding: 10px 15px;\n  background-color: #1ab7ea;\n  color: #fff;\n  font-weight: bold;\n  font-size: 15px;\n  font-family: helvetica,arial,verdana;\n  margin: 10px 20px 10px 0; }\n\n.tab-pill:last-child {\n  margin-right: 0; }\n\n.img-area {\n  position: relative;\n  overflow: hidden; }\n\n.chart-wrap {\n  border: 1px solid #505050;\n  padding: 20px 10px; }\n\n.chart-wrap .col1 {\n  width: 132px;\n  height: 400px;\n  border: 1px solid #1ab7ea;\n  padding: 10px;\n  float: left; }\n\n.chart-wrap .col1 div {\n  margin-bottom: 40px; }\n\n.chart-wrap .col1 div:last-child {\n  margin-bottom: 0; }\n\n.chart-wrap .col1 div h3 {\n  color: #1ab7ea;\n  font-size: 20px;\n  line-height: 1;\n  font-weight: 400;\n  margin-bottom: 10px; }\n\n.chart-wrap .col1 div p {\n  color: #fff;\n  font-size: 11px;\n  line-height: 1.2; }\n\n.h-arr-1 {\n  background-color: #1ab7ea;\n  width: 15px;\n  height: 1px;\n  float: left;\n  margin-top: 200px;\n  font-size: 0;\n  position: relative; }\n\n.h-arr-1:after {\n  content: '';\n  border: 6px solid #1ab7ea;\n  border-color: transparent transparent transparent #1ab7ea;\n  position: absolute;\n  right: -6px;\n  top: -6px;\n  height: 0;\n  width: 0; }\n\n.v-arr-1 {\n  background-color: #1ab7ea;\n  width: 1px;\n  height: 310px;\n  float: left;\n  font-size: 0;\n  position: relative;\n  margin-top: 50px; }\n\n.col2 {\n  float: left;\n  margin-left: 15px; }\n\n.col2 div {\n  display: block;\n  color: #fff;\n  font-size: 10px;\n  border: 1px solid #888;\n  padding: 10px 5px;\n  width: 100px;\n  height: 85px;\n  margin-bottom: 20px;\n  text-align: center;\n  white-space: nowrap; }\n\n.col2 div:last-child {\n  margin-bottom: 0; }\n\n.hor-2-wrap {\n  position: relative;\n  float: left; }\n\n.h-arr-2, .h-arr-3, .h-arr-4, .h-arr-5 {\n  background-color: #1ab7ea;\n  width: 15px;\n  height: 1px;\n  float: left;\n  margin-top: 50px;\n  font-size: 0;\n  position: absolute; }\n\n.h-arr-3 {\n  margin-top: 150px; }\n\n.h-arr-4 {\n  margin-top: 250px; }\n\n.h-arr-5 {\n  margin-top: 359px; }\n\n.h-arr-2:after, .h-arr-3:after, .h-arr-4:after, .h-arr-5:after {\n  content: '';\n  border: 6px solid #1ab7ea;\n  border-color: transparent transparent transparent #1ab7ea;\n  position: absolute;\n  right: -6px;\n  top: -6px;\n  height: 0;\n  width: 0; }\n\n.plus, .minus {\n  font-size: 30px;\n  line-height: 0.5;\n  background-color: #1ab7ea;\n  display: inline-block;\n  padding: 2px;\n  height: 25px;\n  width: 25px;\n  vertical-align: middle;\n  margin-right: 5px;\n  margin-top: 8px; }\n\n.minus {\n  background-color: #888; }\n\n.plus:last-child, .minus:last-child {\n  margin-right: 0; }\n\n.col3 {\n  float: left;\n  margin-left: 34px; }\n\n.rhombus {\n  width: 90px;\n  height: 90px;\n  border: 2px solid #1cd61c;\n  transform: rotateZ(45deg);\n  -ms-transform: rotateZ(45deg);\n  -moz-transform: rotateZ(45deg);\n  margin-top: 5px; }\n\n.rhombus p {\n  transform: rotateZ(-45deg);\n  -ms-transform: rotateZ(-45deg);\n  -moz-transform: rotateZ(-45deg);\n  color: #fff;\n  font-size: 11px;\n  text-align: center;\n  margin-top: 20px;\n  width: 88px;\n  margin-left: 4px; }\n\n.arr3:before {\n  left: -5px !important; }\n\n.arr3:after {\n  content: '';\n  border: 6px solid #888;\n  border-color: #888 transparent transparent #1ab7ea;\n  position: absolute;\n  right: -5px;\n  top: auto;\n  bottom: -7px;\n  height: 0;\n  width: 0; }\n\n.positive.upword-arr {\n  width: 1px;\n  margin-top: -120px;\n  margin-left: 120px;\n  height: 20px; }\n\n.positive.upword-arr:before {\n  left: -6px;\n  top: auto;\n  bottom: -1px; }\n\n.positive.upword-arr:after {\n  content: '';\n  border: 6px solid #1ab7ea;\n  border-color: transparent transparent #1ab7ea transparent;\n  position: absolute;\n  right: -5px;\n  top: -9px;\n  height: 0;\n  width: 0; }\n\n.negative.arr3:after {\n  border-color: #888 transparent transparent transparent; }\n\n.positive:before, .negative:before {\n  content: \"+\";\n  background-color: #1ab7ea;\n  position: absolute;\n  left: 0px;\n  top: -6px;\n  right: auto;\n  height: 12px;\n  width: 12px;\n  border: none;\n  color: #fff;\n  font-size: 16px;\n  line-height: 0.5;\n  text-align: center; }\n\n.negative {\n  background-color: #888; }\n\n.negative:before {\n  content: \"-\";\n  background-color: #888;\n  font-size: 20px;\n  line-height: 0.4; }\n\n.negative:after {\n  border-color: transparent transparent transparent #888; }\n\n.no-arr-head:after {\n  content: '';\n  border: none; }\n\n.cur-arr {\n  margin-left: 250px;\n  height: 36px;\n  border: 1px solid #1ab7ea;\n  width: 34px;\n  background: none;\n  border-width: 0 0 1px 1px;\n  margin-top: 70px; }\n\n.negative .arr-tip {\n  border-color: #888 !important; }\n\n.negative .arr-tip:after {\n  border-left-color: #888; }\n\n.up-arr:after {\n  border-color: transparent transparent #1ab7ea transparent; }\n\n.up-arr:before {\n  bottom: -6px;\n  top: auto; }\n\n.arr-tip:after {\n  content: '';\n  border: 6px solid #1ab7ea;\n  border-color: transparent transparent transparent #1ab7ea;\n  position: absolute;\n  right: -6px;\n  bottom: -6px;\n  height: 0;\n  width: 0; }\n\n.cur-arr:after {\n  content: '';\n  border: 6px solid #1ab7ea;\n  border-color: transparent transparent transparent #1ab7ea;\n  position: absolute;\n  right: -6px;\n  bottom: -5px;\n  height: 0;\n  width: 0; }\n\n.cur-arr-invert {\n  margin-left: 250px;\n  height: 36px;\n  border: 1px solid #1ab7ea;\n  width: 30px;\n  background: none;\n  border-width: 0 0 1px 1px;\n  margin-top: 70px; }\n\n.rec-box {\n  display: block;\n  color: #fff;\n  font-size: 11px;\n  border: 1px solid #888;\n  padding: 10px 5px;\n  width: 90px;\n  height: 75px;\n  margin-top: 30px;\n  text-align: center; }\n\n.col4 {\n  float: left;\n  margin-left: 58px; }\n\n.col5 {\n  float: left; }\n\n.col5 .rhombus p {\n  margin-top: 6px;\n  margin-left: 0; }\n\n.col6 {\n  float: right; }\n\n.bg-green {\n  background-color: #1cd61c; }\n\n.bg-blue {\n  background-color: #467db7; }\n\n.bg-orange {\n  background-color: #ffa500; }\n\n.bg-gray {\n  background-color: #888; }\n\n.col6 div {\n  border-radius: 50%;\n  -ms-border-radius: 50%;\n  -moz-border-radius: 50%;\n  margin-bottom: 15px; }\n\n.pos-r {\n  position: relative; }\n\n.round-arr {\n  background-color: #006699;\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  top: 10px;\n  left: 5px;\n  z-index: 3;\n  transition: all .3s;\n  -webkit-transition: all .3s;\n  -ms-transition: all .3s;\n  cursor: pointer; }\n\n.col6 .circle {\n  width: 60px;\n  height: 60px;\n  cursor: pointer;\n  position: relative;\n  z-index: 4; }\n\n.round-arr span {\n  border: 6px solid #fff;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent #fff transparent transparent;\n  top: 7px;\n  right: 12px;\n  cursor: pointer; }\n\n.pos-r:hover .round-arr {\n  left: -12px;\n  top: -6px; }\n\n.col6 .semi-circle {\n  border-radius: 60px 60px 0 0;\n  width: 60px;\n  height: 30px;\n  margin: 0; }\n\n.col6 .circle p {\n  font-size: 11px;\n  font-weight: 500;\n  color: #fff;\n  text-align: center;\n  padding: 10px 0; }\n\n.col6 .circle .semi-circle p {\n  font-size: 11px;\n  font-weight: 500;\n  color: #fff;\n  text-align: center;\n  padding: 5px 2px;\n  line-height: 1; }\n\n.line {\n  height: 1px;\n  width: 424px;\n  background-color: #888;\n  margin-left: 132px;\n  display: none; }\n\n.arr-txt:before {\n  content: 'All negative';\n  background-color: transparent;\n  bottom: -16px;\n  font-size: 9px;\n  white-space: nowrap;\n  color: #aaa;\n  left: 2px;\n  position: absolute; }\n\n.arr-txt-blue:before {\n  content: 'At least one positive';\n  background-color: transparent;\n  bottom: -12px;\n  font-size: 9px;\n  white-space: nowrap;\n  color: #1ab7ea;\n  left: 2px;\n  position: absolute; }\n\n.gray-arr:after {\n  border-color: transparent transparent #888 transparent; }\n\n/* Rebalance Dates starts */\n\n.Rebalance-Dates-Wrap {\n  padding: 5px 30px 55px; }\n\n.Rebalance-Dates-Wrap, .Rebalance-Dates-Wrap ul, .Rebalance-Dates-Wrap ul li {\n  background-color: #444; }\n\n.Rebalance-Dates-Wrap ul li {\n  float: left;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border: none;\n  padding: 10px 30px;\n  margin: 0; }\n\n.Rebalance-Dates-Wrap ul li.years label {\n  color: #fff;\n  font-size: 14px; }\n\n.Rebalance-Dates-Wrap ul li.years .label {\n  position: absolute;\n  bottom: -20px;\n  left: -6px;\n  cursor: pointer; }\n\n.Rebalance-Dates-Wrap ul li.years input[type='radio'] {\n  display: none; }\n\n.Rebalance-Dates-Wrap ul li.years input[type='radio'] ~ .checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 18px;\n  width: 18px;\n  cursor: pointer;\n  border: 1px solid #191919;\n  border-width: 1px 0;\n  border-top-color: #191919;\n  border-bottom-color: #2a2a2a;\n  border-radius: 50%;\n  -ms-border-radius: 50%;\n  -moz-border-radius: 50%;\n  background-color: #323232; }\n\n.Rebalance-Dates-Wrap ul li.years input[type='radio'] ~ .checkmark:after, .Rebalance-Dates-Wrap ul li.years input[type='radio'] ~ .checkmark:before {\n  display: block;\n  content: '';\n  border: 1px solid #191919;\n  border-width: 1px 0;\n  border-top-color: #191919;\n  border-bottom-color: #2a2a2a;\n  height: 6px;\n  position: absolute;\n  left: -24px;\n  width: 25px;\n  top: 5px;\n  background-color: #323232; }\n\n.Rebalance-Dates-Wrap ul li.years input[type='radio'] ~ .checkmark:before {\n  left: 16px; }\n\n.Rebalance-Dates-Wrap ul li.years input[type='radio'] ~ .checkmark span {\n  display: none;\n  background-color: #00abff;\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  left: 0;\n  right: 0;\n  margin: auto;\n  top: 0;\n  bottom: 0; }\n\n.Rebalance-Dates-Wrap ul li.years input[type='radio']:checked ~ .checkmark span {\n  display: block; }\n\n.Rebalance-Dates-Wrap ul li.years input[type='radio']:checked ~ .checkmark:hover span, .Rebalance-Dates-Wrap ul li.years input[type='radio']:checked ~ .label:hover ~ .checkmark span {\n  background-color: #00abff; }\n\n.Rebalance-Dates-Wrap ul li.years input[type='radio'] ~ .checkmark:hover span, .Rebalance-Dates-Wrap ul li.years .label:hover ~ .checkmark span {\n  display: block;\n  background-color: #2b7fa9; }\n\n/* Rebalance Dates ends */\n\n/* Right side section starts */\n\n.right-section {\n  border: 1px solid #505050;\n  width: 928px;\n  height: 567px;\n  top: 57px;\n  left: 928px;\n  position: absolute;\n  z-index: 6;\n  background-color: #353535;\n  transition: all .3s;\n  -webkit-transition: all .3s;\n  -ms-transition: all .3s; }\n\n.open {\n  left: 0; }\n\n.right-section input[type='button'] {\n  float: right;\n  margin: 10px 20px;\n  background-color: #2870b8;\n  color: #fff;\n  border: none;\n  padding: 3px 5px;\n  font-weight: bold;\n  cursor: pointer;\n  outline: none; }\n\n.right-section input[type='button']:hover {\n  background-color: #0156ab; }\n\n/* Right side section ends */\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmJwLWluc2lnaHRzL0c6XFxQb3J0Zm9saW9fU2l0ZVxccG9ydGZvbGlvL3NyY1xcYXBwXFxyYnAtaW5zaWdodHNcXHJicC1pbnNpZ2h0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmJwLWluc2lnaHRzL3JicC1pbnNpZ2h0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksd0JBQXdCLEVBQUE7O0FBRTVCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksY0FBYztFQUNkLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUVmO0VBQ0ksWUFBWTtFQUNaLFVBQVU7RUFDVixzQkFBcUI7RUFDckIsWUFBWSxFQUFBOztBQUVoQjtFQUNJLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVUsRUFBQTs7QUFFZDtFQUNJLFdBQVc7RUFDWCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUVmO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRTFCOzs7OztFQ0tFOztBRENGO0VBQ0kseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWY7RUFDSSxhQUFhO0VBQ2IsZUFBZSxFQUFBOztBQUVuQjtFQUNJLGFBQWE7RUFDYixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksV0FBVztFQUNYLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx5REFBeUQ7RUFDekQsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBRW5CO0VBQ0kscUJB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LFNBQVMsRUFBQTs7QUFFYjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSx5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSxjQUFhO0VBQ2IseUJBQXlCLEVBQUE7O0FBRzdCLHlCQUFBOztBQUNBLDhCQUFBOztBQUNBO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLHVCQUF1QixFQUFBOztBQUUzQjtFQUNJLE9BQU0sRUFBQTs7QUFFVjtFQUNJLFlBQVk7RUFDWixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYSxFQUFBOztBQUVqQjtFQUNJLHlCQUF5QixFQUFBOztBQUU3Qiw0QkFBQSIsImZpbGUiOiJzcmMvYXBwL3JicC1pbnNpZ2h0cy9yYnAtaW5zaWdodHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmhpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5zaG93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNsZWFyLWZpeCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcbi5jbGVhci1maXg6YmVmb3JlLCAuY2xlYXItZml4OmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG4ubWFpbi13cmFwcGVye1xyXG4gICAgd2lkdGg6IDk1MHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgIzAwMDtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG4udG9wLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbn1cclxuLmluZGV4LWRyb3Bkb3duLCAuaW5mby1kcm9wZG93biB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbn1cclxuLmluZGV4LWRyb3Bkb3duIGxhYmVsLCAuaW5mby1kcm9wZG93biBsYWJlbCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbG9yOiAjMWFiN2VhO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAzcHggNXB4O1xyXG59XHJcbi5pbmRleC1kcm9wZG93biAuaW5kZXgtdHh0LXdyYXAsIC5pbmZvLWRyb3Bkb3duIC5pbmZvLXR4dC13cmFwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uaW5kZXgtZHJvcGRvd24gLmluZGV4LXR4dC13cmFwOmhvdmVyICosIC5pbmZvLWRyb3Bkb3duIC5pbmZvLXR4dC13cmFwOmhvdmVyICoge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxufVxyXG4vKi5pbmRleC1kcm9wZG93biAuaW5kZXgtdHh0LXdyYXA6aG92ZXIgPiAuZHJvcGRvd24sIC5pbmZvLWRyb3Bkb3duIC5pbmZvLXR4dC13cmFwOmhvdmVyID4gLmRyb3Bkb3duIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5pbmRleC1kcm9wZG93biAuaW5kZXgtdHh0LXdyYXAgaW5wdXQ6Zm9jdXMgKyAuZHJvcGRvd24sIC5pbmZvLWRyb3Bkb3duIC5pbmZvLXR4dC13cmFwIGlucHV0OmZvY3VzICsgLmRyb3Bkb3duIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59Ki9cclxuLmluZGV4LWRyb3Bkb3duIC5pbmRleC10eHQtd3JhcCA+IGlucHV0LCAuaW5mby1kcm9wZG93biAuaW5mby10eHQtd3JhcCA+IGlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1MDUwNTA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uaW5kZXgtZHJvcGRvd24gLmluZGV4LXR4dC13cmFwID4gaW5wdXQ6Zm9jdXMsIC5pbmZvLWRyb3Bkb3duIC5pbmZvLXR4dC13cmFwID4gaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaW5kZXgtZHJvcGRvd24gLmluZGV4LXR4dC13cmFwID4gaW5wdXQ6aG92ZXIsIC5pbmZvLWRyb3Bkb3duIC5pbmZvLXR4dC13cmFwID4gaW5wdXQ6aG92ZXIge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaW5kZXgtZHJvcGRvd24gLmluZGV4LXR4dC13cmFwOmFmdGVyLCAuaW5mby1kcm9wZG93biAuaW5mby10eHQtd3JhcDphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJvcmRlcjogMTBweCBzb2xpZCAjMWFiN2VhO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXItY29sb3I6ICMxYWI3ZWEgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubWFpbi13cmFwcGVyIHVsLCAubWFpbi13cmFwcGVyIGxpIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbn1cclxuLm1haW4td3JhcHBlciBsaSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzUwNTA1MDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubWFpbi13cmFwcGVyIGxpOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG4ubWFpbi13cmFwcGVyIGxpLnItYXJyOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgYm9yZGVyOiA4cHggc29saWQgI2FhYTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjYWFhO1xyXG4gICAgdG9wOiAxNHB4O1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubWFpbi13cmFwcGVyIGxpIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLm1haW4td3JhcHBlciBsaSBhIHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogIzhjOGM4YztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLm1haW4td3JhcHBlciBsaSBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5tYWluLXdyYXBwZXIgbGkgYTphY3RpdmUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLm1haW4td3JhcHBlciAuZHJvcGRvd24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgIzUwNTA1MDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogOTtcclxufVxyXG4ubWFpbi13cmFwcGVyIC5kcm9wZG93biAuc3ViLWRyb3Bkb3duIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjEwMCU7XHJcbiAgICB0b3A6MnB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgIzUwNTA1MDtcclxufVxyXG4ubWFpbi13cmFwcGVyIC5kcm9wZG93biAuc3ViLWRyb3Bkb3duIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm1haW4td3JhcHBlciAuZHJvcGRvd24gbGk6aG92ZXIgPiAuc3ViLWRyb3Bkb3duIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5taWRkbGUtYXJlYSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTM1MzU7XHJcbn1cclxuLnRhYi1waWxsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWI3ZWE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGhlbHZldGljYSxhcmlhbCx2ZXJkYW5hO1xyXG4gICAgbWFyZ2luOiAxMHB4IDIwcHggMTBweCAwO1xyXG59XHJcbi50YWItcGlsbDpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG4uaW1nLWFyZWEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY2hhcnQtd3JhcCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTA1MDUwO1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG59XHJcbi5jaGFydC13cmFwIC5jb2wxIHtcclxuICAgIHdpZHRoOiAxMzJweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMWFiN2VhO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5jaGFydC13cmFwIC5jb2wxIGRpdiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcbi5jaGFydC13cmFwIC5jb2wxIGRpdjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLmNoYXJ0LXdyYXAgLmNvbDEgZGl2IGgzIHtcclxuICAgIGNvbG9yOiAjMWFiN2VhO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uY2hhcnQtd3JhcCAuY29sMSBkaXYgcCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbn1cclxuLmgtYXJyLTEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhYjdlYTtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gICAgZm9udC1zaXplOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5oLWFyci0xOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgYm9yZGVyOiA2cHggc29saWQgIzFhYjdlYTtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzFhYjdlYTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtNnB4O1xyXG4gICAgdG9wOiAtNnB4O1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbn1cclxuLnYtYXJyLTEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhYjdlYTtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDMxMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbi5jb2wyIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmNvbDIgZGl2IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4uY29sMiBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5ob3ItMi13cmFwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5oLWFyci0yLCAuaC1hcnItMywgLmgtYXJyLTQsIC5oLWFyci01IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWI3ZWE7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5oLWFyci0zIHtcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG59XHJcbi5oLWFyci00IHtcclxuICAgIG1hcmdpbi10b3A6IDI1MHB4O1xyXG59XHJcbi5oLWFyci01IHtcclxuICAgIG1hcmdpbi10b3A6IDM1OXB4O1xyXG59XHJcbi5oLWFyci0yOmFmdGVyLCAuaC1hcnItMzphZnRlciwgLmgtYXJyLTQ6YWZ0ZXIsIC5oLWFyci01OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgYm9yZGVyOiA2cHggc29saWQgIzFhYjdlYTtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzFhYjdlYTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtNnB4O1xyXG4gICAgdG9wOiAtNnB4O1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbn1cclxuLnBsdXMsLm1pbnVzIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiN2VhO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuLm1pbnVzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XHJcbn1cclxuLnBsdXM6bGFzdC1jaGlsZCwgLm1pbnVzOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcbi5jb2wzIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM0cHg7XHJcbn1cclxuLnJob21idXMge1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICMxY2Q2MWM7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWig0NWRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWig0NWRlZyk7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnJob21idXMgcCB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTQ1ZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVooLTQ1ZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVaKC00NWRlZyk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB3aWR0aDogODhweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuLmFycjM6YmVmb3JlIHtcclxuICAgIGxlZnQ6IC01cHggIWltcG9ydGFudDtcclxufVxyXG4uYXJyMzphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJvcmRlcjogNnB4IHNvbGlkICM4ODg7XHJcbiAgICBib3JkZXItY29sb3I6ICM4ODggdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzFhYjdlYTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtNXB4O1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgYm90dG9tOiAtN3B4O1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbn1cclxuLnBvc2l0aXZlLnVwd29yZC1hcnIge1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG4ucG9zaXRpdmUudXB3b3JkLWFycjpiZWZvcmUge1xyXG4gICAgbGVmdDotNnB4O1xyXG4gICAgdG9wOmF1dG87XHJcbiAgICBib3R0b206LTFweDtcclxufVxyXG4ucG9zaXRpdmUudXB3b3JkLWFycjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJvcmRlcjogNnB4IHNvbGlkICMxYWI3ZWE7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMxYWI3ZWEgdHJhbnNwYXJlbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTVweDtcclxuICAgIHRvcDogLTlweDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG59XHJcbi5uZWdhdGl2ZS5hcnIzOmFmdGVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzg4OCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnBvc2l0aXZlOmJlZm9yZSwgLm5lZ2F0aXZlOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIitcIjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWI3ZWE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IC02cHg7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMC41O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5uZWdhdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xyXG59XHJcbi5uZWdhdGl2ZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCItXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDAuNDtcclxufVxyXG4ubmVnYXRpdmU6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjODg4O1xyXG59XHJcbi5uby1hcnItaGVhZDphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uY3VyLWFyciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMWFiN2VhO1xyXG4gICAgd2lkdGg6IDM0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDFweDtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbn1cclxuLm5lZ2F0aXZlIC5hcnItdGlwIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzg4OCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZWdhdGl2ZSAuYXJyLXRpcDphZnRlciB7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzg4ODtcclxufVxyXG4udXAtYXJyOmFmdGVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzFhYjdlYSB0cmFuc3BhcmVudDtcclxufVxyXG4udXAtYXJyOmJlZm9yZSB7XHJcbiAgICBib3R0b206IC02cHg7XHJcbiAgICB0b3A6IGF1dG87XHJcbn1cclxuLmFyci10aXA6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjMWFiN2VhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMWFiN2VhO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC02cHg7XHJcbiAgICBib3R0b206IC02cHg7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxufVxyXG4uY3VyLWFycjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJvcmRlcjogNnB4IHNvbGlkICMxYWI3ZWE7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMxYWI3ZWE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTZweDtcclxuICAgIGJvdHRvbTogLTVweDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG59XHJcbi5jdXItYXJyLWludmVydCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMWFiN2VhO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDFweDtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbn1cclxuLnJlYy1ib3gge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29sNCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1OHB4O1xyXG59XHJcbi5jb2w1IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5jb2w1IC5yaG9tYnVzIHAge1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MDtcclxufVxyXG4uY29sNiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmJnLWdyZWVuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxY2Q2MWM7XHJcbn1cclxuLmJnLWJsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2N2RiNztcclxufVxyXG4uYmctb3JhbmdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmE1MDA7XHJcbn1cclxuLmJnLWdyYXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcclxufVxyXG4uY29sNiBkaXYge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4ucG9zLXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5yb3VuZC1hcnIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjY5OTtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjEwcHg7XHJcbiAgICBsZWZ0OjVweDtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNvbDYgLmNpcmNsZSB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDQ7XHJcbn1cclxuLnJvdW5kLWFyciBzcGFuIHtcclxuICAgIGJvcmRlcjogNnB4IHNvbGlkICNmZmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2ZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgIHRvcDogN3B4O1xyXG4gICAgcmlnaHQ6IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnBvcy1yOmhvdmVyIC5yb3VuZC1hcnIge1xyXG4gICAgbGVmdDogLTEycHg7XHJcbiAgICB0b3A6IC02cHg7XHJcbn1cclxuLmNvbDYgLnNlbWktY2lyY2xlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDYwcHggNjBweCAwIDA7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4uY29sNiAuY2lyY2xlIHAge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcbi5jb2w2IC5jaXJjbGUgLnNlbWktY2lyY2xlIHAge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbi5saW5lIHtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDQyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMzJweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmFyci10eHQ6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICdBbGwgbmVnYXRpdmUnO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3R0b206IC0xNnB4O1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgY29sb3I6ICNhYWE7XHJcbiAgICBsZWZ0OiAycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmFyci10eHQtYmx1ZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ0F0IGxlYXN0IG9uZSBwb3NpdGl2ZSc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvdHRvbTogLTEycHg7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBjb2xvcjogIzFhYjdlYTtcclxuICAgIGxlZnQ6IDJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uZ3JheS1hcnI6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjODg4IHRyYW5zcGFyZW50O1xyXG59XHJcbi8qIFJlYmFsYW5jZSBEYXRlcyBzdGFydHMgKi9cclxuLlJlYmFsYW5jZS1EYXRlcy1XcmFwIHtcclxuICAgIHBhZGRpbmc6IDVweCAzMHB4IDU1cHg7XHJcbn1cclxuLlJlYmFsYW5jZS1EYXRlcy1XcmFwLCAuUmViYWxhbmNlLURhdGVzLVdyYXAgdWwsIC5SZWJhbGFuY2UtRGF0ZXMtV3JhcCB1bCBsaSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xyXG59XHJcbi5SZWJhbGFuY2UtRGF0ZXMtV3JhcCB1bCBsaSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMzVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5SZWJhbGFuY2UtRGF0ZXMtV3JhcCB1bCBsaS55ZWFycyBsYWJlbCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uUmViYWxhbmNlLURhdGVzLVdyYXAgdWwgbGkueWVhcnMgLmxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTIwcHg7XHJcbiAgICBsZWZ0OiAtNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5SZWJhbGFuY2UtRGF0ZXMtV3JhcCB1bCBsaS55ZWFycyBpbnB1dFt0eXBlPSdyYWRpbyddIHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG4uUmViYWxhbmNlLURhdGVzLVdyYXAgdWwgbGkueWVhcnMgaW5wdXRbdHlwZT0ncmFkaW8nXSB+IC5jaGVja21hcmsge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMTkxOTE5O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHggMDtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICMxOTE5MTk7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMmEyYTJhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcclxufVxyXG4uUmViYWxhbmNlLURhdGVzLVdyYXAgdWwgbGkueWVhcnMgaW5wdXRbdHlwZT0ncmFkaW8nXSB+IC5jaGVja21hcms6YWZ0ZXIsIC5SZWJhbGFuY2UtRGF0ZXMtV3JhcCB1bCBsaS55ZWFycyBpbnB1dFt0eXBlPSdyYWRpbyddIH4gLmNoZWNrbWFyazpiZWZvcmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJvcmRlcjoxcHggc29saWQgIzE5MTkxOTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4IDA7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMTkxOTE5O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzJhMmEyYTtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTI0cHg7XHJcbiAgICB3aWR0aDoyNXB4O1xyXG4gICAgdG9wOjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzI7XHJcbn1cclxuLlJlYmFsYW5jZS1EYXRlcy1XcmFwIHVsIGxpLnllYXJzIGlucHV0W3R5cGU9J3JhZGlvJ10gfiAuY2hlY2ttYXJrOmJlZm9yZSB7XHJcbiAgICBsZWZ0OiAxNnB4O1xyXG59XHJcbi5SZWJhbGFuY2UtRGF0ZXMtV3JhcCB1bCBsaS55ZWFycyBpbnB1dFt0eXBlPSdyYWRpbyddIH4gLmNoZWNrbWFyayBzcGFuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuLlJlYmFsYW5jZS1EYXRlcy1XcmFwIHVsIGxpLnllYXJzIGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZCB+IC5jaGVja21hcmsgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uUmViYWxhbmNlLURhdGVzLVdyYXAgdWwgbGkueWVhcnMgaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkIH4gLmNoZWNrbWFyazpob3ZlciBzcGFuLCAuUmViYWxhbmNlLURhdGVzLVdyYXAgdWwgbGkueWVhcnMgaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkIH4gLmxhYmVsOmhvdmVyIH4gLmNoZWNrbWFyayBzcGFuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFiZmY7XHJcbn1cclxuLlJlYmFsYW5jZS1EYXRlcy1XcmFwIHVsIGxpLnllYXJzIGlucHV0W3R5cGU9J3JhZGlvJ10gfiAuY2hlY2ttYXJrOmhvdmVyIHNwYW4sIC5SZWJhbGFuY2UtRGF0ZXMtV3JhcCB1bCBsaS55ZWFycyAubGFiZWw6aG92ZXIgfiAuY2hlY2ttYXJrIHNwYW4ge1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjdmYTk7XHJcbn1cclxuXHJcbi8qIFJlYmFsYW5jZSBEYXRlcyBlbmRzICovXHJcbi8qIFJpZ2h0IHNpZGUgc2VjdGlvbiBzdGFydHMgKi9cclxuLnJpZ2h0LXNlY3Rpb24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzUwNTA1MDtcclxuICAgIHdpZHRoOiA5MjhweDtcclxuICAgIGhlaWdodDogNTY3cHg7XHJcbiAgICB0b3A6IDU3cHg7XHJcbiAgICBsZWZ0OiA5MjhweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNTM1O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG59XHJcbi5vcGVuIHtcclxuICAgIGxlZnQ6MDtcclxufVxyXG4ucmlnaHQtc2VjdGlvbiBpbnB1dFt0eXBlPSdidXR0b24nXSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDEwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODcwYjg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnJpZ2h0LXNlY3Rpb24gaW5wdXRbdHlwZT0nYnV0dG9uJ106aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxNTZhYjtcclxufVxyXG4vKiBSaWdodCBzaWRlIHNlY3Rpb24gZW5kcyAqLyIsIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuLnNob3cge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XG5cbi5jbGVhci1maXgge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7IH1cblxuLmNsZWFyLWZpeDpiZWZvcmUsIC5jbGVhci1maXg6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGVudDogJyc7XG4gIGNsZWFyOiBib3RoOyB9XG5cbi5tYWluLXdyYXBwZXIge1xuICB3aWR0aDogOTUwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIG1hcmdpbjogMjBweDsgfVxuXG4udG9wLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDVweCAwOyB9XG5cbi5pbmRleC1kcm9wZG93biwgLmluZm8tZHJvcGRvd24ge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuLmluZGV4LWRyb3Bkb3duIGxhYmVsLCAuaW5mby1kcm9wZG93biBsYWJlbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogIzFhYjdlYTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDNweCA1cHg7IH1cblxuLmluZGV4LWRyb3Bkb3duIC5pbmRleC10eHQtd3JhcCwgLmluZm8tZHJvcGRvd24gLmluZm8tdHh0LXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbi5pbmRleC1kcm9wZG93biAuaW5kZXgtdHh0LXdyYXA6aG92ZXIgKiwgLmluZm8tZHJvcGRvd24gLmluZm8tdHh0LXdyYXA6aG92ZXIgKiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7IH1cblxuLyouaW5kZXgtZHJvcGRvd24gLmluZGV4LXR4dC13cmFwOmhvdmVyID4gLmRyb3Bkb3duLCAuaW5mby1kcm9wZG93biAuaW5mby10eHQtd3JhcDpob3ZlciA+IC5kcm9wZG93biB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uaW5kZXgtZHJvcGRvd24gLmluZGV4LXR4dC13cmFwIGlucHV0OmZvY3VzICsgLmRyb3Bkb3duLCAuaW5mby1kcm9wZG93biAuaW5mby10eHQtd3JhcCBpbnB1dDpmb2N1cyArIC5kcm9wZG93biB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSovXG4uaW5kZXgtZHJvcGRvd24gLmluZGV4LXR4dC13cmFwID4gaW5wdXQsIC5pbmZvLWRyb3Bkb3duIC5pbmZvLXR4dC13cmFwID4gaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTA1MDUwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5pbmRleC1kcm9wZG93biAuaW5kZXgtdHh0LXdyYXAgPiBpbnB1dDpmb2N1cywgLmluZm8tZHJvcGRvd24gLmluZm8tdHh0LXdyYXAgPiBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uaW5kZXgtZHJvcGRvd24gLmluZGV4LXR4dC13cmFwID4gaW5wdXQ6aG92ZXIsIC5pbmZvLWRyb3Bkb3duIC5pbmZvLXR4dC13cmFwID4gaW5wdXQ6aG92ZXIge1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLmluZGV4LWRyb3Bkb3duIC5pbmRleC10eHQtd3JhcDphZnRlciwgLmluZm8tZHJvcGRvd24gLmluZm8tdHh0LXdyYXA6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgYm9yZGVyOiAxMHB4IHNvbGlkICMxYWI3ZWE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWNvbG9yOiAjMWFiN2VhIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLm1haW4td3JhcHBlciB1bCwgLm1haW4td3JhcHBlciBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDsgfVxuXG4ubWFpbi13cmFwcGVyIGxpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1MDUwNTA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4ubWFpbi13cmFwcGVyIGxpOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lOyB9XG5cbi5tYWluLXdyYXBwZXIgbGkuci1hcnI6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgYm9yZGVyOiA4cHggc29saWQgI2FhYTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNhYWE7XG4gIHRvcDogMTRweDtcbiAgcmlnaHQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5tYWluLXdyYXBwZXIgbGkgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiA1cHg7IH1cblxuLm1haW4td3JhcHBlciBsaSBhIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgZm9udC13ZWlnaHQ6IDYwMDsgfVxuXG4ubWFpbi13cmFwcGVyIGxpIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5tYWluLXdyYXBwZXIgbGkgYTphY3RpdmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5tYWluLXdyYXBwZXIgLmRyb3Bkb3duIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzUwNTA1MDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTsgfVxuXG4ubWFpbi13cmFwcGVyIC5kcm9wZG93biAuc3ViLWRyb3Bkb3duIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMDAlO1xuICB0b3A6IDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MDUwNTA7IH1cblxuLm1haW4td3JhcHBlciAuZHJvcGRvd24gLnN1Yi1kcm9wZG93biB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLm1haW4td3JhcHBlciAuZHJvcGRvd24gbGk6aG92ZXIgPiAuc3ViLWRyb3Bkb3duIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLm1pZGRsZS1hcmVhIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTM1MzU7IH1cblxuLnRhYi1waWxsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYWI3ZWE7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogaGVsdmV0aWNhLGFyaWFsLHZlcmRhbmE7XG4gIG1hcmdpbjogMTBweCAyMHB4IDEwcHggMDsgfVxuXG4udGFiLXBpbGw6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDsgfVxuXG4uaW1nLWFyZWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLmNoYXJ0LXdyYXAge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTA1MDUwO1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7IH1cblxuLmNoYXJ0LXdyYXAgLmNvbDEge1xuICB3aWR0aDogMTMycHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxYWI3ZWE7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbi5jaGFydC13cmFwIC5jb2wxIGRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7IH1cblxuLmNoYXJ0LXdyYXAgLmNvbDEgZGl2Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwOyB9XG5cbi5jaGFydC13cmFwIC5jb2wxIGRpdiBoMyB7XG4gIGNvbG9yOiAjMWFiN2VhO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XG5cbi5jaGFydC13cmFwIC5jb2wxIGRpdiBwIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjsgfVxuXG4uaC1hcnItMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYWI3ZWE7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xuICBmb250LXNpemU6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4uaC1hcnItMTphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBib3JkZXI6IDZweCBzb2xpZCAjMWFiN2VhO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMxYWI3ZWE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC02cHg7XG4gIHRvcDogLTZweDtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDsgfVxuXG4udi1hcnItMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYWI3ZWE7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMzEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogNTBweDsgfVxuXG4uY29sMiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTVweDsgfVxuXG4uY29sMiBkaXYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA4NXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cblxuLmNvbDIgZGl2Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwOyB9XG5cbi5ob3ItMi13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDsgfVxuXG4uaC1hcnItMiwgLmgtYXJyLTMsIC5oLWFyci00LCAuaC1hcnItNSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYWI3ZWE7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlOyB9XG5cbi5oLWFyci0zIHtcbiAgbWFyZ2luLXRvcDogMTUwcHg7IH1cblxuLmgtYXJyLTQge1xuICBtYXJnaW4tdG9wOiAyNTBweDsgfVxuXG4uaC1hcnItNSB7XG4gIG1hcmdpbi10b3A6IDM1OXB4OyB9XG5cbi5oLWFyci0yOmFmdGVyLCAuaC1hcnItMzphZnRlciwgLmgtYXJyLTQ6YWZ0ZXIsIC5oLWFyci01OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGJvcmRlcjogNnB4IHNvbGlkICMxYWI3ZWE7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzFhYjdlYTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTZweDtcbiAgdG9wOiAtNnB4O1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwOyB9XG5cbi5wbHVzLCAubWludXMge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAwLjU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYWI3ZWE7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMnB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLXRvcDogOHB4OyB9XG5cbi5taW51cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ODg7IH1cblxuLnBsdXM6bGFzdC1jaGlsZCwgLm1pbnVzOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7IH1cblxuLmNvbDMge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDM0cHg7IH1cblxuLnJob21idXMge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMWNkNjFjO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xuICBtYXJnaW4tdG9wOiA1cHg7IH1cblxuLnJob21idXMgcCB7XG4gIHRyYW5zZm9ybTogcm90YXRlWigtNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVaKC00NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVaKC00NWRlZyk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDg4cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7IH1cblxuLmFycjM6YmVmb3JlIHtcbiAgbGVmdDogLTVweCAhaW1wb3J0YW50OyB9XG5cbi5hcnIzOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGJvcmRlcjogNnB4IHNvbGlkICM4ODg7XG4gIGJvcmRlci1jb2xvcjogIzg4OCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMWFiN2VhO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtNXB4O1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogLTdweDtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDsgfVxuXG4ucG9zaXRpdmUudXB3b3JkLWFyciB7XG4gIHdpZHRoOiAxcHg7XG4gIG1hcmdpbi10b3A6IC0xMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xuICBoZWlnaHQ6IDIwcHg7IH1cblxuLnBvc2l0aXZlLnVwd29yZC1hcnI6YmVmb3JlIHtcbiAgbGVmdDogLTZweDtcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IC0xcHg7IH1cblxuLnBvc2l0aXZlLnVwd29yZC1hcnI6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgYm9yZGVyOiA2cHggc29saWQgIzFhYjdlYTtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMWFiN2VhIHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtNXB4O1xuICB0b3A6IC05cHg7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7IH1cblxuLm5lZ2F0aXZlLmFycjM6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6ICM4ODggdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7IH1cblxuLnBvc2l0aXZlOmJlZm9yZSwgLm5lZ2F0aXZlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiK1wiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiN2VhO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAtNnB4O1xuICByaWdodDogYXV0bztcbiAgaGVpZ2h0OiAxMnB4O1xuICB3aWR0aDogMTJweDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMC41O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLm5lZ2F0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODsgfVxuXG4ubmVnYXRpdmU6YmVmb3JlIHtcbiAgY29udGVudDogXCItXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDAuNDsgfVxuXG4ubmVnYXRpdmU6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM4ODg7IH1cblxuLm5vLWFyci1oZWFkOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGJvcmRlcjogbm9uZTsgfVxuXG4uY3VyLWFyciB7XG4gIG1hcmdpbi1sZWZ0OiAyNTBweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMWFiN2VhO1xuICB3aWR0aDogMzRweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDFweDtcbiAgbWFyZ2luLXRvcDogNzBweDsgfVxuXG4ubmVnYXRpdmUgLmFyci10aXAge1xuICBib3JkZXItY29sb3I6ICM4ODggIWltcG9ydGFudDsgfVxuXG4ubmVnYXRpdmUgLmFyci10aXA6YWZ0ZXIge1xuICBib3JkZXItbGVmdC1jb2xvcjogIzg4ODsgfVxuXG4udXAtYXJyOmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMWFiN2VhIHRyYW5zcGFyZW50OyB9XG5cbi51cC1hcnI6YmVmb3JlIHtcbiAgYm90dG9tOiAtNnB4O1xuICB0b3A6IGF1dG87IH1cblxuLmFyci10aXA6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgYm9yZGVyOiA2cHggc29saWQgIzFhYjdlYTtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMWFiN2VhO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtNnB4O1xuICBib3R0b206IC02cHg7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7IH1cblxuLmN1ci1hcnI6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgYm9yZGVyOiA2cHggc29saWQgIzFhYjdlYTtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMWFiN2VhO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtNnB4O1xuICBib3R0b206IC01cHg7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7IH1cblxuLmN1ci1hcnItaW52ZXJ0IHtcbiAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxYWI3ZWE7XG4gIHdpZHRoOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItd2lkdGg6IDAgMCAxcHggMXB4O1xuICBtYXJnaW4tdG9wOiA3MHB4OyB9XG5cbi5yZWMtYm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDExcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA3NXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmNvbDQge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDU4cHg7IH1cblxuLmNvbDUge1xuICBmbG9hdDogbGVmdDsgfVxuXG4uY29sNSAucmhvbWJ1cyBwIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tbGVmdDogMDsgfVxuXG4uY29sNiB7XG4gIGZsb2F0OiByaWdodDsgfVxuXG4uYmctZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWNkNjFjOyB9XG5cbi5iZy1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2N2RiNzsgfVxuXG4uYmctb3JhbmdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTUwMDsgfVxuXG4uYmctZ3JheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ODg7IH1cblxuLmNvbDYgZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxuXG4ucG9zLXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLnJvdW5kLWFyciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY2OTk7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiA1cHg7XG4gIHotaW5kZXg6IDM7XG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uY29sNiAuY2lyY2xlIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDQ7IH1cblxuLnJvdW5kLWFyciBzcGFuIHtcbiAgYm9yZGVyOiA2cHggc29saWQgI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIHRvcDogN3B4O1xuICByaWdodDogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5wb3Mtcjpob3ZlciAucm91bmQtYXJyIHtcbiAgbGVmdDogLTEycHg7XG4gIHRvcDogLTZweDsgfVxuXG4uY29sNiAuc2VtaS1jaXJjbGUge1xuICBib3JkZXItcmFkaXVzOiA2MHB4IDYwcHggMCAwO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDA7IH1cblxuLmNvbDYgLmNpcmNsZSBwIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDA7IH1cblxuLmNvbDYgLmNpcmNsZSAuc2VtaS1jaXJjbGUgcCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDJweDtcbiAgbGluZS1oZWlnaHQ6IDE7IH1cblxuLmxpbmUge1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDQyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xuICBtYXJnaW4tbGVmdDogMTMycHg7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLmFyci10eHQ6YmVmb3JlIHtcbiAgY29udGVudDogJ0FsbCBuZWdhdGl2ZSc7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3R0b206IC0xNnB4O1xuICBmb250LXNpemU6IDlweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICNhYWE7XG4gIGxlZnQ6IDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlOyB9XG5cbi5hcnItdHh0LWJsdWU6YmVmb3JlIHtcbiAgY29udGVudDogJ0F0IGxlYXN0IG9uZSBwb3NpdGl2ZSc7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3R0b206IC0xMnB4O1xuICBmb250LXNpemU6IDlweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICMxYWI3ZWE7XG4gIGxlZnQ6IDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlOyB9XG5cbi5ncmF5LWFycjphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzg4OCB0cmFuc3BhcmVudDsgfVxuXG4vKiBSZWJhbGFuY2UgRGF0ZXMgc3RhcnRzICovXG4uUmViYWxhbmNlLURhdGVzLVdyYXAge1xuICBwYWRkaW5nOiA1cHggMzBweCA1NXB4OyB9XG5cbi5SZWJhbGFuY2UtRGF0ZXMtV3JhcCwgLlJlYmFsYW5jZS1EYXRlcy1XcmFwIHVsLCAuUmViYWxhbmNlLURhdGVzLVdyYXAgdWwgbGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0OyB9XG5cbi5SZWJhbGFuY2UtRGF0ZXMtV3JhcCB1bCBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBtYXJnaW46IDA7IH1cblxuLlJlYmFsYW5jZS1EYXRlcy1XcmFwIHVsIGxpLnllYXJzIGxhYmVsIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDsgfVxuXG4uUmViYWxhbmNlLURhdGVzLVdyYXAgdWwgbGkueWVhcnMgLmxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0yMHB4O1xuICBsZWZ0OiAtNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLlJlYmFsYW5jZS1EYXRlcy1XcmFwIHVsIGxpLnllYXJzIGlucHV0W3R5cGU9J3JhZGlvJ10ge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi5SZWJhbGFuY2UtRGF0ZXMtV3JhcCB1bCBsaS55ZWFycyBpbnB1dFt0eXBlPSdyYWRpbyddIH4gLmNoZWNrbWFyayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxOTE5MTk7XG4gIGJvcmRlci13aWR0aDogMXB4IDA7XG4gIGJvcmRlci10b3AtY29sb3I6ICMxOTE5MTk7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMyYTJhMmE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzI7IH1cblxuLlJlYmFsYW5jZS1EYXRlcy1XcmFwIHVsIGxpLnllYXJzIGlucHV0W3R5cGU9J3JhZGlvJ10gfiAuY2hlY2ttYXJrOmFmdGVyLCAuUmViYWxhbmNlLURhdGVzLVdyYXAgdWwgbGkueWVhcnMgaW5wdXRbdHlwZT0ncmFkaW8nXSB+IC5jaGVja21hcms6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRlbnQ6ICcnO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTkxOTE5O1xuICBib3JkZXItd2lkdGg6IDFweCAwO1xuICBib3JkZXItdG9wLWNvbG9yOiAjMTkxOTE5O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMmEyYTJhO1xuICBoZWlnaHQ6IDZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMjRweDtcbiAgd2lkdGg6IDI1cHg7XG4gIHRvcDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyOyB9XG5cbi5SZWJhbGFuY2UtRGF0ZXMtV3JhcCB1bCBsaS55ZWFycyBpbnB1dFt0eXBlPSdyYWRpbyddIH4gLmNoZWNrbWFyazpiZWZvcmUge1xuICBsZWZ0OiAxNnB4OyB9XG5cbi5SZWJhbGFuY2UtRGF0ZXMtV3JhcCB1bCBsaS55ZWFycyBpbnB1dFt0eXBlPSdyYWRpbyddIH4gLmNoZWNrbWFyayBzcGFuIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWJmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwOyB9XG5cbi5SZWJhbGFuY2UtRGF0ZXMtV3JhcCB1bCBsaS55ZWFycyBpbnB1dFt0eXBlPSdyYWRpbyddOmNoZWNrZWQgfiAuY2hlY2ttYXJrIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4uUmViYWxhbmNlLURhdGVzLVdyYXAgdWwgbGkueWVhcnMgaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkIH4gLmNoZWNrbWFyazpob3ZlciBzcGFuLCAuUmViYWxhbmNlLURhdGVzLVdyYXAgdWwgbGkueWVhcnMgaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkIH4gLmxhYmVsOmhvdmVyIH4gLmNoZWNrbWFyayBzcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWJmZjsgfVxuXG4uUmViYWxhbmNlLURhdGVzLVdyYXAgdWwgbGkueWVhcnMgaW5wdXRbdHlwZT0ncmFkaW8nXSB+IC5jaGVja21hcms6aG92ZXIgc3BhbiwgLlJlYmFsYW5jZS1EYXRlcy1XcmFwIHVsIGxpLnllYXJzIC5sYWJlbDpob3ZlciB+IC5jaGVja21hcmsgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmI3ZmE5OyB9XG5cbi8qIFJlYmFsYW5jZSBEYXRlcyBlbmRzICovXG4vKiBSaWdodCBzaWRlIHNlY3Rpb24gc3RhcnRzICovXG4ucmlnaHQtc2VjdGlvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MDUwNTA7XG4gIHdpZHRoOiA5MjhweDtcbiAgaGVpZ2h0OiA1NjdweDtcbiAgdG9wOiA1N3B4O1xuICBsZWZ0OiA5MjhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNTM1O1xuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgLjNzOyB9XG5cbi5vcGVuIHtcbiAgbGVmdDogMDsgfVxuXG4ucmlnaHQtc2VjdGlvbiBpbnB1dFt0eXBlPSdidXR0b24nXSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODcwYjg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7IH1cblxuLnJpZ2h0LXNlY3Rpb24gaW5wdXRbdHlwZT0nYnV0dG9uJ106aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE1NmFiOyB9XG5cbi8qIFJpZ2h0IHNpZGUgc2VjdGlvbiBlbmRzICovXG4iXX0= */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_rbp_insights_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/rbp-insights.service */ "./src/app/services/rbp-insights.service.ts");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xml2js */ "./node_modules/xml2js/lib/xml2js.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_4__);





var RbpInsightsComponent = /** @class */ (function () {
    function RbpInsightsComponent(activatedRoute, router, rbpInsightsService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.rbpInsightsService = rbpInsightsService;
        this.selectedIndexValue = "";
        this.selectedInfoValue = "";
        this.indexHash = "";
        this.infoHash = "";
        this.RebalanceDates = null;
        this.RebalanceYears = null;
        this.indexDropdown = [
            {
                "text": "Dynamic Asset Allocation",
                "tagLine": "Directional Allocation Indexes",
                "hash": "DirAllocationIndexes__50",
                "subNav": [
                    {
                        "text": "Large-Cap",
                        "tagLine": "",
                        "hash": "DirAllocationIndexes__50"
                    },
                    {
                        "text": "SMID-Cap",
                        "tagLine": "",
                        "hash": "SMIDAllocation__100"
                    }
                ]
            },
            {
                "text": "Higher Beta, Market Beta, Lower Beta",
                "tagLine": "Directional Indexes",
                "hash": "Directional_Aggressive_100",
                "subNav": [
                    {
                        "text": "Large-Cap Aggresive",
                        "tagLine": "",
                        "hash": "Directional_Aggressive_100"
                    },
                    {
                        "text": "Large-Cap Market",
                        "tagLine": "",
                        "hash": "Directional_Market_100"
                    },
                    {
                        "text": "Large-Cap Defensive",
                        "tagLine": "",
                        "hash": "Directional_Defensive_100"
                    },
                    {
                        "text": "SMID-Cap Aggresive",
                        "tagLine": "",
                        "hash": "SMIDIndexes_Aggressive_100"
                    },
                    {
                        "text": "SMID-Cap Market",
                        "tagLine": "",
                        "hash": "SMIDIndexes_Market_100"
                    },
                    {
                        "text": "SMID-Cap Defensive",
                        "tagLine": "",
                        "hash": "SMIDIndexes_Defensive_100"
                    }
                ]
            },
            {
                "text": "Value",
                "tagLine": "Style Indexes",
                "hash": "Style_Value_100"
            },
            {
                "text": "Dividend Income",
                "tagLine": "Dividend Indexes",
                "hash": "Dividend__100"
            },
            {
                "text": "Small-Cap Core",
                "tagLine": "Small Cap Indexes",
                "hash": "Smallcap__100"
            },
            {
                "text": "Islamic Shari'ah",
                "tagLine": "Islamic Market Indexes",
                "hash": "Islamic__All"
            },
            {
                "text": "Low Volatility",
                "tagLine": "Blended Indexes",
                "hash": "Blended__All"
            }
        ];
        this.infoDropdown = [
            {
                "text": "Index Performance",
                "hash": "IndexData"
            },
            {
                "text": "Index Construction",
                "hash": "IndexConst"
            },
            {
                "text": "Performance Chart",
                "hash": "IndexChart"
            },
            {
                "text": "Index Information",
                "hash": "IndexInfo"
            }
        ];
        if (this.router.url.indexOf('#') != -1) {
            var hash_1 = this.router.url.substr(this.router.url.indexOf('#') + 1, this.router.url.length);
            this.indexHash = hash_1.substring(hash_1.indexOf('_') + 1);
            this.infoHash = hash_1.substring(hash_1.indexOf('_'), 0);
            this.indexDropdown.filter(function (item) {
                if (item['hash'] == hash_1.substring(hash_1.indexOf('_') + 1)) {
                    _this.selectedIndexValue = item['text'];
                }
            });
            this.infoDropdown.filter(function (item) {
                if (item['hash'] == hash_1.substring(hash_1.indexOf('_'), 0)) {
                    _this.selectedInfoValue = item['text'];
                }
            });
            if (this.selectedIndexValue == '' || this.selectedInfoValue == '') {
                this.selectedIndexValue = 'Dynamic Asset Allocation';
                this.selectedInfoValue = 'Index Performance';
                this.indexHash = "DirAllocationIndexes__50";
                this.infoHash = "IndexData";
                window.location.hash = this.infoHash + '_' + this.indexHash;
            }
        }
        else {
            this.selectedIndexValue = 'Dynamic Asset Allocation';
            this.selectedInfoValue = 'Index Performance';
            this.indexHash = "DirAllocationIndexes__50";
            this.infoHash = "IndexData";
            window.location.hash = this.infoHash + '_' + this.indexHash;
        }
    }
    RbpInsightsComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.addEventListener("click", function (event) {
            var e = window.event || event;
            e.stopPropagation();
            _this.hideDD(_this.indexDD);
            _this.hideDD(_this.infoDD);
        });
        this.rbpInsightsService.getRebalanceDates().subscribe(function (dates) {
            var parser = new xml2js__WEBPACK_IMPORTED_MODULE_4___default.a.Parser();
            parser.parseString(dates, function (err, result) {
                if (!err && result) {
                    _this.RebalanceDates = result.NewDataSet.Table;
                    var YearsTemp_1 = [];
                    result.NewDataSet.Table.filter(function (item) { return YearsTemp_1.push(item.RebalanceYear[0]); });
                    _this.RebalanceYears = YearsTemp_1.filter(function (v, i, a) { return a.indexOf(v) === i; });
                }
            });
        });
    };
    RbpInsightsComponent.prototype.toggleRightSection = function (ele) {
        var classList = ele.getAttribute("class");
        if (classList.indexOf('open') != -1) {
            ele.setAttribute('class', classList.replace(' open', ''));
        }
        else {
            ele.setAttribute('class', classList + ' open');
        }
    };
    RbpInsightsComponent.prototype.setSelectedIndexValue = function (event) {
        var e = window.event || event;
        e.stopPropagation();
        this.selectedIndexValue = e.target.title;
        this.indexHash = e.target.getAttribute('hash');
        console.log(this.indexHash);
        window.location.hash = this.infoHash + '_' + this.indexHash;
    };
    RbpInsightsComponent.prototype.setSelectedInfoValue = function (event) {
        var e = window.event || event;
        e.stopPropagation();
        this.selectedInfoValue = e.target.title;
        this.infoHash = e.target.getAttribute('hash');
        console.log(this.infoHash);
        window.location.hash = this.infoHash + '_' + this.indexHash;
    };
    RbpInsightsComponent.prototype.toggleDropdown = function (ele, event) {
        this.hideDD(this.indexDD);
        this.hideDD(this.infoDD);
        var e = window.event || event;
        e.stopPropagation();
        var classList = ele.getAttribute("class");
        if (classList.split(" ").indexOf("hide") != -1 && e.target.nodeName.toLowerCase() == 'input') {
            ele.setAttribute("class", "dropdown show");
        }
        else if (classList.split(" ").indexOf("hide") == -1 || e.target.nodeName.toLowerCase() != 'input') {
            ele.setAttribute("class", "dropdown hide");
        }
    };
    RbpInsightsComponent.prototype.hideDD = function (ele) {
        if (ele.getAttribute) {
            var classList = ele.getAttribute("class");
            ele.setAttribute("class", "dropdown hide");
        }
        if (ele.nativeElement) {
            var classList = ele.nativeElement.getAttribute("class");
            ele.nativeElement.setAttribute("class", "dropdown hide");
        }
    };
    RbpInsightsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_rbp_insights_service__WEBPACK_IMPORTED_MODULE_3__["RbpInsightsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('indexDD', { static: false })
    ], RbpInsightsComponent.prototype, "indexDD", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('infoDD', { static: false })
    ], RbpInsightsComponent.prototype, "infoDD", void 0);
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

/***/ "./src/app/services/rbp-insights.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/rbp-insights.service.ts ***!
  \**************************************************/
/*! exports provided: RbpInsightsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RbpInsightsService", function() { return RbpInsightsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RbpInsightsService = /** @class */ (function () {
    function RbpInsightsService(http) {
        this.http = http;
    }
    RbpInsightsService.prototype.getRebalanceDates = function () {
        return this.http.get('./assets/Rebalance_Dates.xml', { responseType: 'text' });
    };
    RbpInsightsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RbpInsightsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], RbpInsightsService);
    return RbpInsightsService;
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
