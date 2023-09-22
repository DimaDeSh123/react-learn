import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('renders initial value provided in props', () => {
    const initialValue = 5;
    render(<Counter initialValue={initialValue} />);
    expect(screen.getByText(`Count: ${initialValue}`)).toBeInTheDocument();
  });

  test('decrements value when decrement button is clicked', () => {
    const initialValue = 5;
    render(<Counter initialValue={initialValue} />);
    fireEvent.click(screen.getByText('-'));
    expect(screen.getByText(`Count: ${initialValue - 1}`)).toBeInTheDocument();
  });

  test('increments value when increment button is clicked', () => {
    const initialValue = 5;
    render(<Counter initialValue={initialValue} />);
    fireEvent.click(screen.getByText('+'));
    expect(screen.getByText(`Count: ${initialValue + 1}`)).toBeInTheDocument();
  });
});
