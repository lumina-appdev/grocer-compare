import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { MapPin, Search, ScanLine } from 'lucide-react-native';

export default function Header() {
  return (
    <View className="bg-white/80 border-b border-gray-100 px-5 py-4">
      <View className="flex-row items-center space-x-3">
        <View className="flex-row items-center space-x-2">
          <View className="w-8 h-8 bg-blue-600 rounded-lg justify-center items-center">
            <Text className="text-white font-bold text-sm text-center">P</Text>
          </View>
          <Text className="text-lg font-bold text-blue-600">PriceFind</Text>
        </View>

        <TouchableOpacity className="w-9 h-9 bg-gray-100 rounded-full justify-center items-center">
          <MapPin size={16} color="#555" />
        </TouchableOpacity>

        <View className="flex-1 relative">
          <Search size={16} color="#999" className="absolute left-3 top-3" />
          <TextInput
            placeholder="Search products..."
            className="h-10 pl-10 bg-gray-50 rounded-full text-sm"
          />
        </View>

        <TouchableOpacity className="w-9 h-9 rounded-full bg-blue-500 justify-center items-center">
          <ScanLine size={16} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
