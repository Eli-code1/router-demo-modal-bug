import { router } from 'expo-router';
import { Text, View, TouchableOpacity } from 'react-native';

export default function Home(){
    return (
        <TouchableOpacity onPress={() => router.push('/stack/Settings')}>
            <View>
                <Text>Settings</Text>
            </View>
        </TouchableOpacity>
    )
}
