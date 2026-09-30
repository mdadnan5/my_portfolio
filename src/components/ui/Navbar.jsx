import React, { useEffect } from 'react'

const Navbar = ({ appRef, theme, setTheme }) => {
    const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

    const handleClick = ({ target }) => {
        localStorage.setItem("location", target.innerText);
        const appHomeId = document.getElementById("home");
        if (appRef.current) {
            appHomeId.scrollTo({ top: 0, behavior: "instant" })
        }
    }

    useEffect(() => {
        const location = localStorage.getItem("location");
        const navigationLinks = document.querySelectorAll("[data-nav-link]");
        navigationLinks.forEach((link) => {
            if (location?.toLowerCase() === link.innerText.toLowerCase()) {
                link.click()
            }
        });
    }, [])

    return (
        <>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <button onClick={(e) => { handleClick(e) }} className="navbar-link active" data-nav-link>
                            About
                        </button>
                    </li>

                    <li className="navbar-item">
                        <button onClick={(e) => { handleClick(e) }} className="navbar-link" data-nav-link>
                            Experience
                        </button>
                    </li>

                    <li className="navbar-item">
                        <button onClick={(e) => { handleClick(e) }} className="navbar-link" data-nav-link>
                            Portfolio
                        </button>
                    </li>

                    <li className="navbar-item">
                        <button onClick={(e) => { handleClick(e) }} className="navbar-link" data-nav-link>
                            Contact
                        </button>
                    </li>

                    <li className="navbar-item">
                        <button onClick={toggleTheme} className="theme-toggle" title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'} aria-label="Toggle theme">
                            {theme === 'dark' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5"/>
                                    <line x1="12" y1="1" x2="12" y2="3"/>
                                    <line x1="12" y1="21" x2="12" y2="23"/>
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                                    <line x1="1" y1="12" x2="3" y2="12"/>
                                    <line x1="21" y1="12" x2="23" y2="12"/>
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                                </svg>
                            )}
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar