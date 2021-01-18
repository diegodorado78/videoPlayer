import React from "react";
import '../assets/styles/components/Carousel.scss';

const Carousel = ({children}) => {// children son las props que recibe
    return (
        <section className="carousel">
            <div className="carousel__container">
                { children} {/* Aqui pasamos cada elemento del carousel*/}
            </div>
            </section>
    )
};

export default Carousel;