import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';

export default function Categories() {
  return (
    <ScrollView
    contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10
    }}
    horizontal
    showsHorizontalScrollIndicator={false}>
      <CategoryCard imgUrl="https://foodsafetyhelpline.com/wp-content/uploads/2020/11/quinoa-mushrooms-lettuce-red-cabbage-spinach-cucumbers-tomatoes-bowl-buddha-dark-top-view.jpg" title="Testing1" />
      <CategoryCard imgUrl="https://wallpapers.com/images/high/cool-profile-picture-awled9dwo4qq2yv2.webp" title="Testing2" />
      <CategoryCard imgUrl="https://wallpapers.com/images/high/cool-profile-picture-awled9dwo4qq2yv2.webp" title="Testing3" />
     </ScrollView>
  );
}
