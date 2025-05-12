import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';


export default () => {
  const [movieList, setMovieList] = useState([]);
 useEffect(() => {
   // Pegando a lista total
   const loadAll = async () => {
     // Pegando a lista total
     let list = await Tmdb.getHomeList();
     console.log(list);
   };
   loadAll();
 }, []);

 return (
    <div className="page">
     <section className="lists">
      {movieList.map((item, key) => (
        <MovieRow key={key} title={item.title} items={item.items} />
      ))}
     </section>
   </div>
 );
}