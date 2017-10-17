if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://ecommteam:ecommteam@ds161069.mlab.com:61069/cunycode_ecomm'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/loginapp'}
}