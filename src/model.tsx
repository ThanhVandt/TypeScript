import * as Yup from "yup";
export interface modelProducts {
    id: string,
    name: string,
    price: number,
    original_price: number,
}
export const postProduct = Yup.object({
    name: Yup.string().required(),
    price: Yup.number().required(),
    original_price: Yup.number().required()
})
export type postProduct = Yup.InferType<typeof postProduct>
export const putProduct = Yup.object({
    name: Yup.string().required(),
    price: Yup.number().required(),
    original_price: Yup.number().required()
})
export type putProduct = Yup.InferType<typeof putProduct>
export const modelSignup = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
})
export type modelSignup = Yup.InferType<typeof modelSignup>
export const modelSignin = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
})
export type modelSignin = Yup.InferType<typeof modelSignin>