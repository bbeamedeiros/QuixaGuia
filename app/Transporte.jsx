import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const BusSchedule = () => {
  const schedules = [
    { departureRodovia: { bus: 'A', time: '07h10' }, departureCampus: { bus: 'B', time: '13h05' } },
    { departureRodovia: { bus: 'B', time: '07h15' }, departureCampus: { bus: 'A', time: '13h30' } },
    { departureRodovia: { bus: 'A', time: '07h40' }, departureCampus: { bus: 'B', time: '16h00' } },
    { departureRodovia: { bus: 'B', time: '07h45' }, departureCampus: { bus: 'A', time: '16h00' } },
    { departureRodovia: { bus: 'A', time: '09h35' }, departureCampus: { bus: 'B', time: '17h35' } },
    { departureRodovia: { bus: 'B', time: '11h25' }, departureCampus: { bus: 'A', time: '17h45' } },
    { departureRodovia: { bus: 'A', time: '11h45' }, departureCampus: { bus: 'B', time: '18h05' } },
    { departureRodovia: { bus: 'B', time: '12h05' }, departureCampus: { bus: 'A', time: '18h15' } },
    { departureRodovia: { bus: 'A', time: '12h15' }, departureCampus: { bus: 'B', time: '18h35' } },
  ];

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Itinerário dos Ônibus UFC</Text>
      </View>
            

      <View style={styles.tableHeader}>
        <View style={styles.headerColumn}>
          <Text style={styles.headerText}>Saída da Rodoviária</Text>
        </View>
        <View style={styles.headerColumn}>
          <Text style={styles.headerText}>Saída do campus</Text>
        </View>
      </View>

      {schedules.map((schedule, index) => (
        <View key={index} style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.busLabel}>Ônibus {schedule.departureRodovia.bus}</Text>
            <Text style={styles.timeText}>{schedule.departureRodovia.time}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.busLabel}>Ônibus {schedule.departureCampus.bus}</Text>
            <Text style={styles.timeText}>{schedule.departureCampus.time}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4FFE1',
    padding: 28
  },
  header: {
    backgroundColor: '#F4FFE1',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#8ddf91ff',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  headerColumn: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000ff',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e4babaff',
    backgroundColor: '#F4FFE1',
    paddingLeft: 14
  },
  column: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'Left',
  },
  busLabel: {
    fontSize: 14,
    color: '#000000ff',
    marginBottom: 5,
  },
  timeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000ff',
  },
  title: {
    fontFamily: 'TiltWarp_400Regular',
    color: '#9D1B1B',
    fontSize: 36,
    backgroundColor: '#F4FFE1' 
  
    },

});

export default BusSchedule;