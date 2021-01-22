import React, {useState, useEffect} from 'react';

import Header from '../components/Header';
import Buscador from '../components/Buscador';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import Footer from "../components/Footer";
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';
const API = 'http://localhost:3000/initialState/';

const App = () => {// al usar llaves puedo usar el return (explicito)
    // lo que significa que puedo hacer llamado a f() dentro del componente useState(), useEffect()
    const initialState = useInitialState(API);
    return initialState.length === 0 ? <h1> loading... </h1> : ( // validacion =>si mi lista es mayor a cero se muestra 
        <div className="App">
            <Header />
            <Buscador />
            {initialState.mylist.length > 0 && 
                <Categories title="Mi lista">
                    <Carousel>
                    {
                        initialState.mylist.map(item =>
                            < CarouselItem key={item.id} {...item}/> 
                        )}
                </Carousel>
                </Categories>
            }
            <Categories title = "Tendencias">
                <Carousel>
                    {
                        initialState.trends.map(item =>
                            < CarouselItem key={item.id} {...item}/> 
                            )}
                </Carousel>
            </Categories>

            <Categories title = "Originales de EchoLearning Video">
                <Carousel>
                {
                        initialState.originals.map(item =>
                            < CarouselItem key={item.id} {...item}/> 
                            )}                </Carousel>
            </Categories>
            <Footer />

          </div>   
    )
}
   /*
   const App = () => {
  const initialState = useInitialState(API);

  return initialState.length === 0 ? <h1> Loading... </h1> : (
    <div className='App'>
      <Header />
      <Search />
      {
        Object.keys(initialState)
          .map((category) => {
            if (initialState[category].length) {
              return (
                <Categories key={category} title={category}>
                  <Carousel>
                    {initialState[category].map((item) => <Item key={item.id} {...item} />)}
                  </Carousel>
                </Categories>
              );
            }
          })
      }
      <Footer />
    </div>
  );
};
   */
export default App;