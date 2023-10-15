import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          <Text style={styles.darkModeBoldText}> in bold</Text> Style
          inheritance
        </Text>
      </View>
      <View style={[styles.box, styles.lightblueBg, styles.boxShadow]}>
        <Text>Lightblue Box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg, styles.androidShadow]}>
        <Text>Lightgreen Box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  darkMode: {
    backgroundColor: "black",
    color: "white",
  },
  darkModeText: {
    color: "white",
  },
  darkModeBoldText: {
    fontWeight: "bold",
  },
  box: {
    width: 250,
    height: 250,
    padding: 10,
    marginVertical: 15,
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "#333333", // only property that works on both platforms
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    //Works onlu om iOS: to
  },
  androidShadow: {
    elevation: 10,
  },
});
