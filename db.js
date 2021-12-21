const db = require('mongoose');

db.Promise = global.Promise;


//mongodb+srv://db_user_biccs:kondas123@cluster0.ihoyt.mongodb.net/chatapp?retryWrites=true&w=majority
async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true,
    });

    console.log('[db] Connected succesfully')
}

module.exports = connect;