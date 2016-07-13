var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products = [
  new Product({
  imagePath:'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
  title:'Witcher 3',
  description:'Best RPG',
  price: 10
}),
new Product({
  imagePath:'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
  title:'Witcher 3:Wild Hunt',
  description:'Best RPG',
  price: 10
}),
new Product({
  imagePath:'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
  title:'Witcher 3',
  description:'freaking  RPG',
  price: 10
})
];
var done = 0;
for(var i =0;i<products.length;i++){
  products[i].save(function(err,result){
    done++;
    if(done===products.length){
      exit();
    }
  });
}

function exit(){
  mongoose.disconnect();
}
