var CATS_ARRAY = [
  { name: 'Lebowski', favFood: 'GoCat', image:  'https://78.media.tumblr.com/2675ae097a77bf9f0136ac09cbcd7712/tumblr_p67ym7RQYX1whb48xo1_500.jpg' },
  { name: 'Boba', favFood: 'Sock fluff', image:  'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg'},
  { name: 'Barnaby', favFood: 'Tuna', image:  'https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg'},
  { name: 'Max', favFood: 'Whiskas Temptations', image:  'http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg'}
];

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
  catImage.width = '200';
  catImage.src = imageSrc;
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

var app = function(){
  for (let cat of CATS_ARRAY) {
    addCat(cat.name, cat.favFood, cat.image);
  }
};

// debugger;

window.onload = app;
