const url ='http://localhost:8000/hero'



export const hero = async() => {
  
    return await fetch(`${url}`)
    .then((response) => response.json())
    .then((data) => {
        return data
    })


};



