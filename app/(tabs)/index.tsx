import React, { useState } from "react";
import { StyleSheet,Text,FlatList,View,TouchableOpacity,Image} from "react-native";
import {  GestureHandlerRootView, ScrollView} from "react-native-gesture-handler";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
export default function HomeScreen() {
  const image1 = require("../Images/Image1.jpeg");
  const image2 = require("../Images/Image2.jpeg");
  const image3 = require("../Images/Image3.jpeg");
  const image4 = require("../Images/Image4.jpeg");
  const image5 = require("../Images/Image5.jpeg");
  const image6 = require("../Images/Image6.jpeg");
  const image7 = require("../Images/Image7.jpeg");
  const image8 = require("../Images/Image8.jpeg");

  const [images, setImages] = useState([
    { key: image1, description: "A good image1" },
    { key: image2, description: "A good image2" },
    { key: image3, description: "A good image3" },
    { key: image4, description: "A good image4" },
  ]);

  const handleChangeImages = () => {
    images[0].key === image1
      ? setImages([
          { key: image5, description: "A good image 5" },
          { key: image6, description: "A good image 6" },
          { key: image7, description: "A good image 7" },
          { key: image8, description: "A good image 8" },
        ])
      : setImages([
          { key: image1, description: "A good image 1" },
          { key: image2, description: "A good image 2" },
          { key: image3, description: "A good image 3" },
          { key: image4, description: "A good image 4" },
        ]);
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView edges={["top"]}>
          <View style={styles.container}>
            <FlatList
              data={images}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <ScrollView>
                  <Image source={item.key} style={styles.images} />
                  <Text style={styles.text}>{item.description}</Text>
                </ScrollView>
              )}
              horizontal={true}
            />

            <TouchableOpacity
            style={styles.button} 
            onPress={handleChangeImages}
            >
              <Text>Cambia las Imágenes mostradas</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center",
  },
  images: {
    width: 160,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  button: {
    width: 240,
    height: 30,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    margin: 10, 
  },
  text: {
    margin: "auto",
  },
});
