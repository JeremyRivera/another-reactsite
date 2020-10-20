import React from 'react';
import './styles.css';
import { Button } from '../Button';


function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Email Me let's get started!
        </p>
                <p className='footer-subscription-text'>
                    Ready to make your ideas come to Life!
        </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                        <p>Subscribe above to get alerts everytime I make a new open source project</p>
                    </form>
                </div>

            </section>

            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>

                    </div>


                    <div class='footer-link-items'>
                        <h2>Contact Me</h2>
                    </div>


                    <div class='social-icons'>

                        <div className="social-logo" >
                            <a href="https://www.linkedin.com/in/jeremyrivera23/">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </div>
                        <div className="social-logo" >
                            <a href="https://github.com/JeremyRivera">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                        <div className="social-logo" >
                            <a href="https://www.instagram.com/itsjeremyrivera/">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class='website-rights'>JRIVERA © 2020</div>
            </section >
        </div >

    );
}

export default Footer;


