async function HandleAddNewUser(event) {
  try {
    let newUserUsernameValue = document.getElementById("usernameInput").value;
    let newUserRealNameValue = document.getElementById("realNameInput").value;
    let newUserEmailValue = document.getElementById("email").value;
    let newUserPasswordValue = document.getElementById("password").value;
    let form = document.getElementById("addNewUserForm");
    event.preventDefault();

    let newUserInputs = {
      username: newUserUsernameValue,
      userRealName: newUserRealNameValue,
      userEmail: newUserEmailValue,
      userPassword: newUserPasswordValue,
      isAdmin: false,
    };

    fetch("http://localhost:8080/user", {
      method: "POST",
      body: JSON.stringify(newUserInputs),
      headers: {
        "Content-Type": "application/json",
      },
    });

    form.reset();
  } catch (err) {
    console.error(err);
  }
}

export default HandleAddNewUser;
