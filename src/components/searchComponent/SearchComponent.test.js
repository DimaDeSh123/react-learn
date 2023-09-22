import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchComponent from './SearchComponent';

describe('Search Component', () => {

  test('renders input with initial value', () => {
    const initialQuery = "Initial Text";
    render(<SearchComponent initialQuery={initialQuery} onSearch={() => {}} />);

    expect(screen.getByPlaceholderText('What do you want to watch?').value).toBe(initialQuery);
  });

  test('calls onSearch prop with input value on button click', () => {
    const initialQuery = "Initial Text";
    const onSearchMock = jest.fn();
  
    render(<SearchComponent initialQuery={initialQuery} onSearch={onSearchMock} />);
  
    const newQuery = "New Text";
    const input = screen.getByPlaceholderText('What do you want to watch?');
    fireEvent.change(input, { target: { value: newQuery } });
  
    fireEvent.click(screen.getByText('Search'));
  
    expect(onSearchMock).toHaveBeenCalledWith(newQuery);
  });

  test('calls onSearch prop with input value on Enter key press', () => {
    const initialQuery = "Initial Text";
    const onSearchMock = jest.fn();
  
    render(<SearchComponent initialQuery={initialQuery} onSearch={onSearchMock} />);
  
    const newQuery = "New Text";
    const input = screen.getByPlaceholderText('What do you want to watch?');
    fireEvent.change(input, { target: { value: newQuery } });
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });
  
    expect(onSearchMock).toHaveBeenCalledWith(newQuery);
  });
});
