import axios from "axios";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      log: '',
      displayname: '',
      mapF: false,
      displayErroe: ''
    }

  }
  // async in order use await 
  getLoc = async (event) => {
    event.preventDefault();
    // console.log('Hi')

    const cityName = event.target.cityName.value;
    console.log(cityName)
    const key = 'pk.ddfda21a6b66752b544d6177b64d789d';
    const URL = `https://eu1.locationiq.com/v1/search.php?key=${key}&q=${cityName}&format=json`;
    // const maprepresent = 
  
    try {

      let responceData = await axios.get(URL); // give information get from API
      console.log(responceData.data);
      this.setState({
        lat: responceData.data[0].lat,
        lon: responceData.data[0].lon,
        displayname: responceData.data[0].display_name,
        // mapSrc:`https://maps.locationiq.com/v3/staticmap?key=pk.ddfda21a6b66752b544d6177b64d789d&center=${this.state.lat},${this.state.lon}`
        mapF: true




      })

    }
  


    catch {

      console.log('Error');
      this.state({ displayErroe: true });

    }




  }
    render() {
      return (
        <>

          <h1>Location App</h1>
          <form onSubmit={this.getLoc}>

            <input type='text' name='cityName' placeholder='Enter city Name please'></input>
            <button type='submit'>Get Location</button>
          </form>



          {// render Data
          }

          <p> Nmae : {this.state.displayname}</p>

          <p>Latitude : {this.state.lat}</p>

          <p>Longitude : {this.state.lon}</p>


          {this.state.mapF &&
            <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.ddfda21a6b66752b544d6177b64d789d&center=${this.state.lat},${this.state.lon}`} alt='Map' />
          }

{this.state.displayErroe && <p>Error </p>    }
        </>

      )

    }

  }

  
  
export default App;