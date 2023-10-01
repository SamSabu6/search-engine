import React from "react";
import "./Footer.css";

const Footer = () => {
  // Renders the footer of the page.
  return (
    <footer className="footer">
      <div className="location_text">India</div>
      <div className="footer_content">
        <div className="footerlinks_left">
          <a href="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1">
            About
          </a>
          <a href="https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">
            Advertising
          </a>
          <a href="https://www.google.com/intl/en_in/business/">Business</a>
          <a href="https://www.google.com/search/howsearchworks/?fg=1">
            How Search Works
          </a>
        </div>
        <div className="footerlinks_right">
          <a href="https://policies.google.com/privacy?hl=en-IN&fg=1">
            Privacy
          </a>
          <a href="https://policies.google.com/terms?hl=en-IN&fg=1">Terms</a>
          <a href="https://www.google.com/preferences?hl=en-IN&fg=1">
            Settings
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
