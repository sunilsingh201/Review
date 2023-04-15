
import React,{useState} from 'react'
import people from "./data";
import {FaChevronLeft,FaChevronRight, FaQuoteRight } from "react-icons/fa"
function Review() {
    const [index,setIndex] = useState(0);
    const {name,job,image,text} = people[index];

    const checkCount = (number) =>{
        if(number > people.length -1){
          return 0;
        }
        if(number < 0){
          return people.length-1;
        }
        return number;
    }

    const getPrev = ()=>{
      setIndex((index)=>{
        let newIndex = index-1;
        return checkCount(newIndex)
      })
    }
    const getNext = ()=>{
      setIndex((index)=>{
        let newIndex = index+1;
        return checkCount(newIndex)
      })
    }
    const getRamdon = ()=>{
      let randomNum = Math.floor(Math.random() * people.length);
      if(randomNum === index){
        randomNum = index+1;
      }
      setIndex(checkCount(randomNum));
    };
  return (
    <article className='review'>
        <div className='img-container'>
            <img src={image} alt={name} className='person-img'/>
            <span className='quote-icon'>
              <FaQuoteRight/>
            </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
          <button className='prev-btn' onClick={getPrev}>
            <FaChevronLeft/>
          </button>
          <button className='next-btn' onClick={getNext}>
            <FaChevronRight/>
          </button>
        </div>
        <button className='random-btn' onClick={getRamdon}>
            Random
        </button>
    </article>
  )
}

export default Review