const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res.status(400).json({ message: 'Invalid email or password' });
      return;
    }

    const validPassword = userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Invalid email or password' });
      return;
    }

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.loggedIn = true;
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
