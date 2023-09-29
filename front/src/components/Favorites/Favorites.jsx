import Card from "../Card/Card";
import { connect, useDispatch} from "react-redux";
import style from "./Favorites.module.css";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";


const Favorites = ({myFavorites}) => {

    const [aux, setAux] = useState(false);


    const dispatch = useDispatch();

    const handleOrder = (event) => {

    dispatch(orderCards(event.target.value))
    setAux(true);

    }


    const handleFilter = (event) => {

    dispatch(filterCards(event.target.value))

    }
    return(
        <div className={style.container}>
            <div className={style.subcontainerSelect}>
            <select className={style.select} onChange={handleOrder}>
                <option value="A">Ascending</option>
                <option value="D">Descending</option>
            </select>

            <select className={style.select} onChange={handleFilter}>
                <option value="allCharacters">All characters</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
            </div>

            <div className={style.subcontainerCards}>
            {
            myFavorites.map(fav => {
                return(
                    <Card
                    key={fav.id}
                    character={fav}                                         
                    />
                )
            })
            }      
            </div>


        </div>
    )
}

const mapStateToProps = (state) => {
    
    return {
        
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);