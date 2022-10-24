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
  const firstName = document.createElement('input');
  firstName.setAttribute('type', 'text');
  firstName.setAttribute('placeholder', 'Firstname');
  const lastName = document.createElement('input');
  lastName.setAttribute('type', 'text');
  lastName.setAttribute('placeholder', 'Lastname');
  const age = document.createElement('input');
  age.setAttribute('type', 'number');
  age.setAttribute('placeholder', 'Age');
  const button = document.querySelector('button');
  
  function initForm() {
    const personForm = document.getElementById('person-form');
    
    personForm.insertBefore(firstName, personForm.children[0]);
    personForm.insertBefore(lastName, personForm.children[1]);
    personForm.insertBefore(age, personForm.children[2]);
    button.onclick = function submitPersonForm(event) {
      event.preventDefault();
      const person = {
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value,
      }
      return console.log(person)
    };
  };
  window.addEventListener('load', initForm)
</script>