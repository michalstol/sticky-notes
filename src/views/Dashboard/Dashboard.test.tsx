import { render, screen } from '@testing-library/react';

import Dashboard, { testId } from './Dashboard';

test('view - Dashboard - exist', () => {
    render(<Dashboard />);

    const $dashboard = screen.getByTestId(testId);

    expect($dashboard).toBeInTheDocument();
});
