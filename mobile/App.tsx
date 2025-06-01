import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Header from './components/Header';
import CategoryGrid from './components/CategoryGrid';
import QuickActions from './components/QuickActions';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-gradient-to-br from-slate-50 to-blue-50">
      <ScrollView>
        <Header />
        <CategoryGrid />
        {/* Add DealCards and more here */}
        <QuickActions />
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
}
