import React from 'react'
import {View, Text, ImageBackground} from 'react-native'
import StyledButton from '../StyledButton/Index'
import styles from './styles'

const CarItem= () => {
    return(
      

      <View style={styles.carContainer}>
        <ImageBackground source={require('../../assets/images/ModelX.jpeg')} style={styles.image} />

        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subTitle}>Starting at $69,420</Text>

        </View>

        <StyledButton type="secondary" />
        
        
      </View>


    )
}

export default CarItem;