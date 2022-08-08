import React from 'react'

const Portfolio = () => {
  return (
    <article className="portfolio active" data-page="portfolio">

        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        <section className="projects">
{/* 
          <ul className="filter-list">

            <li className="filter-item">
              <button className="active" data-filter-btn>All</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Web design</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Applications</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Web development</button>
            </li>

          </ul>

          <div className="filter-select-box">

            <button className="filter-select" data-select>

              <div className="select-value" data-selecct-value>Select category</div>

              <div className="select-icon">
                <ion-icon name="chevron-down"></ion-icon>
              </div>

            </button>

            <ul className="select-list">

              <li className="select-item">
                <button data-select-item>All</button>
              </li>

              <li className="select-item">
                <button data-select-item>Web design</button>
              </li>

              <li className="select-item">
                <button data-select-item>Applications</button>
              </li>

              <li className="select-item">
                <button data-select-item>Web development</button>
              </li>

            </ul>

          </div> */}

          <ul className="project-list">

            <li className="project-item  active" data-filter-item data-category="web development">
              <a href="https://electronic-city-e-commerce.vercel.app/" target={"_blank"} >

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="/images/project-1.jpg" alt="E-commerce" loading="lazy" />
                </figure>

                <h3 className="project-title">E-commerce</h3>

                <p className="project-category">Web development</p>

              </a>
            </li>

            <li className="project-item  active" data-filter-item data-category="web development">
              <a href="https://mmrlol.vercel.app/" target={"_blank"}>

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="/images/project-2.png" alt="orizon" loading="lazy" />
                </figure>

                <h3 className="project-title">MMR</h3>

                <p className="project-category">Web development</p>

              </a>
            </li>

            <li className="project-item  active" data-filter-item data-category="web design">
              <a href="https://62a8fb3034a9a8000a7d63b8--creative-vacherin-fc38b8.netlify.app/" target={"_blank"}>

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="/images/project-3.jpg" alt="Score Website" loading="lazy" />
                </figure>

                <h3 className="project-title">Score Website</h3>

                <p className="project-category">Web development</p>

              </a>
            </li>

            <li className="project-item  active" data-filter-item data-category="applications">
              <a href="https://el-var.live/" target={"_blank"}>

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="/images/project-4.png" alt="ElVar" loading="lazy" />
                </figure>

                <h3 className="project-title">ElVar</h3>

                <p className="project-category">Web development</p>

              </a>
            </li>

            <li className="project-item  active" data-filter-item data-category="web design">
              <a href="https://euro-truck-service-site.markizzo.repl.co/" target={"_blank"}>

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="/images/project-5.png" alt="Euro Truck" loading="lazy" />
                </figure>

                <h3 className="project-title">Euro Truck</h3>

                <p className="project-category">Web development</p>

              </a>
            </li>

            <li className="project-item  active" data-filter-item data-category="web design">
              <a href="https://figma-land-dark.markizzo.repl.co/" target={"_blank"}>

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="/images/project-6.png" alt="Dark Land" loading="lazy" />
                </figure>

                <h3 className="project-title">Dark Land</h3>

                <p className="project-category">Web development</p>

              </a>
            </li>

            <li className="project-item  active" data-filter-item data-category="web development">
              <a href="https://hackathon-app-five.vercel.app/" target={"_blank"}>

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="/images/project-7.png" alt="Hackathon" loading="lazy" />
                </figure>

                <h3 className="project-title">Hackathon</h3>

                <p className="project-category">Web development</p>

              </a>
            </li>

            <li className="project-item  active" data-filter-item data-category="applications">
              <a href="https://laslesvpn-site.markizzo.repl.co/" target={"_blank"}>

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="/images/project-8.jpg" alt="LaslesVPN" loading="lazy" />
                </figure>

                <h3 className="project-title">LaslesVPN</h3>

                <p className="project-category">Web development</p>

              </a>
            </li>

            <li className="project-item  active" data-filter-item data-category="web development">
              <a href="https://huddle-landing-2.markizzo.repl.co/" target={"_blank"}>

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="/images/project-9.png" alt="Huddle Landing" loading="lazy" />
                </figure>

                <h3 className="project-title">Huddle Landing</h3>

                <p className="project-category">Web development</p>

              </a>
            </li>

          </ul>

        </section>

      </article>
  )
}

export default Portfolio