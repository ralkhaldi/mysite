document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const loginUsername = document.getElementById("loginUsername").value;
        const storedUsername = localStorage.getItem("username");

        if (loginUsername === storedUsername) {
            alert("تم تسجيل الدخول بنجاح!");
        } else {
            alert("معرف المستخدم غير موجود. يرجى التسجيل أولاً.");
        }
    });

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const signupUsername = document.getElementById("signupUsername").value;
        localStorage.setItem("username", signupUsername);
        alert("تم تسجيل المستخدم بنجاح!");
    });
});
