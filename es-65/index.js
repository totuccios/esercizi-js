<html>

<body>
    <div id="container">
        <button type="button" id="fetch-post">
        Fetch Post from LocalStorage
      </button>

        <h2>Post: <span id="post-title"></span></h2>
    </div>
</body>

</html>

<script>
    
    const fetchbtn = document.getElementById("fetch-post")
    const title = document.getElementById("post-title")

    fetchbtn.addEventListener("click", fetchPost);
    async function fetchPost() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const result = await response.json();
        localStorage.setItem("savedPost", result);
        title.innerHTML = result.title;
    };
</script>
