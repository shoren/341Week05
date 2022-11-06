const authorizationController = {
    login:(req,res) =>{
        res.redirect("https://dev-0y5jer0ax4ksli5b.us.auth0.com/authorize?response_type=code&client_id=y51DQiBR8NskcZNR4rMT270NC8EU2XaG&redirect_uri=http%3A%2F%2Flocalhost%3A8081%2Fcallback&state=1234&scope=openid%20profile%20email");
    },
};

module.exports = AuthorizationController