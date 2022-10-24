<html>

<body>
    <div id="container">
        <ul class="todo-list"></ul>
    </div>
</body>

</html>

<script>
   
    let ulList = document.querySelector(".todo-list");


    async function fetchTodos() {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos");
        let result = await response.json();

        for (todo in result) {
            let liElement = document.createElement('li');
            ulList.append(liElement);
        }

        for (let i = 0; i < result.length; i++) {
            let liElementIndex = document.querySelectorAll('li');
            liElementIndex[i].append(result[i].title)
        }
    };

    fetchTodos();
</script>