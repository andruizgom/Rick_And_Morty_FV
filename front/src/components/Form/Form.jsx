import { useState } from 'react';
import { validateInputs, validateSubmit } from "./validation";
import style from "./Form.module.css";
import Rick from "./images/Rick.png";

const Form = ({login}) => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserData({...userData, [name]: value})

        setErrors(validateInputs({ name, value }, errors));
    }

    const handleSubmit = (evento) => {
        evento.preventDefault();
        login(userData);
      };

    return(
        <form className={style.form} onSubmit={handleSubmit}>
            <img className={style.Rick} src={Rick}></img>
            <label className={style.email} htmlFor="email">e-mail</label>
            <input autoComplete='off' className={style.emailInput} type="text" name="email" value={userData.email} onChange={handleChange} placeholder='Enter your e-mail'/>
            {errors.email && <p className={style.error1}>{errors.email}</p>}

            <label className={style.password}html For="password">Password</label>
            <input autoComplete='off' className={style.passwordInput} type="text" name="password" value={userData.password} onChange={handleChange} placeholder='Enter your password'/>
            {errors.password && <p className={style.error2}>{errors.password}</p>}

            <button className={style.submit}type="submit" disabled={validateSubmit(errors)}>Submit</button>
        </form>
    )
}

export default Form;