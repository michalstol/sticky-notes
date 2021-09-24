import { render, screen } from '@testing-library/react';

import SwitchGroup, { testId } from './SwitchGroup';

test('view - View - exist', () => {
    render(
        <SwitchGroup>
            <p>Children content</p>
        </SwitchGroup>
    );

    const $switchGroup = screen.getByTestId(testId);

    expect($switchGroup).toBeInTheDocument();
    expect($switchGroup).toHaveTextContent(/Children content/);
});
