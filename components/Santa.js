import * as React from 'react';
import LottieView from 'lottie-react-native';

export default class Santa extends React.Component{
    render(){
        return(
            <LottieView 
                source={require('../assets/Santa.json')} 
                style={{width:'60%',marginTop:-20}}
                autoPlay loop
            />
        )
    }
}