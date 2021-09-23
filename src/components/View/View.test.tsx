import { render, screen } from '@testing-library/react';

import View, { testId } from './View';

test('view - View - exist', () => {
    render(
        <View>
            <p>Children content</p>
        </View>
    );

    const $view = screen.getByTestId(testId);

    expect($view).toBeInTheDocument();
    expect($view).toHaveTextContent(/Children content/);
});
