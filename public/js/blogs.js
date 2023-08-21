const newBlogHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector("#title-blog").value.trim();
  const text = document.querySelector("#text-blog").value.trim();

  if (title && text) {
    const response = await fetch("/api/blogs", {
      method: "POST",
      body: JSON.stringify({ title, text }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create post");
    }
  }
};

const deleteButton = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete blogpost");
    }
  }
};

document.querySelector(".blog-form").addEventListener("submit", newBlogHandler);

document.querySelector("#blog-list").addEventListener("click", deleteButton);
