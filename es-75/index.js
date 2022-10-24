<html>
  <body>
    <div id="container">
      <h2>Person's Form</h2>
      <form id="person-form">
        <button type="submit">Submit</button>
      </form>
    </div>
  </body>
</html>

<script>
  function generateLabel(textContent) {
    const label = document.createElement("label");
    label.textContent = textContent;
    return label;
  }

  function generateInput(type, id, placeholder) {
    const input = document.createElement("input");
    input.type = type;
    input.id = id;
    input.className = "form-input";
    input.placeholder = placeholder;
    return input;
  }

  function generateFormInputField(type, id, labelText) {
    const label = generateLabel(labelText);
    const input = generateInput(type, id, labelText);
    const container = document.createElement("div");
    container.appendChild(label);
    container.appendChild(input);
    return container;
  }

  function submitPersonForm(event) {
    event.preventDefault();
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const ageInput = document.getElementById("age");
    const person = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      age: ageInput.value,
    };

    console.log(person);
  }

  function initForm() {
    const firstNameInput = generateFormInputField(
      "type",
      "firstName",
      "First Name"
    );

    const lastNameInput = generateFormInputField(
      "type",
      "lastName",
      "Last Name"
    );

    const ageInput = generateFormInputField("number", "age", "Age");

    const form = document.getElementById("person-form");
    form.prepend(ageInput);
    form.prepend(lastNameInput);
    form.prepend(firstNameInput);

    form.addEventListener("submit", submitPersonForm);
  }
  window.addEventListener("DOMContentLoaded", initForm);

  //Exercise result:
  const personFormLoaded = new CustomEvent('personFormLoaded', {
    detail: {
      message: 'Person Form Loaded'
    }
  });
  window.addEventListener('personFormLoaded', (e)=> console.log(e.detail.message));
  window.dispatchEvent(personFormLoaded);

</script>