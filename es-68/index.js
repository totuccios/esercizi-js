<html>

<body>
    <div id="container">
        <form>
            <div>
                <label>Title</label>
                <input type="text" id="todo-title" />
            </div>
            <div>
                <label>Completed</label>
                <input type="checkbox" id="todo-completed" />
            </div>

            <button type="submit" id="submit-todo"></button>
        </form>
    </div>
</body>

</html>

<script>
    // const title = document.getElementById("todo-title")
    // const completed = document.getElementById("toto-completed")
    // const submitTodo = document.getElementById("submit-todo")

    // submitTodo.addEventListener("click", addPost);

    // async function addPost() {
    //     event.preventDefault();
    //     let post = {
    //         input: title.value,
    //         check: completed.checked,
    //     };
    //     let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json; charset=utf-8'
    //         },
    //         body: JSON.stringify(post),
    //     });
    //     const result = await response.json();
    //     console.log(result);
    // }
    const title = document.querySelector("#todo-title");
    const completed = document.querySelector("#todo-completed");
    const submitBtn = document.querySelector("#submit-todo");

    const url = "https://jsonplaceholder.typicode.com/posts";

    submitBtn.addEventListener("click", addPost);

    async function addPost(event) {
        event.preventDefault();

        let post = {
            input: title.value,
            check: completed.checked,
        };

        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(post),
        });

        let result = await response.json();

        console.log(result);
    }