import { useForm } from 'react-hook-form'
import { postProduct } from '../model'
import { yupResolver } from "@hookform/resolvers/yup"
import { postProducts } from '../api/products'

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<postProduct>({
        resolver: yupResolver(postProduct)
    })
    const onSubmit = async (data: postProduct) => {
        const addProduct = await postProducts(data);
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
            <button onClick={handleSubmit(onSubmit)}>Tao</button>
        </form>
    </>
}
export default AddProduct