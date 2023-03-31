import { useState, useEffect, useRef } from "react"
import { GoBack } from "@/components/GoBack"
import { ProgressBar } from "@/components/ProgressBar"
import { OrangeButton } from "@/components/orangeButton"

export default function Terminos() {
  const [checked, setChecked] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const modalRef = useRef(null)

  const handleCheck = () => {
    setChecked(!checked)
  }

  const handleModal = () => {
    setShowModal(true)
  }

  const nextPage = () => {
    window.location.href = '/pasos/final/'
  }

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <>
      <ProgressBar level='80'></ProgressBar>
      <br />
      <GoBack link='/pasos/verificacion/'></GoBack>
      <h1>Términos y condiciones</h1>
      <p>Por favor revisa nuestros términos y condiciones para este servicio:</p>
      <button onClick={handleModal}>
        Consulta términos y condiciones
      </button>
      <label htmlFor="terminos">
        <input type="checkbox" id="terminos" value={checked} onChange={handleCheck} />
        Acepto los términos y condiciones
      </label>
      <br />
      <OrangeButton
        text='Enviar'
        disabled={!checked}
        func={nextPage}
      />
      {
        showModal && (
          <section ref={modalRef} style={{border: '1px solid black'}}>
            <h3>Términos y condiciones</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nesciunt ipsam impedit laudantium dignissimos in illo hic eos, quisquam consequatur laborum molestias voluptatibus ex magni, voluptatem ad maxime cupiditate beatae.
            </p>
          </section>
        )
      }
    </>
  )
}
