import logo from "../../assets/pokeball2.svg";

function Header(): JSX.Element {
    return (
        <header>
            <nav className="navbar flex-row just-spaB container">
                <a className="logo_link flex-row" href="index.html">
                    <img
                        className="logo"
                        src={logo}
                        alt="image of pixelated pokeball"
                    />
                </a>
                <div className="navbar_menu">
                    <ul className="navbar_list flex-row">
                        <li className="navbar_list_item" id="pokedexNav">
                            Pokedex
                        </li>
                        <li className="navbar_list_item" id="mapNav">
                            Map
                        </li>
                        <li className="navbar_list_item" id="contactNav">
                            Contact
                        </li>
                    </ul>
                </div>
                <div className="hamburger">
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="50" height="50" />
                        <line
                            x1="13.5"
                            y1="11.5"
                            x2="36.5"
                            y2="11.5"
                            stroke="black"
                            stroke-width="6"
                            stroke-linecap="round"
                        />
                        <line
                            x1="13.5"
                            y1="24.5"
                            x2="36.5"
                            y2="24.5"
                            stroke="black"
                            stroke-width="6"
                            stroke-linecap="round"
                        />
                        <line
                            x1="13.5"
                            y1="37.5"
                            x2="36.5"
                            y2="37.5"
                            stroke="black"
                            stroke-width="6"
                            stroke-linecap="round"
                        />
                    </svg>
                </div>
            </nav>
        </header>
    );
}

export default Header;
