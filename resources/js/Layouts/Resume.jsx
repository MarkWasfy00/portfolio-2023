import React from 'react'

const Resume = () => {
  return (
    <article className="resume active" data-page="resume">

        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>

        <section className="timeline">

          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">Faculty of Phyiscal Education</h4>

              <span>2020 — 2024</span>

              <p className="timeline-text">
                Alexandria University
              </p>

            </li>
          </ol>

        </section>

        <section className="timeline">

          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="reader-outline"></ion-icon>
            </div>

            <h3 className="h3">Projects</h3>
          </div>

          <ol className="timeline-list">

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">E-commerce Website</h4>

              {/* <span>2022 — March</span> */}

              <p className="timeline-text">
                In this site i used Next.js as full-stack framework for SSR,SSG,Optimizing Images and routing
              </p>
              <p className="timeline-text">
                Checkers: Typescript were used to check for type checkers and eslint
              </p>
              <p className="timeline-text">
                Styles: sass used for nesting , web compatibility and Normalize.css for hard rest user style sheet across browsers , BEM convention for class naming
              </p>
              <p className="timeline-text">
                Redux/Toolkit for holding the cart state across the site
              </p>
              <p className="timeline-text">
              Next.js api were used to handle the api and backend logic
              </p>
              <p className="timeline-text">
              the basket items were sent as POST req from frontend to backend and stripe manages the payments sessions and create a checkout page that triggers webhook when the payment are successful,that writes the order in database
              </p>
              <p className="timeline-text">
                auth0 used for handling the authentication and authorization in front-end
              </p>
              <p className="timeline-text">
              site was deployed in vercel.com and data stored in firebase
              </p>
              <p className="timeline-text">
              Libraries used in this project are Swiper.js , dateFns , auth0 , stripe , firebase , axios , animate.css , Material ui , font awesome
              </p>

            </li>

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">Soccer Website (El-var).</h4>

              {/* <span>2013 — 2015</span> */}

              <p className="timeline-text">
                This site was built with many versions first plain HTML/CSS/JAVASCRIPT then switched to plain
                React finally switched to Next.js for ssr rendering
              </p>
              <p className="timeline-text">
                This site main idea is to scrape data with library called cheerio that is built on jQuery
              </p>

            </li>

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">MMR Statistics</h4>

              {/* <span>2010 — 2013</span> */}

              <p className="timeline-text">
                this site was built to show Ingame statics for game called (league of legends)
              </p>
              <p className="timeline-text">
                this site used Material ui for the styling
              </p>
              <p className="timeline-text">
                for the statistics , Chart.js were used to show graphs for the user statics
              </p>

            </li>


            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">High score website</h4>

              {/* <span>2010 — 2013</span> */}

              <p className="timeline-text">
                That site purpose was to get high scores in lighthouse and faster loading speeds 
              </p>
              <p className="timeline-text">
              Images were optimized to webp format and Largest Contentful Paint (LCP) was reduced for higher loading speed . 
              </p>
              <p className="timeline-text">
                used Vite to power react also for higher performance
              </p>

            </li>


            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">Plain HTML/CSS Websites</h4>

              {/* <span>2010 — 2013</span> */}

              <p className="timeline-text">
                Started making websites that made with only HTML/CSS to increase my skills with media Queries.
              </p>
              <p className="timeline-text">
              In this period of time my only focus was to Implement as much as i could of websites
              </p>
              <p className="timeline-text">
                I made around 7 websites that inspired from figma
              </p>

            </li>

          </ol>

        </section>

        {/* <section className="skill">

          <h3 className="h3 skills-title">My skills</h3>

          <ul className="skills-list content-card">

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">Web design</h5>
                <data value="80">80%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{width:"80%"}}></div>
              </div>

            </li>

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">Graphic design</h5>
                <data value="70">70%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{width:"70%"}}></div>
              </div>

            </li>

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">Branding</h5>
                <data value="90">90%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{width:"90%"}}></div>
              </div>

            </li>

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">WordPress</h5>
                <data value="50">50%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{width:"50%"}}></div>
              </div>

            </li>

          </ul>

        </section> */}

      </article>
  )
}

export default Resume