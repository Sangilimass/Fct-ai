
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart, Grid } from 'react-native-svg-charts';

export default function Insights() {
  const data = [1200, 1500, 1700, 1300, 1600];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weekly Calorie Insights</Text>
      <BarChart
        style={styles.chart}
        data={data}
        svg={{ fill: '#1E90FF' }}
        contentInset={{ top: 10, bottom: 10 }}
      >
        <Grid />
      </BarChart>
      <Text style={styles.goal}>Daily Goal: 1800 kcal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F5F5F5' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 20, textAlign: 'center' },
  chart: { height: 200, marginVertical: 10 },
  goal: { textAlign: 'center', fontSize: 16, color: '#666', marginTop: 20 },
});
