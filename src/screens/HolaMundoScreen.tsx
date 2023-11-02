import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import Section from '../components/Section';
import styles from '../styles';
import {CustomButton} from '../components/CustomButton';

export const HolaMundoScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [contador, setContador] = useState(0);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
        flex: 1,
        justifyContent: 'center',
      }}>
      <Section title="BVFE">
        <Text style={styles.highlight}>contador {contador}</Text>
      </Section>
      <CustomButton title="+1" onPress={() => setContador(contador + 1)} />
      <CustomButton
        title="-1"
        position="bl"
        onPress={() => setContador(contador - 1)}
      />
    </View>
  );
};
