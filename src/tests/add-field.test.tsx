import { render, fireEvent, waitFor } from '@testing-library/react';
import { AddField } from '../components/form/add-field/add-field';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

describe('AddField', () => {
  const onAddMock = jest.fn();

  test('handles form submission for text input', async () => {
    const { getByLabelText, getByText } = render(
      <ThemeProvider theme={theme}>
        <AddField onAdd={onAddMock} fieldNames={[]} />
      </ThemeProvider>,
    );

    const inputName = getByLabelText('Input name');
    const inputTypeSelect = getByLabelText('Input type');
    const submitButton = getByText('Add');

    fireEvent.change(inputName, { target: { value: 'New Input' } });
    fireEvent.change(inputTypeSelect, { target: { value: 'text' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(onAddMock).toHaveBeenCalledWith({
        label: 'New Input',
        name: 'new-input',
        type: 'text',
      });
    });
  });

  test('does not allow creation of a form input with an existing name', async () => {
    const { getByLabelText, getByText } = render(
      <ThemeProvider theme={theme}>
        <AddField onAdd={onAddMock} fieldNames={['existing-input']} />
      </ThemeProvider>,
    );

    const inputName = getByLabelText('Input name');
    const inputTypeSelect = getByLabelText('Input type');
    const submitButton = getByText('Add');

    fireEvent.change(inputName, { target: { value: 'Existing input' } });
    fireEvent.change(inputTypeSelect, { target: { value: 'text' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(onAddMock).toHaveBeenCalledTimes(0);
      expect(getByText('Input name already exists')).toBeInTheDocument();
    });
  });
});
