// newResource function for post tea route
const newResource = (req, res, next) => {
  res.json({message: "POST new resource"}); // dummy function for now
};

const getResource = (req, res, next) => {
  res.json({message: "GET new resource"}); // dummy function for now
};

module.exports = {newResource, getResource};
