import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import axios from 'axios';


const Home = () => {

  const [posts, setPosts] = useState([]);

  const getPosts = async() => {
    
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      
      const data = response.data;
      
    } catch (error) {
      console.log(error);
      alert ("Falta de conxão com o Banco de Dados");
    }

  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <div>Home</div>
  )
}

export default Home
