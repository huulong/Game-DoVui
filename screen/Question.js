import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, Image, Dimensions, StatusBar } from 'react-native';
import Truee from "./Truee";
import False from "./False";

const { width, height } = Dimensions.get('window');

const Question = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const getAnswerColor = (answerIndex) => {
    if (selectedAnswer === answerIndex) {
      if (selectedAnswer === 1) {
        return { imageSource: require('../assets/dapandung.png') };
      } else {
        return { imageSource: require('../assets/da1.png') };
      }
    } else {
      return { imageSource: require('../assets/da1.png') };
    }
  };

  const imageSize = width * 0.15;
  const answerOptionFontSize = width * 0.03;

  return (
      <View>
        <ImageBackground source={require('../assets/bc2.png')} style={{ width: '100%', height: '100%' }}>
          <View>
            <TouchableOpacity>
              <Image source={require('../assets/1.png')} style={{ width: imageSize, height: imageSize }} />
            </TouchableOpacity>
          </View>
          <View style={styles.idi}>
            <TouchableOpacity>
              <Image source={require('../assets/2.png')} style={{ width: imageSize, height: imageSize, marginLeft: -25 }} />
            </TouchableOpacity>
          </View>
          <View>
            <ImageBackground source={require('../assets/3.png')} style={styles.backgroundImage}>
              <View style={styles.overlay}>
                {/* fix đi dou moe */}
                <Text style={styles.title}>Cấp độ 1</Text>
                <Text style={styles.content}>Có 2 người bạn 1 người mù 1 người câm đi shopping. Câm mua cái nón thì lấy tay chỉ lên đầu còn Mù muốn mua kem đánh răng thì làm sao?</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.container}>
            <TouchableOpacity style={[styles.answer, getAnswerColor(0)]} onPress={() => handleAnswer(0)}>
              <ImageBackground source={getAnswerColor(0).imageSource} style={styles.answerBackground} resizeMode="contain">
                <View style={styles.circle}>
                  <Text style={[styles.answerText, { fontSize: answerOptionFontSize }]}>A</Text>
                </View>
                <Text style={[styles.answerOption, { fontSize: answerOptionFontSize }]}>Nguyễn Phúc Lâm</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.answer, getAnswerColor(1)]} onPress={() => handleAnswer(1)}>
              <ImageBackground source={getAnswerColor(1).imageSource} style={styles.answerBackground} resizeMode="contain">
                <View style={styles.circle}>
                  <Text style={[styles.answerText, { fontSize: answerOptionFontSize }]}>B</Text>
                </View>
                <Text style={[styles.answerOption, { fontSize: answerOptionFontSize }]}>Phùng Hữu Long</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.answer, getAnswerColor(2)]} onPress={() => handleAnswer(2)}>
              <ImageBackground source={getAnswerColor(2).imageSource} style={styles.answerBackground} resizeMode="contain">
                <View style={styles.circle}>
                  <Text style={[styles.answerText, { fontSize: answerOptionFontSize }]}>C</Text>
                </View>
                <Text style={[styles.answerOption, { fontSize: answerOptionFontSize }]}>Trần Nhật Tân Hiệp</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.answer, getAnswerColor(3)]} onPress={() => handleAnswer(3)}>
              <ImageBackground source={getAnswerColor(3).imageSource} style={styles.answerBackground} resizeMode="contain">
                <View style={styles.circle}>
                  <Text style={[styles.answerText, { fontSize: answerOptionFontSize }]}>D</Text>
                </View>
                <Text style={[styles.answerOption, { fontSize: answerOptionFontSize }]}>Khánh</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
  idi: {
    marginTop: -60,
    marginLeft: width * 0.92,
  },
  backgroundImage: {
    width: '100%',
    height: height * 0.4,
    marginTop: 10,
    resizeMode: 'contain',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 0.08,
  },
  title: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#FFFF00',
    textAlign: 'center',
    marginBottom: 10,
  },
  content: {
    fontSize: width * 0.03,
    color: '#FF9900',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  answer: {
    borderColor: '#000',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.05,
    marginBottom: height * 0.01,
    flexDirection: 'row',
    alignItems: 'center',
  },
  answerBackground: {
    flex: 1,
    width: '100%',
    height: height * 0.08,
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: width * 0.08,
    height: width * 0.08,
    borderRadius: width * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: width * 0.03,
    marginLeft: width * 0.03,
  },
  answerText: {
    paddingLeft:30,
    fontSize: width * 0.2,
    color: '#FFFF00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerOption: {
    fontSize: width * 0.03,
    color: '#FFF',
    paddingLeft: 40,
  },
});

export default Question;