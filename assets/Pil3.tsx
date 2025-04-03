// assets/Pil3.tsx
import React from 'react';
import Svg, { Rect, Circle, Text, Line } from 'react-native-svg';

export default function Pil3() {
  return (
    <Svg width="300" height="200" viewBox="0 0 300 200">
      {/* Background frame */}
      <Rect x="10" y="10" width="280" height="180" fill="#fff" stroke="#405B73" strokeWidth="2" />
      {/* Safety icons */}
      <Circle cx="50" cy="50" r="20" fill="#F29C4B" />
      <Text x="50" y="55" fontSize="12" fill="white" textAnchor="middle">
        OOPP
      </Text>
      <Circle cx="150" cy="50" r="20" fill="#F29C4B" />
      <Text x="150" y="55" fontSize="12" fill="white" textAnchor="middle">
        Brýle
      </Text>
      <Circle cx="250" cy="50" r="20" fill="#F29C4B" />
      <Text x="250" y="55" fontSize="12" fill="white" textAnchor="middle">
        Rukavice
      </Text>
      {/* Additional icon for tool check */}
      <Line x1="50" y1="70" x2="50" y2="100" stroke="#405B73" strokeWidth="2" />
      <Text x="50" y="120" fontSize="10" fill="#405B73" textAnchor="middle">
        Kontrola pily
      </Text>
      {/* Title */}
      <Text x="150" y="140" fontSize="14" fill="#405B73" textAnchor="middle">
        Bezpečnostní tipy
      </Text>
    </Svg>
  );
}
