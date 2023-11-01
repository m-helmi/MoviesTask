import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import GridView from '../components/GridView';
import { useDispatch } from 'react-redux';
import { selectMovie } from '../actions/movie';

const URL_API = 'https://api.themoviedb.org/3/movie/popular?api_key=d6da63db9159a80d2a9f083aaef736ec';
const IMG_URL = 'https://image.tmdb.org/t/p/w300';

const HomeScreen = ({navigation}) => {
  const [films, setFilms] = useState([]);
  const [isErr, setIsErr] = useState(false);
  const dispatch = useDispatch()
  useEffect(() => {
    const getFilms = async () => {
      fetch(URL_API)
        .then(response => response.json())
        .then(json => {
          if (json?.results) {
            setFilms(json.results);
          } else {
            setIsErr(true)
          }
        })
        .catch(function (error) {
          setIsErr(true);
        });
    };
    getFilms();
  }, []);
  return (
    <SafeAreaView>
    {isErr?<Text>Sorry, Couldn't Get Movies. Please Check Your Internet Connection.</Text>:null}
      <FlatList
        data={films}
        renderItem={({item}) => (
          <GridView
            title={item?.title}
            pic={IMG_URL + item?.poster_path}
            date={item?.release_date}
            overview={item?.overview}
            onPressDetails={() => {
              dispatch(selectMovie(item.title))
              navigation.navigate('Details', {item: item});
            }}
          />
        )}
        numColumns={2}
        keyExtractor={item => item?.id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
