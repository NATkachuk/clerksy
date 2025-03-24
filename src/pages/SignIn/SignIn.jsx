import '../SignUp/SignUp.scss';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


function SignIn() {
     const schema = yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().min(8).max(16).required(),
        });
        const { register, handleSubmit, formState: { errors } } = useForm({
            resolver: yupResolver(schema),
        });
        const onSubmit = (data) => console.log(data);
  return (
    <form className="sign-up" onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder='Enter your email' className="sign-up__email" {...register("email")} />
        <p className="sign-up__error">{errors.email?.message}</p>
        <input type="password" placeholder='Enter your password' className="sign-up__password" {...register("password")} />
        <p className="sign-up__error">{errors.password?.message}</p>
        <button className="sign-up__btn" >Submit</button>
    </form>
  )
}

export default SignIn