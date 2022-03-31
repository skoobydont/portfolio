import {
  render,
  screen,
} from '@testing-library/react';
import ProfessionalHardwareExp from '../components/professional/ProfessionalHardwareExp';
import Theme from '../components/Theme';

describe('professional hardware experience tests', () => {
  // Setup
  beforeEach(() => {
    render(
      <Theme>
        <ProfessionalHardwareExp />
      </Theme>
    );
  });
  // Ensure parent div renders
  test('professional hardware experience parent div renders', () => {
    const pHardwareExp = screen.getByTestId(/professionalhardware/i);
    expect(pHardwareExp).toBeInTheDocument();
  });
});