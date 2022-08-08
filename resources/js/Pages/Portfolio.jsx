import Info from '../Layouts/Info';
import About from '../Layouts/About';
import Resume from '../Layouts/Resume';
import Portfolio from '../Layouts/Portfolio';
import Blog from '../Layouts/Blog';
import Contact from '../Layouts/Contact';
import { useState } from 'react';
import { Head } from '@inertiajs/inertia-react';

function Welcome() {
  const [navbar , setNavbar] = useState('About');


  const changeNavbar = (e) => {
    setNavbar(e.target.name)
  }

  return (
    <main>
      <Head>
      <title>{navbar}</title>
      </Head>
      <Info />
      <div className="main-content">
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <button className={`navbar-link ${navbar === 'About' ? 'active':''}`} name="About" data-nav-link onClick={(e) => changeNavbar(e)} >About</button>
            </li>
            <li className="navbar-item">
              <button className={`navbar-link ${navbar === 'Resume' ? 'active':''}`} name="Resume" data-nav-link onClick={(e) => changeNavbar(e)} >Resume</button>
            </li>
            <li className="navbar-item">
              <button className={`navbar-link ${navbar === 'Portfolio' ? 'active':''}`} name="Portfolio" data-nav-link onClick={(e) => changeNavbar(e)} >Portfolio</button>
            </li>

            <li className="navbar-item">
              <button className={`navbar-link ${navbar === 'Blog' ? 'active':''}`} name="Blog" data-nav-link onClick={(e) => changeNavbar(e)} >Blog</button>
            </li>
            <li className="navbar-item">
              <button className={`navbar-link ${navbar === 'Contact' ? 'active':''}`} name="Contact" data-nav-link onClick={(e) => changeNavbar(e)} >Contact</button>
            </li>
          </ul>
        </nav>
        { navbar === 'About' ? <About />: ''}
        { navbar === 'Resume' ? <Resume />: ''}
        { navbar === 'Portfolio' ? <Portfolio />: ''}
        { navbar === 'Blog' ? <Blog />: ''}
        { navbar === 'Contact' ? <Contact />: ''}
      </div>
    </main>
  );
}

export default Welcome;
