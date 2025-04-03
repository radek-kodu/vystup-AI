// assets/Pil1.tsx
import React from 'react';
import Svg, { Rect, Circle, Text } from 'react-native-svg';

export default function Pil1() {
  return (
    <Svg width="300" height="200" viewBox="0 0 300 200">
      {/* Body of the saw */}
      <Rect x="50" y="50" width="200" height="100" fill="#ddd" stroke="#4A6F42" strokeWidth="2" />
      {/* Cutting disk */}
      <Circle cx="150" cy="100" r="30" fill="#405B73" stroke="#4A6F42" strokeWidth="2" />
      {/* Title label */}
      <Text x="150" y="30" fontSize="16" fill="#405B73" textAnchor="middle">
        Ilustrace pily
      </Text>
    </Svg>
  );
}
