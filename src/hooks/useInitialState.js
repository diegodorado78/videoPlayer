import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });// videos guarda el estado setVideos lo actualiza

    useEffect(() => {// recibe una funcion anonima que  maneja la logica
        fetch(API) //RECIBE UNA API hago un fetch del fake API
            .then(response => response.json()) //una vez resuelta la promise convierto a json)
            .then(data => {
                setVideos(data); //paso la info en json a la f() que actualiza el estado
    })
    }, []);// array donde especificamos que props deben cambiar para que react actualice el comp
    //si el comp se act pero las props no cambian no se llama la funcion
    // se encarga de ver si hay un cambio en alguna prop para actualizarse
    //console.log(videos);// es uno de los dos valores que devuelve useState
    return videos;
};
export default useInitialState;