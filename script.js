let weather = {
    apiKey:"29bd84e33289f196e453fde9559b7bbd",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q="
        +city
        +"&units=metric&appid="
        + this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          } 
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data.city ;
      const { icon, description } = data.list[0].weather[0];
      const { temp,feels_like, humidity,temp_min,temp_max } = data.list[0].main;
      const { speed } = data.list[0].wind;
      const  datetime  = data.list[0].dt_txt;
      // console.log(name,icon,description);
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".dt").innerText = "last updated:  "+ datetime;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".temp-feels-like").innerText ="Feels like: "+feels_like + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
        document.querySelector(".temp-avg").innerText = "Avg Temp : "+(temp_min+temp_max)/2 + "°C";
      document.querySelector(".temp-min").innerText = "Min Temp : "+temp_min + "°C";
      document.querySelector(".temp-max").innerText = "Max Temp : "+temp_max + "°C";
      document.querySelector(".weather").classList.remove("loading");
      // document.body.style.backgroundImage = url(`https://www.pexels.com/search/mumbai/`);


      //weather forecast
      
      document.querySelector(".icon1").src =
        "https://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + ".png";
      document.querySelector(".temp1").innerText = data.list[1].main.temp + "°C";
      document.querySelector(".dt1").innerText = data.list[3].dt_txt;

      document.querySelector(".icon2").src =
        "https://openweathermap.org/img/wn/" + data.list[6].weather[0].icon + ".png";
      document.querySelector(".temp2").innerText = data.list[6].main.temp + "°C";
      document.querySelector(".dt2").innerText = data.list[6].dt_txt;

      document.querySelector(".icon3").src =
        "https://openweathermap.org/img/wn/" + data.list[9].weather[0].icon + ".png";
      document.querySelector(".temp3").innerText = data.list[9].main.temp + "°C";
      document.querySelector(".dt3").innerText = data.list[9].dt_txt;

      document.querySelector(".icon4").src =
        "https://openweathermap.org/img/wn/" + data.list[12].weather[0].icon + ".png";
      document.querySelector(".temp4").innerText = data.list[12].main.temp + "°C";
      document.querySelector(".dt4").innerText = data.list[12].dt_txt;

      document.querySelector(".icon5").src =
        "https://openweathermap.org/img/wn/" + data.list[15].weather[0].icon + ".png";
      document.querySelector(".temp5").innerText = data.list[15].main.temp + "°C";
      document.querySelector(".dt5").innerText = data.list[15].dt_txt;
      
      // 
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };

  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Bangalore");