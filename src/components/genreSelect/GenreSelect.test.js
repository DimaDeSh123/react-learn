import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GenreSelect from './GenreSelect';

describe('GenreSelect Component', () => {
  it('renders without crashing', () => {
    render(<GenreSelect genres={[]} onSelect={() => {}} selectedOptions={[]} />);
    
    const inputElement = screen.getByPlaceholderText("Select Genre");
    expect(inputElement).toBeInTheDocument();
  });

  it('renders all genres passed as props', () => {
    const genres = ['Comedy', 'Horror', 'Action'];

    render(<GenreSelect genres={genres} onSelect={() => {}} selectedOptions={[]}/>);

    fireEvent.click(screen.getByPlaceholderText("Select Genre"));

    genres.forEach((genre) => {
        expect(screen.getByLabelText(genre)).toBeInTheDocument();
    });
  });

  it('triggers onSelect when an option is clicked', () => {
    const onSelectMock = jest.fn();
    const genres = ['Comedy', 'Horror'];
    render(<GenreSelect genres={genres} onSelect={onSelectMock} selectedOptions={[]} />);
    
    fireEvent.click(screen.getByPlaceholderText("Select Genre"));
    fireEvent.click(screen.getByText('Comedy'));

    expect(onSelectMock).toHaveBeenCalledWith('Comedy');
    fireEvent.click(screen.getByText('Horror'));
    expect(onSelectMock).toHaveBeenCalledWith('Horror');
  });

  it('reflects selectedOptions prop', () => {
    const genres = ['Comedy', 'Horror', 'Action'];
    const selected = ['Comedy', 'Action'];

    render(<GenreSelect genres={genres} onSelect={() => {}} selectedOptions={selected} />);

    fireEvent.click(screen.getByPlaceholderText("Select Genre"));

    const comedyCheckbox = screen.getByLabelText('Comedy');
    expect(comedyCheckbox.checked).toBe(true);

    const horrorCheckbox = screen.getByLabelText('Horror');
    expect(horrorCheckbox.checked).toBe(false);

    const actionCheckbox = screen.getByLabelText('Action');
    expect(actionCheckbox.checked).toBe(true);
  });
});
