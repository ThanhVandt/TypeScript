import { useEffect, useState } from "react"
import { modelProducts } from "../model"
import { deleteProduct, getAll } from "../api/products";
import { Link } from "react-router-dom"
const ListProduct = () => {
    const [products, setProducts] = useState<modelProducts[]>([]);
    useEffect(() => {
        const listProducts = async () => {
            const { data } = await getAll();
            setProducts(data);
        }
        listProducts();
    }, [])
    const handleDelete = async (id: String) => {
        const confirmed = window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
        if(confirmed) {
            await deleteProduct(id)
            getAll()
        } 
    }
    return <>
        <Link to={"add"}>Them</Link>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Original price</th>
                    <th>Action</th>
                </tr>
            </thead>
            {products.map((products, index) => (
                <tbody>
                    <tr>
                        <td>{index}</td>
                        <td><Link to={`update/${products.id}`}>{products.name}</Link></td>
                        <td>{products.price}</td>
                        <td>{products.original_price}</td>
                        <td><button onClick={() => handleDelete(products.id)}>Xoa</button></td>
                    </tr>
                </tbody>
            ))}
        </table>
    </>
}
export default ListProduct