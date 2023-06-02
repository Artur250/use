import  React,{useState,useEffect} from 'react';
import {Route, Routes, Router} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Service from './Pages/Service/Service';
import AboutUs from './Pages/AboutUs/AboutUs'
import img from '../../ls35/src/assets/img1.webp'
import img2 from '../../ls35/src/assets/img2.webp'
import img3 from '../../ls35/src/assets/img3.webp'
import img4 from '../../ls35/src/assets/img4.webp'
import './App.css';
const cards = [
  {
    img: img,
    name: 'Клевые тапочки под номером 1',
    price: 4202.45,
    sale: 25,
    quantity: 6,
 
  },
  {
    img: img2,
    name: 'Клевые тапочки под номером 2',
    price: 1780.30,
    sale: 45,
    quantity: 3,
    
  },
  {
    img: img3,
    name: 'Клевые тапочки под номером 3',
    price: 3626.77,
    sale: 34,
    quantity: 13,
 
  },
  {
    img: img4,
    name: 'Клевые тапочки под номером 4',
    price: 3031,
    sale: 50,
    quantity: 4,
 
  }
];

const App = () =>{
  const [count, setCount] = useState(0)
  const resSum =()=>{
    setCount(count + 1) 
  }
  const reSum =()=>{
    setCount(count + 1) 
  }
  const rSum =()=>{
    setCount(count + 1) 
  }
  const Sum =()=>{
    setCount(count + 1) 
  }
  return(
    <div className='App'>
       <p className='p1'>Добавлено:{count}</p>
    <div className='d2'>
    <button onClick={resSum}>Добавить клевые тапочки под номером 1</button>
  <button onClick={reSum}>Добавить клевые тапочки под номером 2</button>
  <button onClick={rSum}>Добавить клевые тапочки под номером 3</button>
  <button onClick={Sum}>Добавить клевые тапочки под номером 4</button>
    </div>
      
 <Header />

      <Routes>
      <Route  exact path='/' element={<Home/>}/>
      <Route  path='/service' element={<Service />}/>
      <Route  path='/about' element={
        
        cards.map((card) =>(
        <AboutUs  
        image={card.img}
            name={card.name}
            price={card.price}
            sale={card.sale}
            quantity={card.quantity}
        />  
      
      ))}
      />
    </Routes>

    <div className='d1'>
     
      </div>

    </div>
    
   
    
    
  )
}


export default App;