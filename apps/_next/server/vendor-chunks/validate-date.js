"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/validate-date";
exports.ids = ["vendor-chunks/validate-date"];
exports.modules = {

/***/ "(ssr)/./node_modules/validate-date/validate-date.js":
/*!*****************************************************!*\
  !*** ./node_modules/validate-date/validate-date.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\nfunction validateDate(dateValue, responseType = \"string\", dateFormat = null) {\n    // Validate input parameters\n    if (typeof dateValue !== \"string\") {\n        throw new Error(\"dateValue must be a string.\");\n    }\n    if (typeof responseType !== \"string\" || ![\n        \"string\",\n        \"boolean\"\n    ].includes(responseType)) {\n        throw new Error(\"responseType must be 'string' or 'boolean'.\");\n    }\n    if (dateFormat !== null && typeof dateFormat !== \"string\") {\n        throw new Error(\"dateFormat must be a string.\");\n    }\n    // Throw an exception for empty dateValue\n    if (dateValue.trim() === \"\") {\n        throw new Error(\"dateValue cannot be empty.\");\n    }\n    let responses = responseSetter(responseType);\n    return dateValidator(dateValue, responses, dateFormat);\n}\n// TODO- This function returns different response types(String or boolean) which might be an anti pattern. Investigate and make necessary changes\nfunction responseSetter(responseType) {\n    switch(responseType){\n        case \"string\":\n            return [\n                \"Invalid Format\",\n                \"Invalid Date\",\n                \"Valid Date\"\n            ];\n        case \"boolean\":\n            return [\n                false,\n                false,\n                true\n            ];\n        default:\n            return [\n                \"Invalid Format\",\n                \"Invalid Date\",\n                \"Valid Date\"\n            ];\n    }\n}\nfunction daysInMonth(year, month) {\n    const days = [\n        31,\n        28,\n        31,\n        30,\n        31,\n        30,\n        31,\n        31,\n        30,\n        31,\n        30,\n        31\n    ];\n    return month === 2 && year % 4 === 0 ? 29 : days[month - 1];\n}\nfunction getAllIndexes(arr, val) {\n    var indexes = [];\n    for(var i = 0; i < arr.length; i++){\n        if (arr[i] === val) indexes.push(i);\n    }\n    return indexes;\n}\nfunction isLeapYear(year) {\n    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) && year >= 1753;\n}\nfunction dateValidator(dateValue, responses, dateFormat) {\n    if (dateValue) {\n        if (!dateFormat) {\n            dateFormat = dateValue.includes(\"-\") ? \"yyyy-mm-dd\" : \"mm/dd/yyyy\";\n        }\n        const dateSeparator = /[^dmy]/i.exec(dateFormat)[0]; // Extract the separator character\n        if (!dateValue.includes(dateSeparator)) {\n            return responses[0];\n        }\n        if (dateFormat.length > 10 || dateFormat.length < 6) return responses[0];\n        const formatSplit = dateValue.includes(\"-\") ? dateFormat.split(\"-\") : dateFormat.split(\"/\");\n        let wrongFormat = formatSplit.map((formatPart)=>/([dmy])\\1/i.test(formatPart)).filter((rightFormat)=>!rightFormat);\n        if (wrongFormat.length > 0) return responses[0];\n        // let dateSeparator = dateValue.includes(\"-\") ? \"-\" : \"/\";\n        let formatRegex = new RegExp(`(\\\\d{${formatSplit[0].length}})(${dateSeparator})(\\\\d{${formatSplit[1].length}})(${dateSeparator})(\\\\d{${formatSplit[2].length}})`);\n        let dayPosition = getAllIndexes(formatSplit, formatSplit.filter((formatPart)=>/[d]/i.test(formatPart))[0]);\n        let monthPosition = getAllIndexes(formatSplit, formatSplit.filter((formatPart)=>/[m]/i.test(formatPart))[0]);\n        let yearPosition = getAllIndexes(formatSplit, formatSplit.filter((formatPart)=>/[y]/i.test(formatPart))[0]);\n        if (dayPosition.length !== 1 || monthPosition.length !== 1 || yearPosition.length !== 1) {\n            return responses[0];\n        }\n        if (formatRegex.test(dateValue)) {\n            const dateSplit = dateValue.split(dateSeparator);\n            const day = Number(dateSplit[dayPosition]);\n            const month = Number(dateSplit[monthPosition]);\n            const year = Number(dateSplit[yearPosition]);\n            // Check for invalid dates\n            if (month <= 0 || month > 12 || day <= 0 || day > daysInMonth(year, month) || year < 1753 || month === 2 && day === 29 && !isLeapYear(year)) {\n                return responses[1];\n            }\n        } else {\n            return responses[0];\n        }\n    }\n    return responses[2];\n}\nmodule.exports = validateDate;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmFsaWRhdGUtZGF0ZS92YWxpZGF0ZS1kYXRlLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxTQUFTQSxhQUFhQyxTQUFTLEVBQUVDLGVBQWUsUUFBUSxFQUFFQyxhQUFhLElBQUk7SUFDekUsNEJBQTRCO0lBQzVCLElBQUksT0FBT0YsY0FBYyxVQUFVO1FBQ2pDLE1BQU0sSUFBSUcsTUFBTTtJQUNsQjtJQUVBLElBQUksT0FBT0YsaUJBQWlCLFlBQVksQ0FBQztRQUFDO1FBQVU7S0FBVSxDQUFDRyxRQUFRLENBQUNILGVBQWU7UUFDckYsTUFBTSxJQUFJRSxNQUFNO0lBQ2xCO0lBRUEsSUFBSUQsZUFBZSxRQUFRLE9BQU9BLGVBQWUsVUFBVTtRQUN6RCxNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFFQSx5Q0FBeUM7SUFDekMsSUFBSUgsVUFBVUssSUFBSSxPQUFPLElBQUk7UUFDM0IsTUFBTSxJQUFJRixNQUFNO0lBQ2xCO0lBRUEsSUFBSUcsWUFBWUMsZUFBZU47SUFFL0IsT0FBT08sY0FBY1IsV0FBV00sV0FBV0o7QUFDN0M7QUFFQSxpSkFBaUo7QUFDakosU0FBU0ssZUFBZU4sWUFBWTtJQUNsQyxPQUFRQTtRQUNOLEtBQUs7WUFDSCxPQUFPO2dCQUFDO2dCQUFrQjtnQkFBZ0I7YUFBYTtRQUN6RCxLQUFLO1lBQ0gsT0FBTztnQkFBQztnQkFBTztnQkFBTzthQUFLO1FBRTdCO1lBQ0UsT0FBTztnQkFBQztnQkFBa0I7Z0JBQWdCO2FBQWE7SUFDM0Q7QUFDRjtBQUVBLFNBQVNRLFlBQVlDLElBQUksRUFBRUMsS0FBSztJQUM5QixNQUFNQyxPQUFPO1FBQUM7UUFBSTtRQUFJO1FBQUk7UUFBSTtRQUFJO1FBQUk7UUFBSTtRQUFJO1FBQUk7UUFBSTtRQUFJO0tBQUc7SUFFN0QsT0FBTyxVQUFXLEtBQUtGLE9BQU8sTUFBTSxJQUFLLEtBQUtFLElBQUksQ0FBQ0QsUUFBUSxFQUFFO0FBQy9EO0FBRUEsU0FBU0UsY0FBY0MsR0FBRyxF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LENBQUMsRUFBRTtZQUNyQjtRQUNGLE9BQU87WUFDTCxPQUFPQSxTQUFTLENBQUMsRUFBRTtRQUNyQjtJQUNGO0lBRUEsT0FBT0EsU0FBUyxDQUFDLEVBQUU7QUFDckI7QUFFQWlDLE9BQU9DLE9BQU8sR0FBR3pDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbGlkYXRlLWRhdGUvdmFsaWRhdGUtZGF0ZS5qcz85NmNmIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHZhbGlkYXRlRGF0ZShkYXRlVmFsdWUsIHJlc3BvbnNlVHlwZSA9IFwic3RyaW5nXCIsIGRhdGVGb3JtYXQgPSBudWxsKSB7XG4gIC8vIFZhbGlkYXRlIGlucHV0IHBhcmFtZXRlcnNcbiAgaWYgKHR5cGVvZiBkYXRlVmFsdWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJkYXRlVmFsdWUgbXVzdCBiZSBhIHN0cmluZy5cIik7XG4gIH1cblxuICBpZiAodHlwZW9mIHJlc3BvbnNlVHlwZSAhPT0gXCJzdHJpbmdcIiB8fCAhW1wic3RyaW5nXCIsIFwiYm9vbGVhblwiXS5pbmNsdWRlcyhyZXNwb25zZVR5cGUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwicmVzcG9uc2VUeXBlIG11c3QgYmUgJ3N0cmluZycgb3IgJ2Jvb2xlYW4nLlwiKTtcbiAgfVxuXG4gIGlmIChkYXRlRm9ybWF0ICE9PSBudWxsICYmIHR5cGVvZiBkYXRlRm9ybWF0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZGF0ZUZvcm1hdCBtdXN0IGJlIGEgc3RyaW5nLlwiKTtcbiAgfVxuXG4gIC8vIFRocm93IGFuIGV4Y2VwdGlvbiBmb3IgZW1wdHkgZGF0ZVZhbHVlXG4gIGlmIChkYXRlVmFsdWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZGF0ZVZhbHVlIGNhbm5vdCBiZSBlbXB0eS5cIik7XG4gIH1cblxuICBsZXQgcmVzcG9uc2VzID0gcmVzcG9uc2VTZXR0ZXIocmVzcG9uc2VUeXBlKTtcblxuICByZXR1cm4gZGF0ZVZhbGlkYXRvcihkYXRlVmFsdWUsIHJlc3BvbnNlcywgZGF0ZUZvcm1hdCk7XG59XG5cbi8vIFRPRE8tIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBkaWZmZXJlbnQgcmVzcG9uc2UgdHlwZXMoU3RyaW5nIG9yIGJvb2xlYW4pIHdoaWNoIG1pZ2h0IGJlIGFuIGFudGkgcGF0dGVybi4gSW52ZXN0aWdhdGUgYW5kIG1ha2UgbmVjZXNzYXJ5IGNoYW5nZXNcbmZ1bmN0aW9uIHJlc3BvbnNlU2V0dGVyKHJlc3BvbnNlVHlwZSkge1xuICBzd2l0Y2ggKHJlc3BvbnNlVHlwZSkge1xuICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgIHJldHVybiBbXCJJbnZhbGlkIEZvcm1hdFwiLCBcIkludmFsaWQgRGF0ZVwiLCBcIlZhbGlkIERhdGVcIl07XG4gICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgIHJldHVybiBbZmFsc2UsIGZhbHNlLCB0cnVlXTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gW1wiSW52YWxpZCBGb3JtYXRcIiwgXCJJbnZhbGlkIERhdGVcIiwgXCJWYWxpZCBEYXRlXCJdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSB7XG4gIGNvbnN0IGRheXMgPSBbMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5cbiAgcmV0dXJuIChtb250aCA9PT0gMiAmJiB5ZWFyICUgNCA9PT0gMCkgPyAyOSA6IGRheXNbbW9udGggLSAxXTtcbn1cblxuZnVuY3Rpb24gZ2V0QWxsSW5kZXhlcyhhcnIsIHZhbCkge1xuICB2YXIgaW5kZXhlcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJbaV0gPT09IHZhbCkgaW5kZXhlcy5wdXNoKGkpO1xuICB9XG5cbiAgcmV0dXJuIGluZGV4ZXM7XG59XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXIoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQgPT09IDAgJiYgKHllYXIgJSAxMDAgIT09IDAgfHwgeWVhciAlIDQwMCA9PT0gMCkgJiYgeWVhciA+PSAxNzUzO1xufVxuXG5mdW5jdGlvbiBkYXRlVmFsaWRhdG9yKGRhdGVWYWx1ZSwgcmVzcG9uc2VzLCBkYXRlRm9ybWF0KSB7XG4gIGlmIChkYXRlVmFsdWUpIHtcbiAgICBpZiAoIWRhdGVGb3JtYXQpIHtcbiAgICAgIGRhdGVGb3JtYXQgPSBkYXRlVmFsdWUuaW5jbHVkZXMoXCItXCIpID8gXCJ5eXl5LW1tLWRkXCIgOiBcIm1tL2RkL3l5eXlcIjtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRlU2VwYXJhdG9yID0gL1teZG15XS9pLmV4ZWMoZGF0ZUZvcm1hdClbMF07IC8vIEV4dHJhY3QgdGhlIHNlcGFyYXRvciBjaGFyYWN0ZXJcblxuICAgIGlmICghZGF0ZVZhbHVlLmluY2x1ZGVzKGRhdGVTZXBhcmF0b3IpKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2VzWzBdO1xuICAgIH1cblxuICAgIGlmIChkYXRlRm9ybWF0Lmxlbmd0aCA+IDEwIHx8IGRhdGVGb3JtYXQubGVuZ3RoIDwgNikgcmV0dXJuIHJlc3BvbnNlc1swXTtcblxuICAgIGNvbnN0IGZvcm1hdFNwbGl0ID0gZGF0ZVZhbHVlLmluY2x1ZGVzKFwiLVwiKSA/IGRhdGVGb3JtYXQuc3BsaXQoXCItXCIpIDogZGF0ZUZvcm1hdC5zcGxpdChcIi9cIik7XG4gICAgbGV0IHdyb25nRm9ybWF0ID0gZm9ybWF0U3BsaXRcbiAgICAgIC5tYXAoKGZvcm1hdFBhcnQpID0+IC8oW2RteV0pXFwxL2kudGVzdChmb3JtYXRQYXJ0KSlcbiAgICAgIC5maWx0ZXIoKHJpZ2h0Rm9ybWF0KSA9PiAhcmlnaHRGb3JtYXQpO1xuXG4gICAgaWYgKHdyb25nRm9ybWF0Lmxlbmd0aCA+IDApIHJldHVybiByZXNwb25zZXNbMF07XG5cbiAgICAvLyBsZXQgZGF0ZVNlcGFyYXRvciA9IGRhdGVWYWx1ZS5pbmNsdWRlcyhcIi1cIikgPyBcIi1cIiA6IFwiL1wiO1xuXG4gICAgbGV0IGZvcm1hdFJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgIGAoXFxcXGR7JHtmb3JtYXRTcGxpdFswXS5sZW5ndGh9fSkoJHtkYXRlU2VwYXJhdG9yfSkoXFxcXGR7JHtmb3JtYXRTcGxpdFsxXS5sZW5ndGh9fSkoJHtkYXRlU2VwYXJhdG9yfSkoXFxcXGR7JHtmb3JtYXRTcGxpdFsyXS5sZW5ndGh9fSlgXG4gICAgKTtcblxuICAgIGxldCBkYXlQb3NpdGlvbiA9IGdldEFsbEluZGV4ZXMoXG4gICAgICBmb3JtYXRTcGxpdCxcbiAgICAgIGZvcm1hdFNwbGl0LmZpbHRlcigoZm9ybWF0UGFydCkgPT4gL1tkXS9pLnRlc3QoZm9ybWF0UGFydCkpWzBdXG4gICAgKTtcbiAgICBsZXQgbW9udGhQb3NpdGlvbiA9IGdldEFsbEluZGV4ZXMoXG4gICAgICBmb3JtYXRTcGxpdCxcbiAgICAgIGZvcm1hdFNwbGl0LmZpbHRlcigoZm9ybWF0UGFydCkgPT4gL1ttXS9pLnRlc3QoZm9ybWF0UGFydCkpWzBdXG4gICAgKTtcbiAgICBsZXQgeWVhclBvc2l0aW9uID0gZ2V0QWxsSW5kZXhlcyhcbiAgICAgIGZvcm1hdFNwbGl0LFxuICAgICAgZm9ybWF0U3BsaXQuZmlsdGVyKChmb3JtYXRQYXJ0KSA9PiAvW3ldL2kudGVzdChmb3JtYXRQYXJ0KSlbMF1cbiAgICApO1xuXG4gICAgaWYgKGRheVBvc2l0aW9uLmxlbmd0aCAhPT0gMSB8fCBtb250aFBvc2l0aW9uLmxlbmd0aCAhPT0gMSB8fCB5ZWFyUG9zaXRpb24ubGVuZ3RoICE9PSAxKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2VzWzBdO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXRSZWdleC50ZXN0KGRhdGVWYWx1ZSkpIHtcbiAgICAgIGNvbnN0IGRhdGVTcGxpdCA9IGRhdGVWYWx1ZS5zcGxpdChkYXRlU2VwYXJhdG9yKTtcbiAgICAgIGNvbnN0IGRheSA9IE51bWJlcihkYXRlU3BsaXRbZGF5UG9zaXRpb25dKTtcbiAgICAgIGNvbnN0IG1vbnRoID0gTnVtYmVyKGRhdGVTcGxpdFttb250aFBvc2l0aW9uXSk7XG4gICAgICBjb25zdCB5ZWFyID0gTnVtYmVyKGRhdGVTcGxpdFt5ZWFyUG9zaXRpb25dKTtcblxuICAgICAgLy8gQ2hlY2sgZm9yIGludmFsaWQgZGF0ZXNcbiAgICAgIGlmIChcbiAgICAgICAgbW9udGggPD0gMCB8fFxuICAgICAgICBtb250aCA+IDEyIHx8XG4gICAgICAgIGRheSA8PSAwIHx8XG4gICAgICAgIGRheSA+IGRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSB8fFxuICAgICAgICB5ZWFyIDwgMTc1MyB8fFxuICAgICAgICAobW9udGggPT09IDIgJiYgZGF5ID09PSAyOSAmJiAhaXNMZWFwWWVhcih5ZWFyKSlcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VzWzFdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2VzWzBdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXNwb25zZXNbMl07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVEYXRlO1xuIl0sIm5hbWVzIjpbInZhbGlkYXRlRGF0ZSIsImRhdGVWYWx1ZSIsInJlc3BvbnNlVHlwZSIsImRhdGVGb3JtYXQiLCJFcnJvciIsImluY2x1ZGVzIiwidHJpbSIsInJlc3BvbnNlcyIsInJlc3BvbnNlU2V0dGVyIiwiZGF0ZVZhbGlkYXRvciIsImRheXNJbk1vbnRoIiwieWVhciIsIm1vbnRoIiwiZGF5cyIsImdldEFsbEluZGV4ZXMiLCJhcnIiLCJ2YWwiLCJpbmRleGVzIiwiaSIsImxlbmd0aCIsInB1c2giLCJpc0xlYXBZZWFyIiwiZGF0ZVNlcGFyYXRvciIsImV4ZWMiLCJmb3JtYXRTcGxpdCIsInNwbGl0Iiwid3JvbmdGb3JtYXQiLCJtYXAiLCJmb3JtYXRQYXJ0IiwidGVzdCIsImZpbHRlciIsInJpZ2h0Rm9ybWF0IiwiZm9ybWF0UmVnZXgiLCJSZWdFeHAiLCJkYXlQb3NpdGlvbiIsIm1vbnRoUG9zaXRpb24iLCJ5ZWFyUG9zaXRpb24iLCJkYXRlU3BsaXQiLCJkYXkiLCJOdW1iZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/validate-date/validate-date.js\n");

/***/ })

};
;