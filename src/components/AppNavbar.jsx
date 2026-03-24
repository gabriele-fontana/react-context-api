import { useContext } from "react"
import { NavLink, Link } from "react-router-dom"
import BudgetContext from "../contexts/BudgetContext"


export default function AppNavbar() {
    const { budgetMode, setBudgetMode } = useContext(BudgetContext)
    
    function toggleBudgetMode(){
         setBudgetMode(!budgetMode)
    }
    


    return(
        <>
                <nav className="navbar navbar-expand-sm navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src="../src/assets/store.png" alt="logo" width={30} height={30}/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarID"
                            aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarID">
                            <div className="navbar-nav">
                            <NavLink className="nav-link" aria-current="page" to="/"><i className="bi bi-house-fill"></i> Home</NavLink>
                            <NavLink className="nav-link" aria-current="page" to="/Products"><i className="bi bi-cart-fill"></i> Products</NavLink>
                            <NavLink className="nav-link" aria-current='page' to='/AboutUs'><i className="bi bi-person-fill"></i> About Us</NavLink>
                            <button className="btn text-white" onClick={toggleBudgetMode}>
                                <i className={`bi ${budgetMode ? 'bi-toggle-on' : 'bi-toggle-off'}`}></i>
                                <span className="ms-2">{budgetMode ? 'Budget ON' : 'Budget OFF'}</span>
                            </button>
                                
                            </div>
                        </div>
                    </div>
                </nav>
        </>
    )



}