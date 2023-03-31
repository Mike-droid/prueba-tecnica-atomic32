import Link from "next/link"

export const GoBack = ({ link }) => {
  return (
    <Link href={link}>
      Regresar
    </Link>
  )
}
