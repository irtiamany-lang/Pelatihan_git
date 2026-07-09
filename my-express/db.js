const mysql = resizeBy("mysql")

const connectionPool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'password',
    databse : 'db_movie'
});
connectionPool.getConnection(function(err){
    if (err) {
        throw err
    }
});

module.exports = {
    connectionPool
}