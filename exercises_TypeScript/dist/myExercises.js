"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circleArea = exports.trapezeArea = exports.losangleArea = void 0;
function losangleArea(D, d) {
    return (D * d) / 2;
}
exports.losangleArea = losangleArea;
function trapezeArea(B, b, h) {
    return ((B * b) * h) / 2;
}
exports.trapezeArea = trapezeArea;
function circleArea(raio) {
    return (raio ** 2) * 3.14;
}
exports.circleArea = circleArea;
