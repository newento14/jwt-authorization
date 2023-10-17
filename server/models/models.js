const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: {type: DataTypes.STRING, maxLength: 64},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, maxLength: 64},
    role: {type: DataTypes.STRING, defaultValue: "user"},
    profilePicture: {type: DataTypes.STRING, maxLength:100},
    easyProblemSolved: {type: DataTypes.INTEGER, defaultValue: 0},
    mediumProblemSolved: {type: DataTypes.INTEGER, defaultValue: 0},
    hardProblemSolved: {type: DataTypes.INTEGER, defaultValue: 0},
})

const Problem = sequelize.define('problem', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING, maxLength: 50},
    desc: {type: DataTypes.STRING, maxLength:200},
    difficulty: {type: DataTypes.ENUM("easy", "medium", "hard")},
    tag: {type: DataTypes.STRING}
})

const CodeSamples = sequelize.define('codeSamples', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    language: {type: DataTypes.ENUM('c++', 'js', 'ts', 'java', 'c#', 'python')},
    sample: {type: DataTypes.STRING, maxLength: 200}
})

const Submissions = sequelize.define('usersSubmissions', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    language: {type: DataTypes.ENUM('c++', 'js', 'ts', 'java', 'c#', 'python')},
    runtime: {type: DataTypes.DECIMAL},
    memory: {type: DataTypes.DECIMAL},
    date: {type: DataTypes.DATE},
})

const Token = sequelize.define('token', {
    refreshToken : {type: DataTypes.STRING, require: true}
})

User.hasMany(Submissions)
Submissions.belongsTo(User)

User.hasOne(Token)
Token.belongsTo(User)

Problem.hasMany(Submissions)
Submissions.belongsTo(Problem)

Problem.hasMany(CodeSamples)
CodeSamples.belongsTo(Problem)

module.exports = {
    User,
    Problem,
    Token,
    Submissions
}

