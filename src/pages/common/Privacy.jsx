import "./Terms.css"; // same styling use kar rahe hain

const Privacy = () => {
  return (
    <div className="terms-wrapper">
      <div className="terms-card">

        <h1 className="terms-title">Privacy Policy</h1>
        <hr />

        <section>
          <h3>Introduction</h3>
          <p>
            ITM Aligarh (“we”, “our”, “us”) is committed to protecting your
            privacy. This Privacy Policy outlines how we collect, use, and
            protect your personal information.
          </p>
        </section>

        <section>
          <h3>Information We Collect</h3>
          <ul>
            <li>
              <b>Personal Information:</b> Name, email address, phone number,
              and other contact details.
            </li>
            <li>
              <b>Usage Data:</b> Information on how you interact with our website.
            </li>
            <li>
              <b>Cookies:</b> Small data files stored on your device to enhance
              your experience.
            </li>
          </ul>
        </section>

        <section>
          <h3>How We Use Your Information</h3>
          <ul>
            <li>To provide and maintain our services.</li>
            <li>To notify you about changes to our services.</li>
            <li>To provide customer support.</li>
            <li>
              To gather analysis or valuable information to improve our services.
            </li>
            <li>To monitor the usage of our services.</li>
            <li>To detect, prevent, and address technical issues.</li>
          </ul>
        </section>

        <section>
          <h3>Sharing Your Information</h3>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to outside parties except to trusted third parties who
            assist us in operating our website, conducting our business, or
            serving our users, provided those parties agree to keep this
            information confidential.
          </p>
        </section>

        <section>
          <h3>Security of Your Information</h3>
          <p>
            We implement a variety of security measures to maintain the safety
            of your personal information. However, no method of transmission
            over the internet or electronic storage is 100% secure.
          </p>
        </section>

        <section>
          <h3>Your Data Protection Rights</h3>
          <p>
            You have the right to access, correct, or delete your personal
            information. You also have the right to object to or restrict
            certain types of processing of your personal information.
          </p>
        </section>

        <section>
          <h3>Changes to This Privacy Policy</h3>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
        </section>

        <section>
          <h3>Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at: <b>info@edumatrixgroup.com</b>
          </p>
        </section>

      </div>
    </div>
  );
};

export default Privacy;