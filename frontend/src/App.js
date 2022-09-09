import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  MainPage,
  NotFoundPage,
  Shop
} from './pages';
import {
  Layout} from './components';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/shop" element={<Shop />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
