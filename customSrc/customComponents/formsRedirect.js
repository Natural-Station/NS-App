import {TouchableOpacity, Linking, View} from "react-native";
import React from "react";

const FormsRedirect = (props) => {
    
  const openForm1 = () => {
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc682QZyetUQ042hBuAx_lIRhhMQEbW6Xz9GZG1Bb-mTIaoUQ/viewform";
    Linking.openURL(formUrl);
  }

  const openForm2 = () => {
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfill6uORK8DfFWomabyUkIUhGJpnSF6pxXd-1LiMfIeZ8oGQ/viewform";
    Linking.openURL(formUrl);
  }

  const handlePress = () => {
    const url = "https://plataforma.naturalstationhn.com/citas/";
    Linking.openURL(url).then(r => console.log("Error opening website"));
  }

  return <View style={{padding: 20, backgroundColor: "black", borderRadius: 5}}>
    <TouchableOpacity
        onPress={openForm1}
    >
      <Text>
      Ingresar Historia Clínica Nutricional
      </Text>
      </TouchableOpacity>

    <TouchableOpacity
        onPress={openForm2}
    >
      <Text>Medidas de Composición Corporal</Text>
    </TouchableOpacity>

    <TouchableOpacity
        onPress={handlePress}
    >
        <Text>Agendar cita</Text>
    </TouchableOpacity>  
    </View>
}

export default FormsRedirect;