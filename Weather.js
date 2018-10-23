import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title : "RAINY",
    subtitle: "Get your 🦁BEAST🐯 ready",
    icon: "weather-rainy"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title : "SUNNY",
    subtitle: "🍅Tomatos 🍅 are growing!!!",
    icon: "weather-sunny"
  },
  Thunderstorm: {
    colors: ["#00ECBC", "#007ADF"],
    title : "THUNDERSTORM",
    subtitle: "Thor ⛈️⚡!!! Chill Boiii",
    icon: "weather-lightning"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title : "CLOUDY",
    subtitle: "What a TYPICAL Auckland 😒🙄",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title : "SNOWY",
    subtitle: "Let's have HOT CHOCOLATE 🍫",
    icon: "weather-snowy"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title : "DRIZZLE",
    subtitle: "🌪Albany🌪 might be raining! LOL",
    icon: "weather-hail"
  },
  Haze: {
    colors: ["#89F7FE", "#66A6FF"],
    title : "HAZE",
    subtitle: "Plz no rain, Sun 🌞, I need you 💝",
    icon: "weather-hail"
  },
  Mist: {
    colors: ["#D7D2CC", "#304352"],
    title: "MIST",
    subtitle: "Dini feels like not having 🤓 on",
    icon: "weather-fog"
  }
};

function Weather({ weatherName, temp }) {
  return (
    <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
      <View style={styles.upper}>
        <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}> {weatherCases[weatherName].subtitle} </Text>
      </View>
    </LinearGradient>
  );
}


export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop:30
  },
  /*temperature: {
    fontSize: 48,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  */
  temp: {
    fontSize: 48,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 0
    },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25,
    paddingRight: 25
},
  title: {
    fontSize: 35,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 2,
    fontWeight: "600",
    fontStyle:"italic" 
  },
  subtitle: {
    marginBottom: 50,
    backgroundColor: "transparent",
    color: "white",
    fontSize: 17,
    backgroundColor: "transparent",
    color: "white",


  }
});