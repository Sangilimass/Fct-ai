
export const fetchCalories = async (foodName) => {
  // Mocked calorie data
  const foodDatabase = {
    apple: { name: 'Apple', calories: 52 },
    banana: { name: 'Banana', calories: 96 },
    // Add more items
  };

  return foodDatabase[foodName.toLowerCase()] || null;
};
