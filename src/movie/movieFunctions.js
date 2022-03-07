const Movie = require("./movieTable");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj);
    } catch (error) {
        console.log(error);
    }
};

exports.updateMovie = async (movieObj) => {
    try {
        await Movie.updateOne(movieObj);
    } catch (error) {
        console.log(error);
    }
};

exports.deleteMovie = async (movieObj) => {
    try {
        await Movie.deleteOne(movieObj);
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async (filterObj) => {
    try {
        if (filterObj.title || filterObj.actor) {
            return await Movie.findOne({where: filterObj});
        } else {
            return await Movie.findAll();
        }
    } catch (error) {
        
    }
}