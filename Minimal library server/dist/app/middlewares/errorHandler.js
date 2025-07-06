"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (error, req, res, next) => {
    let message = error.message || "Something went wrong";
    if (error.name === "ValidationError") {
        message = "Validation failed";
    }
    res.status(400).json({
        message,
        success: false,
        error: error.errors,
    });
};
exports.default = errorHandler;
