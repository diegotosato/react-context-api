import { NavLink } from "react-router-dom"

export default function NavBar({ menu }) {
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
                </div>
            </nav>
        </>
    )
}