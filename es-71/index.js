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
  const label = document.getElementsByTagName('label');
  const labFirst = label[0].innerText;
  const labLast = label[1].innerText;
  const labAge = label[2].innerText;
  const person = document.querySelectorAll('input');
  const perName = person[0].value;
  const perLast = person[1].value;
  const perAge = person[2].value;
  console.log(`${labFirst} ${perName}`)
  console.log(`${labLast} ${perLast}`)
  console.log(`${labAge} ${perAge}`)
</script>