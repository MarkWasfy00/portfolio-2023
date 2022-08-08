import React from 'react'

const About = () => {
  return (
    <article className="about active" data-page="about">

        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
         <p>I'm an enthusiastic and detail-oriented Frontend Developer seeking an entry-level position with Company to use my skills in coding, troubleshooting complex problems, and assisting in the timely completion of projects.</p>
        </section>

        <section className="service">

          <h3 className="h3 service-title">What i'm doing</h3>

          <ul className="service-list">

            <li className="service-item">

              <div className="service-icon-box">
                <img src="/images/responsive.svg
                " alt="design icon" width="40"/>
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Responsive Websites</h4>

                <p className="service-item-text">
                  Responsive websites to fit all screens from mobile to tvs
                </p>
              </div>

            </li>

            <li className="service-item">

              <div className="service-icon-box">
                <img src="/images/speed.svg" alt="Web development icon" width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Fast Loading speed Websites</h4>

                <p className="service-item-text">
                  High fast loading with low loading time 
                </p>
              </div>

            </li>

            <li className="service-item">

              <div className="service-icon-box">
                <img src="/images/rank.svg" alt="mobile app icon" width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">SEO Ranking</h4>

                <p className="service-item-text">
                  Get your domain high ranking with SSR and SSG
                </p>
              </div>

            </li>

            <li className="service-item">

              <div className="service-icon-box">
                <img src="/images/dynamic.svg" alt="camera icon" width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Dynamic Websites</h4>

                <p className="service-item-text">
                  Make dynamic websites with that have changeable data 
                </p>
              </div>

            </li>


            <li className="service-item">

              <div className="service-icon-box">
                <img src="/images/safe.svg" alt="camera icon" width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Secure APIs</h4>

                <p className="service-item-text">
                 authentication and authorization to secure your api
                </p>
              </div>

            </li>


            <li className="service-item">

              <div className="service-icon-box">
                <img src="/images/react.svg" alt="camera icon" width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Modern Frameworks</h4>

                <p className="service-item-text">
                  Modern Frameworks to like React and Laravel
                </p>
              </div>

            </li>

          </ul>

        </section>


{/* 
        <section className="testimonials">

          <h3 className="h3 testimonials-title">Testimonials</h3>

          <ul className="testimonials-list has-scrollbar">

            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>

                <figure className="testimonials-avatar-box">
                  <img src="/images/avatar-1.png" alt="Daniel lewis" width="60" data-testimonials-avatar />
                </figure>

                <h4 className="h4 testimonials-item-title" data-testimonials-title>Daniel lewis</h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                    lot of experience
                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                    consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                  </p>
                </div>

              </div>
            </li>

            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>

                <figure className="testimonials-avatar-box">
                  <img src="/images/avatar-2.png" alt="Jessica miller" width="60" data-testimonials-avatar />
                </figure>

                <h4 className="h4 testimonials-item-title" data-testimonials-title>Jessica miller</h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                    lot of experience
                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                    consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                  </p>
                </div>

              </div>
            </li>

            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>

                <figure className="testimonials-avatar-box">
                  <img src="/images/avatar-3.png" alt="Emily evans" width="60" data-testimonials-avatar />
                </figure>

                <h4 className="h4 testimonials-item-title" data-testimonials-title>Emily evans</h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                    lot of experience
                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                    consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                  </p>
                </div>

              </div>
            </li>

            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>

                <figure className="testimonials-avatar-box">
                  <img src="/images/avatar-4.png" alt="Henry william" width="60" data-testimonials-avatar />
                </figure>

                <h4 className="h4 testimonials-item-title" data-testimonials-title>Henry william</h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                    lot of experience
                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                    consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                  </p>
                </div>

              </div>
            </li>

          </ul>

        </section>



        <div className="modal-container" data-modal-container>

          <div className="overlay" data-overlay></div>

          <section className="testimonials-modal">

            <button className="modal-close-btn" data-modal-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img src="/images/avatar-1.png" alt="Daniel lewis" width="80" data-modal-img />
              </figure>

              <img src="/images/icon-quote.svg" alt="quote icon" />
            </div>

            <div className="modal-content">

              <h4 className="h3 modal-title" data-modal-title>Daniel lewis</h4>

              <time dateTime="2021-06-14">14 June, 2021</time>

              <div data-modal-text>
                <p>
                  Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                  lot of experience
                  and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                  consectetur adipiscing
                  elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
              </div>

            </div>

          </section>

        </div> */}


        {/* <section className="clients">

          <h3 className="h3 clients-title">Clients</h3>

          <ul className="clients-list has-scrollbar">

            <li className="clients-item">
              <a href="#">
                <img src="/images/logo-1-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="/images/logo-2-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="/images/logo-3-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="/images/logo-4-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="/images/logo-5-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="/images/logo-6-color.png" alt="client logo"/>
              </a>
            </li>

          </ul>

        </section> */}

      </article>
  )
}

export default About