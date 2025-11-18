import { NavLink } from "react-router-dom"

import { useContext } from "react"
import BudgetContext from "../Contexts/BudgetContext"

export default function NavBar() {

    const { budgetMode, setBudgetMode } = useContext(BudgetContext)

    function toggleState() {
        setBudgetMode(!budgetMode)
    }
    console.log(budgetMode);

    const menu = [
        {
            id: 1,
            link: '/',
            text: 'Home Page'
        },
        {
            id: 2,
            link: '/products',
            text: 'Products'
        },
        {
            id: 3,
            link: '/about_us',
            text: 'About Us'
        }
    ]

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
                    <button className="btn btn-light" onClick={toggleState}>
                        {
                            !budgetMode ? 'Attiva Modalità Budget' : 'Disattiva Modalità Budget'
                        }
                    </button>
                </div>
            </nav>
        </>
    )
}