const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-title">
            <h3>Contact Us</h3>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519394.168745045!2d16.496025922864924!3d51.92764459108031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47009964a4640bbb%3A0x97573ca49cc55ea!2sPoland!5e0!3m2!1sen!2skg!4v1705745897539!5m2!1sen!2skg"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact-info">
            <div className="street">
              <h2>Dr. Ing. h.c. F. Porsche AG Porscheplatz 1</h2>
            </div>
            <div className="contact-number">
              <h6>+1(888) 369-9904</h6>
              <p>Mon-Sun 10:00 AM - 9:00 PM</p>
            </div>
            <div className="contact-mail">
              <h4>info@porschedrive.us</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
