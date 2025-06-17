/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/send-email/route";
exports.ids = ["app/api/send-email/route"];
exports.modules = {

/***/ "(rsc)/./app/api/send-email/route.ts":
/*!*************************************!*\
  !*** ./app/api/send-email/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\n\nlet isSending = false; // Add a flag to prevent duplicate sends\nasync function POST(request) {\n    const { name, email, message } = await request.json();\n    if (isSending) {\n        console.log(\"Duplicate request detected. Email is already being sent.\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            message: \"Duplicate request\"\n        }, {\n            status: 429\n        });\n    }\n    isSending = true; // Set the flag to prevent further submissions\n    console.log(\"Processing request:\", {\n        name,\n        email,\n        message\n    }); // Debugging log\n    const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_1__.createTransport({\n        host: \"smtp.mail.yahoo.com\",\n        port: 465,\n        secure: true,\n        auth: {\n            user: process.env.EMAIL_USER,\n            pass: process.env.EMAIL_PASS\n        }\n    });\n    const mailOptions = {\n        from: process.env.EMAIL_USER,\n        to: process.env.RECIPIENT_EMAIL,\n        subject: \"New Toilet Teacher Request\",\n        text: `Name: ${name}\\nEmail: ${email}\\nMessage: ${message}`\n    };\n    try {\n        console.log(\"Sending email with options:\", mailOptions); // Debugging log\n        await transporter.sendMail(mailOptions);\n        console.log(\"Email sent successfully!\"); // Debugging log\n        isSending = false; // Reset the flag after sending\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true\n        });\n    } catch (error) {\n        isSending = false; // Reset the flag on error\n        console.error(\"Error sending email:\", error); // Debugging log\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NlbmQtZW1haWwvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQ1A7QUFFcEMsSUFBSUUsWUFBWSxPQUFPLHdDQUF3QztBQUV4RCxlQUFlQyxLQUFLQyxPQUFnQjtJQUN6QyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUUsR0FBRyxNQUFNSCxRQUFRSSxJQUFJO0lBRW5ELElBQUlOLFdBQVc7UUFDYk8sUUFBUUMsR0FBRyxDQUFDO1FBQ1osT0FBT1YscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUFFRyxTQUFTO1lBQU9KLFNBQVM7UUFBb0IsR0FBRztZQUFFSyxRQUFRO1FBQUk7SUFDM0Y7SUFFQVYsWUFBWSxNQUFNLDhDQUE4QztJQUNoRU8sUUFBUUMsR0FBRyxDQUFDLHVCQUF1QjtRQUFFTDtRQUFNQztRQUFPQztJQUFRLElBQUksZ0JBQWdCO0lBRTlFLE1BQU1NLGNBQWNaLHVEQUEwQixDQUFDO1FBQzdDYyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxNQUFNO1lBQ0pDLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtZQUM1QkMsTUFBTUgsUUFBUUMsR0FBRyxDQUFDRyxVQUFVO1FBQzlCO0lBQ0Y7SUFFQSxNQUFNQyxjQUFjO1FBQ2xCQyxNQUFNTixRQUFRQyxHQUFHLENBQUNDLFVBQVU7UUFDNUJLLElBQUlQLFFBQVFDLEdBQUcsQ0FBQ08sZUFBZTtRQUMvQkMsU0FBUztRQUNUQyxNQUFNLENBQUMsTUFBTSxFQUFFekIsS0FBSyxTQUFTLEVBQUVDLE1BQU0sV0FBVyxFQUFFQyxTQUFTO0lBQzdEO0lBRUEsSUFBSTtRQUNGRSxRQUFRQyxHQUFHLENBQUMsK0JBQStCZSxjQUFjLGdCQUFnQjtRQUN6RSxNQUFNWixZQUFZa0IsUUFBUSxDQUFDTjtRQUMzQmhCLFFBQVFDLEdBQUcsQ0FBQyw2QkFBNkIsZ0JBQWdCO1FBQ3pEUixZQUFZLE9BQU8sK0JBQStCO1FBQ2xELE9BQU9GLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFBRUcsU0FBUztRQUFLO0lBQzNDLEVBQUUsT0FBT3FCLE9BQU87UUFDZDlCLFlBQVksT0FBTywwQkFBMEI7UUFDN0NPLFFBQVF1QixLQUFLLENBQUMsd0JBQXdCQSxRQUFRLGdCQUFnQjtRQUM5RCxPQUFPaEMscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUFFRyxTQUFTO1FBQU0sR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDN0Q7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL2NoYXlkZW4yMS90b2lsZXR0ZWFjaGVyLm9yZy9hcHAvYXBpL3NlbmQtZW1haWwvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgbm9kZW1haWxlciBmcm9tIFwibm9kZW1haWxlclwiO1xuXG5sZXQgaXNTZW5kaW5nID0gZmFsc2U7IC8vIEFkZCBhIGZsYWcgdG8gcHJldmVudCBkdXBsaWNhdGUgc2VuZHNcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCB7IG5hbWUsIGVtYWlsLCBtZXNzYWdlIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcblxuICBpZiAoaXNTZW5kaW5nKSB7XG4gICAgY29uc29sZS5sb2coXCJEdXBsaWNhdGUgcmVxdWVzdCBkZXRlY3RlZC4gRW1haWwgaXMgYWxyZWFkeSBiZWluZyBzZW50LlwiKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJEdXBsaWNhdGUgcmVxdWVzdFwiIH0sIHsgc3RhdHVzOiA0MjkgfSk7XG4gIH1cblxuICBpc1NlbmRpbmcgPSB0cnVlOyAvLyBTZXQgdGhlIGZsYWcgdG8gcHJldmVudCBmdXJ0aGVyIHN1Ym1pc3Npb25zXG4gIGNvbnNvbGUubG9nKFwiUHJvY2Vzc2luZyByZXF1ZXN0OlwiLCB7IG5hbWUsIGVtYWlsLCBtZXNzYWdlIH0pOyAvLyBEZWJ1Z2dpbmcgbG9nXG5cbiAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgaG9zdDogXCJzbXRwLm1haWwueWFob28uY29tXCIsIC8vIFlhaG9vJ3MgU01UUCBzZXJ2ZXJcbiAgICBwb3J0OiA0NjUsIC8vIFNlY3VyZSBwb3J0IGZvciBZYWhvb1xuICAgIHNlY3VyZTogdHJ1ZSwgLy8gVXNlIFNTTFxuICAgIGF1dGg6IHtcbiAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1VTRVIsIC8vIFlvdXIgWWFob28gZW1haWwgYWRkcmVzc1xuICAgICAgcGFzczogcHJvY2Vzcy5lbnYuRU1BSUxfUEFTUywgLy8gWW91ciBZYWhvbyBhcHAtc3BlY2lmaWMgcGFzc3dvcmRcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBtYWlsT3B0aW9ucyA9IHtcbiAgICBmcm9tOiBwcm9jZXNzLmVudi5FTUFJTF9VU0VSLCAvLyBZb3VyIFlhaG9vIGVtYWlsIGFkZHJlc3NcbiAgICB0bzogcHJvY2Vzcy5lbnYuUkVDSVBJRU5UX0VNQUlMLCAvLyBZb3VyIGVtYWlsIGFkZHJlc3MgdG8gcmVjZWl2ZSB0aGUgcmVxdWVzdFxuICAgIHN1YmplY3Q6IFwiTmV3IFRvaWxldCBUZWFjaGVyIFJlcXVlc3RcIixcbiAgICB0ZXh0OiBgTmFtZTogJHtuYW1lfVxcbkVtYWlsOiAke2VtYWlsfVxcbk1lc3NhZ2U6ICR7bWVzc2FnZX1gLFxuICB9O1xuXG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coXCJTZW5kaW5nIGVtYWlsIHdpdGggb3B0aW9uczpcIiwgbWFpbE9wdGlvbnMpOyAvLyBEZWJ1Z2dpbmcgbG9nXG4gICAgYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbE9wdGlvbnMpO1xuICAgIGNvbnNvbGUubG9nKFwiRW1haWwgc2VudCBzdWNjZXNzZnVsbHkhXCIpOyAvLyBEZWJ1Z2dpbmcgbG9nXG4gICAgaXNTZW5kaW5nID0gZmFsc2U7IC8vIFJlc2V0IHRoZSBmbGFnIGFmdGVyIHNlbmRpbmdcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlzU2VuZGluZyA9IGZhbHNlOyAvLyBSZXNldCB0aGUgZmxhZyBvbiBlcnJvclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzZW5kaW5nIGVtYWlsOlwiLCBlcnJvcik7IC8vIERlYnVnZ2luZyBsb2dcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm5vZGVtYWlsZXIiLCJpc1NlbmRpbmciLCJQT1NUIiwicmVxdWVzdCIsIm5hbWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInN1Y2Nlc3MiLCJzdGF0dXMiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsImhvc3QiLCJwb3J0Iiwic2VjdXJlIiwiYXV0aCIsInVzZXIiLCJwcm9jZXNzIiwiZW52IiwiRU1BSUxfVVNFUiIsInBhc3MiLCJFTUFJTF9QQVNTIiwibWFpbE9wdGlvbnMiLCJmcm9tIiwidG8iLCJSRUNJUElFTlRfRU1BSUwiLCJzdWJqZWN0IiwidGV4dCIsInNlbmRNYWlsIiwiZXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/send-email/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.ts&appDir=%2FUsers%2Fchayden21%2Ftoiletteacher.org%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fchayden21%2Ftoiletteacher.org&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.ts&appDir=%2FUsers%2Fchayden21%2Ftoiletteacher.org%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fchayden21%2Ftoiletteacher.org&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_chayden21_toiletteacher_org_app_api_send_email_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/send-email/route.ts */ \"(rsc)/./app/api/send-email/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/send-email/route\",\n        pathname: \"/api/send-email\",\n        filename: \"route\",\n        bundlePath: \"app/api/send-email/route\"\n    },\n    resolvedPagePath: \"/Users/chayden21/toiletteacher.org/app/api/send-email/route.ts\",\n    nextConfigOutput,\n    userland: _Users_chayden21_toiletteacher_org_app_api_send_email_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzZW5kLWVtYWlsJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzZW5kLWVtYWlsJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc2VuZC1lbWFpbCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmNoYXlkZW4yMSUyRnRvaWxldHRlYWNoZXIub3JnJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmNoYXlkZW4yMSUyRnRvaWxldHRlYWNoZXIub3JnJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNjO0FBQzNGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvY2hheWRlbjIxL3RvaWxldHRlYWNoZXIub3JnL2FwcC9hcGkvc2VuZC1lbWFpbC9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc2VuZC1lbWFpbC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3NlbmQtZW1haWxcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3NlbmQtZW1haWwvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvY2hheWRlbjIxL3RvaWxldHRlYWNoZXIub3JnL2FwcC9hcGkvc2VuZC1lbWFpbC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.ts&appDir=%2FUsers%2Fchayden21%2Ftoiletteacher.org%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fchayden21%2Ftoiletteacher.org&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.ts&appDir=%2FUsers%2Fchayden21%2Ftoiletteacher.org%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fchayden21%2Ftoiletteacher.org&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();