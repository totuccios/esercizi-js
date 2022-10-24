<html>
<body>
  <div id="container">
    <h2>Hero's List</h2>
    <ul class="hero-list">
      <li class="hero-list-item">Batman</li>
      <li class="hero-list-item">Superman</li>
      <li class="hero-list-item">Spiderman</li>
      <li class="hero-list-item">Hulk</li>
      <li class="hero-list-item">Wolverine</li>
    </ul>
  </div>
</body>
</html>

<script>
  const superHero = document.querySelectorAll('li');
  for (let i = 0; i < superHero.length; i++) {
    superHero[i].addEventListener('mouseover', () => {
      superHero[i].style.backgroundColor = 'orange';
      superHero[i].style.fontSize = '25px';
      superHero[i].style.color = 'blue';
    })
  };
  for (let i = 0; i < superHero.length; i++) {
    superHero[i].addEventListener('mouseout', () => {
      superHero[i].style.backgroundColor = 'transparent';
      superHero[i].style.fontSize = 'initial';
      superHero[i].style.color = 'initial';
    })
  };
</script>