import Calculator from "./Calculator";
import { mat4, vec3, vec4 } from "gl-matrix";

class Program
{
    public static Main(): void
    {
        let m1 = mat4.fromTranslation(mat4.create(), vec3.fromValues(5, 0, 0));
        let m2 = mat4.fromTranslation(mat4.create(), vec3.fromValues(2, 0, 0));
        let matMul = Calculator.MulMat4AndMat4(m1, m2);
        console.log("m1 = ", m1);
        console.log("m2 = ", m2);
        console.log("m1 * m2 = ", matMul);

        let v = vec4.fromValues(1, 2, 3, 1);
        let vecMul = Calculator.MulMat4AndVec4(m1, v);
        console.log("v = ", v);
        console.log("mat4 * vec4 = ", vecMul);
    }
}

Program.Main();
