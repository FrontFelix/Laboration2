async function getUsers() {
  fetch("http://localhost:8080/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

export default getUsers;
