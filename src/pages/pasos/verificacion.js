import { useState } from "react";
import { GoBack } from "@/components/GoBack";
import { OrangeButton } from "@/components/orangeButton";
import { ProgressBar } from "@/components/ProgressBar";

export default function Verificacion() {
  const [codigo, setCodigo] = useState('')
  const [codigoError, setCodigoError] = useState(true)
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleCodeChange = (event) => {
    setCodigo(event.target.value)

    codigo.length === 5 ? setCodigoError(false) : setCodigoError(true)
  }

  const nextPage = () => {
    setShowModal(true)
    setTimeout(() => {
      window.location.href = '/pasos/final/'
    }, 3000)
  }

  return (
    <>
      <ProgressBar level='60'></ProgressBar>
      <br />
      <GoBack link='/pasos/celular/'></GoBack>
      <h1>Código de verificación</h1>
      <p>Te enviamos un SMS al número:</p>
      <p>+52 55 1850 9196</p>
      <p>Ingresa el código de verificación:</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="codigo">
          Código de verificación
        </label>
        <input type="text" id="codigo" value={codigo} onChange={handleCodeChange} required />
        <OrangeButton
          text='Validar código'
          disabled={codigoError}
          func={nextPage}
        />
      </form>
      <p>¿No recibiste el código? <strong>Reenviar código</strong></p>
      {
        showModal &&
        <div>
          <h3>Hemos enviado el código</h3>
        </div>
      }
    </>
  );
}
