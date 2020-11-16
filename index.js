const createUser = require("./repo")
createUser("Bob", 43).then(result => {
    console.log("Added", result.id);
}).catch(error => console.error("error", error))