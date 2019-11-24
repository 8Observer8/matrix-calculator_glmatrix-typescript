define(["require", "exports", "./Calculator", "gl-matrix"], function (require, exports, Calculator_1, gl_matrix_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.Main = function () {
            var m1 = gl_matrix_1.mat4.fromTranslation(gl_matrix_1.mat4.create(), gl_matrix_1.vec3.fromValues(5, 0, 0));
            var m2 = gl_matrix_1.mat4.fromTranslation(gl_matrix_1.mat4.create(), gl_matrix_1.vec3.fromValues(2, 0, 0));
            var matMul = Calculator_1.default.MulMat4AndMat4(m1, m2);
            console.log("m1 = ", m1);
            console.log("m2 = ", m2);
            console.log("m1 * m2 = ", matMul);
            var v = gl_matrix_1.vec4.fromValues(1, 2, 3, 1);
            var vecMul = Calculator_1.default.MulMat4AndVec4(m1, v);
            console.log("v = ", v);
            console.log("mat4 * vec4 = ", vecMul);
        };
        return Program;
    }());
    Program.Main();
});
//# sourceMappingURL=Program.js.map