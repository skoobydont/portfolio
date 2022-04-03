import {
  render,
  screen,
  cleanup,
} from '@testing-library/react';
import React from 'react';
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
  // Cleanup
  afterEach(() => {
    cleanup();
  });
  // Ensure parent div renders
  test('professional software experience parent div renders', () => {
    const pSoftwareExp = screen.getByTestId(/professionalsoftware/i);
    expect(pSoftwareExp).toBeInTheDocument();
  });
});