const createUser = require("../repo")

it("can create user", () => {
    return createUser("frank", 34);
});