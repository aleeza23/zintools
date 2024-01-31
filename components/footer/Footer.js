import React from "react";
import {FaYoutube} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";
import {MdOutlineDarkMode} from "react-icons/md";

const Footer = () => {
  return (
    <>
      <section
        className='main-container '
        style={{backgroundColor: "#f1f3f4", marginTop: "8rem"}}
      >
        <footer>
          <div className='footer__head'>
            <h1 style={{fontWeight: "bold"}}>Follow us </h1>
            <FaYoutube />
            <FaTwitter />
            <FaFacebookF />
          </div>
          <hr />
          <div className='footer__grid_container'>
            <div>
              <h3 style={{paddingBottom: "1.5rem", fontWeight: "bold"}}>
                Internal Links
              </h3>
              <ul style={{display: "flex", flexDirection: "column"}}>
                <li>
                  <a
                    style={{padding: "0.5rem 0", display: "block"}}
                    href='/documentaries/'
                  >
                    Documentaries
                  </a>
                </li>
                <li>
                  <a
                    style={{padding: "0.5rem 0", display: "block"}}
                    href='/themes/'
                  >
                    Themes
                  </a>
                </li>
                <li>
                  <a style={{padding: "0.5rem 0", display: "block"}} href='#'>
                    Chrome casts
                  </a>
                </li>
              </ul>
            </div>

            {/* col 2 */}
            <div>
              <h3 style={{paddingBottom: "1.5rem", fontWeight: "bold"}}>
                Enterprise
              </h3>
              <ul style={{display: "flex", flexDirection: "column"}}>
                <li>
                  <a style={{padding: "0.5rem 0", display: "block"}} href='#'>
                    Download Chrome Browser
                  </a>
                </li>
                <li>
                  <a style={{padding: "0.5rem 0", display: "block"}} href='#'>
                    Chrome Browser for Enterprise
                  </a>
                </li>
                <li>
                  <a style={{padding: "0.5rem 0", display: "block"}} href='#'>
                    Chrome Browser Devices
                  </a>
                </li>
                <li>
                  <a style={{padding: "0.5rem 0", display: "block"}} href='#'>
                    ChromeOS
                  </a>
                </li>
                <li>
                  <a style={{padding: "0.5rem 0", display: "block"}} href='#'>
                    Google Cloud
                  </a>
                </li>
                <li>
                  <a style={{padding: "0.5rem 0", display: "block"}} href='#'>
                    Google Workspace
                  </a>
                </li>
              </ul>
            </div>

            {/* col 3 */}
            <div>
              <h3 style={{paddingBottom: "1.5rem", fontWeight: "bold"}}>
                Internal Links
              </h3>
              <ul style={{display: "flex", flexDirection: "column"}}>
                <li>
                  <a
                    style={{padding: "0.5rem 0", display: "block"}}
                    href='/documentaries/'
                  >
                    Documentaries
                  </a>
                </li>
                <li>
                  <a
                    style={{padding: "0.5rem 0", display: "block"}}
                    href='/themes/'
                  >
                    Themes
                  </a>
                </li>
                <li>
                  <a style={{padding: "0.5rem 0", display: "block"}} href='#'>
                    Chrome casts
                  </a>
                </li>
              </ul>
            </div>

            {/* col 4 */}
            <div>
              <h3 style={{paddingBottom: "1.5rem", fontWeight: "bold"}}>
                Enterprise
              </h3>
              <ul style={{display: "flex", flexDirection: "column"}}>
                <li>
                  <a style={{padding: "0.5rem 0", display: "block"}} href='#'>
                    Download Chrome Browser
                  </a>
                </li>
                <li>
                  <a style={{padding: "0.5rem 0", display: "block"}} href='#'>
                    Chrome Browser for Enterprise
                  </a>
                </li>
                <li>
                  <a style={{padding: "0.5rem 0", display: "block"}} href='#'>
                    Chrome Browser Devices
                  </a>
                </li>
                <li>
                  <a style={{padding: "0.5rem 0", display: "block"}} href='#'>
                    ChromeOS
                  </a>
                </li>
                <li>
                  <a style={{padding: "0.5rem 0", display: "block"}} href='#'>
                    Google Cloud
                  </a>
                </li>
                <li>
                  <a style={{padding: "0.5rem 0", display: "block"}} href='#'>
                    Google Workspace
                  </a>
                </li>
              </ul>
            </div>

            {/* col 5 */}
            <div>
              <h3 style={{paddingBottom: "1.5rem", fontWeight: "bold"}}>
                Internal Links
              </h3>
              <ul style={{display: "flex", flexDirection: "column"}}>
                <li>
                  <a
                    style={{padding: "0.5rem 0", display: "block"}}
                    href='/documentaries/'
                  >
                    Documentaries
                  </a>
                </li>
                <li>
                  <a
                    style={{padding: "0.5rem 0", display: "block"}}
                    href='/themes/'
                  >
                    Themes
                  </a>
                </li>
                <li>
                  <a style={{padding: "0.5rem 0", display: "block"}} href='#'>
                    Chrome casts
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr />
          <div className='footer__bottom'>
            <div className='footer__bottom_content'>
              <h1 style={{fontWeight: "bold", fontSize: "1.3rem"}}>
                Similar <span className='footer__bottom_btn'>Watch</span>
              </h1>
              <ul class='md:flex bottom__list  gap-5'>
                <li>
                  <a
                    style={{padding: "0.5rem 0", display: "block"}}
                    href='/documentaries/'
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    style={{padding: "0.5rem 0", display: "block"}}
                    href='/themes/'
                  >
                    Terms and conditions
                  </a>
                </li>
                <li>
                  <a style={{padding: "0.5rem 0", display: "block"}} href='#'>
                    Cookies Policy
                  </a>
                </li>
                <li>
                  <a style={{padding: "0.5rem 0", display: "block"}} href='#'>
                    About us
                  </a>
                </li>
                <li>
                  <a style={{padding: "0.5rem 0", display: "block"}} href='#'>
                    EULA
                  </a>
                </li>
                <li>
                  <a style={{padding: "0.5rem 0", display: "block"}} href='#'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* theme change btn */}
            <button className='dark__mood_btn'>
              <MdOutlineDarkMode style={{fontSize: "1.4rem"}} />
            </button>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
