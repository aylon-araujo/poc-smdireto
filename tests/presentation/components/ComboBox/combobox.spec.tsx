import {
  fireEvent,
  getByRole as globalGetByRole,
  getByText as globalGetByText,
  render,
} from '@testing-library/react';

import ComboBox, { schools } from '@/presentation/components/ComboBox';

describe('ComboBox component', () => {
  it('should have a valid component', () => {
    expect(ComboBox).toBeDefined();
  });

  it('should be change value', async () => {
    const { getByTestId, getByRole, queryByRole } = render(
      <ComboBox onChange={jest.fn()} />,
      {},
    );
    const AutoCompleteSearch = getByTestId('autocomplete');
    const Input = globalGetByRole(AutoCompleteSearch, 'combobox');

    expect(queryByRole('listbox')).toBeNull();
    fireEvent.mouseDown(Input);

    const ListBox = getByRole('listbox');

    expect(ListBox).toBeDefined();

    const menuItem1 = globalGetByText(ListBox, schools[0].label);

    fireEvent.click(menuItem1);
    expect(queryByRole('listbox')).toBeNull();
    fireEvent.mouseDown(Input);

    const ListBoxAfter = getByRole('listbox');

    expect(ListBoxAfter).toBeDefined();

    const menuItem2 = globalGetByText(ListBoxAfter, schools[1].label);

    fireEvent.click(menuItem2);
    expect(queryByRole('listbox')).toBeNull();
  });
});
