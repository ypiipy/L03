import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome6';

const Movie = ({ title, year, icon_name, poster, icon_color }) => {
    return (
        <View>
            <Image source={poster}
                   style={{ width: 400, height: 500 }} />
            <Text>
                {title} {year}
            </Text>

            <Icon name={icon_name} size={30} color={icon_color}/>
        </View>
    );
};

export default Movie;