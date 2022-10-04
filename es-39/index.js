<script>

        // const loginApi = "https://api-nodejs-todolist.herokuapp.com/user/login";
        const registerApi = "https://api-nodejs-todolist.herokuapp.com/user/register";

        const submitBtn = document.getElementById("btn");

        async function register() {
            let registerFetch = await fetch("https://api-nodejs-todolist.herokuapp.com/user/register", {
                method: "POST",
                headers: {
                    Accept:"application/json",
                    "Content-Type": "application/json"
                },
                body: {
                    "name": document.getElementById("text"),
                    "email": document.getElementById("email"),
                    "password": document.getElementById("pass"),
                    "age": document.getElementById("age")
                }
            });

            let register = await registerFetch.json()
            console.log(register)
        }

        submitBtn.addEventListener("click", register);

    </script>