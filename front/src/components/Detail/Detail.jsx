import style from './Detail.module.css';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

const Detail = () => {

    const {id} = useParams();
    console.log(id);
    const [character, setCharacter] = useState({});

    useEffect(() => {

        const key = "henrym-andruizgom"
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(

        <div className={style.myCard}>
        <div className={style.innerCard}>
            <div className={style.frontSide}>
                <h2 className={style.name}>{character?.name}</h2>      
                <h2 className={style.status}>{character?.status}</h2>
                <h2 className={style.species}>{character?.species}</h2>
                <h2 className={style.gender}>{character?.gender}</h2>
                <h2 className={style.origin}>{character?.origin?.name}</h2>

            </div>
            <div className={style.backSide}>
                <img className={style.image} src={character?.image} alt='' />
            </div>
        </div>
    </div>


    )

}

export default Detail;