import { router, Stack } from 'expo-router';

export default function Layout(){
    return (
        <Stack>
            <Stack.Screen name="Home" />
            <Stack.Screen name="Settings" options = {{presentation:'modal'}}/>
            <Stack.Screen name="SecondPage" />
        </Stack>
    );
}