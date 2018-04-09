var createCatUl = function(){
  // 1. create the cat <ul> and its class
  let catUl = document.createElement('ul');
  catUl.classList.add('cat');
  return catUl;
};

var createNameLi = function(catName){
  // 2. create the first child - <li> name
  let nameLi = document.createElement('li');
  nameLi.innerText = 'Name: ' + catName;
  return nameLi;
};

var createFavFoodLi = function(favFood){
  // 3. create the second child - <li> favourite food
  let favFoodLi = document.createElement('li');
  favFoodLi.innerText = 'Favourite food: ' + favFood;
  return favFoodLi;
};

var createImageLi = function(){
  // 4. create the third child <li>
  let imageLi = document.createElement('li');
  return imageLi;
};

var createImage = function(imageSrc){
  // 5. create the child <img> inside the third <li>
  let catImage = document.createElement('img');
  catImage.width = '500';
  catImage.src = imageSrc;
  //catImage.src = 'https://78.media.tumblr.com/2675ae097a77bf9f0136ac09cbcd7712/tumblr_p67ym7RQYX1whb48xo1_500.jpg';
  return catImage;
};

var appendElements = function(catUl, nameLi, favFoodLi, imageLi, catImage){
  // 9. append the name <li> to the <ul>
  catUl.appendChild(nameLi);

  // 8. append the favFood <li> to the <ul>
  catUl.appendChild(favFoodLi);

  // 6. append the image to the <li>
  imageLi.appendChild(catImage);

  // 7. append the image <li> to the <ul>
  catUl.appendChild(imageLi);

  let cats = document.querySelector("#cats");
  cats.appendChild(catUl);
};

var addCat = function(catName, favFood, catImage){
  var catUl = createCatUl();
  var nameLi = createNameLi(catName);
  var favFoodLi = createFavFoodLi(favFood);
  var imageLi = createImageLi();
  var catImage = createImage(catImage);
  appendElements(catUl, nameLi, favFoodLi, imageLi, catImage);
};

window.onload = function(){
  addCat('Lebowski', 'Dreamies', 'https://78.media.tumblr.com/2675ae097a77bf9f0136ac09cbcd7712/tumblr_p67ym7RQYX1whb48xo1_500.jpg');
};
