import './SignUp.scss';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from 'react-router-dom';

function SignUp() {
    const schema = yup.object().shape({
        name: yup.string().max(30).required(),
        email: yup.string().email().required(),
        password: yup.string().min(8).max(16).required(),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null],).required("password must be same ")
    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => console.log(data);
  return (
    <form className="sign-up" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Enter your name' className="sign-up__name" {...register("name")} />
        <p className="sign-up__error">{errors.name?.message}</p>
        <input type="email" placeholder='Enter your email' className="sign-up__email" {...register("email")} />
        <p className="sign-up__error">{errors.email?.message}</p>
        <input type="password" placeholder='Enter your password' className="sign-up__password" {...register("password")} />
        <p className="sign-up__error">{errors.password?.message}</p>
        <input type="password" placeholder="Confirm your password" className="sign-up__confirm-password" {...register("confirmPassword")} />
        <p className="sign-up__error">{errors.confirmPassword?.message}</p>
        <button className="sign-up__btn" >Submit</button>
        <Link to="/SignIn" className="sign-up__link">Sign In</Link>
    </form>
  )
}

export default SignUp