import {
  screen,
  render,
  cleanup,
  fireEvent,
} from '@testing-library/react';
import ExpToggle from '../components/ExpToggle';
import Theme from '../components/Theme';

describe('exp toggle component tests', () => {
  // Setup
  let exp = 'professional';
  const setExp = (newExp) => {
    exp = newExp;
    return null;
  };
  beforeEach(() => {
    render(
      <Theme>
        <ExpToggle
          exp={exp}
          setExp={setExp}
        />
      </Theme>
    );
  });

  afterEach(() => {
    cleanup();
  });

  test('parent div renders', () => {
    const expToggle = screen.getByTestId(/exptoggle/i);
    expect(expToggle).toBeInTheDocument();
  });

  test('button renders with text inside', () => {
    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toBeInTheDocument();

    const textWithinBtn = toggleButton.children;
    expect(textWithinBtn.length).toBeGreaterThan(0);
  });

  test('text updates when button clicked', () => {
    // Default should show professional
    const professionalText = screen.getByText(/professional/i);
    console.log('the prof text classList contains active?');
    expect(professionalText.classList.contains(/active/i)).toBeTruthy();
    // Get Button & click
    const toggleButton = screen.getByRole('button');

    fireEvent.click(toggleButton);
    
    console.log('after click');
    // Now personal text should be active
    const personalText = screen.getByText(/personal/i);
    expect(personalText.classList.contains(/active/i)).toBeTruthy();
    // Ensure professional is not active
    expect(professionalText.classList.contains(/active/i)).toBeFalsy();
    console.log('the personal text');
    console.log(personalText);
  });
});