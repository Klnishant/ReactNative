import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import App from './App';
import { SafeAreaView, ScrollView } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView>
        <ScrollView>
            <App />
        </ScrollView>
    </SafeAreaView>
  );
}