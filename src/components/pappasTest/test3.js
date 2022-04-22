// import { renderUsers } from "../pappasTest/test";

// async function getUsers() {
//   try {
//     const res = await fetch("http://localhost:8080/users");
//     // const result = await res.json();
//     // JSON.parse(result);
//     // let result = JSON.stringify(res);

//     console.log(res);
//     // renderUsers(result);
//   } catch (err) {
//     console.error(err);
//   }
// }

async function getPosts() {
  fetch("http://localhost:8080/posts")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

export default getPosts;
