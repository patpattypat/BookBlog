import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterDropdown, { FilterOption } from './filter';

describe('FilterDropdown', () => {
    const filterOptions: FilterOption[] = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Orange', value: 'orange' },
    ];

    test('renders dropdown with default option', () => {
        render(<FilterDropdown filterName={'Test'} filterOptions={filterOptions} />);
        expect(screen.getByRole('combobox')).toBeInTheDocument();
        expect(screen.getByRole('option', { name: 'Test' })).toBeInTheDocument();
    });

    test('selecting an option adds a pill', async () => {
        render(<FilterDropdown  filterName={'Test'} filterOptions={filterOptions} />);
        const select = screen.getByRole('combobox');
        await userEvent.selectOptions(select, 'apple');
        expect(screen.getByText('Apple')).toBeInTheDocument();
    });

    test('selecting the same option again does not duplicate pills', async () => {
        render(<FilterDropdown  filterName={'Test'} filterOptions={filterOptions} />);
        const select = screen.getByRole('combobox');
        await userEvent.selectOptions(select, 'banana');
        await userEvent.selectOptions(select, 'banana');
        expect(screen.getAllByText('Banana')).toHaveLength(1);
    });

    test('clicking ✕ removes a pill', async () => {
        render(<FilterDropdown  filterName={'Test'} filterOptions={filterOptions} />);
        const select = screen.getByRole('combobox');
        await userEvent.selectOptions(select, 'orange');
        const closeButton = screen.getByRole('button', { name: /✕/i });
        await userEvent.click(closeButton);
        expect(screen.queryByText('Orange')).not.toBeInTheDocument();
    });
});
