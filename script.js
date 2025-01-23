const input = document.getElementById("location");
const button = document.getElementById("search-btn");

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

async function getData (city){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=3bf1af7745df406ba4b143109252201&q=${city}&aqi=yes`);
    return await promise.json();
}

button.addEventListener("click",async () => {
     const value = input.value ;
      const result = await getData(value);
      cityName.innerText = `${result.location.name},${result.location.region},${result.location.country}`
      cityTime.innerText = result.location.localtime;
      cityTemp.innerText = result.current.temp_c ;
})