const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: {type: DataTypes.STRING, maxLength: 64},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, maxLength: 64},
    role: {type: DataTypes.STRING, defaultValue: "user"},
})

const Token = sequelize.define('token', {
    refreshToken : {type: DataTypes.STRING, require: true}
})

User.hasOne(Token)
Token.belongsTo(User)


module.exports = {
    User,
    Token,
}