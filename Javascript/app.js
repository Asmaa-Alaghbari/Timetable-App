// app.js

// The Days of the Week
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// The Months of the Year
const monthOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/********************
 * Open the Sidenav *
 ********************/
function openNav() {
  document.getElementById("sidenav").style.width = "30%";
}

/*********************
 * Close the Sidenav *
 *********************/
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}

/*******************************************
 * Display the current date, day, and time *
 *******************************************/
function todayCurrent() {
  const currentDayElement = document.getElementById("currentDay");
  const currentDateElement = document.getElementById("currentDate");
  const currentTimeElement = document.getElementById("currentTime");

  // Get the current date
  const now = new Date();

  // Get the day of the week (0 (Sunday) - 6 (Saturday))
  const today = now.getDay();

  // Get the current day name
  const currentDayName = daysOfWeek[today];

  // Get the current time in 24-hour format (HH:mm)
  const currentTime = now.toLocaleTimeString("en-US", { hour12: false });

  // Get the current date format
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = now.toLocaleDateString("en-US", options);

  // Display them
  currentDayElement.textContent = currentDayName;
  currentTimeElement.textContent = `${currentTime}`;
  currentDateElement.textContent = `${formattedDate}`;
}

/*************************************
 * Insert a new row in the timwtable *
 *************************************/
function insertNewRow() {
  // Get the schedule table
  const scheduleTable = document.querySelector(".schedules table");

  // Create a new row (tr element)
  const newRow = document.createElement("tr");

  // Add the row content with its cells (td elements)
  newRow.innerHTML = `
    <td><input type="time" value="00:00" /></td>
    <td><input type="textarea" placeholder="____________________" /></td>
    <td><input type="button" value="Delete" class="delete-button" onclick="deleteRow(this)" /></td>
  `;

  // Append the new row to the schedule table
  scheduleTable.appendChild(newRow);
}

/********************************************
 * Delete a selected row from the timetable *
 ********************************************/
function deleteRow(event) {
  // Get the row element (parent of the "Delete" button)
  const rowToDelete = event.closest("tr");

  // Remove the row from the table
  rowToDelete.remove();
}

/**************************************
 * Delete all rows from the timetable *
 **************************************/
function deleteAllRows() {
  const scheduleTable = document.querySelector(".schedules table");

  // Remove all rows from the table
  while (scheduleTable.firstChild) {
    scheduleTable.removeChild(scheduleTable.firstChild);
  }
}

/*****************************
 * Change the tables; color  *
 *****************************/
function tableColorSet() {
  const colorInput = document.getElementById("tableColor");

  colorInput.addEventListener("input", function () {
    const selectedColor = colorInput.value;

    // Elements to change the color
    const elementsToChangeColor = [
      document.querySelector(".schedules"),
      document.querySelector(".things-to-do"),
      document.querySelector(".money-data"),
      document.querySelector(".quote-of-day"),
    ];

    // Apply the selected color to each element
    elementsToChangeColor.forEach((element) => {
      element.style.backgroundColor = selectedColor;
    });
  });
}

/*********************************
 * Change the tables' text color *
 *********************************/
function textColorSet() {
  // Retrieve the color input element for text color
  const colorInput = document.getElementById("textColor");

  colorInput.addEventListener("input", function () {
    const selectedColor = colorInput.value;

    // Elements to change the input color
    const elementsToChangeInputColor = [
      ...document.querySelectorAll(".schedules input"),
      ...document.querySelectorAll(".things-to-do input"),
      ...document.querySelectorAll(".things-to-do textarea"),
      ...document.querySelectorAll(".money-data input"),
      ...document.querySelectorAll(".money-data td"),
      ...document.querySelectorAll(".money-data textarea"),
      ...document.querySelectorAll(".quote-of-day p"),
    ];

    // Apply the selected color to the input elements
    elementsToChangeInputColor.forEach((inputElement) => {
      // Exclude delete button text from the color change
      if (inputElement.type !== "button") {
        inputElement.style.color = selectedColor;
      }
    });
  });
}

/**************************************
 * Reset the tables' data to defaults *
 **************************************/
function resetData() {
  const scheduleTable = document.querySelector(".schedules table");

  // Remove all rows from the table
  deleteAllRows();

  // Add the default rows to the table
  const defaultRow = 5;
  for (let i = 0; i < defaultRow; i++) {
    insertNewRow();
  }

  // Reset the table color to the default one
  const defaultTableColor = "#ffffff";
  const elementsToResetTableColor = [
    ...document.querySelectorAll(".schedules"),
    ...document.querySelectorAll(".things-to-do"),
    ...document.querySelectorAll(".money-data"),
    ...document.querySelectorAll(".quote-of-day"),
  ];

  elementsToResetTableColor.forEach((element) => {
    element.style.backgroundColor = defaultTableColor;
  });

  // Reset the text color of the input elements to black
  const defaultTextColor = "#011f3c";
  const elementsToResetTextColor = [
    ...document.querySelectorAll(".schedules input"),
    ...document.querySelectorAll(".things-to-do input"),
    ...document.querySelectorAll(".things-to-do textarea"),
    ...document.querySelectorAll(".money-data input"),
    ...document.querySelectorAll(".money-data td"),
    ...document.querySelectorAll(".money-data textarea"),
    ...document.querySelectorAll(".quote-of-day p"),
  ];

  elementsToResetTextColor.forEach((inputElement) => {
    // Exclude delete button text from the color change
    if (inputElement.type !== "button") {
      inputElement.style.color = defaultTextColor;
    }
  });

  // Reset the color input values to the default ones
  document.getElementById("tableColor").value = defaultTableColor;
  document.getElementById("textColor").value = defaultTextColor;

  // Reset things-to-do data
  const toDoItems = document.querySelectorAll(
    ".things-to-do input[type='textarea']"
  );
  const toDoCheckboxes = document.querySelectorAll(
    ".things-to-do input[type='checkbox']"
  );
  toDoItems.forEach((item) => {
    item.value = "";
  });
  toDoCheckboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  // Reset money data
  const moneyInputs = document.querySelectorAll(
    ".money-data input[type='text'], .money-data input[type='textarea']"
  );
  moneyInputs.forEach((input) => {
    input.value = "";
  });
}

/*********************************************
 * Save data from the table to Local Storage *
 *********************************************/
function saveData() {
  const scheduleTable = document.querySelector(".schedules table");
  const rows = scheduleTable.querySelectorAll("tr");

  // Create an array to store the schedule data
  const scheduleData = [];

  // Extract the schedule data from each row
  rows.forEach((row) => {
    const time = row.querySelector("input[type='time']").value;
    const description = row.querySelector("input[type='textarea']").value;
    scheduleData.push({ time, description });
  });

  // Create an array to store the "things to-do" data
  const toDoData = [];
  const toDoItems = document.querySelectorAll(
    ".things-to-do input[type='textarea']"
  );
  const toDoCheckboxes = document.querySelectorAll(
    ".things-to-do input[type='checkbox']"
  );

  toDoItems.forEach((item, index) => {
    const isChecked = toDoCheckboxes[index].checked;
    toDoData.push({ isTextarea: true, text: item.value, isChecked });
  });

  // Create an array to store the money data
  const moneyData = [];
  const moneyInputs = document.querySelectorAll(
    ".money-data input[type='text'], .money-data input[type='textarea']"
  );

  moneyInputs.forEach((input) => {
    // Check if the element is a textarea or not
    const isTextarea = input.nodeName === "TEXTAREA";
    const text = input.value;
    moneyData.push({ isTextarea, text });
  });

  // Store the schedule, things to-do, and money data in local storage
  localStorage.setItem("scheduleData", JSON.stringify(scheduleData));
  localStorage.setItem("toDoData", JSON.stringify(toDoData));
  localStorage.setItem("moneyData", JSON.stringify(moneyData));

  // Get the selected table and text color value
  const selectedTableColor = document.getElementById("tableColor").value;
  const selectedTextColor = document.getElementById("textColor").value;

  // Store the selected table color and text color in local storage
  localStorage.setItem("tableColor", selectedTableColor);
  localStorage.setItem("selectedColor", selectedTextColor);
}

/********************************
 * Load data from Local Storage *
 ********************************/
function loadData() {
  const scheduleTable = document.querySelector(".schedules table");

  // Retrieve the data from local storage
  const scheduleData = JSON.parse(localStorage.getItem("scheduleData"));
  const toDoData = JSON.parse(localStorage.getItem("toDoData"));
  const moneyData = JSON.parse(localStorage.getItem("moneyData"));

  // Load schedule data
  if (scheduleData) {
    // Clear existing rows in the table
    while (scheduleTable.firstChild) {
      scheduleTable.removeChild(scheduleTable.firstChild);
    }

    // Create new rows and populate them with the saved data
    scheduleData.forEach((item) => {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td><input type="time" value="${item.time}" /></td>
        <td><input type="textarea" value="${item.description}" placeholder="____________________"/></td>
        <td><input type="button" value="Delete" onclick="deleteRow(this)" /></td>
      `;
      scheduleTable.appendChild(newRow);
    });
  }

  // Load things to-do data
  if (toDoData) {
    const toDoItems = document.querySelectorAll(
      ".things-to-do input[type='textarea']"
    );
    const toDoCheckboxes = document.querySelectorAll(
      ".things-to-do input[type='checkbox']"
    );

    toDoItems.forEach((item, index) => {
      item.value = toDoData[index].text;
      toDoCheckboxes[index].checked = toDoData[index].isChecked;
    });
  }

  // Load money data
  if (moneyData) {
    const moneyInputs = document.querySelectorAll(
      ".money-data input[type='text'], .money-data input[type='textarea']"
    );
    moneyInputs.forEach((input, index) => {
      // Check if the data was saved as a textarea
      if (moneyData[index].isTextarea) {
        // Create a new textarea element
        const textarea = document.createElement("textarea");
        textarea.classList.add("checkbox-text");
        textarea.value = moneyData[index].text;
        // Replace the input element with the new textarea
        input.parentNode.replaceChild(textarea, input);
      } else {
        // For regular text inputs, just populate the value
        input.value = moneyData[index].text;
      }
    });
  }

  // Retrieve the selected table color from local storage
  const selectedTableColor = localStorage.getItem("tableColor");
  if (selectedTableColor) {
    // Apply the selected table color to the specified sections
    const elementsToChangeTableColor = [
      ...document.querySelectorAll(".things-to-do"),
      ...document.querySelectorAll(".money-data"),
      ...document.querySelectorAll(".quote-of-day"),
      ...document.querySelectorAll(".schedules"),
    ];

    elementsToChangeTableColor.forEach((element) => {
      element.style.backgroundColor = selectedTableColor;
    });

    // Set the table color input value to the selected color
    document.getElementById("tableColor").value = selectedTableColor;
  }

  // Retrieve the selected color from local storage
  const selectedTextColor = localStorage.getItem("selectedColor");
  if (selectedTextColor) {
    // Apply the selected color to the input elements
    const elementsToChangeInputColor = [
      ...document.querySelectorAll(".schedules input"),
      ...document.querySelectorAll(".things-to-do input"),
      ...document.querySelectorAll(".things-to-do textarea"),
      ...document.querySelectorAll(".money-data input"),
      ...document.querySelectorAll(".money-data td"),
      ...document.querySelectorAll(".money-data textarea"),
      ...document.querySelectorAll(".quote-of-day p"),
    ];

    elementsToChangeInputColor.forEach((inputElement) => {
      // Exclude delete button text from the color change
      if (inputElement.type !== "button") {
        inputElement.style.color = selectedTextColor;
      }
    });

    // Set the color input value to the selected color
    document.getElementById("textColor").value = selectedTextColor;
  }
}

/*********************************
 *  Display the quote of the day *
 *********************************/
function displayRandomQuote() {
  const quoteContainer = document.querySelector(".quote-container");
  const quoteImage = quoteContainer.querySelector(".quote-image");
  const quoteText = quoteContainer.querySelector(".quote-text");
  const quoteAuthor = quoteContainer.querySelector(".quote-author");
  const randomIndex = Math.floor(Math.random() * quotsOfTheDay.length);
  const randomQuote = quotsOfTheDay[randomIndex];

  quoteImage.src = randomQuote.img;
  quoteText.textContent = randomQuote.quote;
  quoteAuthor.textContent = randomQuote.author.toUpperCase();
}

/**************************
 * Open the bubble slider *
 **************************/
function openSlider() {
  // Calculate the maxWidth in pixels
  const maxWidth = (window.innerWidth * maxWidthPercentage) / 100;
  const interval = setInterval(() => {
    if (sliderWidth >= maxWidth) {
      clearInterval(interval);
    } else {
      // Increase the width by 10px
      sliderWidth += 10;
      document.querySelector(".slider-container").style.width =
        sliderWidth + "px";
    }
  }, 10); // 10ms interval for smoother animation
}

/***************************
 * Close the bubble slider *
 ***************************/
function closeSlider() {
  const interval = setInterval(() => {
    if (sliderWidth <= 0) {
      clearInterval(interval);
    } else {
      // Decrease the width by 10px
      sliderWidth -= 10;
      document.querySelector(".slider-container").style.width =
        sliderWidth + "px";
    }
  }, 10); // 10ms interval for smoother animation
}

/**************************
 * Hide the bubble slider *
 **************************/
function hideSlider() {
  document.querySelector(".slider-container").style.width = "0";
}

// Current width of the slider
let sliderWidth = 0;

// Maximum width of the slider as a percentage of the screen width
const maxWidthPercentage = 80;

/****************************
 * Toggle the bubble slider *
 ****************************/
function toggleSlider() {
  if (sliderWidth === 0) {
    openSlider();
  } else {
    closeSlider();
  }
}

/***********************************************************
 * Change the profile picture with the selected one        *
 * @param {*} event "Upload" button *
 ***********************************************************/
function setProfilePic(event) {
  // Prevent the default action of the “Upload” button from occurring
  event.preventDefault();

  const input = document.getElementById("profile-image");
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const profileImg = document.getElementById("profile-img");
      profileImg.src = reader.result;
    };
    reader.readAsDataURL(file);
  }
}

// Set profile picture
document
  .getElementById("upload-profile-pic")
  .addEventListener("click", setProfilePic);

/*********************************************************
 * Save the added information from the profile           *
 * @param {*} event The click event on the "Save" button *
 *********************************************************/
function saveProfile(event) {
  // Prevent the default form submission
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const about = document.querySelector(".message").value;

  // Save the profile picture data
  const profileImg = document.getElementById("profile-img");
  const imgData = profileImg.src;
  localStorage.setItem("profileImg", imgData);

  // Save the profile data to local storage
  const profileData = {
    firstName,
    lastName,
    username,
    email,
    password,
    about,
  };
  localStorage.setItem("profileData", JSON.stringify(profileData));

  // Redirect to the profile.html page after saving
  window.location.href = "/HTMl/profile.html";
}

// Save profile data
document.getElementById("profileForm").addEventListener("submit", saveProfile);

/****************************************************************
 * Load the profile data from the local storage in profile.html *
 ****************************************************************/
function loadProfileData() {
  const profileDataJSON = localStorage.getItem("profileData");
  if (profileDataJSON) {
    const profileData = JSON.parse(profileDataJSON);
    document.getElementById("firstName").value = profileData.firstName;
    document.getElementById("lastName").value = profileData.lastName;
    document.getElementById("username").value = profileData.username;
    document.getElementById("email").value = profileData.email;
    document.getElementById("password").value = profileData.password;
    document.querySelector(".message").value = profileData.about;
  }

  // Load and set the profile picture
  const imgData = localStorage.getItem("profileImg");
  if (imgData) {
    const profileImg = document.getElementById("profile-img");
    profileImg.src = imgData;
  }

  console.log("loadProfileData() function is called.");
}

// Load profile data
window.addEventListener("load", loadProfileData);

/******************************************************************************
 * Retrieve the profile image from local storage and update the sidenav image *
 ******************************************************************************/
function retrieveProfileImage() {
  // Get the profile image data from local storage
  const profileImgData = localStorage.getItem("profileImg");

  if (profileImgData) {
    // Update the sidenav image
    const sidenavImage = document.querySelector(".sidenav-image");
    sidenavImage.src = profileImgData;
  }
}

// Update the sidenav image
retrieveProfileImage();
