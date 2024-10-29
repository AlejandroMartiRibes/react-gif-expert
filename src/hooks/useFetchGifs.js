import React from 'react'
import { useState, useEffect } from 'react';
import { GetGifs } from '../helpers/GetGifs';

export const useFetchGifs = ( category ) => {

    const [ images, setImages ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( true );

    const GetImages = async() => {
        const newImages = await GetGifs( category );
        setImages(newImages);
        setIsLoading( false );
        
    }

    useEffect( () => {
        GetImages();
    }, [ ]);
 
    return {
        images,
        isLoading
    }
}



