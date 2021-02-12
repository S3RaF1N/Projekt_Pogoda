const key = '098e6f42a79988c7ce45d986591416d1';

//beseURL='http://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=098e6f42a79988c7ce45d986591416d1'

// fetch(baseURL)
//     .then((data) => { console.log('response', data.json()) })
//     .catch((error) => {
//         console.log(error);
//     });
// Dzieki temu wiemy jakich informacji szukać



const requestCity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;

    
    const response = await fetch(baseURL + query);

    //zwrocone dane
    const data = await response.json();
    return data;

}
