import {
  screen,
  render,
} from '@testing-library/react';
import ExpToggle from '../components/ExpToggle';
import Theme from '../components/Theme';

describe('exp toggle component tests', () => {
  // Setup
  beforeEach(() => {
    render(
      <Theme>
        <ExpToggle />
      </Theme>
    );
  });

  test('parent div renders', () => {
    const expToggle = screen.getByTestId(/exptoggle/i);
    expect(expToggle).toBeInTheDocument();
  });
});