export const OrangeButton = ({ text, enabled, func }) => {
  return (
    <button disabled={enabled} onClick={func}>{text}</button>
  )
}
