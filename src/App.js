import React, { Component } from 'react';
import Films from './Films'
import AddFilm from './AddFilm'


class App extends Component {
  state = {
    films: [
      {
        name: "Alice in Wonderland (1951)",
        violence: false,
        sex: false,
        profanity: false,
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Alice_in_Wonderland_%281951_film%29_poster.jpg/220px-Alice_in_Wonderland_%281951_film%29_poster.jpg",
        imdB: "https://www.imdb.com/title/tt0043274/"
      },
      {
        name: "Avengers: Endgame (2019)",
        violence: true,
        sex: false,
        profanity: false,
        image: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
        imdB: "https://www.imdb.com/title/tt4154796/"
      },
      {
        name: "The Godfather (1972)",
        violence: true,
        sex: true,
        profanity: true,
        image: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
        imdB: "https://www.imdb.com/title/tt0068646/"
      },
      {
        name: "King Kong (1933)",
        violence: true,
        sex: false,
        profanity: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Kingkongposter.jpg/220px-Kingkongposter.jpg",
        imdB: "https://www.imdb.com/title/tt0024216/"
      },
      {
        name: "The Lord of the Rings: The Return of the King (2003)",
        violence: true,
        sex: false,
        profanity: false,
        image: "https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg",
        imdB: "https://www.imdb.com/title/tt0167260/"
      },
      {
        name: "Planet of the Apes (1968)",
        violence: true,
        sex: false,
        profanity: true,
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/PlanetoftheapesPoster.jpg/220px-PlanetoftheapesPoster.jpg",
        imdB: "https://www.imdb.com/title/tt0063442/"
      },
      {
        name: "The Shining (1980)",
        violence: true,
        sex: true,
        profanity: true,
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/The_Shining_%281980%29_U.K._release_poster_-_The_tide_of_terror_that_swept_America_IS_HERE.jpg/220px-The_Shining_%281980%29_U.K._release_poster_-_The_tide_of_terror_that_swept_America_IS_HERE.jpg",
        imdB: "https://www.imdb.com/title/tt0081505/"
      },
      {
        name: "Tangled (2010)",
        violence: false,
        sex: false,
        profanity: false,
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/Tangled_poster.jpg/220px-Tangled_poster.jpg",
        imdB: "https://www.imdb.com/title/tt0398286/"
      },
      {
        name: "Transformers (2007)",
        violence: true,
        sex: false,
        profanity: false,
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Transformers07.jpg/220px-Transformers07.jpg",
        imdB: "https://www.imdb.com/title/tt0418279/"
      },
      {
        name: "When Harry Met Sally... (1989)",
        violence: false,
        sex: true,
        profanity: true,
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/WhenHarryMetSallyPoster.jpg/220px-WhenHarryMetSallyPoster.jpg",
        imdB: "https://www.imdb.com/title/tt0098635/"
      }
    ]
  }
  deleteFilm = (id) => {
    const films = this.state.films.filter(film => {
      return film.name !== id
    });
    this.setState({
      films: films
    })
  }
  addFilm = (film) =>{
    for(var i = 0; i < this.state.films.length; i++){
      console.log(this.state);
      if(this.state.films[i].name == film.name){
        this.state.films[i].violence = film.violence;
        this.state.films[i].sex = film.sex;
        this.state.films[i].profanity = film.profanity;
        this.setState({
        })
        console.log(this.state.films[i]);
        return 0;
      }
    }
    let films = [...this.state.films, film];
    films.sort(compare);
    this.setState({
      films: films
    })
  }
  render() {
    return (
      <div className="films-app container">
        <Films films={this.state.films} deleteFilm={this.deleteFilm}/>
        <AddFilm addFilm={this.addFilm}/>
      </div>
    );
  }
}
function compare( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}

export default App;