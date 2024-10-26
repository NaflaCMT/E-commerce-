module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};
//heirorder function
//module.exports = (theFunc) => (req, res, next) 

//outer function 
//(theFunc) => (req, res, next) => {
 // Promise.resolve(theFunc(req, res, next)).catch(next);};


//innerfunction 
// (req, res, next) => {
 // Promise.resolve(theFunc(req, res, next)).catch(next);