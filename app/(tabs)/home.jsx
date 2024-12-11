import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.95;
const ITEM_HEIGHT = ITEM_WIDTH * 0.5;

const banners = [
  { id: '1', image: 'https://via.placeholder.com/300x150' },
  { id: '2', image: 'https://via.placeholder.com/300x150' },
  { id: '3', image: 'https://via.placeholder.com/300x150' },
];

const products = [
  { id: '1', name: 'Product 1', image: 'https://via.placeholder.com/100' },
  { id: '2', name: 'Product 2', image: 'https://via.placeholder.com/100' },
  { id: '3', name: 'Product 3', image: 'https://via.placeholder.com/100' },
  { id: '4', name: 'Product 4', image: 'https://via.placeholder.com/100' },
  { id: '5', name: 'Product 5', image: 'https://via.placeholder.com/100' },
  { id: '6', name: 'Product 6', image: 'https://via.placeholder.com/100' },
  { id: '7', name: 'Product 7', image: 'https://via.placeholder.com/100' },
  { id: '8', name: 'Product 8', image: 'https://via.placeholder.com/100' },
  { id: '9', name: 'Product 9', image: 'https://via.placeholder.com/100' },
  { id: '10', name: 'Product 10', image: 'https://via.placeholder.com/100' },
  { id: '11', name: 'Product 11', image: 'https://via.placeholder.com/100' },
  { id: '12', name: 'Product 12', image: 'https://via.placeholder.com/100' },
  { id: '13', name: 'Product 11', image: 'https://via.placeholder.com/100' },
  { id: '14', name: 'Product 12', image: 'https://via.placeholder.com/100' },
  { id: '15', name: 'Product 11', image: 'https://via.placeholder.com/100' },
  { id: '16', name: 'Product 12', image: 'https://via.placeholder.com/100' },
  { id: '17', name: 'Product 11', image: 'https://via.placeholder.com/100' },
  { id: '18', name: 'Product 12', image: 'https://via.placeholder.com/100' },
  { id: '19', name: 'Product 11', image: 'https://via.placeholder.com/100' },
  { id: '20', name: 'Product 12', image: 'https://via.placeholder.com/100' },
  { id: '21', name: 'Product 12', image: 'https://via.placeholder.com/100' },
];

const Home = () => {

  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 10000);

    return () => clearInterval(interval); // Cleanup khi component unmount
  }, []);

  const renderBanner = ({ item, index }) => (
    <Image
      source={{ uri: item.image }}
      style={[styles.banner, index === bannerIndex ? { opacity: 1 } : { opacity: 0.5 }]}
    />
  );

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      style = {styles.container}
      data={products}
      renderItem={renderProduct}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <>
          {/* Header */}
          <View style={styles.header}>
            <Image source={require('./../../assets/images/logo.jpg')} style={styles.logo} />
            <TextInput placeholder="Search..." style={styles.searchInput} />
          </View>

          {/* Banner */}
          <FlatList
            data={banners}
            renderItem={renderBanner}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.bannerList}
          />

          <View style={styles.container}>
          </View>

        </>
      }
      numColumns={3}
      contentContainerStyle={styles.productList}
    />
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", // Nền trắng
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
  },
  logo: {
    width: 70,
    height: 120,
  },
  searchInput: {
    flex: 1,
    marginLeft: 3,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  bannerList: {
    marginBottom: 20,
  },
  banner: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 4,
    marginHorizontal: 10,
  },
  productList: {
    marginTop: 10,
  },
  productContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 4,
  },
  productName: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Home;
