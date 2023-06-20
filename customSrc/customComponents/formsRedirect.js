import {Button, Linking, View} from "react-native";
import React from "react";
import {globalStyle} from "@src/styles/global";

const FormsRedirect = (props) => {

  const globalStyles = useSelector((state) => globalStyle(state.config.styles))
  const {colors, global} = globalStyles;

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
        style={{backgroundColor: colors.customBackgroundColor}}
        title="Ingresar Historia Clínica Nutricional"
        onPress={openForm1}
    />

    <Button
        style={{backgroundColor: colors.customBackgroundColor}}
        title="Ingresar Medidas de Composición Corporal"
        onPress={openForm2}
    />

    <Button
        style={{backgroundColor: colors.customBackgroundColor}}
        title="Agendar cita"
        onPress={handlePress}
    />
  </View>
}
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//   },
//   button: {
//     marginVertical: 7,
//     fontWeight: 'bold',
//     backgroundColor: '#0C0B0C',
//     color: 'white',
//   },
// });


export default FormsRedirect;