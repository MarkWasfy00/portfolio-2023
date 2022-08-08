import React, { useState } from 'react'
import { useForm } from '@inertiajs/inertia-react';
import axios from 'axios';

const Contact = () => {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [message , setMessage] = useState('');
    const [sent , setSent] = useState({type:'none'});
    const [loading , setLoading] = useState(false);


    const submit = async (e) => {
        e.preventDefault()
        setLoading(true);
        axios.post('/',{
            name,
            email,
            message
        })
        .then(response => {
            setName('');
            setEmail('');
            setMessage('');
            setSent({type:'sent'});
            setLoading(false);
        })
        .catch((err) => {
            setSent({type:'error' , msg:err.response.data.message });
            setLoading(false);
        })
        
    }

  return (
    <>
    <article className="contact active" data-page="contact">

        <header>
            <h2 className="h2 article-title">Contact</h2>
        </header>

        <section className="mapbox" data-mapbox>
            <figure>
                <iframe
                src="https://maps.google.com/maps?q=alexandria&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="400" height="300" loading="lazy"></iframe>
            </figure>
        </section>

        <section className="contact-form">
            <h3 className="h3 form-title">Contact Form</h3>
            <form className="form" onSubmit={submit} data-form>

            <div className="input-wrapper">
                
                <input type="text" name="fullname" className="form-input" placeholder="Full name" onChange={e => setName(e.target.value)} value={name} required data-form-input />
            
                <input type="email" name="email" className="form-input" placeholder="Email address" onChange={e => setEmail(e.target.value)} value={email} required data-form-input />
            </div>  

                <textarea name="message" className="form-input" placeholder="Your Message" onChange={e => setMessage(e.target.value)} value={message} required data-form-input></textarea>

                <button className="form-btn" disabled={loading} type="submit" data-form-btn>
                    <ion-icon name="paper-plane"></ion-icon>
                    <span>Send Message</span>
                </button>
            </form>
            {sent.type === 'sent' ? <div className='success-msg'>Message has successfully sent ! </div> : ""}
            {sent.type === 'error' ? <div className='error-msg'>{sent.msg}</div> : ""}
        </section>

    </article>
    </>
  )
}

export default Contact