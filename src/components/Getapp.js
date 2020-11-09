import React from 'react';

import phones from '../images/Phones.png';
import Mailchimp from 'react-mailchimp-form'

function Getapp() {
  return (
    <section className="getapp" id="getapp">
      <div className="wrapper">
        <div className="information">
          <h2>Ready to achieve Peak Performance?</h2>
          <p className="sub-title">The Peak Performance Skating app will be availble on Google Play for Android phones soon. For less than $20 you will get the same mental training that Brian teaches his world champion & Olympic gold medalist skaters.</p>
        </div>
        <div className="download">
          <img src={phones} className="phones" alt="phones featuring tPeak Performance Skating" />
          <div className="app-info">
            <h3>Join the Waitlist</h3>
            <p>Sign up to be one of the first to know about realease dates.</p>
            <Mailchimp
              action='https://gmail.us2.list-manage.com/subscribe/post?u=adcb8d28dc6fa9a08f1d295bb&amp;id=2e825f8a86'
              fields={[
                {
                  name: 'EMAIL',
                  placeholder: 'Email',
                  type: 'email',
                  required: true
                }
              ]}
              messages={
                {
                  sending: "Sending...",
                  success: "Thank you for subscribing!",
                  error: "An unexpected internal error has occurred.",
                  empty: "You must write an e-mail.",
                  duplicate: "Too many subscribe attempts for this email address",
                  button: "Subscribe"
                }
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Getapp;