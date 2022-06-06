function weather(){
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/besan%C3%A7on?unitGroup=metric&include=days%2Ccurrent%2Chours&key=ZSTE8F38YSQMR7KY73KEDQ245&contentType=json", {
        "method": "GET",
    })
      .then((response) => {
       return response.json()
    })
      .then((data)=>{
          console.log(data)
      })
}


weather()