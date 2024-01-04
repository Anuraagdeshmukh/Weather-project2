var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city= document .querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind= document.querySelector('#wind ')
apik="c0b861db865c782f8874353fb9c3f1e5"
function convertion(val)
{
    return (val - 273).toFixed(3)
}

btn.addEventListener('click',function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data => 
        {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var temprature = data['main']['temp']
            var wndspeed = data['wind']['speed']


            city.innerHTML=`weather of <span>${nameval}<span>`
            description.innerHTML = `sky condition: <span>${descrip}<span>`
            temp.innerHTML=`temprature: <span>${convertion(temprature)} C</span>`
            wind.innerHTML=`wind speed: <span>${wndspeed} km/h<span>`
            
        }
        )
        .catch(err => alert ('you enterd wrong city name'))
}
)