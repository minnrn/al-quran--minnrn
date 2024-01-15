import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-center py-7 bg-gray-800 text-white text-sm">
      <p>© {currentYear} i-Recite. All Rights Reserved ♥ by Kibieptr</p>
    </footer>
  );
};

export default React.memo(Footer);
