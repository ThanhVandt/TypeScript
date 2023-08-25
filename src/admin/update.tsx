import { useForm } from 'react-hook-form'
import { putProduct } from '../model'
import { yupResolver } from "@hookform/resolvers/yup"
import { getProduct, putProducts } from '../api/products'
import { useParams } from "react-router-dom"
const UpdateProduct = () => {
    const { id } = useParams()
    const { register, handleSubmit, formState: { errors } } = useForm<putProduct>({
        resolver: yupResolver(putProduct),
        defaultValues: async () => {
            if (id) {
                return await fetchProductById(id)
            }
        }
    })
    const onSubmit = async (data: putProduct) => {
        const updateProduct = await putProducts(String(id), data);
    }
    const fetchProductById = async (id: string) => {
        const { data } = await getProduct(id)
        return data
    }
    return <>
        <form action="">
            <p>Name</p>
            <input type="text" {...register("name")} />
            <p className='text-red-600 text-[10px]'>
                {errors.name && errors.name.message}
            </p>
            <p>Price</p>
            <input type="text" {...register("price")} />
            <p className='text-red-600 text-[10px]'>
                {errors.price && errors.price.message}
            </p>
            <p>Original_price</p>
            <input type="text" {...register("original_price")} />
            <p className='text-red-600 text-[10px]'>
                {errors.original_price && errors.original_price.message}
            </p>
            <button onClick={handleSubmit(onSubmit)}>Update</button>
        </form>
    </>
}

export default UpdateProduct