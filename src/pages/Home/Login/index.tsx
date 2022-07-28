import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import DefaultButton from "../../../components/DefaultButton";
import {
  isAuthenticated,
  requestBackendLogin,
  saveAuthDataToLocalStorage,
} from "../../../util/requests";
import "./styles.css";

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  //redirecionar após o login para /movies
  const history = useHistory();
  const [hasError, setHasError] = useState(false);

  const onLoginClick = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthDataToLocalStorage(response.data);
        history.push("/movies");
        setHasError(false);
      })
      .catch((error) => {
        setHasError(true);
      });
  };

  return (
    <>
      <div className="base-card login-card">
        <h1>LOGIN</h1>
        {hasError && (
          <div className="alert alert-danger">
            Erro ao tentar efetuar o login.
          </div>
        )}
        <form onSubmit={handleSubmit(onLoginClick)}>
          <div className="mb-4">
            <input
              {...register("username", {
                required: "Campo obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "E-mail inválido",
                },
              })}
              type="text"
              className="input-field form-text"
              name="username"
              placeholder="Email"
            />
            <div className="invalid-feedback d-block">
              {errors.username?.message}
            </div>
          </div>
          <div className="mb-4">
            <input
              {...register("password", {
                required: "Campo obrigatório",
              })}
              type="password"
              className="input-field form-text"
              name="password"
              placeholder="Password"
            />
            <div className="invalid-feedback d-block">
              {errors.password?.message}
            </div>
          </div>
          <DefaultButton text={"FAZER LOGIN"} />
        </form>
      </div>
    </>
  );
};

export default Login;
