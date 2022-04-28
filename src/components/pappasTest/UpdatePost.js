async function HandleUpdatePost(event , id) {
  let UpdatedPostTitleValue = document.getElementById("UpdatedPostTitle").value;
  console.log(UpdatedPostTitleValue)
  try {
    let UpdatedPostContentValue = document.getElementById("UpdatedContentInput").value;
    let form = document.getElementById("UpdatedPostForm");

    let updatePostInputs = {
      title: UpdatedPostTitleValue,
      content: UpdatedPostContentValue
    };


    fetch(`http://localhost:8080/post/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatePostInputs),
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

export default HandleUpdatePost;
