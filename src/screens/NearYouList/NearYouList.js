import { View, TouchableOpacity, Image, Text, ScrollView } from "react-native"
import tailwind from "twrnc"

import { StyleSheet } from "react-native"

import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import ConcertPic from "../../../assets/images/ConcertPic.jpg"
import CarouselPic from "../../../assets/images/CarouselPic.jpg"
import EventPic from "../../../assets/images/PartyPic.jpg"
import MaleUser from "../../../assets/images/Male_user.png"
import { styled } from "nativewind";
import React from "react"
import FineDiningPic from "../../../assets/images/Fine Dining Billede.jpg"
import Cheering from "../../../assets/images/PeopleCheeringPic.jpg"
import RacePic from "../../../assets/images/RacePic.jpg"
import { Wrap } from "@react-native-material/core"









const NearYouList = () => {
    return (
  <View style={styles.container}>
  <View style={styles.titleContainer}>
    <Text style={styles.headline}>Oplevelser tæt på dig</Text>
  </View>

  <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.imageContainer}>
      {/* Container 1 */}
      <TouchableOpacity style={styles.itemContainer}>
        <Image source={ConcertPic} style={styles.image} />
        <View style={styles.overlay}>
          
          <Text style={styles.overlayText}>Juni 23 | 20:00-22:00</Text>
          
        </View>
        <Text style={styles.bigHeadline}>Kunster på Posten</Text>
        <Text style={styles.smallHeadline}>Banegården allé, Odense C</Text>
        <View style={styles.paragraph}>
          <Text style={styles.paragraphText}>150 kr.</Text>
        </View>
      </TouchableOpacity>

      {/* Container 2 */}
      <TouchableOpacity style={styles.itemContainer}>
        <Image source={CarouselPic} style={styles.image} />
        {/* Add content similar to container 1 */}
        <View style={styles.overlay}>
          
          <Text style={styles.overlayText}>Juni 25 | 12:00-22:00</Text>
        </View>
        <Text style={styles.bigHeadline}>Fun Park Fyn er fin</Text>
        <Text style={styles.smallHeadline}>Funpark Allé, Odense C</Text>
        <View style={styles.paragraph}>
          <Text style={styles.paragraphText}>200 kr.</Text>
        </View>
      </TouchableOpacity>

      {/* Container 3 */}
      <TouchableOpacity style={styles.itemContainer}>
        <Image source={FineDiningPic} style={styles.image} />
        {/* Add content similar to container 1 */}
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>Juni 24 | 17:00-23:00</Text>
        </View>
        <Text style={styles.bigHeadline}>Gourmet oplevelse hos Café VietNAM</Text>
        <Text style={styles.smallHeadline}>Madgade 45, Odense C</Text>
        <View style={styles.paragraph}>
          <Text style={styles.paragraphText}>285 kr.</Text>
        </View>
      </TouchableOpacity>

      {/* Container 4 */}
      <TouchableOpacity style={styles.itemContainer}> 
        <Image source={EventPic} style={styles.image} />
        {/* Add content similar to container 1 */}
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>Juni 23 | 18:00-22:00</Text>
        </View>
        <Text style={styles.bigHeadline}>Event dag ved EventMakers</Text>
        <Text style={styles.smallHeadline}>Aktivitetsvejen 1, Odense C</Text>
        <View style={styles.paragraph}>
          <Text style={styles.paragraphText}>GRATIS.</Text>
        </View>
      </TouchableOpacity>

      {/* Container 5 */}
      <TouchableOpacity style={styles.itemContainer}>
        <Image source={Cheering} style={styles.image} />
        {/* Add content similar to container 1 */}
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>Juni 23 | 18:00-22:00</Text>
        </View>
        <Text style={styles.bigHeadline}>Festdag hos Klubben</Text>
        <Text style={styles.smallHeadline}>Festgade 5, Odense C</Text>
        <View style={styles.paragraph}>
          <Text style={styles.paragraphText}>60 kr.</Text>
        </View>
      </TouchableOpacity>
    </View>
  </ScrollView>
</View>
    );
  };

  const styles = StyleSheet.create({
  container: 
  {
  flex: 1,
  },
  
  titleContainer: 
  {
  backgroundColor: '#eaddcd',
  paddingVertical: 20,
  paddingHorizontal: 10,
  alignItems: 'center',
  },

  headline: 
  {
  fontSize: 20,
  fontWeight: 'bold',
  color: 'black',
  paddingTop: 10,
  },

  scrollContainer: 
  {
  flexGrow: 1,
  paddingTop: 20,
  },

  imageContainer: 
  {
  flexDirection: 'col',
  justifyContent: 'space-between',
  paddingHorizontal: 10,
  alignItems: 'center',
  },
  
  itemContainer: 
  {
  width: '100%',
  alignItems: 'center',
  marginBottom: 20,
  },

  image: 
  {
  width: '100%',
  height: 200,
  borderRadius: 10,
  marginBottom: 10,
  },

  overlay: 
  {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  paddingHorizontal: 10,
  paddingVertical: 5,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 10,
  },
  
  overlayText: 
  {
  fontSize: 12,
  color: 'black',
  marginLeft: 5,
  marginRight: 5,
  },
  
  bigHeadline: 
  {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 5,
  },

  smallHeadline: 
  {
  fontSize: 12,
  marginBottom: 5,
  },

  paragraph: 
  {
  backgroundColor: '#e3e3e3',
  padding: 10,
  borderRadius: 5,
  },

  paragraphText:
  {
  fontSize: 8,
  color: 'black',
  },
  });

  
  export default NearYouList;

