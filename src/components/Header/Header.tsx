import { Link } from "react-router-dom"
import "./Header.scss"

const Header = () => {
  return (
    <nav>
        <Link to={'/'}><p id="name">Podcaster</p></Link>
    </nav>
  )
}

export default Header