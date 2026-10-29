document.addEventListener("DOMContentLoaded", function () {
    // Save the original page styles
    const body = document.body;
    const header = document.querySelector("header");

    // Helper function to connect buttons to actions
    function onClick(id, action) {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener("click", action);
        }
    }

    // 1. Change background color
    onClick("changeColorButton", function () {
        const colors = ["#e3f2fd", "#e8f5e9", "#fff3e0", "#f3e5f5", "#ffffff"];
        body.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];
    });

    // 2. Change text
    onClick("changeTextButton", function () {
        const heading = document.querySelector("header h1");
        if (heading) {
            heading.textContent =
                heading.textContent === "Michael's Portfolio"
                    ? "Welcome to My IT World!"
                    : "Michael's Portfolio";
        }
    });

    // 3. Change image
    onClick("changeImageButton", function () {
        let img = document.getElementById("portfolioImage");

        if (!img) {
            img = document.createElement("img");
            img.id = "portfolioImage";
            img.alt = "Michael's portfolio image";
            img.style.width = "200px";
            img.style.display = "block";
            img.style.margin = "20px auto";
            header.appendChild(img);
        }

        img.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500";
    });

    // 4. Reset page appearance
    onClick("resetButton", function () {
        body.style.backgroundColor = "";
        body.style.color = "";
        body.style.fontFamily = "";
        body.style.fontSize = "";
        body.style.padding = "";
        body.style.margin = "";
        body.style.opacity = "";
        body.style.textAlign = "";
        body.style.border = "";
        body.style.boxShadow = "";
        body.style.transform = "";
        body.style.transition = "";
        body.style.animation = "";

        document.querySelectorAll("section").forEach(function (section) {
            section.style.border = "";
            section.style.padding = "";
            section.style.margin = "";
        });
    });

    // 5. Change font
    onClick("changeFontButton", function () {
        const fonts = ["Arial", "Georgia", "Verdana", "Courier New"];
        const current = body.style.fontFamily;
        const index = fonts.indexOf(current);
        body.style.fontFamily = fonts[(index + 1) % fonts.length];
    });

    // 6. Change font size
    onClick("changeFontSizeButton", function () {
        const sizes = ["16px", "18px", "22px", "26px"];
        const current = body.style.fontSize;
        const index = sizes.indexOf(current);
        body.style.fontSize = sizes[(index + 1) % sizes.length];
    });

    // 7. Change text color
    onClick("changeTextColorButton", function () {
        const colors = ["#1565c0", "#c62828", "#2e7d32", "#6a1b9a"];
        const current = body.style.color;
        const index = colors.indexOf(current);
        body.style.color = colors[(index + 1) % colors.length];
    });

    // 8. Change border
    onClick("changeBorderButton", function () {
        document.querySelectorAll("section").forEach(function (section) {
            section.style.border =
                section.style.border ? "" : "3px solid #1565c0";
        });
    });

    // 9. Change padding
    onClick("changePaddingButton", function () {
        document.querySelectorAll("section").forEach(function (section) {
            section.style.padding =
                section.style.padding ? "" : "30px";
        });
    });

    // 10. Change margin
    onClick("changeMarginButton", function () {
        document.querySelectorAll("section").forEach(function (section) {
            section.style.margin =
                section.style.margin ? "" : "30px";
        });
    });

    // 11. Change alignment
    onClick("changeAlignmentButton", function () {
        const alignments = ["left", "center", "right", "justify"];
        const current = body.style.textAlign;
        const index = alignments.indexOf(current);
        body.style.textAlign = alignments[(index + 1) % alignments.length];
    });

    // 12. Change opacity
    onClick("changeOpacityButton", function () {
        const values = ["1", "0.8", "0.6", "0.9"];
        const current = body.style.opacity;
        const index = values.indexOf(current);
        body.style.opacity = values[(index + 1) % values.length];
    });

    // 13. Change shadow
    onClick("changeShadowButton", function () {
        if (!header) return;
        header.style.boxShadow = header.style.boxShadow
            ? ""
            : "0 8px 20px rgba(0,0,0,0.25)";
    });

    // 14. Change hover effect
    onClick("changeHoverButton", function () {
        document.querySelectorAll("button").forEach(function (button) {
            button.classList.toggle("hover-effect");
        });
    });

    // 15. Change transition
    onClick("changeTransitionButton", function () {
        body.style.transition = body.style.transition
            ? ""
            : "all 1s ease-in-out";
        if (header) {
            header.style.transition = "all 1s ease-in-out";
        }
    });

    // 16. Change transform
    onClick("changeTransformButton", function () {
        if (!header) return;
        header.style.transform =
            header.style.transform ? "" : "scale(0.97)";
    });

    // 17. Change animation
    onClick("changeAnimationButton", function () {
        if (!header) return;
        header.classList.toggle("animated-header");
    });

    // 18. Welcome button
    onClick("welcomeButton", function () {
        alert("Welcome to Michael's IT Portfolio!");
    });

    // 19. Goals button (Fixed Syntax)
    onClick("goalButton", function () {
        alert(
            "My Goals:\n" +
            "1. Become a skilled software developer.\n" +
            "2. Build useful IT solutions.\n" +
            "3. Continue learning new technologies."
        );
    });

    // 20. Contact button
    onClick("contactButton", function () {
        const contact = document.getElementById("contact");
        if (contact) {
            contact.scrollIntoView({ behavior: "smooth" });
        } else {
            alert("Contact section is not available yet.");
        }
    });

    // 21. Show message button
    onClick("alertButton", function () {
        alert("Thank you for visiting Michael's Portfolio!");
    });

    // Dark Mode Toggle Button Integration
    const darkModeBtn = document.getElementById("darkModeBtn");
    if (darkModeBtn) {
        darkModeBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }
});

// Student & Academic Info Console Logs
let studentName = "Michael";
let studentAge = 25;
let course = "Bachelor of science in information technology";
console.log(studentName);
console.log(studentAge);
console.log(course);

let marks = 85;
let passed = true;
let skills = ["JavaScript", "HTML", "CSS", "Python"];
console.log(marks);
console.log(passed);
console.log(skills);

let a = 20;
let b = 10;
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);

// Exam Pass/Fail Conditionals
{
    let marks = 85;
    if (marks >= 50) {
        console.log("You passed the exam!");
    } else {
        console.log("You failed the exam.");
    }
}

// Student Grading System
{
    let student = "Michael";
    let marks = 85;

    if (marks >= 70) {
        console.log(student + ": Grade A");
    } else if (marks >= 60) {
        console.log(student + ": Grade B");
    } else if (marks >= 50) {
        console.log(student + ": Grade C");
    } else {
        console.log(student + ": Needs improvement");
    }
}

// Calculator Function (Fixed Division Bug)
function calculate(operator) {
    const firstInput = document.getElementById("firstNumber");
    const secondInput = document.getElementById("secondNumber");
    const resultDiv = document.getElementById("result");

    if (!firstInput || !secondInput || !resultDiv) return;

    if (firstInput.value.trim() === "" || secondInput.value.trim() === "") {
        resultDiv.textContent = "Please enter both numbers.";
        return;
    }

    const num1 = Number(firstInput.value);
    const num2 = Number(secondInput.value);
    let result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            resultDiv.textContent = "Error: Division by zero is not allowed.";
            return;
        }
        result = num1 / num2; // Fixed: now assigned properly
    }

    resultDiv.textContent = result;
}

// Contact Form Handler
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const status = document.getElementById("formStatus");
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            status.textContent = "Please fill in all fields.";
            return;
        }

        status.textContent = "Sending message...";

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: new FormData(contactForm),
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {
                status.textContent = "Thank you! Your message was sent successfully.";
                contactForm.reset();
            } else {
                status.textContent = "Message could not be sent. Please check your Formspree setup.";
            }
        } catch (error) {
            status.textContent = "Connection error. Please check your internet and try again.";
        }
    });
}