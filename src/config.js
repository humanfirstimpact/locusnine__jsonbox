module.exports = {
	PORT: process.env.PORT || 3000,
	MONGO_URL: "mongodb://jsonbox:jsonbox@localhost:27017/jsonbox" || 'mongodb://localhost:27017/jsonbox'
};
