import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { ComponentRender } from '@/shared/lib/tests/componentRender/ComponentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('should rendered with testId', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 7 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('7');
        expect(screen.getByTestId('increment-btn')).toBeInTheDocument();
        expect(screen.getByTestId('decrement-btn')).toBeInTheDocument();
    });
    test('should increment value with using button', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 7 } },
        });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('8');
    });
    test('should decrement value with using button', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 7 } },
        });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('6');
    });
});
