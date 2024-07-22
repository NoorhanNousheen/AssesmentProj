import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PaginationDots = ({ currentIndex, total }) => {
    return (
      <View style={styles.container}>
        {Array.from({ length: total }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentIndex ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    activeDot: {
      backgroundColor: 'orange',
    },
    inactiveDot: {
      backgroundColor: '#ccc',
    },
  });
  
  export default PaginationDots;