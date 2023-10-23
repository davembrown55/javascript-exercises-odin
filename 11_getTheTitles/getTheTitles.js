const getTheTitles = function(Arr) {
    return Arr.map((obj) => obj.title);
};

// Do not edit below this line
module.exports = getTheTitles;

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

  console.log(getTheTitles(books));