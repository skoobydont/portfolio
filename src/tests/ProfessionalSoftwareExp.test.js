import {
  render,
  screen,
} from '@testing-library/react';
import ProfessionalSoftwareExp from '../components/professional/ProfessionalSoftwareExp';
import Theme from '../components/Theme';

describe('professional software experience tests', () => {
  // Setup
  beforeEach(() => {
    render(
      <Theme>
        <ProfessionalSoftwareExp />
      </Theme>
    );
  });
  // Ensure parent div renders
  test('professional software experience parent div renders', () => {
    const pSoftwareExp = screen.getByTestId(/professionalsoftware/i);
    expect(pSoftwareExp).toBeInTheDocument();
  });
});