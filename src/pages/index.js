import Image from 'next/image'
import { MyFooter } from '@/components/footer'
import { WhiteButton } from '@/components/WhiteButton'

import styles from '@/styles/Home.module.scss'

import atomicLabsLogo from '../../public/LogotipoAtomic32_Blco.webp'
import astronaut from '../../public/Group4032.png'
import down from '../../public/Group4013.png'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.landingPage}>
        <div className={styles.up}>
          <Image src={atomicLabsLogo} alt="atomicLabs"></Image>
          <div></div>
          <div></div>
        </div>
        <div className={styles.center}>
          <Image src={astronaut} alt="astronaut"></Image>
          <div className={styles.text}>
            <p className={styles.textOne}>Desarrolla todo</p>
            <p className={styles.textTwo}>tu POTENCIAL</p>
            <p className={styles.textThree}>dentro del equipo</p>
            <p className={styles.textFour}>
              <span className={styles.atomic}>ATOMIC</span>
              <span className={styles.labs}>LABS</span>
            </p>
            <WhiteButton text='¡Quiero ser parte!' link='#' />
          </div>
        </div>
        <div className={styles.down}>
          <Image src={down} alt="down"></Image>
          <p>Quiero saber más</p>
        </div>
      </section>
      <section className={styles.threeCards}></section>
      <section className={styles.process}></section>
      <section className={styles.whyUs}></section>
      <section className={styles.table}></section>
      <MyFooter />
    </main>
  )
}
