
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { fetchCalories } from '../services/calorieService';

export default function FoodRecognition() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState('');

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (!result.canceled) {
      setImage(result.uri);
      classifyImage(result.uri);
    }
  };

  const classifyImage = async () => {
    const predictedFood = "apple"; // Example prediction
    const foodData = await fetchCalories(predictedFood);

    setPrediction(
      foodData
        ? `${foodData.name}: ${foodData.calories} kcal`
        : 'Calorie information not found'
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Food Recognition</Text>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Pick an Image</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      {prediction && <Text style={styles.result}>{prediction}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E6F5FF' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 20 },
  button: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  image: { width: 200, height: 200, borderRadius: 10, marginTop: 10 },
  result: { fontSize: 18, marginTop: 20, color: '#333' },
});
