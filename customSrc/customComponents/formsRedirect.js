import {TouchableOpacity, Linking, View, Text, Button} from "react-native";
import React from "react";

const formsRedirect = (props) => {
  const handlePress = () => {
    const url = "https://plataforma.naturalstationhn.com/citas/";
    Linking.openURL(url).then(r => console.log("Error opening website"));
  }

  return <View style={{padding: 20, backgroundColor: "black", borderRadius: 5}}>

    <TouchableOpacity
        style={{
          marginVertical: 4,
          borderRadius: 15,
          borderColor: "#0C0B0C",
          backgroundColor: "#0CE108",
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 10,
        }}
        onPress={handlePress}
    >
      <Text style={{ fontSize: 18, color: '#FFFFFF' }}>
        Agendar cita
      </Text>
    </TouchableOpacity>
  </View>
}

export default formsRedirect;