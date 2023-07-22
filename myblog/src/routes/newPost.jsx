import React from 'react';
import './NewPost.css';
import '../axios/config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blogFetch from '../axios/config';

const NewPost = () => {

  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  // e = ivet
  const createPost = async (e) => {

    e.preventDefault();

    const post = { title, body, userId: 1};

    await blogFetch.post('/posts', {
      body: post
    });

    navigate('/');

  }

  return (
    <div className='new-post'>
      <h2>Inserir Novo post</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título</label>
          <input
           type="text"
           name='title'
           id='titulo'
           placeholder='Digite o título'
           onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo</label>
          <textarea
           name="body"
           id="body"
           cols="30"
           rows="10"
           placeholder='Digite o conteúdo'
           onChange={(e) => setBody(e.target.value)}
           ></textarea>
          <input type="submit" value='criar post' className='btn' />
        </div>
      </form>
    </div>
  )
}

export default NewPost