import { StatusBar } from 'expo-status-bar';
import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, Pressable, SafeAreaView} from 'react-native';
import ProductTable from './components/product/ProductTable';

export default function App() {
  return (
      <SafeAreaView style={{marginHorizontal: 30}}>
        <ProductTable />
      </SafeAreaView>
  );
}
