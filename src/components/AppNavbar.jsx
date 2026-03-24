
import { NavLink, Link } from "react-router-dom"

export default function AppNavbar() {



    return(
        <>
                <nav className="navbar navbar-expand-sm navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">E-COMMERCE</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarID"
                            aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarID">
                            <div className="navbar-nav">
                            <NavLink className="nav-link" aria-current="page" to="/"><i className="bi bi-house-fill"></i> Home</NavLink>
                            <NavLink className="nav-link" aria-current="page" to="/Products"><i className="bi bi-cart-fill"></i> Products</NavLink>
                            <NavLink className="nav-link" aria-current='page' to='/AboutUs'><i className="bi bi-person-fill"></i> About Us</NavLink>

                                
                            </div>
                        </div>
                    </div>
                </nav>
        </>
    )



}