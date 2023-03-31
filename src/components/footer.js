import Image from "next/image"

import linkedinImg from '../../public/linkedin.png'
import twitterImg from '../../public/twitter.png'

import styles from '@/styles/components/footer.module.scss'

export const MyFooter = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <span>
          © 2022 Atomic32. Todos los derechos reservados.
        </span>
      </div>
      <div className={styles.links}>
        <a href="https://www.atomic32.com/_files/ugd/1763b9_6694f20235af4fbab90e77540cb33924.pdf" target="_blank">
          Aviso de privacidad
        </a>
        <a href="https://www.linkedin.com/company/atomic-32/" target="_blank">
          <Image src={linkedinImg} alt='linkedin'></Image>
        </a>
        <a href="https://twitter.com/Atomic_32" target="_blank">
          <Image src={twitterImg} alt='twitter'></Image>
        </a>
      </div>
    </footer>
  )
}
