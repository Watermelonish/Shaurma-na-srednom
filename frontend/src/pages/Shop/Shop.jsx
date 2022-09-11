import React from 'react';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import Item from './Item';
import './shopStyles.css';

function Shop() {
  const itemsData = useSelector((store) => store.items);
  return (
    <Container maxWidth="md">
      <div className="items_list">
        {itemsData.map((item) => <Item itemsData={item} key={item.id} />)}
      </div>
    </Container>
  );
}

export default Shop;
