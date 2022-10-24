<html>
<body>
  <div id="container">
    <button type="button" id="fetch-post">Fetch Post</button>
    <button type="button" id="save-post">Save Post on LocalStorage</button>
  </div>
</body>
</html>

<script>
  const fetchButton = document.getElementById('fetch-post');
  const saveButton = document.getElementById('save-post');

  let fetchPost;
  fetchButton.addEventListener('click', async ()=> {
    fetchPost = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => data)
    console.log(fetchPost)
  })

  saveButton.addEventListener('click', () => {
    localStorage.setItem('post', JSON.stringify(fetchPost))
  })
</script>