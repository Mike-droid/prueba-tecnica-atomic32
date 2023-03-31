export const ProgressBar = ({ level }) => {
  return (
    <progress max='100' value={level}>{level}</progress>
  )
}
