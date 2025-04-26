const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken");

const login = asyncHandler(async (req, res) => {
    res.json({
        _id: 1,
        userName: "quoctd",
        token: generateToken(1),
    });
});

module.exports = {
    login
};