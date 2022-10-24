<html>

<body>
    <div id="container" style="display: flex; align-items: center;"></div>
</body>

</html>

<script>
    async function fetchTodo() {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/4");
        let result = await response.json();

        const Container = document.querySelector("#container");
        const title = document.createElement("h2");

        const inputCheck = document.createElement("input");
        inputCheck.setAttribute("type", "checkbox");

        if (result.completed) {
            inputCheck.setAttribute("checked", true);
        }

        title.innerText = result.title;
        Container.append(inputCheck);
        Container.append(title);

        console.log(result);
    }
    fetchTodo();
</script>