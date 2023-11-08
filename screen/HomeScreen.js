import { Image, StyleSheet, Text, View, ImageBackground,Alert,TouchableOpacity} from 'react-native'
import React, { useEffect, useCallback } from 'react'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();
export default function HomeScreen({navigation}) {
  const [fontsLoaded] = useFonts({
    'UTM-Cookies': require('../assets/fonts/UTM-Cookies.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View onLayout={onLayoutRootView}>
      <ImageBackground source={require('../assets/Group-2.png')} style={{width:'100%',height:'100%'}}>
        <View style={styles.icon123}>
        <TouchableOpacity>
          <Image
            source={require('../assets/Group6.png')} style={{width:60,height:60,}} />
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
          <Image source={require('../assets/Group-6.png')}style={{ width: '100%', height: 300,
            resizeMode:'contain'}} />

          <Text style={styles.level}>Cấp độ 1</Text>
          </View>

          <TouchableOpacity style={{flex:3}} onPress={() => navigation.navigate('Question')}>
          <Image  source={require('../assets/buttom1.png')} style={{width:'100%',height:'100%',resizeMode:'contain',marginTop:120}}/>
          <View style={{position:'absolute',top:0,bottom:0,left:0,right:0,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:50,color:'pink',textAlign:'center',fontFamily:'UTM-Cookies',marginTop:210}}>Vào Game</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        style={{flex:3}}onPress={() => Alert.alert('Có cái đéo')}>
          <Image  source={require('../assets/buttom2.png')} style={{width:'100%',height:'100%',resizeMode:'contain'}}/>
          <View style={{position:'absolute',top:0,bottom:0,left:0,right:0,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:50,color:'pink',textAlign:'center',fontFamily:'UTM-Cookies',marginBottom:20}}>Game Hot</Text>
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
    marginTop:300,
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