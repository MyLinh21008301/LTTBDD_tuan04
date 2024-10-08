import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';

export default function App({ navigation }) {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [pressedButton, setPressedButton] = useState(null);

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const productImages = [
    {
      smallImage: require('../assets/img/Image_7.png'),
      largeImage: require('../assets/img/Container_7.png'),
      productName: 'Orange',
      price: 4.99,
      rating: 4.5,
    },
    {
      smallImage: require('../assets/img/Image_8.png'),
      largeImage: require('../assets/img/Container_8.png'),
      productName: 'Candy',
      price: 3.99,
      rating: 4.0,
    },
    {
      smallImage: require('../assets/img/Image_9.png'),
      largeImage: require('../assets/img/Container_9.png'),
      productName: 'Donut',
      price: 2.99,
      rating: 4.2,
    },
    {
      smallImage: require('../assets/img/Image_6.png'),
      largeImage: require('../assets/img/Container_6.png'),
      productName: 'Cherry',
      price: 5.99,
      rating: 4.8,
    },
  ];
  const [selectedImage, setSelectedImage] = useState(productImages[2].largeImage);
  const [selectedIndex, setSelectedIndex] = useState(2);
  const [productName, setProductName] = useState(productImages[2].productName);
  const [price, setPrice] = useState(productImages[2].price);
  const [rating, setRating] = useState(productImages[2].rating);
  const basePrice = price;

  const calculatePrice = () => {
    return calculateUnitPrice() * quantity;
  };

  const calculateUnitPrice = () => {
    let sizeIncrement = 0;
    switch (selectedSize) {
      case 'XS':
        sizeIncrement = -1;
        break;
      case 'S':
        sizeIncrement = -0.5;
        break;
      case 'M':
        sizeIncrement = 0;
        break;
      case 'L':
        sizeIncrement = 1.5;
        break;
      case 'XL':
        sizeIncrement = 2;
        break;
      default:
        sizeIncrement = 0;
        break;
    }
    return basePrice + sizeIncrement;
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    handleButtonPress('increase');
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      handleButtonPress('decrease');
    }
  };
  // Hàm xử lý việc nhấn nút và đổi màu
  const handleButtonPress = (buttonType) => {
    setPressedButton(buttonType);

    setTimeout(() => {
      setPressedButton(null);
    }, 300);
  };

  const handleImageSelect = (index) => {
    setSelectedImage(productImages[index].largeImage);
    setSelectedIndex(index);
    setProductName(productImages[index].productName);
    setPrice(productImages[index].price);
    setRating(productImages[index].rating);
  };
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton}
        onPress={() => { navigation.navigate("Tab3") }}
      >
        <Image source={require('../assets/img/Back2.png')} style={styles.backTop} />
        <Text style={styles.productTitle}>{productName}</Text>
      </TouchableOpacity>

      {/* Product Image (hình ảnh lớn) */}
      <Image source={selectedImage} style={styles.productImage} />

      {/* Small Images */}
      <FlatList
        data={productImages}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => handleImageSelect(index)}
          >
            <Image
              source={item.smallImage}
              style={[
                styles.smallProductImage,
                selectedIndex === index && styles.selectedImageBorder,
              ]}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.imageList}
      />

      {/* Product Info */}
      <View style={styles.infoContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${calculateUnitPrice().toFixed(2)}</Text>
          <View style={styles.promoTextBox}>
            <Text style={styles.promoText}>Buy 1 get 1</Text>
          </View>
        </View>

        <View style={styles.productAndRatingContainer}>
          <View>
            <Text style={styles.productName}>{productName}</Text>
            <Text style={styles.productDesc} >Occaecat est deserunt tempor offici</Text>
          </View>

          {/* Rating */}
          <View style={styles.ratingContainer}>
            <Image source={require('../assets/img/Rating_3.png')} style={styles.ratingImage} />
            <Text style={styles.rating}>{rating}</Text>
          </View>
        </View>
        {/* Size Selector */}
        <Text style={styles.label}>Size</Text>
        <View style={styles.sizeContainer}>
          {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
            <TouchableOpacity
              key={size}
              style={[styles.sizeBox, selectedSize === size && styles.sizeBoxSelected]}
              onPress={() => setSelectedSize(size)}
            >
              <Text style={[styles.sizeText, selectedSize === size && styles.sizeTextSelected]}>
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quantity Selector */}
        <Text style={styles.label}>Quantity</Text>
        <View style={styles.qtAndTotal}> 
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={decreaseQuantity}
              style={[
                styles.quantityButton,
                pressedButton === 'decrease' && styles.pressedButton,
              ]}>
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={increaseQuantity}
              style={[
                styles.quantityButton,
                pressedButton === 'increase' && styles.pressedButton,
              ]}>
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
          </View>
          {/* Total */}
          <Text style={styles.total}>Total: ${calculatePrice().toFixed(2)}</Text>
        </View>




        <Image source={require('../assets/img/Line_4.png')} style={styles.line} />
        <View style={styles.boxContainer}>
          <Text style={styles.rating}>Size guide</Text>
          <Image source={require('../assets/img/Back1.png')} style={styles.back} />
        </View>
        <Image source={require('../assets/img/Line_4.png')} style={styles.line} />
        <View style={styles.boxContainer}>
          <Text style={styles.rating}>Reviews(99)</Text>
          <Image source={require('../assets/img/Back1.png')} style={styles.back} />
        </View>
        <Image source={require('../assets/img/Line_4.png')} style={styles.line} />


        {/* Add to Cart Button */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => Alert.alert("Thông báo", "Thêm vào giỏ hàng thành công!")}
        >
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 25,
  },
  backText: {
    fontSize: 20,
    marginRight: 8,
  },
  backTop: {
    width: 30,
    height: 30,
    marginRight:10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  smallProductImage: {
    width: 73,
    height: 65,
    marginHorizontal: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  imageList: {
    marginBottom: 16,
  },
  infoContainer: {
    paddingHorizontal: 16,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#5CC1D6',
  },
  promoTextBox: {
    backgroundColor: '#FFF0F5',
    borderRadius: 8,
    marginLeft: 10,
  },
  promoText: {
    fontSize: 12,
    color: '#ff0000',
    padding: 7,

  },
  productName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  productDesc: {
    color: '#6b7280',
    marginBottom: 16,
  },
  ratingImage: {
  },
  rating: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  productAndRatingContainer: {
    flexDirection: 'row', // Đặt các phần tử nằm ngang
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  ratingContainer: {
    flexDirection: 'row', // Đặt hình ảnh và điểm rating nằm ngang
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    marginVertical: 8,
  },
  sizeContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  sizeBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 16,
    paddingVertical: 6,
    // marginRight: 8,
  },
  sizeBoxSelected: {
    backgroundColor: '#5CC1D6',
    borderColor: '#0d9488',
  },
  sizeText: {
    fontSize: 16,
    color: '#64748b',
  },
  sizeTextSelected: {
    color: '#fff',
  },
  selectedImageBorder: {
    borderWidth: 1,
    borderColor: '#00c0ff',
  },
  qtAndTotal:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 30,
    marginHorizontal: 8,
  },
  quantity: {
    fontSize: 14,
  },
  pressedButton: {
    backgroundColor: '#5CC1D6',
    borderColor: '#5CC1D6',
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  line: {
    height: 2,
    width: 330,
  },
  boxContainer: {
    height: 50,
    width: 330,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  back: {
    height: 20,
    width: 20,
  },
  addButton: {
    backgroundColor: '#5CC1D6',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

