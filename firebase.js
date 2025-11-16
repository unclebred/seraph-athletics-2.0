/* ===== DARK / LIGHT MODE ===== */
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        // Save preference
        const mode = document.body.classList.contains("light-mode") ? "light" : "dark";
        localStorage.setItem("theme", mode);
    });
}

// Load saved mode
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    document.body.classList.add("light-mode");
}

/* ===== FIREBASE AUTH ===== */

// PLACEHOLDER — add your config here
const firebaseConfig = {
    apiKey: "YOUR_KEY",
    authDomain: "YOUR_DOMAIN",
    projectId: "YOUR_PROJECT",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

/* ===== SIGNUP ===== */
const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const pass = document.getElementById("password").value;

        try {
            await auth.createUserWithEmailAndPassword(email, pass);
            alert("Account created!");
            window.location.href = "programs.html";
        } catch (err) {
            alert(err.message);
        }
    });
}

/* ===== GOOGLE LOGIN ===== */
const googleButton = document.getElementById("googleLogin");
if (googleButton) {
    googleButton.addEventListener("click", async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            await auth.signInWithPopup(provider);
            window.location.href = "programs.html";
        } catch (err) {
            alert(err.message);
        }
    });
} 
