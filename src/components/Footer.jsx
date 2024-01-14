import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-center py-7 bg-emerald-600 text-white">
      <p>© {currentYear} i-Recite. All Rights Reserved ♥ by Kibieptr</p>
    </footer>
  );
};

export default React.memo(Footer);
