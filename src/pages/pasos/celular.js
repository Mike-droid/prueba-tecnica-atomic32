import { useState } from "react"
import { ProgressBar } from "@/components/ProgressBar"
import { OrangeButton } from "@/components/orangeButton"
import { GoBack } from "@/components/GoBack"

export default function Celular() {
  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState(true)
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handlePhoneChange = (event) => {
    setPhone(event.target.value)
    phone.match(/\d{9,10}/) ? setPhoneError(false) : setPhoneError(true)
  }

  const nextPage = () => {
    setShowModal(true)
    setTimeout(()=> {
      window.location.href = '/pasos/verificacion/'
    }, 2500)
  }

  return (
    <>
      <GoBack link='/pasos/'></GoBack>
      <br />
      <ProgressBar level='40'></ProgressBar>
      <h1>Valida tu celular</h1>
      <p>Necesitamos validar tu número para continuar</p>
      <p>Ingresa tu número a 10 dígitos y te enviaremos un código SMS.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="celular">
          Número de celular
        </label>
        <input type="tel" id="celular" pattern="\d{9,10}" value={phone} onChange={handlePhoneChange} required />
        <OrangeButton
          text='Continuar'
          disabled={phoneError}
          func={nextPage}
        />
      </form>
      {
        showModal &&
        <div>
          <h3>Te hemos enviado el código al número que nos proporcionaste</h3>
        </div>
      }
    </>
  )
}
