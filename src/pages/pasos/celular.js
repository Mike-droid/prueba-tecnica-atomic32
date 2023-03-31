import { useState } from "react"
import { ProgressBar } from "@/components/ProgressBar"
import { OrangeButton } from "@/components/orangeButton"
import { GoBack } from "@/components/GoBack"

export default function Celular() {
  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handlePhoneChange = (event) => {
    setPhone(event.target.value)
    const my_phone = phone
    my_phone.match(/[0-9]{10}/) ? setPhoneError(true) : setPhoneError(false)
  }

  const nextPage = () => {
    window.location.href = '/pasos/verificacion/'
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
        <input type="tel" id="celular" pattern="[0-9]{10}" onChange={handlePhoneChange} required />
        <OrangeButton
          text='Continuar'
          disabled={phoneError}
          func={nextPage}
        />
      </form>
    </>
  )
}
