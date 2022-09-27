import { useState } from 'react';
import { data } from './data';
import { telluride } from './1-place';
import './App.css';


function App() {
  const [places, setPlaces] = useState(data);
  const [showText, setShowText] = useState(false);
  const [slides, setSlides] = useState(0);
  const {id, slade} = telluride[slides];

  const showTextClick = (item) =>{
    item.showMore = !item.showMore;
    setShowText(!showText)
  }
  
  const removePlace = (id) =>{
   let newArray = places.filter(element => element.id !==id);
   setPlaces(newArray)
 }


 const previousImage = () => {
  setSlides ((slides => {
    slides --;
    if (slides < 0){
      return telluride.length-1;
    }
    return slides;
  }))
  }
  
  const nextImage = () => {
   setSlides((slides =>{
    slides ++;
    if (slides > telluride.length - 1){
      slides = 0;
    }
    return slides;
   }))
  }



  return (
    <div >
      <div className='header'>
      <h1>{places.length} Most Beautiful Places in Colorado</h1>
      </div>
      <div className="slade header">
              <button onClick={previousImage} className='nextBtn'>◀️</button>
              <img src={slade} width="1100px" height="600px" alt="photo"/>
              <button onClick={nextImage}  className='nextBtn'>▶️</button>
              </div>
      <div className='header' >
      <button className='btn' onClick = {()=> setPlaces([])}>DELETE ALL</button>
      </div>
      {places.map((item =>{
        const {id, place, description, image, showMore} = item;
        return(
         
            <div className='container'>
              <div key={id}>
              <div className="header">
              <h2>{id} {place}</h2>
              </div>

              <div className="slade">
              
              <img className='image' src={image} width="800px" alt="photo"/>
              
              </div>

              <div className="header">
            <p>{showMore ? description : description.substring(0, 90) + "..."}
            <button className='show' onClick = {() => showTextClick(item)}> {showMore ? "Show less" : "Show more"}</button>
            </p>
          </div>
          <div className="header">
            <button className='btn' onClick = {() => removePlace(id)}>REMOVE</button>
          </div>

            </div>
            </div>
          
        )
      }))}
      
      
      <div>
     
      </div>
    </div>
  );
}

export default App;
