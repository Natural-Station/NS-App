import {TouchableOpacity, Linking, View, Text} from "react-native";
import React from "react";

const formsRedirect = (props) => {

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
        style={{marginVertical: 4, borderRadius: 15, borderColor: "#0C0B0C"}}
    >
      <Text style={{fontSize: 18}}>
        Ingresar Historia Clínica Nutricional
      </Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={{marginVertical: 4, borderRadius: 15, borderColor: "#0C0B0C"}}
        onPress={openForm2}
    >
      <Text style={{fontSize: 18}}>Medidas de Composición Corporal</Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={{marginVertical: 4, borderRadius: 15, borderColor: "#0C0B0C"}}
        onPress={handlePress}
    >
      <Text style={{fontSize: 18}}>Agendar cita</Text>
    </TouchableOpacity>
  </View>
}

export default formsRedirect;