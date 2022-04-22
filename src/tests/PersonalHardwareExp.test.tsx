import {
  render,
  screen,
  cleanup,
} from '@testing-library/react';
import React from 'react';
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
  // Cleanup
  afterEach(() => {
    cleanup();
  });
  // Ensure parent div renders
  test('personal hardware experience parent div renders', () => {
    const pHardwareExp = screen.getByTestId(/personalhardware/i);
    expect(pHardwareExp).toBeInTheDocument();
    // Ensure children elements render
    expect(pHardwareExp.childElementCount).toBeGreaterThan(0);
  });
});