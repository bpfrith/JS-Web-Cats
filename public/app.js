var app = fuction(){

  var catsArray = [
  {catName: "Catzy", hobbies: "Hiding"},
  {catName: "Spock", hobbies: "Lounging"},
  {catName: "Spengler", hobbies: "Spying on Seans homework"},
  {catName: "Mr Tibbles", hobbies: "Sneaking into my house"},
  {catName: "Tigger", hobbies: "Bouncing and singing"},
  {catName: "Sandy", hobbies: "Tripping me up at the top of the stairs"},
  {catName: "Dr Evil", hobbies: "Using allergies to murder humans"}
  ];

  var createCat = function(){
    var catArticle = document.createElement('article');
    catArticle.classList.add(catName);
    return quoteArticle;
  };

  var createCatName = function(){
    var name = document.createElement('name');
    name.innerText = "Name: " + catName;
    return name;
  };

  var createCatHobbies = function(){
    var hobbies = document.createElement('hobbies');
    hobbies.innerText = "Hobbies: " + hobbies;
    return hobbies;
  };

  var appendElements = function(catArticle, catName, hobbies){
    catArticle.appendChild(catName);
    catArticle.appendChild(hobbies);

    var cats = document.querySelector('#cats');
    cats.appendChild(catArticle);

    return cats;
  };

  var addNewCat = function(catName, hobbies){
    var catArticle = creatCatUl();
    var createName = createName(catName);
    var createHobbies= createHobbies(hobbies);

    appendElements(catArticle, createName, hobbies);
  };

  var addTheCats = function(){
    for(var cat of catsArray){
      addNewCat(cat.catName, cat.hobbies);
    }
  };

  addTheCats();

}


window.onload = app;