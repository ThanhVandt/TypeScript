import link from ".";
import { modelSignin, modelSignup } from "../model";
export const signup = (data: modelSignup) => {
    return link.post("signup", data)
}
export const signin = (data: modelSignin) => {
    return link.post("signin", data)
}