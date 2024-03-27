function setTextContent(selector, value) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = value;
    }
}

function setHref(selector, value) {
    const element = document.querySelector(selector);
    if (element) {
        element.setAttribute('href', value);
    }
}


window.addEventListener('load', function() {
    const personalDetails = {
        phoneNumber: "phone Number",
        email: "email",
        github: {
            username: "github.com/OneWaterboy",
            url: "https://github.com/OneWaterboy",
        },
        linkedin: {
            username: "in/abrahmrollins",
            url: "https://linkedin.com/in/abrahmrollins",
        }
    };

    setTextContent('.phone-number', personalDetails.phoneNumber);
    setTextContent('.email-address', personalDetails.email);
    setTextContent('.linkedin-profile', personalDetails.linkedin.username);
    setTextContent('.github-profile', personalDetails.github.username);

    setHref('.github-profile', personalDetails.github.url);
    setHref('.linkedin-profile', personalDetails.linkedin.url);
});
