import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Navbar from './components/Navbar';
import PlayerCard from './components/PlayerCard';

test('App renders without crashing', () => {
  render(<App />)
});

test('Navbar renders without crashing', () => {
  render(<Navbar />)
});

test('renders player data', async () => {
  const { findByText } = await render(<App />);
  findByText(/Alex Morgan/i)
});
