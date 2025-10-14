import {signIn, signUp} from "../../services/auth.js";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import BaseInput from "../BaseInput/BaseInput.jsx";
import {
    BaseButton, WrapperWindow, ModalWindowStart, WrapperWindowTitle, InputStart, FormGroupStart, StyledLink,
} from "./AuthForm.styled.js";

const AuthForm = ({isSignUp, setIsAuth}) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "", login: "", password: "",
    });

    const [errors, setErrors] = useState({
        name: "", login: "", password: "",
    });

    const [error, setError] = useState("");

    const validateForm = () => {
        const newErrors = {name: "", login: "", password: ""};
        let isValid = true;

        if (isSignUp && !formData.name.trim()) {
            newErrors.name = true;
            setError("Заполните все поля");
            isValid = false;
        }

        if (!formData.login.trim()) {
            newErrors.login = true;
            setError("Заполните все поля");
            isValid = false;
        }

        if (!formData.password.trim()) {
            newErrors.password = true;
            setError("Заполните все поля");
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData, [name]: value,
        });
        setErrors({...errors, [name]: false});
        setError("");
    };

    // функция отправки формы
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        try {
            const data = !isSignUp ? await signIn({
                login: formData.login, password: formData.password
            }) : await signUp(formData);

            if (data) {
                setIsAuth(true);
                localStorage.setItem("userInfo", JSON.stringify(data));
                navigate("/");
            }
        } catch (err) {
            setError(err.message === "Неверный логин или пароль" ? "Неверный логин или пароль. Пожалуйста, попробуйте снова." : err.message);
        }
    };

    return (<div className="bg">
        <ModalWindowStart>
            <WrapperWindow>
                <WrapperWindowTitle>
                    {isSignUp ? "Регистрация" : "Вход"}
                </WrapperWindowTitle>
                <form className="form" id="form" onSubmit={handleSubmit}>
                    <InputStart>
                        {isSignUp && (<BaseInput
                            error={errors.name}
                            type="text"
                            name="name"
                            id="formname"
                            placeholder="Имя"
                            value={formData.name}
                            onChange={handleChange}
                        />)}
                        <BaseInput
                            error={errors.login}
                            type="text"
                            name="login"
                            id="formlogin"
                            placeholder="Эл. почта"
                            value={formData.login}
                            onChange={handleChange}
                        />
                        <BaseInput
                            error={errors.password}
                            type="password"
                            name="password"
                            id="formpassword"
                            placeholder="Пароль"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </InputStart>
                    <p style={{color: "red"}}>{error}</p>
                    <BaseButton type="secondary">
                        {isSignUp ? "Зарегистрироваться" : "Войти"}
                    </BaseButton>

                    {!isSignUp && (<FormGroupStart>
                        <p>Нужно зарегистрироваться?</p>
                        <StyledLink to="/sign-up">Регистрируйтесь здесь</StyledLink>
                    </FormGroupStart>)}
                    {isSignUp && (<FormGroupStart>
                        <p>
                            Уже есть аккаунт?{" "}
                            <StyledLink to="/sign-in">Войдите здесь</StyledLink>
                        </p>
                    </FormGroupStart>)}
                </form>
            </WrapperWindow>
        </ModalWindowStart>
    </div>);
};
export default AuthForm;