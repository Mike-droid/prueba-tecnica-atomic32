import Image from "next/image"
import styles from '@/styles/components/Card.module.scss'

export const Card = ({ image, title, list, backgroundColor, lineColor, textColor, width, height, borderRadiusClass }) => {
  return (
    <div className={`${styles.card} ${borderRadiusClass}`} style={{ backgroundColor: backgroundColor, width, height }}>
      <Image src={image} alt={title}></Image>
      <div className={styles.linesContainer}>
        <div className={styles.line} style={{ backgroundColor: lineColor }}></div>
        <div className={styles.lineCenter} style={{ backgroundColor: lineColor }}></div>
        <div className={styles.line} style={{ backgroundColor: lineColor }}></div>
      </div>
      <h3 style={{ color: lineColor }} className={styles.title}>
        {title}
      </h3>
      <ul className={styles.list}>
        {list.map((item, index) => (
          <li key={index} style={{ color: textColor }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
