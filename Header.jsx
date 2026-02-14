export function Header() {
    return (
        <header className="header-class">
            <img src="reacticon.png" className="nav-logo" alt="React logo" />
            <nav>
                <ul className="nav-list">
                    <li className = "nav-list-item">Pricing</li>
                    <li className = "nav-list-item">about</li>
                    <li className = "nav-list-item">contact</li>
                </ul>
            </nav>
        </header>
    )
}