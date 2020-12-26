const dbname = "books-db";
module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    URL: process.env.BASE_URL ||'localhost:3000',
    MONGODB_URI: process.env.MONGODB_URI || `mongodb+srv://admin:admin@cluster0.g8hzt.mongodb.net/${dbname}?retryWrites=true&w=majority`
}