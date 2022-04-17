import {
  render,
  screen,
  cleanup,
} from '@testing-library/react';
import React from 'react';
import PersonalSoftwareExp from '../components/personal/PersonalSoftwareExp';
import Theme from '../components/Theme';

describe('personal software experience tests', () => {
  // Setup
  beforeEach(() => {
    render(
      <Theme>
        <PersonalSoftwareExp />
      </Theme>
    );
  });
  // Cleanup
  afterEach(() => {
    cleanup();
  });
  // Ensure parent div renders
  test('personal software experience parent div renders', () => {
    const pSoftwareExp = screen.getByTestId(/personalsoftware/i);
    expect(pSoftwareExp).toBeInTheDocument();
    expect(pSoftwareExp.childElementCount).toBeGreaterThan(0);
  });
});