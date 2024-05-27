// function to set loading duration for the loader
export const loaderTimer=(setloading ,time)=>{
    setTimeout(() => {
      setloading(false)
    }, time);
  }