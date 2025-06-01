import React from 'react';
import { View, Text } from 'react-native';
import { ShoppingBag, Heart } from 'lucide-react-native';

const actions = [
  {
    icon: ShoppingBag,
    title: 'Weekly Deals',
    subtitle: 'Get notified of deals',
    colors: ['from-blue-500', 'to-blue-600'],
    shadow: 'shadow-blue-500/20',
  },
  {
    icon: Heart,
    title: 'Favorites',
    subtitle: 'Save grocery items',
    colors: ['from-purple-500', 'to-purple-600'],
    shadow: 'shadow-purple-500/20',
  },
];

export default function QuickActions() {
  return (
    <View className="px-5 pb-24">
      <Text className="text-xl font-bold text-gray-900 mb-4">Quick Actions</Text>
      <View className="flex-row justify-between gap-4">
        {actions.map((item, index) => {
          const Icon = item.icon;
          return (
            <View
              key={index}
              className={`flex-1 p-5 rounded-2xl bg-gradient-to-br ${item.colors.join(' ')} ${item.shadow}`}
            >
              <View className="w-12 h-12 bg-white/20 rounded-full justify-center items-center mx-auto mb-3">
                <Icon size={24} color="white" />
              </View>
              <Text className="text-sm font-semibold text-white text-center mb-1">{item.title}</Text>
              <Text className="text-xs text-blue-100 text-center">{item.subtitle}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}