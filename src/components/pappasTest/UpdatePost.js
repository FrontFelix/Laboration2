async function HandleUpdatePost(event, id, title, content) {
  try {
    let form = document.getElementById("UpdatedPostForm");

    let updatePostInputs = {
      title: title,
      content: content,
    };

    fetch(`http://localhost:8080/post/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatePostInputs),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    console.log(updatePostInputs);
    form.reset();
  } catch (err) {
    console.error(err);
  }
}

export default HandleUpdatePost;
