define(["require", "exports", "gl-matrix"], function (require, exports, gl_matrix_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Calculator = /** @class */ (function () {
        function Calculator() {
        }
        Calculator.MulMat4AndMat4 = function (m1, m2) {
            return gl_matrix_1.mat4.multiply(gl_matrix_1.mat4.create(), m1, m2);
        };
        Calculator.MulMat4AndVec4 = function (m, v) {
            return gl_matrix_1.vec4.transformMat4(gl_matrix_1.vec4.create(), v, m);
        };
        return Calculator;
    }());
    exports.default = Calculator;
});
//# sourceMappingURL=Calculator.js.map