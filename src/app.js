const yargs = require("yargs");

const { sequelize } = require("./db/connection");
const { addMovie, listMovies } = require("./movie/movieFunctions");

const app = async(yargsObj) => {
    try {
        await sequelize.sync();
        if(yargsObj.add){
            await addMovie({title: yargsObj.title, actor: yargsObj.actor});
            // console.log(await listMovies());
            console.log(JSON.stringify(await listMovies(), null, 2)); //output in json format
        }
        else if(yargsObj.update){
            await updateMovie({title: yargsObj.title, actor: yargsObj.actor});
            console.log(JSON.stringify(await listMovies(), null, 2));
        }
        else if(yargsObj.delete){
            await deleteMovie({title: yargsObj.title, actor: yargsObj.actor});
            console.log(JSON.stringify(await listMovies(), null, 2));
        }

        else if (yargsObj.list) {
            // console.log(JSON.stringify(await listMovies({[yargsObj.key]: yargsObj.value}), null, 2));
            console.log(await listMovies());
        }
    } catch (error) {
        console.log(error);
    }
};

app(yargs.argv);