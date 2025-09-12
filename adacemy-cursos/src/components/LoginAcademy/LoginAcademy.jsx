import "./Login.css"
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Definimos el esquema de validación con Yup
const schema = yup.object({
  email: yup
    .string()
    .email("Please enter a correct format")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Please enter at least 8 characters")
    .matches(/[A-Z]/)
    .matches(/[a-z]/)
    .matches(/[0-9]/),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required")
});

const LoginAcademy = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  // Función que maneja el submit
  const onSubmitForm = (data) => {
    console.log("Datos ingresados:", data);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="music">
          <img src="https://academy.kodigo.org/pluginfile.php/1/theme_mb2nl/logo/1757611432/logo.png" alt="" />
          <h2>Iniciar sesión</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="input-group">
            <input type="email" placeholder="Email" {...register("email")} required/>
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" {...register("password")} required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Confirm password" {...register("confirm_password")} required />
          </div>
          <button type="submit" className="btn-login"> Iniciar </button>
        </form>
        <div className="login-footer">
            <p>¿No tienes una cuenta? <a href="#">Regístrate</a></p>
        </div>
      </div>
      {/* Agregar un imagen a la par del formulario en forma horizontal */}
      <div className="login-image">
        <img src="https://academy.kodigo.org/pluginfile.php/1/theme_mb2nl/logo/1757611432/logo.png" alt="Logo" />
      </div>
    </div>
  );
};

export default LoginAcademy