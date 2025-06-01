import React from 'react';
import { View, Text } from 'react-native';
import { ShoppingCart, Coffee, Wheat, Beef } from 'lucide-react-native';

const categories = [
  { icon: ShoppingCart, label: 'Produce', colors: ['from-green-500', 'to-green-600'] },
  { icon: Coffee, label: 'Dairy', colors: ['from-blue-500', 'to-blue-600'] },
  { icon: Wheat, label: 'Bakery', colors: ['from-orange-500', 'to-orange-600'] },
  { icon: Beef, label: 'Meat', colors: ['from-red-500', 'to-red-600'] },
];

export default function CategoryGrid() {
  return (
    <View className="p-5">
      <Text className="text-xl font-bold text-gray-900 mb-4">Categories</Text>
      <View className="flex-row flex-wrap justify-between gap-y-4">
        {categories.map((item, index) => {
          const Icon = item.icon;
          return (
            <View key={index} className="w-[22%] items-center">
              <View className={`w-14 h-14 rounded-2xl justify-center items-center mb-2 shadow-lg bg-gradient-to-br ${item.colors.join(' ')}`}>  
                <Icon size={28} color="white" />
              </View>
              <Text className="text-xs font-medium text-gray-700">{item.label}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}