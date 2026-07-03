/* ================== Select Al HTML Elements Neded ================== */
let loader = document.querySelector(".main-loader");
let navLinks = document.querySelectorAll(".nav-link");
let heartIcons = document.querySelectorAll(".portfolio-item-heart");
let dropdown = document.querySelector('.navbar-links');
let toggleBtn = document.querySelector('.toggle');
let navbar = document.querySelector(".navbar");
let colorPalette = document.querySelectorAll(".choose-color span");
let activeBg = document.querySelectorAll(".choose-bg > div");
let body = document.querySelector("body");
let themeBtn = document.querySelector(".theme");
let popup = document.querySelector(".settings-popup");
let closeBtn = document.querySelector(".close-btn");
let btnToTop = document.querySelector(".btn-toTop");
// select backgrounds and colors
let Bg1 = document.querySelector(".bg-1");
let Bg2 = document.querySelector(".bg-2");
let Bg3 = document.querySelector(".bg-3");
let color1 = document.querySelector(".color-1");
let color2 = document.querySelector(".color-2");
let color3 = document.querySelector(".color-3");
let color4 = document.querySelector(".color-4");
let color5 = document.querySelector(".color-5");
// colors values to change it
let colorValue1 = "--main-color:hsl(345, 94%, 49%);";
let colorValue2 = "--main-color:hsl(37, 75%, 60%);";
let colorValue3 = "--main-color:hsl(345, 94%, 49%);";
let colorValue4 = "--main-color:hsl(152, 57%, 49%);";
let colorValue5 = "--main-color:hsl(302, 72%, 38%);";
// fonts Values to change it
let fonts = document.querySelectorAll(".fonts > span");
let font14 = document.querySelector(".font-14");
let font16 = document.querySelector(".font-16");
let font17 = document.querySelector(".font-17");

/*============  Page Loading ===================*/
window.addEventListener("load", () => {
  loader.classList.remove("show");
  setTimeout(() => {
    loader.classList.add("show");
  }, 1000);
});

/*============  Change Navbar Background and show up to top Button ===================*/
window.onscroll = () => {
  if (window.pageYOffset >= 200) {
    btnToTop.classList.add("show");
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
    btnToTop.classList.remove("show");
  }
};
// scroll tot top
btnToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

function removeActiveLink() {
  navLinks.forEach((nav) => {
    nav.classList.remove("active");
  });
}
// function to handle active link
function activeMenuLink(e) {
  e.preventDefault();
  removeActiveLink();
  const href = "#" + this.getAttribute("name");
  const offsetTop = document.querySelector(href).offsetTop;
  this.classList.add("active");
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
  window.location.hash = this.getAttribute("name");
}
navLinks.forEach((nav) => {
  nav.addEventListener("click", activeMenuLink);
});

/*================== Active link When Scroll and Refresh Page =======================*/
let sections = document.querySelectorAll("section");

function changeLinkState() {
  let index = sections.length;

  for (; --index && window.scrollY + 100 < sections[ index ].offsetTop;) { }
  removeActiveLink();
  navLinks[ index ].classList.add('active');
}
// this to change active link when make refresh page
changeLinkState();
// this for change active link when scroll
window.addEventListener('scroll', changeLinkState);


/* ============= Toggle Body Scrolling =======================*/
function toggleBodyScrolling() {
  document.body.classList.toggle("hide-scrolling");
}

/* ================== show and hide dropdoen menu ================== */
toggleBtn.addEventListener("click", () => {
  dropdown.classList.toggle("dropdown");
});

/*==================  show and hide settings popup  =======================*/
function openThemePopup() {
  popup.classList.add("show");
  toggleBodyScrolling();
}
function closeThemePopup(e) {
  if (e.target.classList.contains("settings-popup")) {
    popup.classList.remove("show");
    toggleBodyScrolling();
  }
}
closeBtn.addEventListener("click", () => {
  popup.classList.remove("show");
  toggleBodyScrolling();
});
themeBtn.addEventListener("click", openThemePopup);
popup.addEventListener("click", closeThemePopup);

/*================== Change Font size when Chosse one and Activation it =======================*/
function removeFontActive() {
  fonts.forEach(font => {
    font.classList.remove("active");
  });
}
// handeler for selected font size
function chooseFont(selectedFont) {
  document.querySelector("html").style.fontSize = `${selectedFont.getAttribute('data-size')}px`;
  removeFontActive();
  selectedFont.classList.add("active");
  localStorage.setItem("kami-font", selectedFont.getAttribute('data-size'));
}
font14.addEventListener("click", () => chooseFont(font14));
font16.addEventListener("click", () => chooseFont(font16));
font17.addEventListener("click", () => chooseFont(font17));

// check font-size in localstorage
let storageFont = localStorage.getItem("kami-font");
if (storageFont == font14.getAttribute('data-size')) {
  chooseFont(font14);
} else if (storageFont == font16.getAttribute('data-size')) {
  chooseFont(font16);
} else if (storageFont == font17.getAttribute('data-size')) {
  chooseFont(font17);
}


/*==================  Change Main color =======================*/
let storageColor = localStorage.getItem("kami-color");
// Remove Activation from all Colors
function removeColorActive() {
  colorPalette.forEach((color) => {
    color.classList.remove("active");
  });
}
// selected The Main color
function getMainColor(selectedColor, colorValue) {
  body.style.cssText = colorValue;
  removeColorActive();
  selectedColor.classList.add("active");
  localStorage.setItem("kami-color", colorValue);
}
/*================== check & Get color from localstorage =======================*/
if (storageColor === colorValue1) {
  getMainColor(color3, colorValue3);
} else if (storageColor === colorValue2) {
  getMainColor(color3, colorValue3);
} else if (storageColor === colorValue3) {
  getMainColor(color3, colorValue3);
} else if (storageColor === colorValue4) {
  getMainColor(color3, colorValue3);
} else if (storageColor === colorValue5) {
  getMainColor(color3, colorValue3);
}
/*================== Change Color when Chosse one and Activation it =======================*/
colorPalette.forEach(color => {
  color.addEventListener("click", () => {
    if (color.classList.contains("color-1")) {
      getMainColor(color, colorValue3);
    }
    else if (color.classList.contains("color-2")) {
      getMainColor(color, colorValue3);
    }
    else if (color.classList.contains("color-3")) {
      getMainColor(color, colorValue3);
    }
    else if (color.classList.contains("color-4")) {
      getMainColor(color, colorValue3);
    }
    else if (color.classList.contains("color-5")) {
      getMainColor(color, colorValue3);
    }
  });
});

/* =============== Change Theme Mode  ==================*/
let darkMode = localStorage.getItem('kami-theme');
// check the theme in localstorage
if (darkMode === 'dark') {
  enableDarkMode();
} else if (darkMode === 'light') {
  enableDarkMode();
} else if (darkMode === 'dim') {
  enableDarkMode();
}
// remove activation from all backgrounds
function removeThemeSelector() {
  activeBg.forEach(active => {
    active.classList.remove("active");
  });
}
function enableDarkMode() {
  localStorage.setItem('kami-theme', 'dark');
  body.classList.add("dark");
  removeThemeSelector();
  Bg3.classList.add("active");
}
function disableDarkMode() {
  localStorage.setItem('kami-theme', 'light');
  body.classList.remove("dark");
  removeThemeSelector();
  Bg1.classList.add("active");
}
function deviceThemeMode() {
  localStorage.setItem('kami-theme', 'dim');
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
  removeThemeSelector();
  Bg2.classList.add("active");
}

Bg1.addEventListener("click", () => enableDarkMode());
Bg2.addEventListener("click", () => enableDarkMode());
Bg3.addEventListener("click", () => enableDarkMode());

/*==================  portfolio love icons  =======================*/
heartIcons.forEach(her => {
  her.addEventListener("click", () => {
    let value = +her.lastElementChild.textContent;
    let firstChild = her.firstElementChild;
    if (firstChild.attributes.name.value == "heart") {
      firstChild.attributes.name.value = "heart-outline";
      her.lastElementChild.innerHTML = --value;
    } else {
      firstChild.attributes.name.value = "heart";
      her.lastElementChild.innerHTML = ++value;
    }
  });
});


// customize form and handle data
//======================= Contact Form ====================
 const form = document.forms['form-submit'];
    const FormAlert = document.querySelector("#form_alerts");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Get form values
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();

      // ==== Validation ====
      if (!name || !phone || !email || !message) {
        showAlert("All fields are required!", "danger");
        return;
      }

 

      // Validate phone number (7–15 digits)
      const phoneRegex = /^[0-9]{7,15}$/;
      if (!phoneRegex.test(phone)) {
        showAlert("Please enter a valid phone number!", "danger");
        return;
      }

      // ==== If all validations pass ====
      const mailtoLink = `mailto:ka3667225@example.com?subject=${encodeURIComponent(subject || "Contact Form")}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
      )}`;

      // Open user's mail app
      window.location.href = mailtoLink;

      // Show success alert
      showAlert("Opening your email app...", "success");

      // Clear form
      form.reset();
    });

    // ==== Helper: show alert message ====
    function showAlert(message, type) {
      FormAlert.innerHTML = `<div class="alert alert-${type}">${message}</div>`;
      const alertBox = document.querySelector(".alert");
      alertBox.style.top = "15px";
      setTimeout(() => {
        alertBox.style.top = "-150px";
      }, 2000);
    }

 // Get all buttons with class 'view-btn'
  document.querySelectorAll(".view-btn").forEach(button => {
    button.addEventListener("click", () => {
      // Read URL from button's data attribute
      const playStoreUrl = button.getAttribute("data-url");

      // Open the URL in a new tab
      if (playStoreUrl) {
        window.open(playStoreUrl, "_blank");
      } else {
        alert("No Play Store URL found for this button!");
      }
    });
  });