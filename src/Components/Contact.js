import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section id="contact">
            <p>Get in Touch with me</p>
            <h1>Contact</h1>

            <div class="note">
                <h2>SEND US A NOTE</h2>
                <form action="">
                    <div class="form-group">
                        <input type="text" name="name" id="name" placeholder="Name" />
                            <input type="email" name="name" id="email" placeholder="E-mail" />
                                <div class="text">
                                    <input type="text" name="name" id="text" placeholder="Tell us more you need......" />
                                </div>
                                <div className= "but">
                                    <button class="btn"><a href="#">Send &nbsp; Message</a></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                );
}

                export default Contact;
