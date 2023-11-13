import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar, ImageBase,
} from 'react-native';
import {shuffleArray} from "../function/shuffle";

const data = require('../DataJson/DoVui.json'); // Import JSON data

const { width, height } = Dimensions.get('window');

const Question = ({navigation}) => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = data[currentQuestionIndex];

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerCorrect, setAnswerCorrect] = useState(null);

  const handleAnswer = (answerIndex) => {
    const answerChoices = shuffleArray([currentQuestion.A, currentQuestion.B, currentQuestion.C, currentQuestion.D]);
    setSelectedAnswer(answerIndex);

    if (answerChoices[answerIndex] === currentQuestion.DapAn) {
      setAnswerCorrect(true);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentLevel(currentLevel + 1);
      setSelectedAnswer(null);
      setAnswerCorrect(null);
    } else {
      setAnswerCorrect(false);
    }
  };

  const getAnswerColor = (answerIndex) => {
    if (selectedAnswer === answerIndex) {
      if (answerCorrect) {
        return { imageSource: require('../assets/dapandung.png') };
      } else {
        return { imageSource: require('../assets/dapandung.png') }; // Change this to an image for an incorrect answer
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
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../assets/1.png')} style={{ width: imageSize * 0.4, height: imageSize * 0.4,top:'1%' }} />
            </TouchableOpacity>
          </View>
          <View style={styles.love}>
            <ImageBackground source={require('../assets/love.png')} style={{ width: imageSize * 0.4, height: imageSize * 0.4 }} />
          </View>
          <View style={styles.overlay}>
            <ImageBackground source={require('../assets/3.png')} style={styles.titleBackground} resizeMode="contain">
              <Text style={styles.title}>{`Cấp độ ${currentLevel}`}</Text>
              <Text style={styles.content}>{currentQuestion.CauHoi}</Text>
            </ImageBackground>
          </View>
          <View style={styles.container}>
            {currentQuestion && currentQuestion.A && (
                <TouchableOpacity style={[styles.answer, getAnswerColor(0)]} onPress={() => handleAnswer(0)}>
                  <ImageBackground source={getAnswerColor(0).imageSource} style={styles.answerBackground} resizeMode="contain">
                    <View style={styles.circle}>
                      <Text style={[styles.answerText, { fontSize: answerOptionFontSize }]}>A</Text>
                    </View>
                    <Text style={[styles.answerOption, { fontSize: answerOptionFontSize }]}>{currentQuestion.A}</Text>
                  </ImageBackground>
                </TouchableOpacity>
            )}

            {currentQuestion && currentQuestion.B && (
                <TouchableOpacity style={[styles.answer, getAnswerColor(1)]} onPress={() => handleAnswer(1)}>
                  <ImageBackground source={getAnswerColor(1).imageSource} style={styles.answerBackground} resizeMode="contain">
                    <View style={styles.circle}>
                      <Text style={[styles.answerText, { fontSize: answerOptionFontSize }]}>B</Text>
                    </View>
                    <Text style={[styles.answerOption, { fontSize: answerOptionFontSize }]}>{currentQuestion.B}</Text>
                  </ImageBackground>
                </TouchableOpacity>
            )}

            {currentQuestion && currentQuestion.C && (
                <TouchableOpacity style={[styles.answer, getAnswerColor(2)]} onPress={() => handleAnswer(2)}>
                  <ImageBackground source={getAnswerColor(2).imageSource} style={styles.answerBackground} resizeMode="contain">
                    <View style={styles.circle}>
                      <Text style={[styles.answerText, { fontSize: answerOptionFontSize }]}>C</Text>
                    </View>
                    <Text style={[styles.answerOption, { fontSize: answerOptionFontSize }]}>{currentQuestion.C}</Text>
                  </ImageBackground>
                </TouchableOpacity>
            )}

            {currentQuestion && currentQuestion.D && (
                <TouchableOpacity style={[styles.answer, getAnswerColor(3)]} onPress={() => handleAnswer(3)}>
                  <ImageBackground source={getAnswerColor(3).imageSource} style={styles.answerBackground} resizeMode="contain">
                    <View style={styles.circle}>
                      <Text style={[styles.answerText, { fontSize: answerOptionFontSize }]}>D</Text>
                    </View>
                    <Text style={[styles.answerOption, { fontSize: answerOptionFontSize }]}>{currentQuestion.D}</Text>
                  </ImageBackground>
                </TouchableOpacity>
            )}
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
    position: 'absolute',
    top: '25%', // Adjust this value to control the vertical position
    left: '35%',
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#FFFF00',
    textAlign: 'center'
  },
  content: {
    top:'50%',
    fontSize: width * 0.03,
    color: '#FF9900',
    textAlign: 'center',
    marginBottom:'30%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  answer: {
    borderColor: '#000',
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.03,
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
    marginLeft:'80%',
    marginBottom:'15%',
    fontWeight:'bold',
    fontSize: width * 0.4,
    color: '#FFFF00',
    left: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerOption: {
    fontSize: width * 0.03,
    color: '#FFF',
    paddingLeft: 40,
  }, titleBackground: {
    width:'100%',
    height:'100%',
    resizeMode:"repeat",
  },
  love: {
    left:'45%',
    marginBottom:'5%',
    bottom:'3%',
  }

});

export default Question;
