import React from 'react';
import Header from '../components/Header';
import Buscador from '../components/Buscador';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import Footer from "../components/Footer";

import '../assets/styles/App.scss';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Buscador />
            <Categories title = "Populares">
                <Carousel>
                    < CarouselItem />
                    < CarouselItem />
                    < CarouselItem />
                    < CarouselItem />
                </Carousel>
            </Categories>

            <Categories title = "Mis favoritos">
                <Carousel>
                    < CarouselItem />
                    < CarouselItem />
                    < CarouselItem />
                    < CarouselItem />
                    < CarouselItem />

                </Carousel>
            </Categories>

            <Categories title = "Recomendados para ti">
                <Carousel>
                    < CarouselItem />
                    < CarouselItem />
                    < CarouselItem />
                </Carousel>
            </Categories>
            <Footer />

          </div>   
    )
}
   
export default App;