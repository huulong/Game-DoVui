// Rest of the import statements
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/UTM-Cookies.ttf'),
    'Lam': require('./assets/fonts/PixelifySans-Medium.ttf'),
  });
}
