async function getPosts() {
  let data = fetch("http://localhost:8080/posts")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
  return data;
}

export default getPosts;
