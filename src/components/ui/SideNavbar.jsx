import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SiDailydotdev } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import Resume from "../docs/Adnan_Resume.pdf";

const SideNavbar = () => {

    const [widthState, setWidthState] = useState(0);
    const [viewMoreInfoState, setViewMoreInfoState] = useState(false);
    const handleClick = () => {
        setViewMoreInfoState(!viewMoreInfoState)
    }


    useEffect(() => {
        const handleWidth = () => {
            setWidthState(window.innerWidth)
        }
        handleWidth();
        if (widthState > 700) setViewMoreInfoState(false);
        window.addEventListener("resize", handleWidth);
        return () => { window.removeEventListener("resize", handleWidth) }
    }, [widthState]);

    
  // Download the resume...
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Adnan_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      window.open(Resume);
    }, 1000);
  };

    return (
        <>
            <aside className={`sidebar ${viewMoreInfoState && "active"}`}>
                <div className="sidebar-info">
                    <figure className="avatar-box">
                        <img
                            src="./images/ui/images/my-avatar.png"
                            alt="Mohammad Adnan"
                            width="80"
                        />
                    </figure>

                    <div className="info-content">
                        <h1 className="name" title="Mohammad Adnan">
                            Mohammad Adnan
                        </h1>

                        <p className="title">Software Engineer</p>
                    </div>

                    <button className="info_more-btn" onClick={handleClick}>
                        <span>Show Contacts</span>
                        <ion-icon name="chevron-down"></ion-icon>
                    </button>
                </div>

                <div className="sidebar-info_more">
                    <div className="separator"></div>

                    <ul className="contacts-list">
                        <li className="contact-item" title='adnanasharaf786@gmail.com'>
                            <div className="icon-box">
                                <ion-icon name="mail-outline"></ion-icon>
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Email</p>
                                <a href="mailto:adnanasharaf786@gmail.com" className="contact-link">
                                    adnanasharaf786@gmail.com
                                </a>
                            </div>
                        </li>
                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon name="phone-portrait-outline"></ion-icon>
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Phone</p>
                                <a href="tel:+9919917878" className="contact-link">
                                    +91 9919917878
                                </a>
                            </div>
                        </li>
                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon name="calendar-outline"></ion-icon>
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Birthday</p>
                                June 05, 1994
                            </div>
                        </li>
                        <li className="contact-item">
                            <div className="icon-box">
                                <ion-icon name="location-outline"></ion-icon>
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Location</p>

                                <address className='cursor-pointer' onClick={() => { window.open("https://maps.app.goo.gl/7XC6MwEtYRYU2Xfy7") }}>Noida, U.P, India</address>
                            </div>
                        </li>
                    </ul>

                    <div className="separator"></div>

                    <ul className="social-list">
                        <li className="social-item">
                            <Link to={"https://www.linkedin.com/in/adnanasharaf"} className="social-link" target='_blank'>
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </Link>
                        </li>
                        <li className="social-item">
                            <Link to={"https://github.com/mdadnan5"} className="social-link" target='_blank'>
                                <ion-icon name="logo-github"></ion-icon>
                            </Link>
                        </li>
                        <li className="social-item">
                            <Link to={"https://wa.me/9919917878"} className="social-link" target='_blank'>
                                <ion-icon name="logo-whatsapp"></ion-icon>
                            </Link>
                        </li>
                        {/* <li className="social-item">
                            <Link to={"https://app.daily.dev/buggie"} className="social-link" target='_blank' title='Logo daily.dev'>
                                <SiDailydotdev />
                            </Link>
                        </li>
                        <li className="social-item">
                            <Link to={"https://x.com/yehBuggie"} className="social-link" target='_blank'>
                                <ion-icon name="logo-twitter"></ion-icon>
                            </Link>
                        </li>
                        <li className="social-item">
                            <Link to={"https://www.instagram.com/shubuumishra"} className="social-link" target='_blank'>
                                <ion-icon name="logo-instagram"></ion-icon>
                            </Link>
                        </li>
                        <li className="social-item">
                            <Link to={"https://www.facebook.com/profile.php?id=100019119737246"} className="social-link" target='_blank'>
                                <ion-icon name="logo-facebook"></ion-icon>
                            </Link>
                        </li>
                        <li className="social-item">
                            <Link to={"https://medium.com/@buggie9120"} className="social-link" target='_blank' title='Logo Medium'>
                                <BsMedium />
                            </Link>
                        </li> */}
                    </ul>
                    <button onClick={downloadResume} className="resume-download-btn">
                        <ion-icon name="cloud-download-outline"></ion-icon>
                        <span>Download Resume</span>
                    </button>
                </div>
            </aside>
        </>
    )
}

export default SideNavbar;