<html>
<body>
  <div id="container">
    <h2>Person's List</h2>
    <table id="person-table">
      <tbody></tbody>
    </table>
    <button id="add-row">Add row</button>
  </div>
</body>
</html>

<script> 
  const button = document.querySelector('#add-row');
  
  function addRow() {
    const tBody = document.querySelector('tbody');
    
    const row = document.createElement('tr');
    tBody.append(row);
    
    const firstName = document.createElement('th');
    firstName.innerText = 'First Name';
    row.append(firstName);
    
    const lastName = document.createElement('th');
    lastName.innerText = 'Last Name';
    row.append(lastName);
    
    const age = document.createElement('th');
    age.innerText = 'Age';
    row.append(age);
  }
  
  button.addEventListener('click', addRow)
</script>