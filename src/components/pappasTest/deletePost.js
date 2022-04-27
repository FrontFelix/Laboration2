export async function DeletePost(id) {
    let postDetails = { "id": id}

    fetch("http://localhost:8080/post", {
      method: "DELETE",
      body: JSON.stringify(postDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });
}


