import {Button, Linking, View} from "react-native";
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
    <Button
        style={styles.Button}
        title="Ingresar Historia Clínica Nutricional"
        onPress={openForm1}
    />

    <Button
      style={styles.Button}
        title="Ingresar Medidas de Composición Corporal"
        onPress={openForm2}
    />

    <Button
        style={styles.Button}
        title="Agendar cita"
        onPress={handlePress}
    />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    marginVertical: 7,
    fontWeight: 'bold',
    backgroundColor: '#f5f5f5',
    color: 'white',
  },
});


export default FormsRedirect;