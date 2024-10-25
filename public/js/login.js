const loginForm = document.querySelector("#login__form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

loginForm.onsubmit = async (e) => {
  e.preventDefault();

  if (loginForm.checkValidity()) {
    const response = await fetch("/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email.value, password: password.value }),
    });
    if (response.status === 200) {
      const json = await response.json();
      const userId = json.userId;
      window.location.replace(`/users/${userId}`);
    } else {
      alert("invalid email or password");
    }
  }
};

