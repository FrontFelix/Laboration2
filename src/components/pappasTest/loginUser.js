async function loginUser(event) {
    try {
      let username = document.getElementById("userUsername").value;
      let password = document.getElementById("userPassword").value;
      let form = document.getElementById("loginForm");
      event.preventDefault();
  
      let newUserInputs = {
        name: username,
        password: password,
      };
  
      fetch("http://localhost:8080/login", {
        method: "POST",
        body: JSON.stringify(newUserInputs),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      console.log(newUserInputs)
      form.reset();
    } catch (err) {
      console.error(err);
    }
  }
  
  export default loginUser