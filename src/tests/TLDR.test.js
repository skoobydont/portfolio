import {
  screen,
  render,
  cleanup,
} from '@testing-library/react';
import TLDR from '../components/TLDR';
import Theme from '../components/Theme';

describe('tldr tests', () => {
  // Setup
  beforeEach(() => {
    render(
      <Theme>
        <TLDR />
      </Theme>
    );
  });
  // Cleanup
  afterEach(() => {
    cleanup();
  });

  test('renders tldr component', () => {
    // Ensure TLDR component renders
    const tldr = screen.getByTestId(/tldr/i);
    expect(tldr).toBeInTheDocument();
  });

  test('renders tldr paragraphs', () => {
    // Ensure paragraphs render
    const tldr = screen.getByTestId(/tldr/i);
    expect(tldr.childElementCount).toBeGreaterThan(0);
  });
});