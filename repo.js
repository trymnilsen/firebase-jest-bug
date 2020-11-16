const firebase = require("firebase-admin")

function createUser() {
    process.env["FIREBASE_DATABASE_EMULATOR_HOST"] = "localhost:5003";
    process.env["FIRESTORE_EMULATOR_HOST"] = "localhost:5002";
    
    const adminApp = firebase.initializeApp({
        projectId: "<project-id-here>",
    });
    
    return (name, age) => {
        return adminApp.firestore().collection("users").add({
            name,
            age
        });
    }
}
module.exports = createUser();