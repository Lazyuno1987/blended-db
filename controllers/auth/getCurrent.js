const getCurrent = async (req, res) => {
  const { subscription, email } = req.user;

  res.json({
    status: "success",
    code: 200,
    data: req.user,
  });
};

module.exports = getCurrent;
