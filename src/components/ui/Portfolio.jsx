import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {

    const projects = useMemo(() => [
        {
            title: "Alvi Girls Degree College",
            category: "Web development",
            img: "./images/ui/projects/alvigdc.png",
            alt: "Alvi Girls Degree College",
            link: "https://alvi-girls-degree-college.vercel.app/"
        },
        {
            title: "Civic Data Space",
            category: "Web development",
            img: "./images/ui/projects/civic-data.png",
            alt: "Civic Data Space",
            link: "https://civic-data-space-five.vercel.app/"
        },
        {
            title: "Dashboard Filtering System",
            category: "Web development",
            img: "./images/ui/projects/dashboard.png",
            alt: "Dashboard Filtering System",
            link: "https://dashboard-filtering-system.vercel.app/"
        },
        {
            title: "Movie Search App",
            category: "Web development",
            img: "./images/ui/projects/movie-search.png",
            alt: "Movie Search App",
            link: "https://movie-search-app-beta-ten.vercel.app/"
        },
        {
            title: "Weather Application",
            category: "Web development",
            img: "./images/ui/projects/weather.png",
            alt: "Weather Application",
            link: "https://mdadnan5.github.io/weather-application"
        },
        {
            title: "Digital & Analog Clock",
            category: "Web development",
            img: "./images/ui/projects/clock.png",
            alt: "Digital & Analog Clock",
            link: "https://mdadnan5.github.io/Analog-and-Digital-Clock/"
        }
    ], []);

    const [projState, setProjState] = useState(projects);

    const [activeButton, setActiveButton] = useState("All");
    const handleActive = (target) => {
        const value = target?.innerText || target?.target?.value;
        setActiveButton(value);
    };


    useMemo(() => {
        if (activeButton === "All" || activeButton === "Select category") {
            setProjState(projects);
        } else {
            const filterData = projects.filter((ele) => { return String(ele.category).toLowerCase() === String(activeButton).toLowerCase() });
            setProjState(filterData);
        }
    }, [activeButton, projects]);

    return (
        <>
            <article className="portfolio" data-page="portfolio">
                <header>
                    <h2 className="h2 article-title">Portfolio</h2>
                </header>

                {/* Desk View */}
                <section className="projects">
                    <ul className="filter-list">
                        <li className="filter-item">
                            <button onClick={(e) => { handleActive(e.target) }} className={`${activeButton === "All" ? "active" : ""}`}>All</button>
                        </li>
                        <li className="filter-item">
                            <button onClick={(e) => { handleActive(e.target) }} className={`${activeButton === "Web development" ? "active" : ""}`}>Web development</button>
                        </li>
                        <li className="filter-item">
                            <button onClick={(e) => { handleActive(e.target) }} className={`${activeButton === "Applications" ? "active" : ""}`}>Applications</button>
                        </li>
                        <li className="filter-item">
                            <button onClick={(e) => { handleActive(e.target) }} className={`${activeButton === "Web design" ? "active" : ""}`}>Web design</button>
                        </li>
                    </ul>

                    {/* Mob View */}
                    <div className="filter-select-box">
                        <select
                            className="filter-select outline-none"
                            onChange={handleActive}
                            value={activeButton}
                        >
                            <option className="select-value" value="Select category">
                                Select category
                            </option>
                            <option className="select-item" value="Web development">
                                Web development
                            </option>
                            <option className="select-item" value="Applications">
                                Applications
                            </option>
                            <option className="select-item" value="Web design">
                                Web design
                            </option>
                        </select>
                    </div>

                    <ul className="project-list">
                        {
                            projState.map((project, idx) => {
                                return <li
                                    key={idx}
                                    className="project-item active"
                                    data-filter-item
                                    data-category="web development">
                                    <Link to={project.link} target='_blank'>
                                        <figure className="project-img">
                                            <div className="project-item-icon-box">
                                                <ion-icon name="eye-outline"></ion-icon>
                                            </div>

                                            <img
                                                src={project.img}
                                                alt={project.title}
                                                loading="lazy"
                                            />
                                        </figure>

                                        <h3 className="project-title">{project.title}</h3>

                                        <p className="project-category">{project.category}</p>
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </section>
            </article >
        </>
    )
}

export default Portfolio

