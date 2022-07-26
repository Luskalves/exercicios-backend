"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logs = void 0;
const exercises = __importStar(require("./myExercises"));
function logs() {
    console.log('Area do losángulo');
    console.log('primeiro:', exercises.losangleArea(0.32, 0.18).toFixed(2));
    console.log('segundo:', exercises.losangleArea(2, 0.5).toFixed(2));
    console.log('terceiro:', exercises.losangleArea(0.75, 0.25).toFixed(2));
    console.log('Area do trapézio');
    console.log('primeiro:', exercises.trapezeArea(1, 0.7, 0.5).toFixed(2));
    console.log('segundo:', exercises.trapezeArea(0.75, 0.5, 0.35).toFixed(2));
    console.log('terceiro:', exercises.trapezeArea(1.5, 1.2, 0.8).toFixed(2));
    console.log('Area do circulo');
    console.log('primeiro:', exercises.circleArea(0.25).toFixed(2));
    console.log('segundo:', exercises.circleArea(1).toFixed(2));
    console.log('terceiro:', exercises.circleArea(0.125).toFixed(2));
}
exports.logs = logs;
