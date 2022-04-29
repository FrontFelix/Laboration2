async function HandleAddNewUser(event) {
  try {
    let newUserUsernameValue = document.getElementById("register-uname").value;
    let newUserEmailValue = document.getElementById("register-email").value;
    let newUserPasswordValue = document.getElementById("register-pword").value;
    let form = document.getElementById("addNewUserForm");

    let newUserInputs = {
      username : newUserUsernameValue,
      email : newUserEmailValue,
      password : newUserPasswordValue
    };

    let response = await fetch("http://localhost:8080/account/register", {
      method: "POST",
      body: JSON.stringify(newUserInputs),
      headers: {
        "Content-Type": "application/json",
      }
    });
    let data = await response.json()

    // form.reset();
    return response
  } catch (err) {
    console.error(err);
  }
}

export default HandleAddNewUser;
