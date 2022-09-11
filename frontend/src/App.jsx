import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  MainPage,
  NotFoundPage,
  Shop,
} from './pages';
import { Layout } from './components';
import { getAllItems, setErrorMessage } from './store/actions';

function App() {
  const dispatch = useDispatch();
  //-----------------------------
  useEffect(() => {
    const getAllItemsAsync = async () => {
      const items = await fetch('http://localhost:3100/items/getAll', {
        method: 'POST',
        'Content-Type': 'application/json',
      // body: JSON.stringify(),
      });
      const itemsData = await items.json();
      if (items.status === 200) {
        dispatch(getAllItems(itemsData));
      }
      if (items.status === 500) {
        dispatch(setErrorMessage(itemsData.message));
      }
    };
    getAllItemsAsync();
  }, []);
  //-----------------------------
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
