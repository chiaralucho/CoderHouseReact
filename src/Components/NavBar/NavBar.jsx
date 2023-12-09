import styles from './NavBar.module.css'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-between align-items-end p-2">
      <Link to={"/"}>
      <img src="../../src/assets/react" alt="" />
      </Link>
      <div className='col-4 d-flex justify-content-between'>
        <Link to={"/"}>
          <button className="btn btn-secondary mx-2">Home</button>
        </Link>
        <Link to={"/category/vaca"}>
          <button className="btn btn-secondary mx-2">Vaca</button>
        </Link>
        <Link to={"/category/cerdo"}>
          <button className="btn btn-secondary mx-2">Cerdo</button>
        </Link>
        <Link to={"/category/achuras"}>
          <button className="btn btn-secondary mx-2">Achuras</button>
        </Link>
      </div>
      <div className='d-flex'>
        < CartWidget />
      </div>
    </nav>
  )
}
