const register = async (req, res) => {
  res.send("rester user");
};

const login = async (req, res) => {
  res.send("login user");
};

module.exports = {
  register,
  login,
};
