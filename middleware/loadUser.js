const appConfig = require("../config/app");
const User = require("../models/user");

const loadUser = async (req,res,next) =>{
    console.log(req.headers.authorization);
    const authZeroUser = await fetchAuthZeroUser(req.headers.authorization);
    next();
};

const fetchAuthZeroUser = async (authorizationValue) =>{
    const response = await fetch(`${appConfig.authorizationHost}/userinfo`,{
        headers: {'Authorization': authorizationValue},
    });

    return response.json();
};

const findOrCreateUser = (authZeroUserJson) => {
    if(!authZeroUserJson) return;

    const existingUser = User

}

module.exports = loadUser;