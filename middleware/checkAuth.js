const num = Math.floor(Math.random() * 100) + 1;

module.exports = {
    /* Check if the request is authenticated */
    ensureAuthenticated: function (req, res, next) {
      if (req.isAuthenticated()) {
        return next();
      }
      res.redirect("/auth/login");
    },
    /* At login/signup, if there is the user session, redirect to the swipe page */
    forwardAuthenticated: function (req, res, next) {
      if (!req.isAuthenticated()) {
        return next();
      }
      res.redirect(`/api/food/${num}`);
    },
  };
  