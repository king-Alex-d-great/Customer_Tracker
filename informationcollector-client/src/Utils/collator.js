import axios from "axios";

export default async function collate(){
    const ip = await axios
      .get("https://api.ipify.org?format=json")
      .then((response) => {
        return (response.data.ip);
      })
      .catch((error) => {
        console.log(error);
      });

    // Get user language
    const language = navigator.language;   

    // Determine whether the visitor is on a desktop device or a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);   

    // Track whether the client allowed cookies
    const hasCookies = navigator.cookieEnabled;

    // Determine the dimensions of the browser (e.g. 1792x1120 pixels)
    const screen = window.screen;

    // Get
    const userAgent = navigator.userAgent;    

    let browser = "";
    let browsers = ["chrome", "firefox", "safari", "opera", "msie", "trident","egde", "brave"];
    for (let _browser of browsers) {
      if (userAgent.toLowerCase().indexOf(_browser) > 0) {
        browser = _browser;
        break;
      }
    }

    return {ip, language, isMobile, hasCookies, screen, browser}
}