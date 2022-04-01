import {
  render,
  screen,
} from '@testing-library/react';
import PersonalHardwareExp from '../components/personal/PersonalHardwareExp';
import Theme from '../components/Theme';

describe('personal hardware experience tests', () => {
  // Setup
  beforeEach(() => {
    render(
      <Theme>
        <PersonalHardwareExp />
      </Theme>
    );
  });
  // Ensure parent div renders
  test('personal hardware experience parent div renders', () => {
    const pHardwareExp = screen.getByTestId(/personalhardware/i);
    expect(pHardwareExp).toBeInTheDocument();
  });
});