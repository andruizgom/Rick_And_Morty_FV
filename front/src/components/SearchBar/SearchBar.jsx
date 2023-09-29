import style from './SearchBar.module.css';
import { useState, useEffect } from "react";

export default function SearchBar({onSearch}) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   }

   
   return (
      <div>
         <input className={style.searchBarInput} type='search' onChange={handleChange} value={id}/>
         <button className={style.searchBarButton} onClick={() => {onSearch(id); setId("")}}>Add</button>
      </div>
   );
}
