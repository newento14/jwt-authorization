module.exports = class userDto {
    id;
    email;

    constructor(user) {
        console.log(user);
        this.id = user.id;
        this.email = user.email;
    }
}