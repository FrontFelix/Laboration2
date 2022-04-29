async function HandleAddNewPost() {
  try {
    let postTitleValue = document.getElementById("titleInput").value;
    let postContentValue = document.getElementById("contentInput").value;
    let form = document.getElementById("addNewPostFormTEST");

    let newPostInputs = {
      title: postTitleValue,
      content: postContentValue
    };

    fetch("http://localhost:8080/post", {
      method: "POST",
      body: JSON.stringify(newPostInputs),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    form.reset();
  } catch (err) {
    console.error(err);
  }
}

export default HandleAddNewPost;
