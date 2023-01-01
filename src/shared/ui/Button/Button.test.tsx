import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
    test('Button rendered with text Test', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button> test </Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });
    test('Button rendered with class clear', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button theme={ButtonTheme.CLEAR}> test </Button>);
        expect(screen.getByText('test')).toHaveClass('clear');
    });
});
