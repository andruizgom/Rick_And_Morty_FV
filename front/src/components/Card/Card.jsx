import style from './Card.module.css';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {addFav, removeFav} from '../../redux/actions';
import { useState, useEffect } from 'react';

function Card({character, onClose, addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      switch(isFav){
         case true:
            setIsFav(false);
            return removeFav(character.id);
         case false:
            setIsFav(true);
            return addFav(character);
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.container}>

         <button className={style.btnClose} onClick={() => onClose(character.id)}>X</button>         
         <NavLink to={`/detail/${character.id}`}><h2 className={style.name}>{character.name}</h2></NavLink>         
         <h2 className={style.status}>{character.status}</h2>
         <h2 className={style.species}>{character.species}</h2>
         <h2 className={style.gender}>{character.gender}</h2>
         <h2 className={style.origin}>{character.origin.name}</h2>
         <img className={style.image} src={character.image} alt='character photo' />
         {
            isFav ? (
               <button className={style.fav} onClick={handleFavorite}>🥒</button>
               ) : (
               <button className={style.fav} onClick={handleFavorite}>🖤</button>
               )
         }
      </div>
   );
}

const mapStateToProps = (state) => {

   return {
       myFavorites: state.myFavorites
   }

}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(

   mapStateToProps, 
   mapDispatchToProps 

)(Card);
  