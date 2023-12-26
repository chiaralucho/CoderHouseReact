import styles from './NavBar.module.css'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="container-fluid">
      <div className="row">
        <div className="d-flex justify-content-between align-items-end p-2">
          <Link to={"/"}>
            <img width="80" className="p-0 m-0" src="../../../public/images/la Ganchera Logo.png" alt="" />
          </Link>
          <div className='col-6 d-flex justify-content-around'>
            <Link to={"/"}>
              <button className="btn btn-secondary mx-2">Home</button>
            </Link>
            <Link to={"/category/vaca"}>
              <button className="btn btn-secondary mx-2">Cortes vacunos</button>
            </Link>
            <Link to={"/category/cerdo"}>
              <button className="btn btn-secondary mx-2">Cortes porcinos</button>
            </Link>
            <Link to={"/category/pollo"}>
              <button className="btn btn-secondary mx-2">Cortes de pollo</button>
            </Link>
            <Link to={"/category/achuras"}>
              <button className="btn btn-secondary mx-2">Achuras</button>
            </Link>
          </div>
          <div className='d-flex'>
            < CartWidget />
          </div>
        </div>
      </div>
    </nav>
  )
}
