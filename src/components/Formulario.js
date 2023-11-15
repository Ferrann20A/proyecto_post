import { React, useState } from "react"
import { useForm } from 'react-hook-form';

export function Formulario() {
    const { handleSubmit, register, formState: {errors} } = useForm();
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [formData, setFormData] = useState(null);

    const onSubmit = (data) => {
        setFormData(data);
        setSubmitSuccess(true);
        console.log(data);
    };
    return (
        <div>
            {submitSuccess ? (
                <div>
                    <p>Datos enviados con éxito:</p>
                    <pre>{JSON.stringify(formData, null, 2)}</pre>
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Nombre</label>
                        <input {...register('nombre', { required: 'Es obligatorio introducir nombre' })} />
                        <p>{errors.nombre?.message}</p>
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="email" {...register('email')} />
                        <p>{errors.email?.message}</p>
                    </div>

                    <div>
                        <label>Contraseña</label>
                        <input
                            type="password"
                            {...register('password', {
                                required: true, minLength: {
                                    value: 6,
                                    message: 'Debe de tener mínimo 6 caracteres'
                                }
                            })} />
                            <p>{errors.password?.message}</p>
                    </div>

                    <button type="submit">Enviar</button>
                </form>
            )}
        </div>
    )
}