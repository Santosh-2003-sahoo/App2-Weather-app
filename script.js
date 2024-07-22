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
      
      const{icon1} = data.list[1].weather[0].icon;
      const{temp1} = data.list[1].main.temp;
      const{datetime1} = data.list[1].dt_txt;
      const{icon2} = data.list[2].weather[0];
      const{temp2} = data.list[2].main;
      const{datetime2} = data.list[2].dt_txt;
      const{icon3} = data.list[3].weather[0];
      const{temp3} = data.list[3].main;
      const{datetime3} = data.list[3].dt_txt;
      const{icon4} = data.list[4].weather[0];
      const{temp4} = data.list[4].main;
      const{datetime4} = data.list[4].dt_txt;
      const{icon5} = data.list[5].weather[0];
      const{temp5} = data.list[5].main;
      const{datetime5} = data.list[5].dt_txt;
      
      document.querySelector(".icon1").src =
        "https://openweathermap.org/img/wn/" + icon1 + ".png";
      document.querySelector(".temp1").innerText = temp1 + "°C";
      document.querySelector(".dt1").innerText = datetime1;

      document.querySelector(".icon2").src =
        "https://openweathermap.org/img/wn/" + icon2 + ".png";
      document.querySelector(".temp2").innerText = temp2 + "°C";
      document.querySelector(".dt2").innerText = datetime2;

      document.querySelector(".icon3").src =
        "https://openweathermap.org/img/wn/" + icon3 + ".png";
      document.querySelector(".temp3").innerText = temp3 + "°C";
      document.querySelector(".dt3").innerText = datetime3;

      document.querySelector(".icon4").src =
        "https://openweathermap.org/img/wn/" + icon4 + ".png";
      document.querySelector(".temp4").innerText = temp4 + "°C";
      document.querySelector(".dt4").innerText = datetime4;

      document.querySelector(".icon5").src =
        "https://openweathermap.org/img/wn/" + icon5 + ".png";
      document.querySelector(".temp5").innerText = temp5 + "°C";
      document.querySelector(".dt5").innerText = datetime5;
      
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