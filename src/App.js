import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

const gifts = [
  'Học bổng 100%',
  'Phiếu giảm 2tr',
  'Cặp sách'
]

function App() {
  const [gift, setGift] = useState();

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);

    setGift(gifts[index]);
  }

  return (
    <div style={{ padding: 50 }}>
      <h1>{gift || 'Chưa có phần thưởng'}</h1>
      <button onClick={randomGift}>Lấy thưởng</button>
    </div>
  );
}

export default App;
