
import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';

export default function MealHistory() {
  const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState('');
  const [calories, setCalories] = useState('');

  const addMeal = () => {
    if (mealName && calories) {
      setMeals([...meals, { id: Date.now().toString(), name: mealName, calories }]);
      setMealName('');
      setCalories('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meal History</Text>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.mealItem}>
            <Text style={styles.mealText}>{item.name}</Text>
            <Text style={styles.calorieText}>{item.calories} kcal</Text>
          </View>
        )}
      />
      <TextInput
        placeholder="Meal Name"
        value={mealName}
        onChangeText={setMealName}
        style={styles.input}
      />
      <TextInput
        placeholder="Calories"
        value={calories}
        onChangeText={setCalories}
        style={styles.input}
        keyboardType="numeric"
      />
      <Button title="Add Meal" color="#1E90FF" onPress={addMeal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFF8F0' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 20 },
  mealItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#E0F7FA',
    marginVertical: 5,
    borderRadius: 5,
  },
  mealText: { fontSize: 16, color: '#333' },
  calorieText: { fontSize: 16, fontWeight: 'bold', color: '#1E90FF' },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});
