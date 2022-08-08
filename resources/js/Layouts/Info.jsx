import { useState } from "react"

const Info = () => {
  const [sidebar , setSidebar] = useState(false);
  

  return (
    <aside className={`sidebar  ${sidebar ? 'active' : ''}`} onClick={() => setSidebar(old => !old)} data-sidebar>

      <div className="sidebar-info">

        <figure className="avatar-box">
          <img src="/images/Mark.jpg" alt="Mark Wasfy" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Mark Wasfy">Mark Wasfy</h1>

          <p className="title">Frontend Developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <ion-icon name="chevron-down"></ion-icon>
        </button>

      </div>

      <div className="sidebar-info_more">

        <div className="separator"></div>

        <ul className="contacts-list">

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:markwasfy00@gmail.com" className="contact-link">markwasfy00@gmail</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+201281526570" className="contact-link">+201281526570</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="2001-03-8">2001-03-8</time>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Alexandria Egypt</address>
            </div>

          </li>

        </ul>

        <div className="separator"></div>

        <ul className="social-list">

          <li className="social-item">
            <a href='' target={"_blank"} className="social-link" rel="noreferrer">
            <ion-icon name="logo-stackoverflow"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href='' target={"_blank"} className="social-link" rel="noreferrer">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          
          <li className="social-item">
            <a href=''target={"_blank"} className="social-link" rel="noreferrer">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

        </ul>

      </div>

    </aside>
  )
}

export default Info