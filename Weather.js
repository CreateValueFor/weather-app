import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet,View,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Weather({temp,conditions}){
    return (
        <View style={styles.container}>
            <Text>{temp}</Text>
        </View>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
		conditions: PropTypes.oneOf([
			"Thunderstorm",
			"Drizzle",
			"Rain",
			"Snow",
			"Clear",
			"Clouds",
			"Haze",
			"Mist",
			"Dust"
		]).isRequired
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    }
})