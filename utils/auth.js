const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    // redirects the user to login route if user is not logged in
    res.redirect("./login");
  } else {
    next();
  }
};

module.exports = withAuth;
