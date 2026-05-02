import { Navbar } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './Component/Navbarr';
import { useState } from 'react';
import Header from './Component/Header';
import MovieList from './Component/MovieList';
import Main from './Component/Main';
import Footer from './Component/Footer';
import MovieBanner from './Component/MovieBanner';
import About from './Component/About';
import { Route, Routes } from 'react-router-dom';
import Trailer from './Component/Trailer';


function App() {
  const [movies, setmovies] = useState([
    {  id:Math.random() ,name: "The Lion King", description: "A young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.", posterURL: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg", rating: 4 },
    { id: Math.random(),  name: "Frozen", description: "Anna sets off on an adventure to find her sister Elsa, whose icy powers have trapped Arendelle in eternal winter.", posterURL: "https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg", rating: 4 },
    {  id: Math.random(), name: "Beauty and the Beast", description: "A cursed prince must earn a young woman's love to become human again.", posterURL: "https://image.tmdb.org/t/p/w500/tWqifoYuwLETmmasnGHO7xBjEtt.jpg", rating: 5 },
    {  id: Math.random(), name: "Moana", description: "A spirited Polynesian teen sails out to save her people with the help of demigod Maui.", posterURL: "https://image.tmdb.org/t/p/w500/4JeejGugONWpJkbnvL12hVoYEDa.jpg", rating: 5 },
    { id: Math.random(), name: "Aladdin", description: "A street-smart boy and a magical genie battle an evil sorcerer in the land of Agrabah.", posterURL: "https://i.pinimg.com/736x/54/28/0f/54280fd7fcfb716035ed07c76d27b2b9.jpg", rating: 5 },
    { id: Math.random(), name: "Mulan", description: "A young Chinese maiden disguises herself as a man to take her father's place in the army.", posterURL: "https://i.pinimg.com/736x/08/9b/9f/089b9fdb5d838ee6af3f60616eb510a5.jpg", rating: 4 },
    {  id: Math.random(), name: "Encanto", description: "A Colombian girl is the only member of her magical family without powers.", posterURL: "https://image.tmdb.org/t/p/w500/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg", rating: 4 },

    // ===== Pixar Adventures =====
    {  id: Math.random(), name: "Toy Story", description: "A cowboy doll feels threatened when a flashy spaceman action figure becomes the new top toy.", posterURL: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg", rating: 5 },
    {  id: Math.random(), name: "Finding Nemo", description: "A clownfish embarks on an epic ocean journey to rescue his captured son.", posterURL: "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg", rating: 4 },
    {  id: Math.random(), name: "Up", description: "A grumpy widower and an eager boy scout fly to South America in a balloon-powered house.", posterURL: "https://image.tmdb.org/t/p/w500/vpbaStTMt8qqXaEgnOR2EE4DNJk.jpg", rating: 5 },
    {  id: Math.random(), name: "Inside Out", description: "The five emotions inside a young girl's mind struggle to guide her through a major life change.", posterURL: "https://image.tmdb.org/t/p/w500/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg", rating: 2 },
    {  id: Math.random(), name: "Coco", description: "A young boy travels to the Land of the Dead to uncover his family's musical history.", posterURL: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg", rating: 5 },
    { id: Math.random(), name: "Monsters, Inc.", description: "Two monsters who scare children for power discover a little girl is not as terrifying as they thought.", posterURL: "https://i.pinimg.com/1200x/5f/a0/6b/5fa06be50b9abe479180e96b8ceaa622.jpg", rating: 2 },
    { id: Math.random(), name: "Ratatouille", description: "A rat with a passion for cooking teams up with a young kitchen worker in Paris.", posterURL: "https://i.pinimg.com/webp70/1200x/02/d9/1f/02d91f8899c03a2bf656e0b197753b7f.webp", rating: 4 },

    // ===== Marvel & Star Wars =====
    {  id: Math.random(), name: "Avengers: Endgame", description: "The Avengers assemble once more to undo Thanos's actions and restore order to the universe.", posterURL: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", rating: 3 },
    {  id: Math.random(), name: "Spider-Man: No Way Home", description: "Peter Parker seeks Doctor Strange's help when his identity as Spider-Man is revealed.", posterURL: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg", rating: 3 },
    {  id: Math.random(), name: "Guardians of the Galaxy", description: "A group of intergalactic misfits band together to stop a fanatic from destroying the cosmos.", posterURL: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg", rating: 4 },
    {  id: Math.random(), name: "Black Panther", description: "T'Challa returns home to take his place as king of the technologically advanced Wakanda.", posterURL: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg", rating: 4 },
    {  id: Math.random(), name: "Star Wars: The Force Awakens", description: "A new generation of heroes rises against the dark forces of the First Order.", posterURL: "https://image.tmdb.org/t/p/w500/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg", rating: 3 },
    { id: Math.random(), name: "Rogue One: A Star Wars Story", description: "Rebels embark on a daring mission to steal the plans for the Death Star.", posterURL: "https://i.pinimg.com/736x/80/10/92/80109250d8ddb41947a98110a81b76e3.jpg", rating: 2 }
  

  ]);
  const [text, settext] = useState("")

 const [rate, setrate] = useState("")


  return (
    <div className="App">
     <Navbarr settext={settext} setrate={setrate} />
     
      
      
    
   
      <Routes>
        <Route path="/movies" element={<MovieList movies={movies} text={text} rate={rate} />} />
        <Route path="/about" element={<About />} />
        <Route path="/trailer/:id" element={<Trailer movies={movies} />} />

     

      </Routes>
      <Footer />
    
    </div>
  );
}

export default App;
