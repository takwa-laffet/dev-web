import {NameInput} from './NameInput';
import {render, screen, fireEvent} from '@testing-library/react';


test('met a jour le teste quand on ecrirt', () => {
    render(<NameInput/>);
    const input = screen.getByPlaceholderText('Enter your name');
    fireEvent.change(input, {target: {value: 'tyssir'}});
    expect(screen.getByText('Your name is: tyssir')).toBeInTheDocument();
});