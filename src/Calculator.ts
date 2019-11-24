import { mat4, vec4 } from "gl-matrix";

export default class Calculator
{
    public static MulMat4AndMat4(m1: mat4, m2: mat4): mat4
    {
        return mat4.multiply(mat4.create(), m1, m2);
    }

    public static MulMat4AndVec4(m: mat4, v: vec4): vec4
    {
        return vec4.transformMat4(vec4.create(), v, m);
    }
}
