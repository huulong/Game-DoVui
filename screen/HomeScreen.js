import React, { useEffect, useCallback, useState } from 'react';
import { Image, StyleSheet, Text, View, ImageBackground, Alert, TouchableOpacity, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {playSound, stopSound} from "../function/SoundPlayer";
import { saveGameData, loadGameData } from '../function/GameDataStorage'; // Update with the correct file path

SplashScreen.preventAutoHideAsync();

export default function HomeScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    'UTM-Cookies': require('../assets/fonts/UTM-Cookies.ttf'),
  });
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSound = () => {
    if (isPlaying) {
      stopSound();
      setIsPlaying(false);
    } else {
      playSound();
      setIsPlaying(true);
    }
  };
  const [gameData, setGameData] = useState({ level: 1, score: 0 });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await playSound();
      await SplashScreen.hideAsync();
      // Load game data from AsyncStorage
      const loadedData = await loadGameData();
      if (loadedData) {
        setGameData(loadedData); // Update gameData state with the loaded data
      } else {
        // If no data exists, set initial data and save it to AsyncStorage
        const initialGameData = { level: 1, score: 0 };
        await saveGameData(initialGameData);
        setGameData(initialGameData);
      }
    }
  }, [fontsLoaded]);

  useEffect(() => {
    // Load game data from AsyncStorage when component mounts
    onLayoutRootView();
  }, []);

  if (!fontsLoaded) {
    return null;
  }


  return (
  <View onLayout={onLayoutRootView}>
    <StatusBar style="light" />
      <ImageBackground source={require('../assets/Group-2.png')} style={{width:'100%',height:'100%'}}>
        <View style={styles.icon123}>
          <TouchableOpacity onPress={handleSound}>
            <Image
                source={require('../assets/Group6.png')}
                style={{ width: 60, height: 60 }}
            />
            <Text style={{ opacity: isPlaying ? 0 : 0 }}>
              Stop Sound
            </Text>
            <Text style={{ opacity: isPlaying ? 0 : 0 }}>
              Play Sound
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            source={require('../assets/Group5.png')} style={{width:60,height:60}}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/Group.png')} style={{width:60,height:60}}/>
        </TouchableOpacity>
        </View>
        <View style={styles.image}>
          <Image source={require('../assets/Group-6.png')}style={{ width: '100%', height: 200,
            resizeMode:'contain'}} />

          <Text style={styles.level}>{`Cấp độ ${gameData.level}`}</Text>
          </View>

        <TouchableOpacity style={{ flex: 3, justifyContent: 'space-between', marginLeft: '10%' }} onPress={() => navigation.navigate('Question')}>
          <Image source={require('../assets/buttom1.png')} style={{ width: '90%', height: '90%', resizeMode: 'contain', marginTop: '30%' }} />
          <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 50, color: 'pink', textAlign: 'center', fontFamily: 'UTM-Cookies',top:'6%', marginTop:'40%',right:'5%' }}>Vào Game</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        style={{flex: 3, justifyContent: 'space-between'}}onPress={() => Alert.alert('No Link Source')}>
          <Image  source={require('../assets/buttom2.png')} style={{width:'80%',height:'90%',resizeMode:'contain',top:'10%',marginLeft:'10%'}}/>
          <View style={{position:'absolute',top:0,bottom:0,left:0,right:0,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:50,color:'pink',textAlign:'center',fontFamily:'UTM-Cookies',marginTop:'10%',marginBottom:'10%'}}>Game Hot</Text>
          </View>
        </TouchableOpacity>

      </ImageBackground>

    </View>


  )
}

const styles = StyleSheet.create({
  image:{
    flex:2 ,
    zIndex:1
  },
  level:{
    flex:2,
    position:'absolute',
    fontWeight:'bold',
    fontSize:30,
    color:'yellow',
    marginTop:'50%',
    marginLeft:150,
  },
  item:{

    marginHorizontal:150,
    flexDirection:'column',
    marginTop:130,

  },
  button2:{

    marginHorizontal:150,
    flexDirection:'column',


  },
  buttonImageIconStyle:{

    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonFacebookStyle:{

    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonTextStyle:{

    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
  },
  icon123:{
    flex:1,
    marginLeft:230,
    marginTop:50,
    flexDirection:'row',
    width:20,
    height:20,



  }

})
