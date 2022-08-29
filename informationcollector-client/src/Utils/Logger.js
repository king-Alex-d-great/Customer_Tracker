const fs = require("fs");

const trackRecord = async (details) => {
  
  const { ip, language, isMobile, hasCookies, dimension, browser } = details;

  console.log(details, "Scrren")
  fs.appendFileSync(
    "CustomersRecord.csv",
    `
    -----------------------------
    TimeStamp: ${new Date()}
    Ip-Address: ${ip}
    Language:${language}
    IsMobile:${isMobile}
    HasCookies: ${hasCookies}
    Screen: ${dimension}
    Browser: ${browser}
    -----------------------------
    \n\n`
  );
};

module.exports = { trackRecord };
