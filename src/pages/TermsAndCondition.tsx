import Footer from "../components/Footer";
import HeaderBlack from "../components/Header-black";

const TermsAndCondition = () => {
  return (
    <>
      <HeaderBlack />
      <main className="politics">
        <div className="container">
          <div className="politics-title">
            <h2>Privacy Policy</h2>
            <p>Last Updated: [last update date]</p>
          </div>
          <div className="politics-content">
            <div className="politics-info">
              <h3>Information We Collect:</h3>
              <ul>
                <li>
                  Personal Data: We may collect your personal information, such
                  as name, contact details, address, and payment details, to the
                  extent necessary for effective interaction within the car
                  sales and ordering process.
                </li>
                <li>
                  Usage Information: We may automatically collect information
                  about your interaction with our website, including page views,
                  access time, and other statistical data.
                </li>
              </ul>
            </div>
            <div className="politics-usage">
              <h3>Use of Collected Information:</h3>
              <ul>
                <li>
                  Orders and Service: We use your data to process orders, ensure
                  delivery, and provide timely service.
                </li>
                <li>
                  Communication: We may use your contact information to send you
                  important notifications and information about your order.
                </li>
                <li>
                  Service Improvement: We strive to constantly improve the
                  quality of our services and use statistical information about
                  website usage for this purpose.
                </li>
              </ul>
            </div>
      
            <div className="politics-third">
              <h3>Disclosure to Third Parties:</h3>
              <ul>
                <li>
                  We do not sell, exchange, or transfer your personal
                  information to third parties without your consent, except as
                  required by law.
                </li>
              </ul>
            </div>
            <div className="politics-cookies">
              <h3>Cookies and Tracking Technologies:</h3>
              <ul>
                <li>
                  We may use cookies and similar technologies to improve the
                  usability of the website and collect information about your
                  preferences.
                </li>
              </ul>
            </div>
       
            <div className="politics-agreement">
              <h3>
                By continuing to use our website, you agree to the terms of our
                Privacy Policy.
              </h3>
              <h3>
                If you have any questions or concerns regarding our Privacy
                Policy, please contact us at: [your contact email].
              </h3>
              <h3>Thank you for choosing us, Neforward.</h3>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsAndCondition;
