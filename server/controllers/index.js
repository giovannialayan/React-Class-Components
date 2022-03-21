const example1 = (req, res) => {
  res.render('example1');
};

const example2 = (req, res) => {
  res.render('example2');
};

const example3 = (req, res) => {
  res.render('example3');
};

const getSongs = (req, res) => {
  return res.json([
    {artist: 'c418', title: 'minecraft'},
    {artist: 'steel_plus', title: 'neverending song - violette\'s theme'}
  ]);
};

module.exports.example1 = example1;
module.exports.example2 = example2;
module.exports.example3 = example3;
module.exports.getsongs = getSongs;