import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { modelSignup } from "../model"
import { signup } from "../api/user"
import { useNavigate } from "react-router-dom"
const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<modelSignup>({
        resolver: yupResolver(modelSignup)
    })
    const navigate = useNavigate()
    const onSubmit = async (data: modelSignup) => {
        const SignUp = await signup(data)
        alert("Dang ki thanh cong")
        navigate("/signin")
    }
    return <form action="">
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
        <button onClick={handleSubmit(onSubmit)}>Dang ki</button>
    </form>
}

export default Signup