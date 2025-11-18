import { NavLink } from "react-router-dom"

import { useContext } from "react"
import BudgetContext from "../Contexts/BudgetContext"

export default function NavBar({ menu }) {

    const { budgetMode, handleClick } = useContext(BudgetContext)

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-primary" data-bs-theme="dark">
                <div className="container">
                    <ul className="navbar-nav me-auto ">

                        {
                            menu.map(item => (
                                <li key={item.id} className="nav-item">
                                    <NavLink className="nav-link" to={item.link}>{item.text}</NavLink>
                                </li>
                            ))
                        }

                    </ul>
                    <button className="btn btn-light" onClick={handleClick}>

                        {
                            budgetMode ? 'Modalità Budget' : 'Modalità Standard'
                        }
                    </button>
                </div>
            </nav>
        </>
    )
}