import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import DefaultButton from "../../../components/DefaultButton";
import {
  getAuthDataFromLocalStorage,
  requestBackendLogin,
  saveAuthDataToLocalStorage,
} from "../../../util/requests";
import "./styles.css";

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>();

  //redirecionar após o login para /movies
  const history = useHistory();
  const [hasError, setHasError] = useState(false);
  
  const onLoginClick = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthDataToLocalStorage(response.data);
        const token = getAuthDataFromLocalStorage().access_token;
        console.log("Token gerado: " + token);
        console.log("login feito", response);
        history.push("/movies");
        setHasError(false);
      })
      .catch((error) => {
        console.log("Erro no login", error);
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
              {...register("username")}
              type="text"
              className="input-field form-text"
              name="username"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <input
              {...register("password")}
              type="password"
              className="input-field form-text"
              name="password"
              placeholder="Password"
            />
          </div>
          <DefaultButton text={"FAZER LOGIN"} />
        </form>
      </div>
    </>
  );
};

export default Login;
