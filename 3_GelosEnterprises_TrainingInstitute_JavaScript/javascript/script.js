// Slider Functionality
let slider_img = document.querySelector(".slider-img");
let images = ["1.png", "2.png", "3.png"];
let index = 0;

function prev() {
    if (index <= 0) index = images.length;
    index--;
    setImg();
}

function next() {
    if (index >= images.length - 1) index = -1;
    index++;
    setImg();
}

function setImg() {
    slider_img.setAttribute("src", "img/" + images[index]);
}

// Form Validation
function validateForm() {
    let errors = [];
    
    // Get form values
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorMessages = document.getElementById("errorMessages");

    // Reset error messages
    errorMessages.textContent = "";

    // Capitalize the first letter of First Name and Last Name on each input change
    firstNameInput.value = capitalizeName(firstNameInput.value);
    lastNameInput.value = capitalizeName(lastNameInput.value);

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;

    // Validate First Name and Last Name
    if (!firstName || !lastName) {
        errors.push("First Name and Last Name are required.");
    }

    if (!/^[a-zA-Z\s]+$/.test(firstName) || !/^[a-zA-Z\s]+$/.test(lastName)) {
        errors.push("First Name and Last Name must contain only letters.");
    }

    // 2. Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        errors.push('Please enter a valid email address.');
    }

    // 3. Validate Mobile Number starts with "04"
    const mobileRegex = /^04\d{8}$/;
    if (!mobileRegex.test(mobile)) {
        errors.push('Mobile number must be 10 digits and start with 04.');
    }

    // 4. Check Message Length should be less than 300 characters
    if (message.length > 300) {
        errors.push("Message cannot exceed 300 characters.");
    }

    // 5. Display Errors in red color - to stop missing details
    if (errors.length > 0) {
        errorMessages.innerHTML = errors.join('<br>');
        return false;
    }

    // If everything is valid, clear the error messages and alert success
    errorMessages.innerHTML = ''; 
    alert('Form submitted successfully!');
    return true;
}

// Function to capitalize the first letter of each word
function capitalizeName(name) {
    return name
        .toLowerCase()
        .replace(/\b\w/g, char => char.toUpperCase());
}

// Capitalize names as the user types
document.getElementById("firstName").addEventListener("input", function() {
    this.value = capitalizeName(this.value);
});

document.getElementById("lastName").addEventListener("input", function() {
    this.value = capitalizeName(this.value);
});
