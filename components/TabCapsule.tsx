import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Entypo } from '@expo/vector-icons';
import { Image } from 'expo-image';

type CapsuleType = {
    title: string;
    backgroundColor?: string;
    color?: string;
}

export const TabCapsule = ({ title, backgroundColor = "white" }: CapsuleType) => {
    return (
        <View style={[styles.card, styles.cardElevated, { backgroundColor: backgroundColor}]}>
            <Text>{title} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 110,
        height: 40,
        borderRadius: 50,
        margin: 8,
        bottom: 15

    },
    cardElevated: {
        backgroundColor: '#fff',
    },


})