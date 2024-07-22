import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity,Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PaginationDots from '../components/PaginationDots'; 

const { width } = Dimensions.get('window');

const OnBoarding = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { key: '1', text: 'Welcome To The Moviepedia!' ,image:require('../../assets/movie1.jpg' )},
    { key: '2', text: 'Enjoy The Latest Movie...',image:require('../../assets/movie2.jpg' ) },
    { key: '3', text: 'No More FOMO!!!' ,image:require('../../assets/movie4.jpg' )},
  ];

  useEffect(() => {
    checkOnboardingStatus();
  }, []);

  const checkOnboardingStatus = async () => {
    try {
      const hasOnboarded = await AsyncStorage.getItem('hasOnboarded');
      if (hasOnboarded) {
        navigation.replace('Home');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(scrollPosition / width);
    setCurrentIndex(newIndex);
  };

  const handleSkip = async () => {
    try {
      await AsyncStorage.setItem('hasOnboarded', 'true');
      navigation.replace('Home');
    } catch (error) {
      console.error(error);
    }
  };
  const onPressStarted=async()=>{
    try{
      await AsyncStorage.setItem('hasOnboarded', 'true');
      navigation.replace('Home')
    }catch (error) {
      console.error(error);
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {slides.map((slide) => (
          <View key={slide.key} style={styles.slide}>
            <Image source={slide.image} style={styles.image} />
            <Text style={styles.text}>{slide.text}</Text>
          </View>
        ))}
      </ScrollView>
      {currentIndex==slides.length - 1 && (
        <TouchableOpacity style={styles.startedButton} onPress={onPressStarted}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      )}
      <PaginationDots currentIndex={currentIndex} total={slides.length} />
      {currentIndex!=slides.length - 1 &&(
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>

      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black'
  },
  skipButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 10,
    backgroundColor: 'orange',
    borderRadius: 5,
  },
  skipButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '60%',
    resizeMode: 'contain',
  },
  startedButton:{
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'orange',
    borderRadius: 5,
    width:'55%',
    height:45,
    bottom:30
  },
  getStartedText:{
    // textAlign:'center'
    fontWeight:'bold',
    fontSize:14,
    color: '#fff'
  }
});

export default OnBoarding;