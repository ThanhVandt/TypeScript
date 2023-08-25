import link from ".";
import { postProduct, putProduct } from "../model";
export const getAll = () => {
    return link.get("/products");
}
export const postProducts = (data: postProduct) => {
    return link.post("/products", data);
}
export const putProducts = (id: String, data: putProduct) => {
    return link.put(`/products/${id}`, data);
}
export const deleteProduct = (id: String) => {
    return link.delete(`/products/${id}`);
}
export const getProduct = (id: String) => {
    return link.get(`/products/${id}`);
}