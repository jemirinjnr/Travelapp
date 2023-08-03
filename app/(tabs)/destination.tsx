import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function TabTwoScreen() {
  return (
    <View>
      <SafeAreaView style={{ backgroundColor: "#F4F4F4" }}>
        <View style={{ backgroundColor: "#F4F4F4" }}>
          <View style={styles.page}>
            <Text style={styles.header}>Best, <Text style={styles.header1}>Destination </Text></Text>
            <Ionicons name="settings-outline" size={23} color="#6B6C6C" /> 
          </View>
          <View>
            
          </View>
        </View >
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({

  page: {
    marginLeft: 5,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#F4F4F4",
    marginTop: 20,
  },
  header: {
    marginLeft: 15,
    fontSize: 25,
  },
  header1: {
    color: '#4269A1',
    fontSize: 25,
  },
});
