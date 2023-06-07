import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CompleteData.css';
import {useNavigate} from 'react-router-dom'

function CompleteData() {
  const navigate = useNavigate();
  const navigateToForm = (dat) =>{
    let ur="/book-tickets/"+dat;
    console.log(ur)
    navigate(ur)
  }
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');
  const parm = useParams();
  const url = `https://api.tvmaze.com/shows/${parm.id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((todosData) => setTodos(todosData))
      .catch((err) => {
        setError('Something went wrong...!!');
        console.log(err);
      });
  }, []);

  function removeTags(str) {
    if (str === null || str === '') return false;
    else str = str?.toString();
    return str?.replace(/(<([^>]+)>)/gi, '');
  }

  return (
    <div className='container'>
      <div className='card'>
        <div className='card-body'>
          {error && <h2>{error}</h2>}
          <h2 className='display-1 fw-bold mx-auto'>{todos.name}</h2>
          <div className='d-flex flex-wrap'>
            <div className='mx-auto'>
              <img src={todos.image?.original} alt='TV Show' className='img-fluid' />
            </div>
            <div className='ps-5 p-3'>
              <h2 className='display-5 mx-auto mt-3'>Language: {todos.language}</h2>
              <p className='mx-auto lead'>Genres: {todos.genres}</p>
              <p className='mx-auto lead'>{todos.premiered}</p>
              <p className='mx-auto lead'>Time: {todos.schedule?.time}</p>
              <>{removeTags(todos.summary)}</>
              {console.log(todos.summary)}
            </div>
          </div>
          <div className='mx-auto'>
            <button className='btn btn-danger me-5' onClick={()=>navigateToForm(todos.name)}>Book Tickets!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompleteData;