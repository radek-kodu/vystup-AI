// assets/Pil4.tsx
import React from 'react';
import Svg, { Rect, Circle, Line, Polygon, Text } from 'react-native-svg';

export default function Pil4() {
  return (
    <Svg width="300" height="200" viewBox="0 0 300 200">
      {/* Diagram background */}
      <Rect x="10" y="10" width="280" height="180" fill="#fff" stroke="#405B73" strokeWidth="2" />
      {/* Step 1: Příprava */}
      <Circle cx="50" cy="50" r="15" fill="#F29C4B" />
      <Text x="50" y="55" fontSize="10" fill="white" textAnchor="middle">
        1
      </Text>
      <Text x="50" y="70" fontSize="10" fill="#405B73" textAnchor="middle">
        Příprava
      </Text>
      {/* Step 2: Řezání */}
      <Circle cx="150" cy="50" r="15" fill="#F29C4B" />
      <Text x="150" y="55" fontSize="10" fill="white" textAnchor="middle">
        2
      </Text>
      <Text x="150" y="70" fontSize="10" fill="#405B73" textAnchor="middle">
        Řezání
      </Text>
      {/* Step 3: Ukončení */}
      <Circle cx="250" cy="50" r="15" fill="#F29C4B" />
      <Text x="250" y="55" fontSize="10" fill="white" textAnchor="middle">
        3
      </Text>
      <Text x="250" y="70" fontSize="10" fill="#405B73" textAnchor="middle">
        Ukončení
      </Text>
      {/* Arrow from Step 1 to Step 2 */}
      <Line x1="65" y1="50" x2="135" y2="50" stroke="#405B73" strokeWidth="2" />
      <Polygon points="135,45 135,55 145,50" fill="#405B73" />
      {/* Arrow from Step 2 to Step 3 */}
      <Line x1="165" y1="50" x2="235" y2="50" stroke="#405B73" strokeWidth="2" />
      <Polygon points="235,45 235,55 245,50" fill="#405B73" />
      {/* Maintenance text */}
      <Text x="150" y="120" fontSize="12" fill="#405B73" textAnchor="middle">
        Údržba: Čištění, kontrola, skladování
      </Text>
    </Svg>
  );
}
