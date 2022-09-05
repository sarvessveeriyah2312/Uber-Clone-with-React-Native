import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';



const NavigateCard = () => {
      const dispatch = useDispatch();
      const navigation = useNavigation();

  return (
    <SafeAreaView style={tw `bg-black flex-1 rounded-3xl`}>
      <Text style={tw `text-white py-5 text-xl text-center`}>Good Morning, Sarvess Veeri</Text>
      <View >
        <View>
            <GooglePlacesAutocomplete
                placeholder='Where To ?'
                styles={toInputBoxStyles}
                fetchDetails={true}
                returnKeyType={'search'}
                minLength={2}
                onPress={(data,details = null) => {
                    dispatch(
                        setDestination({
                        location: details.geometry.location,
                        description: data.description,
                    }));
                    navigation.navigate('RideOptionsCard');
                }}
                enablePoweredByContainer={false}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en',
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={ 400 }
                />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
   
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 25,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});