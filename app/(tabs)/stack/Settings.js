import { router } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function Settings() {
    return (
        <View>
            <Text>Settings</Text>
            <Button title="Open Modal" onPress={() => router.push('/stack/Home')} />
        </View>
    );
}