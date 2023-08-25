import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { modelSignin } from "../model"
import { signin } from "../api/user"
import { useLocalStorage } from "../hooks"
const Signin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<modelSignin>({
        resolver: yupResolver(modelSignin)
    })
    const [user, setUser] = useLocalStorage("user", null);
    const onSubmit = async (data: modelSignin) => {
        const { data: { user } } = await signin(data)
        setUser({ user })
        alert("Dang nhap thanh cong")
    }
    return <>
        <form action="">
            <p>Email</p>
            <input type="text" {...register("email")} />
            <p className='text-red-600 text-[10px]'>
                {errors.email && errors.email.message}
            </p>
            <p>Password</p>
            <input type="password" {...register("password")} />
            <p className='text-red-600 text-[10px]'>
                {errors.password && errors.password.message}
            </p>
            <button onClick={handleSubmit(onSubmit)}>Dang nhap</button>
        </form></>
}

export default Signin