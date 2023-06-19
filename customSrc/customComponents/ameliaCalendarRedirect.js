import {Button, Linking, View} from "react-native";
import React from "react";

const AmeliaCalendarRedirect = (props) => {
  const handlePress = () => {
    const url = "https://naturalstationhn.com";
    Linking.openURL(url).then(r => console.log("Error opening website"));
  }

  return <View style={{padding: 20, backgroundColor: "black", borderRadius: 5}}>
    <Button
        title="Agendar cita"
        onPress={handlePress}
    />
  </View>
}

export default AmeliaCalendarRedirect;