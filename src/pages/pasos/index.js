import { useState } from "react";
import { ProgressBar } from "@/components/ProgressBar";
import { OrangeButton } from "@/components/orangeButton";

export default function Pasos() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [errorNombre, setErrorNombre] = useState(true);
  const [errorApellido, setErrorApellido] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
    const my_name = nombre
    my_name.length < 4 ? setErrorNombre(true) : setErrorNombre(false);
  }

  const handleChangeApellido = (event) => {
    setApellido(event.target.value);
    const my_lastName = apellido
    my_lastName.length < 4 ? setErrorApellido(true) : setErrorApellido(false);
  }

  const nextPage = () => {
    window.location.href = '/pasos/celular/';
  }

  return (
    <>
      <ProgressBar level='20' />
      <h1>Te queremos conocer</h1>
      <p>Queremos saber quien eres tú, por favor ingresa los siguientes datos:</p>
      <form onSubmit={handleSubmit}>
          <label htmlFor="nombres">
            Nombre(s)
          </label>
          <input type="text" id="nombres" onChange={handleChangeNombre} value={nombre} required/>
          {
            errorNombre ? <p className="error">El nombre debe tener al menos 5 caracteres</p> : null
          }
          <br />
          <label htmlFor="apellidos">
            Apellidos
          </label>
          <input type="text" id="apellidos" onChange={handleChangeApellido} value={apellido} required/>
          {
            errorApellido ? <p className="error">El apellido debe tener al menos 5 caracteres</p> : null
          }
          <OrangeButton
            text='Enviar'
            disabled={errorNombre || errorApellido}
            func={nextPage}
          />
      </form>
    </>
  );
}
