var app = function() {

  // 1. create the cat <ul> and its class
  const catUl = document.createElement('ul');
  catUl.classList.add('cat');

  // 2. create the first child - <li> name
  const nameLi = document.createElement('li');
  nameLi.innerText  = 'Name: Lebowski';

  // 3. create the second child - <li> favourite food
  const favFoodLi = document.createElement('li');
  favFoodLi.innerText = 'Favourite food: Dreamies';

  // 4. create the third child <li>
  const imageLi = document.createElement('li');

  // 5. create the child <img> inside the third <li>
  const catImage = document.createElement('img');
  catImage.width = '500';
  catImage.src = 'https://78.media.tumblr.com/2675ae097a77bf9f0136ac09cbcd7712/tumblr_p67ym7RQYX1whb48xo1_500.jpg';

  // 9. append the name <li> to the <ul>
  catUl.appendChild(nameLi);

  // 8. append the favFood <li> to the <ul>
  catUl.appendChild(favFoodLi);

  // 6. append the image to the <li>
  imageLi.appendChild(catImage);

  // 7. append the image <li> to the <ul>
  catUl.appendChild(imageLi);



  debugger;
};

window.onload = app;
