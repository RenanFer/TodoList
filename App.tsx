import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';
import {
    useFonts,
    Inter_400Regular,
    Inter_700Bold,
} from '@expo-google-fonts/inter';

import theme from './src/theme';
import { Home } from './src/screens/Home';

export default function App() {
    const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });
    return (
        <ThemeProvider theme={theme}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            {fontsLoaded ? <Home /> : <ActivityIndicator />}
        </ThemeProvider>
    );
}
