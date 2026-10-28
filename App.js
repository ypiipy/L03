import React from 'react';
import {ScrollView} from 'react-native';
import Movie from './components/Movie.js';

const AllMovies = () => {
  return (
      <ScrollView>
        <Movie
            title="Doctor Sleep"
            year={2019}
            icon_name="skull"
            icon_color="red"
            poster={require('./img/doctor-sleep.jpg')}
        />

        <Movie
            title="Midway"
            year={2020}
            icon_name="person-rifle"
            icon_color="pink"
            poster={require('./img/midway.jpg')}
        />

          <Movie
              title="Avengers Endgame"
              year={2019}
              icon_name="crown"
              icon_color="gold"
              poster={require('./img/images.jpg')}
          />

      </ScrollView>


  );
};



export default AllMovies;