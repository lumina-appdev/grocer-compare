import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Home, Search, Heart, User } from 'lucide-react-native';

const navItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: Search, label: 'Search', active: false },
  { icon: Heart, label: 'Favorites', active: false },
  { icon: User, label: 'Login', active: false },
];

export default function BottomNav() {
  return (
    <View className="absolute bottom-0 left-0 right-0 bg-white/90 border-t border-gray-100 py-3 px-4 flex-row justify-around">
      {navItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <TouchableOpacity
            key={index}
            className="items-center gap-1"
            onPress={() => {}}
          >
            <View
              className={`w-8 h-8 rounded-full justify-center items-center ${
                item.active ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gray-100'
              }`}
            >
              <Icon size={16} color={item.active ? 'white' : '#888'} />
            </View>
            <Text
              className={`text-xs font-medium ${item.active ? 'text-blue-600' : 'text-gray-500'}`}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
