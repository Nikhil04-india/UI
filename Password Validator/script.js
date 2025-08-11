// Select input, icon, and progress bar elements
const input = document.querySelector(".input__field");
const inputIcon = document.querySelector(".input__icon");
const passwordStrength = document.getElementById("password-strength");

// Eye icon toggle logic
inputIcon.addEventListener("click", (e) => {
  e.preventDefault();
  const isPassword = input.getAttribute("type") === "password";
  input.setAttribute("type", isPassword ? "text" : "password");
  inputIcon.innerHTML = isPassword ? "🙈" : "👁️";
});

// Password strength rules setup
const rules = [
  {
    name: "low-upper-case",
    pattern: /([a-z].*[A-Z])|([A-Z].*[a-z])/,
  },
  {
    name: "number",
    pattern: /\d/,
  },
  {
    name: "special-char",
    pattern: /[!@#$%^&*]/,
  },
  {
    name: "length",
    pattern: /.{8,}/,
  }
];

const passwordStrengthProgressRule = [
  { maxStrength: 1, width: "25%", class: "progress-bar-danger" },
  { maxStrength: 2, width: "50%", class: "progress-bar-warning" },
  { maxStrength: 3, width: "75%", class: "progress-bar-warning" },
  { maxStrength: 4, width: "100%", class: "progress-bar-success" }
];

// Check individual rule
function checkRule(password, strength, { pattern, name }) {
  const item = document.querySelector(`.${name}`);
  const ticker = item.querySelector(".ticker");
  if (pattern.test(password)) {
    strength += 1;
    item.classList.add("valid");
    item.classList.remove("invalid");
    ticker.innerHTML = "✅";
  } else {
    item.classList.remove("valid");
    item.classList.add("invalid");
    ticker.innerHTML = "❌";
  }
  return strength;
}

// Update progress bar according to matched rules
function makeProgressBar(strength) {
  const rule =
    passwordStrengthProgressRule.find((r) => strength === r.maxStrength) ||
    passwordStrengthProgressRule[0];
  passwordStrength.className = `progress-bar ${rule.class}`;
  passwordStrength.style.width = rule.width;
}

// Main password strength check
function checkStrength(password) {
  let strength = 0;
  rules.forEach((rule) => {
    strength = checkRule(password, strength, rule);
  });
  makeProgressBar(strength);
}

// Listen for input changes and validate password
input.addEventListener("keyup", function () {
  let pass = input.value;
  checkStrength(pass);
});
