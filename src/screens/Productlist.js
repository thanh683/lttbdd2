// import React from 'react';
// import { View, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Header from '../components/Header';

// const Productlist = () => {
//     const [products, setProducts] = useState([]);
//     const navigation = useNavigation();
  
//     useEffect(() => {
//       fetch("https://api.escuelajs.co/api/v1/categories/1/products")
//         .then((response) => response.json())
//         .then((result) => {
//           setProducts(result);
//         })
//         .catch((error) => console.error("Error fetching products:", error));
//     }, []);

//     <View>
//       <Header title="SHOPPE" />
//       <Text style={{ marginTop: 150 }}>Favorite</Text>
//       <Icon name="person" size={30} color="#000" />
//     </View>
//   );
// };

// export default Productlist;
