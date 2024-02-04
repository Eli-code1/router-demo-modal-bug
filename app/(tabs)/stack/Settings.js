import { router } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function Settings() {
    return (
        <View>
            <Text>Settings</Text>
            <Button title="Open Second Page" onPress={() => router.push('/stack/SecondPage')} />
        </View>
    );
}