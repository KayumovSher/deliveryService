import React from "react";

const Footer = () => {
  let d = new Date();
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          Designed &amp; Developed by{" "}
          <a href="https://t.me/kayumovsher02" target="_blank"  rel="noreferrer">
            Weel Developers
          </a>{" "}
          {d.getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
