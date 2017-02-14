var app = function(){

  var catsArray = [
  {catName: "Catzy", hobbies: "Hiding"},
  {catName: "Spock", hobbies: "Lounging"},
  {catName: "Spengler", hobbies: "Spying on Seans homework"},
  {catName: "Mr Tibbles", hobbies: "Sneaking into my house"},
  {catName: "Tigger", hobbies: "Bouncing and singing"},
  {catName: "Sandy", hobbies: "Tripping me up at the top of the stairs"},
  {catName: "Dr Evil", hobbies: "Using allergies to murder humans"}
  ];

  var createCatUL = function(){
    var catArticle = document.createElement('ul');
    catArticle.classList.add('cat');
    return catArticle;
  };

  var createCatNameLi = function(catNames){
    var li1 = document.createElement('li');
    li1.innerText = "Name: " + catName;
    return li1;
  };

  var createCatHobbiesLi = function(hobbies){
    var li2 = document.createElement('li');
    li2.innerText = "Hobbies: " + hobbies;
    return li2;
  };

  var appendElements = function(catArticle, li1, li2){
    catArticle.appendChild(li1);
    catArticle.appendChild(li2);

    var cats = document.querySelector('#cats');
    cats.appendChild(catArticle);

    return cats;
  };

  var addNewCat = function(catName, hobbies){
    var catArticle = createCatUL();
    var createName = createCatNameLi(catName);
    var createHobbies= createCatHobbiesLi(hobbies);

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