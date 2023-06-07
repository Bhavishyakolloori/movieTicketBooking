import React from 'react'
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {FcRating} from 'react-icons/fc'
import './Home.css'


function Home() {
    const navigate = useNavigate();
    const navigateToCompleteDetails = (pid) =>{
        console.log("from butt",pid)
        let url='/complete-data/'+pid
        console.log(url)
        navigate(url)
    }

    let[todos,setTodos] = useState([])
    let [error,setError] = useState("")

    useEffect(()=>{
        fetch("https://api.tvmaze.com/search/shows?q=all")
        .then(res=>res.json())
        .then(todosData=>setTodos(todosData))
        .catch((err)=>{
            setError("Something went wrong...!!")
            console.log(err)
        })
    },[])

    

  return (
    <div className='container-fluid'>
    <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 gap-2 home' >
       {error && <h2>{error}</h2>}
       {
        todos.map(todoObj => <div className='row' key={todoObj.show.id}>
            <div className='card  m-5 ' >
                
                    <div className='rating'>
                        <FcRating size="25px"/>
                        {todoObj.show.rating.average}
                    </div>
                    
                    <div className='d-flex mx-auto mt-3 '>
                    <img src = {todoObj.show.image.original}className='image' width={400} height={450} ></img>
                            </div>
            <div className='card-body'>
                <h3 className='text-center text-danger display-4 fw-bold'>{todoObj.show.name}</h3>
                          
            </div>
            <div className='card-footer d-flex mx-auto'>
                <button className='btn btn-danger text-white fs-5' onClick={() =>navigateToCompleteDetails(todoObj.show.id)}>More Details</button>
            </div>
                          
            </div>

                            </div>
                        )
                    }
    
                        
                    
    </div>
    </div>
  )
}

export default Home