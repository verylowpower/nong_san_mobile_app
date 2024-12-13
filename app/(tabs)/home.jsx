import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.95;
const ITEM_HEIGHT = ITEM_WIDTH * 0.5;
const banners = [
    { id: '1', image: 'https://via.placeholder.com/300x150' },
    { id: '2', image: 'https://via.placeholder.com/200x150' },
    { id: '3', image: 'https://via.placeholder.com/100x150' },
];

const products = [
    { id: '1', name: 'Product 1', image: 'https://via.placeholder.com/100', description: 'This is Product 1' },
    { id: '2', name: 'Product 2', image: 'https://via.placeholder.com/100', description: 'This is Product 2' },
    { id: '3', name: 'Product 3', image: 'https://via.placeholder.com/100', description: 'This is Product 3' },
    // Các sản phẩm khác...
];

const Home = () => {
    const [bannerIndex, setBannerIndex] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const bannerListRef = useRef(null); // Thêm useRef để tham chiếu đến FlatList banner

    useEffect(() => {
        const interval = setInterval(() => {
            setBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (bannerListRef.current) {
            bannerListRef.current.scrollToIndex({
                index: bannerIndex,
                animated: true, // Sử dụng animation cho hiệu ứng mượt mà
            });
        }
    }, [bannerIndex]); // Gọi lại khi bannerIndex thay đổi


    const renderBanner = ({ item }) => (
        <Image source={{ uri: item.image }} style={styles.banner} />
    );

    const renderProduct = ({ item }) => (
        <TouchableOpacity onPress={() => setSelectedProduct(item)}>
            <View style={styles.productContainer}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
                <Text style={styles.productName}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    const renderProductDetail = () => (
        <View style={styles.detailContainer}>
            <Image source={{ uri: selectedProduct.image }} style={styles.detailImage} />
            <Text style={styles.detailName}>{selectedProduct.name}</Text>
            <Text style={styles.detailDescription}>{selectedProduct.description}</Text>
            <TouchableOpacity style={styles.backButton} onPress={() => setSelectedProduct(null)}>
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            {selectedProduct ? (
                renderProductDetail()
            ) : (
                <FlatList
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
                                ref={bannerListRef} // Gán ref cho FlatList
                                data={banners}
                                renderItem={renderBanner}
                                keyExtractor={(item) => item.id}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={styles.bannerList}
                                pagingEnabled

                            />
                        </>
                    }
                    numColumns={3}
                    contentContainerStyle={styles.productList}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    logo: {
        width: 70,
        height: 120,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
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
    detailContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    detailImage: {
        width: 200,
        height: 200,
        borderRadius: 8,
        marginBottom: 20,
    },
    detailName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    detailDescription: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    backButton: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
    },
    backButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default Home;