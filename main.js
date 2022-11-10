const btn=document.querySelector('button')
const inputCity=document.querySelector('#city')
const cityName=document.querySelector('#cityName')
const temp=document.querySelector('#temp')
const humidity=document.querySelector('#humidity')
const wind=document.querySelector('#wind')
const desc=document.querySelector('#desc')
btn.addEventListener('click',()=>{
 getData(inputCity.value)
 
})

const getData=(city)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fd0f744ee1f3af1c0ba8b7e11a7908aa`).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data)
       displayWeather(data)
    })
}

function displayWeather(data){
    cityName.innerText='Weather in '+data.name
    temp.innerText=Math.round(data.main.temp-273) + '*C'
    humidity.innerText='Humidity: '+ data.main.humidity
    wind.innerText='Wind speed: '+ data.wind.speed
}





