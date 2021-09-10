import React from "react";

class App extends React.Component{


  getLoc=(event)=>{
event.preventDefault();
// console.log('Hi')

const cityName =event.target.cityName.value;
console.log(cityName)
const key='pk.ddfda21a6b66752b544d6177b64d789d';
const URL =`GET https://eu1.locationiq.com/v1/search.php?key=${key}&q=${cityName}&format=json`;

  }

render()
{
return(
<>

<h1>Location App</h1>
<form onSubmit={this.getLoc}>

<input type='text' name='cityName' placeholder='Enter city Name'></input>
<button type='submit'>Get Location</button>
</form>


</>

)




}



}

export default App;