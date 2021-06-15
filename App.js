import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from "expo-location";
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "2df5352bd99f09dbc1de0b7a1365efcf";

export default class extends React.Component{
  state = {
    isLoading: true
  }
  getWeather = async(latitude,longitude) => {
    const {data:{main:{temp},weather}} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`)
    this.setState({
      isLoading:false,
      condition:weather[0] ,
      temp:temp
    });
  } 
  getLocation = async() =>{
    try {
      await Location.requestForegroundPermissionsAsync();
      const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync()  
      this.getWeather(latitude,longitude)
      
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
    
    
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){ 
    //view 는 div와 비슷하다, text는 span과 비슷하다
    const {isLoading, temp,condition} = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition} />;
  ;}
}

