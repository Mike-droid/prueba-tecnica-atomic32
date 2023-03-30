import Link from "next/link"

import styles from '@/styles/components/WhiteButton.module.scss'

export const WhiteButton = ({ text, link }) => {
  return (
    <Link href={link} className={styles.whiteButton}>
      { text }
    </Link>
  )
}
