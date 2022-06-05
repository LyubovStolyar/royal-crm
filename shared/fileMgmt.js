const path = require('path');
const fs = require('fs');
const mongo = require('../controllers/database');

module.exports = {
    getHtmlFilePath: function (htmlFileName) {
        return path.join(__dirname, '../client', htmlFileName);
    },

    exportToFile: async function (res, collectionName) {
        try{
            const filePath = path.join(__dirname, '../exports', `${collectionName}-${now}.txt`);
            const stream = fs.createWriteStream(filePath);

            const database = await mongo.getDB();
            const collection = database.collection(collectionName);

            const cursor = collection.find({});
            await cursor.forEach(doc=> {
                stream.write(JSON.stringify(doc));
            });

            stream.end();

            stream.on('close', function(){
                res.send(`Success. File at: ${filePath}`);
            })
        }
        catch (err){
            throw err;
        }
    },
}