import { React, useState } from "react"
import { useForm } from 'react-hook-form';

export function Formulario() {
    const { handleSubmit, register, formState: { errors } , watch} = useForm();
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [formData, setFormData] = useState(null);

    const onSubmit = (data) => {
        setFormData(data);
        setSubmitSuccess(true);
        console.log(data);
    };
    return (
        <div className="container border border-warning rounded">
            <fieldset className="p-4">
                {submitSuccess ? (
                    <div className="alert alert-success" role="alert">
                        <p>Datos enviados con éxito:</p>
                        <p>JSON</p>
                        <pre>{JSON.stringify(formData, null, 2)}</pre>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label className="form-label">Nombre</label>
                            <br /><input className="form-control"
                                {...register('nombre', {
                                    required: 'Es obligatorio introducir nombre',
                                    pattern: {
                                        value: /^[A-Za-z]+$/i,
                                        message: 'Solo se permiten letras en el nombre'
                                    }
                                })}
                            />
                            <p >{errors.nombre?.message}</p>
                        </div>

                        <div>
                            <label className="form-label">Email</label>
                            <br /><input className="form-control" type="email" {...register('email')} />
                            <p className="text-danger">{errors.email?.message}</p>
                        </div>

                        <div>
                            <label className="form-label">Contraseña</label>
                            <br /><input className="form-control"
                                type="password"
                                {...register('password', {
                                    required: true, minLength: {
                                        value: 6,
                                        message: 'Debe de tener mínimo 6 caracteres'
                                    }
                                })} />
                            <p className="text-danger">{errors.password?.message}</p>
                        </div>

                        <div>
                            <label className="form-label">Confirmar Contraseña</label>
                            <input className="form-control"
                                type="password"
                                {...register('confirmarPassword', {
                                    validate: (value) =>
                                        value === watch('password') || 'Las contraseñas no coinciden'
                                })}
                            />
                            <p className="text-danger">{errors.confirmarPassword?.message}</p>
                        </div>

                        <div>
                            <label className="form-label">Fecha de Nacimiento</label>
                            <br /><input className="form-control"
                                type="date"
                                {...register('fechaNacimiento', {
                                    required: 'La fecha de nacimiento es obligatoria',
                                    validate: (value) => {
                                        const fechaActual = new Date();
                                        const fechaCumple = new Date(value);
                                        const age = fechaActual.getFullYear() - fechaCumple.getFullYear();

                                        if (age < 18) {
                                            return 'Debe ser mayor de 18 años';
                                        }
                                        return true;
                                    }
                                })}
                            />
                            <p>{errors.fechaNacimiento?.message}</p>
                        </div>

                        <button className="btn btn-warning" type="submit">Enviar</button>
                    </form>
                )}
            </fieldset>
        </div>
    )
}