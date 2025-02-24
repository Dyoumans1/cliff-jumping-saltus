const passUserToView = (req, res, next) => {
    res.loccals.user = req.session.user ? req.session.user : null;
    next();
};

module.exports = passUserToView;