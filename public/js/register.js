const registerForm = document.querySelector("#register__form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

registerForm.onsubmit = async (e) => {
  e.preventDefault();

  if (registerForm.checkValidity()) {
    const response = await fetch("/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email.value, password: password.value }),
    });
    if (response.status === 201) {
      const json = await response.json();
      const userId = json.message.split(" ")[5];
      window.location.replace(`/users/${userId}`);
    } else {
      alert("Error en el registro");
    }
  }
};
