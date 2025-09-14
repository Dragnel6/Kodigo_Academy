import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router";
import useUser from "../../hooks/useUser.js";
import {Spinner} from "../LoaderSpinerComponent.jsx";
import { ToastContainer, toast } from "react-toastify";

export const RegisterFormComponent = () => {
    const {create} = useUser();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = async data => {
        setLoading(true);
        try {
            await create(data)
            toast.success('Usuario Registrado exitosamente', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
            reset();
            setTimeout(() => {
                navigate("/");
            }, 3500)
        }catch(error) {
            toast.error(error.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        }finally {
            setLoading(false);
        }
    }

    return (
        <>
            {
                loading
                ? <Spinner />
                : <div className="flex flex-col items-center w-auto h-auto py-4 px-8 rounded-md shadow-2xl">
                    <div className="w-80">
                        <img
                            src="https://academy.kodigo.org/pluginfile.php/1/theme_mb2nl/logo/1757611432/logo.png"
                            alt="logo kodigo academia"
                        />
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-between w-full h-64">
                        <legend className="text-2xl">Registro de usuario</legend>

                        <label className="flex flex-col items-start w-full h-auto">
                            Nombre de usuario
                            <input
                                type="text"
                                className="border-black border rounded-md py-2 px-4 w-full"
                                placeholder="Nombre de usuario"
                                {...register("username", {required: "El nombre de usuario es obligatorio"})}
                            />
                            {errors.username && <p className="text-sm text-red-500">{errors.username.message}</p>}
                        </label>


                        <label className="flex flex-col items-start w-full h-auto">
                            Contraseña
                            <input
                                type="password"
                                className="border-black border rounded-md py-2 px-4 w-full"
                                placeholder="Contraseña"
                                {...register("password", {
                                    required: "La contraseña es obligatoria",
                                    minLength: { value: 8, message: "La contraseña debe tener al menos 8 caracteres" }
                                })}
                            />
                            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
                        </label>

                        <input
                            type="submit"
                            className="bg-blue-500 text-white rounded-md py-2 px-4 w-full hover:bg-blue-600 cursor-pointer"
                            disabled={loading}
                        />
                    </form>
                </div>
            }
            <ToastContainer />
        </>
    );
}