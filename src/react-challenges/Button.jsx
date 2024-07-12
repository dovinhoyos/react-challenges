import './style.css'

export const Button = ({children, color, timer}) => {
  return (
    <button  onClick={ timer } className={ color }>{ children }</button>
  )
}
