import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TabCapsule } from "./TabCapsule";
const ScrollTabs = ({}) => {
    return (
        <View>
            <ScrollView horizontal={true}  style={styles.container} showsHorizontalScrollIndicator={false}>
                <TabCapsule title="Place" backgroundColor="#4269A1" />
                <TabCapsule title="Cullnary" />
                <TabCapsule title="Culture" />
                <TabCapsule title="Monument" />
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        padding: 8,
    },
    card:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 110,
        height: 40,
        borderRadius: 50,
        margin: 8,
        bottom: 15,
    },
    cardElevated:  {
        backgroundColor: '#fff',
    },
})
export default ScrollTabs;