import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native'
import React from 'react'

const Truee = () => {
  return (
    <View>
      <Image source={require('../assets/a1.png')} style={{ width: '100%', height: 300, marginTop: 170 }} />

      <ImageBackground source={require('../assets/a2.png')} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Text style={styles.content}>Chỉ cần nói: bán cho tui 1 hộp kem đánh răng (vì người mù đó đâu có
            câm)  </Text>
        </View>

        <TouchableOpacity style={{ flex: 3 }} onPress={() => Alert.alert('Có cái đéo')}>
          <ImageBackground  source={require('../assets/a3.png')} style={{
            width: 200, height: 80, resizeMode: 'contain',
            marginTop: 110, marginLeft: 110
          }} >
          <View style={{
            justifyContent: 'center', alignItems: 'center'
          }}>
            <Text style={{ fontSize: 20, color: '#FFFFFF', textAlign: 'center',marginTop:30 ,fontWeight:900}}>Chơi Tiếp</Text>
          </View>
          </ImageBackground>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    fontWeight:'bold'
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  backgroundImage: {
    width: '100%',
    height: 210,
    resizeMode: 'cover',
    marginTop: -30,

  },
});
export default Truee