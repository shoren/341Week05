const appConfig = require("../config/app");

const AuthorizationController = {
    login:(req,res) =>{
        const authorizatinUrl = `${appConfig.authorizationHost}/authorize?response_type=code&client_id=${appConfig.clientID}&redirect_uri=${encodeURIComponent(appConfig.redirectUrl)}&state=1234&scope=openid%20profile%20email`;
        res.redirect(authorizatinUrl);
    },
    callback: (req, res) =>{
        res.json(req.queury.code)
    },
};

module.exports = AuthorizationController