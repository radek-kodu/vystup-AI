// assets/Pil2.tsx
import React from 'react';
import Svg, { Rect, Circle, Line, Text } from 'react-native-svg';

export default function Pil2() {
  return (
    <Svg width="300" height="200" viewBox="0 0 300 200">
      {/* Main body */}
      <Rect x="40" y="40" width="220" height="120" fill="#e0e0e0" stroke="#4A6F42" strokeWidth="2" />
      {/* Motor (left block) */}
      <Rect x="40" y="40" width="50" height="50" fill="#c0c0c0" stroke="#405B73" strokeWidth="2" />
      <Text x="65" y="70" fontSize="10" fill="#405B73" textAnchor="middle">
        Motor
      </Text>
      {/* Cutting disk */}
      <Circle cx="180" cy="100" r="30" fill="#405B73" stroke="#4A6F42" strokeWidth="2" />
      <Text x="180" y="100" fontSize="10" fill="white" textAnchor="middle" dy="4">
        Kotouč
      </Text>
      {/* Protective cover */}
      <Rect x="160" y="80" width="40" height="40" fill="none" stroke="#F29C4B" strokeWidth="2" strokeDasharray="4,2" />
      <Text x="180" y="140" fontSize="10" fill="#405B73" textAnchor="middle">
        Ochranný kryt
      </Text>
      {/* Handles */}
      <Line x1="40" y1="160" x2="100" y2="160" stroke="#405B73" strokeWidth="4" />
      <Line x1="200" y1="160" x2="260" y2="160" stroke="#405B73" strokeWidth="4" />
      <Text x="70" y="175" fontSize="10" fill="#405B73" textAnchor="middle">
        Držadlo
      </Text>
      <Text x="230" y="175" fontSize="10" fill="#405B73" textAnchor="middle">
        Držadlo
      </Text>
    </Svg>
  );
}
