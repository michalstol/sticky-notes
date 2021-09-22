import { render, screen } from '@testing-library/react';

import SignIn, { testId } from './SignIn';

test('view - SignIn - exist', () => {
    render(<SignIn />);

    const $signIn = screen.getByTestId(testId);

    expect($signIn).toBeInTheDocument();
    expect($signIn).toHaveTextContent(/Sign in with Google/);
});
