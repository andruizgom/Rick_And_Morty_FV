import './App.css';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect } from "react";
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';


function App() {

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = 'unaPassword41';

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
   
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
         
      } catch (error) {
         alert('Invalid user or password');
      }
   }

   const logout = () => {
      setAccess(false);
   }

   useEffect(() => {
      !access && navigate('/');
      }, [access])

   const location = useLocation();

   let[characters, setCharacters] = useState([]);

   const onSearch = async (id) => {

      const key = "henrym-andruizgom"
      const characterDuplicated = characters.find(character => character.id == id) 
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if(data.name && !characterDuplicated){
            setCharacters((oldChars) => [...oldChars, data]);
         }
         
      } catch (error) {         
         alert('¡No hay personajes con este ID!');
      }
   }

   const onClose = (id) => {

      setCharacters(characters.filter(character => character.id !== id))

   }

   return (
      <div className='App'>
         {
            location.pathname !== '/' ? <Nav onSearch={onSearch} logout={logout}/> : null
         }
         
         <Routes>

         <Route path='/' element={<Form login={login}/>}/>
         <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/detail/:id' element={<Detail/>}/>
         <Route path='/favorites' element={<Favorites/>}/>
                 
         
         </Routes>

      </div>
   );
}

export default App;
