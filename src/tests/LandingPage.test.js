import {
  screen,
  render,
} from '@testing-library/react';
import LandingPage from '../pages/LandingPage';
import Theme from '../components/Theme';

describe('landing page tests', () => {
  // Setup
  beforeEach(() => {
    // Need to wrap in theme for useStyles
    render(
      <Theme>
        <LandingPage />
      </Theme>
    );
  });

  test('landing page parent div renders', () => {
    // Ensure parent div renders
    const lpDiv = screen.getByTestId(/landingpage/i);
    expect(lpDiv).toBeInTheDocument();
    // Ensure children elements render
    expect(lpDiv.childElementCount).toBeGreaterThan(0);
  });

  test('tldr component renders', () => {
    // Ensure tldr renders
    const tldr = screen.getByTestId(/tldr/i);
    expect(tldr).toBeInTheDocument();
  });

  test('button row renders', () => {
    // Ensure button row div renders
    const buttonRow = screen.getByTestId(/buttonrow/i);
    expect(buttonRow).toBeInTheDocument();
    // Ensure buttons render
    expect(buttonRow.childElementCount).toBeGreaterThan(0);
  });

  
});