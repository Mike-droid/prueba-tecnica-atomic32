export const OrangeButton = ({ text, disabled, func }) => {
  return (
    <button disabled={disabled} onClick={func}>{text}</button>
  )
}
