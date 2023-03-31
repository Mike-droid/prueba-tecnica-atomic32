import Image from 'next/image'
import { MyFooter } from '@/components/footer'
import { WhiteButton } from '@/components/WhiteButton'
import { Card } from '@/components/Card'
import { explora } from '@/utils/exploraArray'
import { imagina } from '@/utils/imaginaArray'
import { conquista } from '@/utils/conquistaArray'

import styles from '@/styles/Home.module.scss'

import atomicLabsLogo from '../../public/LogotipoAtomic32_Blco.webp'
import astronaut from '../../public/Group4032.png'
import down from '../../public/Group4013.png'
import exploraImg from '../../public/Group4035.png'
import imaginaImg from '../../public/Group4036.png'
import conquistaImg from '../../public/Group4037.png'

import { ORANGE, WHITE, DARKBLUE } from '@/utils/vars'

import cardStyles from '@/styles/components/Card.module.scss'
const LEFT_BORDER_RADIUS = cardStyles.leftBorderRadius;
const RIGHT_BORDER_RADIUS = cardStyles.rightBorderRadius;
const ALL_BORDER_RADIUS = cardStyles.allBorderRadius;

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
            <WhiteButton text='¡Quiero ser parte!' link='/pasos/' />
          </div>
        </div>
        <div className={styles.down}>
          <Image src={down} alt="down"></Image>
          <p>Quiero saber más</p>
        </div>
      </section>
      <section className={styles.threeCards}>
        <div className={styles.title}>
          <h2>SOMOS EL BRAZO DERECHO</h2>
          <h2 className={styles.tech}>DE LA TECNOLOGÍA</h2>
        </div>
        <div className={styles.cardsContainer}>
          <Card
            image={exploraImg}
            title='EXPLORA'
            list={explora}
            backgroundColor={WHITE}
            lineColor={ORANGE}
            textColor={DARKBLUE}
            width={'25%'}
            height={'400px'}
            borderRadiusClass={LEFT_BORDER_RADIUS}
            />
          <Card
            image={imaginaImg}
            title='IMAGINA'
            list={imagina}
            backgroundColor={ORANGE}
            lineColor={WHITE}
            textColor={WHITE}
            width={'30%'}
            height={'480px'}
            borderRadiusClass={ALL_BORDER_RADIUS}
          />
          <Card
            image={conquistaImg}
            title='CONQUISTA'
            list={conquista}
            backgroundColor={WHITE}
            lineColor={ORANGE}
            textColor={DARKBLUE}
            width={'25%'}
            height={'400px'}
            borderRadiusClass={RIGHT_BORDER_RADIUS}
          />
        </div>
        <div>
        </div>
      </section>
      <section className={styles.process}>
        <div className={styles.processTitle}>
          <h2 className={styles.love}>¡TE ENCANTARÁ</h2>
          <h2 className={styles.withUs}>TRABAJAR CON NOSOTROS!</h2>
        </div>
      </section>
      <section className={styles.whyUs}></section>
      <section className={styles.table}></section>
      <MyFooter />
    </main>
  )
}
