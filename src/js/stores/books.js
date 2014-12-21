var Reflux = require('reflux');

// slighty altered
// https://github.com/tamingtext/book/blob/master/apache-solr/example/exampledocs/books.json
var _data = [
  {
    "id" : "978-0641723445",
    "cat" : ["book","hardcover"],
    "name" : "The Lightning Thief",
    "author" : "Rick Riordan",
    "series_t" : "Percy Jackson and the Olympians",
    "sequence_i" : 1,
    "genre_s" : "fantasy",
    "inStock" : true,
    "price" : 12.50,
    "pages" : 384
  }
,
  {
    "id" : "978-1423103349",
    "cat" : ["book","paperback"],
    "name" : "The Sea of Monsters",
    "author" : "Rick Riordan",
    "series_t" : "Percy Jackson and the Olympians",
    "sequence_i" : 2,
    "genre_s" : "fantasy",
    "inStock" : false,
    "price" : 6.49,
    "pages" : 304
  }
,
  {
    "id" : "978-1857995879",
    "cat" : ["book","paperback"],
    "name" : "Sophie's World : The Greek Philosophers",
    "author" : "Jostein Gaarder",
    "sequence_i" : 1,
    "genre_s" : "fantasy",
    "inStock" : true,
    "price" : 3.07,
    "pages" : 64
  }
,
  {
    "id" : "978-1933988177",
    "cat" : ["book","paperback"],
    "name" : "Lucene in Action, Second Edition",
    "author" : "Michael McCandless",
    "sequence_i" : 1,
    "genre_s" : "IT",
    "inStock" : false,
    "price" : 30.50,
    "pages" : 475
  }
];

var BookStore = Reflux.createStore({
    getBooks: function() {
        return _data;
    }
});

module.exports = BookStore;