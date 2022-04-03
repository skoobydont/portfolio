import {
  render,
  screen,
  cleanup,
} from '@testing-library/react';
import React from 'react';
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
  // Cleanup
  afterEach(() => {
    cleanup();
  });
  // Ensure parent div renders
  test('professional hardware experience parent div renders', () => {
    const pHardwareExp = screen.getByTestId(/professionalhardware/i);
    expect(pHardwareExp).toBeInTheDocument();
  });
});