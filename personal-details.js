//Handler functions

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

//Contact Information

window.addEventListener('load', function() {
    const personalDetails = {
        name: "Abrahm Rollins",
        positionTitle: "Front End Developer",
        professionalSummary: "I am a Front End Developer with 5 years of experience in building responsive websites and web applications. I specialize in front-end technologies including HTML, CSS, JavaScript, and ReactJS. I am passionate about creating user-friendly and visually appealing websites that provide a seamless user experience.",
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
    setTextContent('.applicant-name', personalDetails.name);
    setTextContent('.position-title', personalDetails.positionTitle);
    setTextContent('.professional-summary', personalDetails.professionalSummary);


    setHref('.github-profile', personalDetails.github.url);
    setHref('.linkedin-profile', personalDetails.linkedin.url);

    //Education Information

    const educationContainer = document.getElementById('education-container');

    const education = {
        degreeOne: {
            school: "Western Washington University",
            degree: "Bachelor of Arts",
            major: "Economics",
            graduationDate: "2015",
        },
        degreeTwo : {
            school: "Everett Community College",
            degree: "Associate of Sciences",
            major: "Mathematics",
            graduationDate: "2013",
        }
    };


    Object.keys(education).forEach((degree) => {
        const degreeDetails = education[degree];

        const degreeHtml = `
            <div class="degree">
                <div class="degree-upper">
                    <span class="bolded degree-name">${degreeDetails.degree}</span>
                    <span class="major">${degreeDetails.major}</span>
                </div>
                <div class="degree-lower">
                    <span class="school-location">${degreeDetails.school}</span>
                    <span class="graduation-year">${degreeDetails.graduationDate}</span>
                </div>
            </div>
        `;

        educationContainer.innerHTML += degreeHtml;
    });
});