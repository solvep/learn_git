const path = require('path');

module.exports = {
  
  mode: 'none',
  
  entry: './index.js',

  output: {

    path: path.resolve(__dirname, 'lib'),

    filename: 'animal-api.js',

    library: 'AnimalApi',

    libraryTarget: 'var'

  },

};
