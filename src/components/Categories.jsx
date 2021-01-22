import React from "react";
import '../assets/styles/components/Categories.scss';

const Categories = ({children,title}) => { //recibe objeto que se pasa por props y lo llama directamente
    return (
        <div className="categories" > 
         <h3 className="categories__title"> {title} </h3>
        {children} {/* elemento que voy a insertar (componente) */}
        </div>

    )
}
export default Categories;