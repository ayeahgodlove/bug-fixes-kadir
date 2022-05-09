
const express = require('express'),
bodyParser = require('body-parser'),
uuid = require('uuid'),
morgan = require('morgan');


const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors({}));

let auth = require('./auth')(app);

const passport = require('passport');
require('./passport');

app.use(morgan('common')); //add morgan middlewar library


let movies = [
{
Title: "Interstellar",
Description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
Genre: {
Name: "Sci-Fi",
Description: " speculative fiction which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life. It has been called the literature of ideas, and it often explores the potential consequences of scientific, social, and technological innovations."
},

Director: {
Name: "Christopher Nolan",
Bio: "Christopher Nolan is an American director, producer, and screenwriter.",
Birth: "1970-07-30"
},
ImagePath: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB",
Featured: true
},
{
Title: "The Hobbit",
Description: "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.",
Genre: {
Name: "Fantasy",
Description: "speculative fiction involving magical elements, typically set in a fictional universe and sometimes inspired by mythology and folklore. Its roots are in oral traditions, which then became fantasy literature and drama. From the twentieth century, it has expanded further into various media, including film, television, graphic novels, manga, animated movies and video games."
},

Director: {
Name: "Peter Jackson",
Bio: "Peter Jackson is an American director, producer, and screenwriter.",
Birth: "1961-10-31"
},
ImagePath: "https://resizing.flixster.com/bvVhpq1XDXo409UQ07ZgFrsIlZ0=/206x305/v2/https://flxt.tmsimg.com/assets/p9458059_p_v8_ac.jpg",
Featured: true
},
{
Title: "Inception",
Description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
Genre: {
Name: "Sci-Fi",
Description: " speculative fiction which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life. It has been called the literature of ideas, and it often explores the potential consequences of scientific, social, and technological innovations."
},

Director: {
Name: "Christopher Nolan",
Bio: "Christopher Nolan is an American director, producer, and screenwriter.",
Birth: "1970-07-30"
},
ImagePath: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
Featured: true
}
];


app.use(express.static('public')); //serves “documentation.html” file from the public folder

app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).send('Something broke!');
});

// listen for requests
const port = process.env.PORT || 8080;
app.listen(port, '0.0.0.0',() => {
console.log('Listening on Port ' + port);
});