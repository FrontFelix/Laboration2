export async function DeletePost(id) {
    let postID = id

    fetch("http://localhost:8080/post", {
      method: "DELETE",
      body: { "id" : postID},
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
}


