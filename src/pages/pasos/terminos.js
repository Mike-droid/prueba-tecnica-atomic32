import { useState } from "react"
import { GoBack } from "@/components/GoBack"
import { ProgressBar } from "@/components/ProgressBar"
import { OrangeButton } from "@/components/orangeButton"
import Link from "next/link"

export default function Terminos() {
  const [checked, setChecked] = useState(false)

  const handleCheck = () => {
    setChecked(!checked)
  }

  const nextPage = () => {
    window.location.href = '/pasos/final/'
  }

  return (
    <>
      <ProgressBar level='80'></ProgressBar>
      <br />
      <GoBack link='/pasos/verificacion/'></GoBack>
      <h1>Términos y condiciones</h1>
      <p>Por favor revisa nuestros términos y condiciones para este servicio:</p>
      <Link href="#">
        Consulta términos y condiciones
      </Link>
      <label htmlFor="terminos">
        <input type="checkbox" id="terminos" value={checked} onChange={handleCheck} />
        Acepto los términos y condiciones
      </label>
      <OrangeButton
        text='Enviar'
        disabled={!checked}
        func={nextPage}
      />
    </>
  )
}
