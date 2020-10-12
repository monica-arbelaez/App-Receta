import { useEffect, useState } from "react";

export const GetReceta = async() => {
    const url = 'https://recipe-rissoto.now.sh/recipe';
    const resp =  await fetch(url );
    const data = await resp.json();
    return data;

    
    // const datos  = fetch(url, {
    //     method: 'GET', // or 'PUT'
    //     headers:{
    //       'Content-Type': 'application/json'
    //     }
    //   }).then(res => res.json())
    //   .catch(error => console.error('Error:', error))
    //   .then(response => {
    //     return response
    //   });

    //   return datos

}