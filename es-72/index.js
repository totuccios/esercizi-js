<html>
  <body>
    <div id="container">
      <form>
        <div>
          <label>First Name:</label>
          <input type="text" class="form-input" id="firstName" value="Mario"/>
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" class="form-input" id="lastName" value="Rossi"/>
        </div>
        <div>
          <label>Age:</label>
          <input type="number" class="form-input" id="age" value="25"/>
        </div>
      </form>
    </div>
  </body>
</html>

<script>
  const perValue = document.querySelector('input').value;

  const person = {
    firstName: perValue,
    lastName: perValue,
    age: perValue
  }

  const form = document.querySelector('form');
  form.setAttribute('data-person', JSON.stringify(person));
  console.log(form)
</script>