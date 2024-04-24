let recipe={
     title:"Tomato Pasta",
     imgsrc:"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
     ingredient:["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"],
};
 document.getElementById("heading").innerHTML=recipe.title;

document.getElementById("img").src=recipe.imgsrc;

//document.getElementById("lists").innerHTML=recipe.ingredient;
var emptystr='';
for(var i=0;i<=recipe.ingredient.length;i++)
{
  emptystr=emptystr+'<li>'+recipe.ingredient[i]+'</li>';  
}
document.getElementById('lists').innerHTML=emptystr;
