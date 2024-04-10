import React from "react";
import AdSense from "react-adsense";

const MyAd = () => (
  <div>
    <AdSense.Google
      client="pub-1234567890123456"
      slot="2335003468"
      style={{ display: "none" }}
      format="auto"
      responsive="true"
    />
  </div>
);

export default MyAd;
