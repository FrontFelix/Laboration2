export async function DeletePost(id) {
  fetch(`http://localhost:8080/post/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
}
