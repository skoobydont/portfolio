import {
  render,
  screen,
} from '@testing-library/react';
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
  // Ensure parent div renders
  test('personal software experience parent div renders', () => {
    const pSoftwareExp = screen.getByTestId(/personalsoftware/i);
    expect(pSoftwareExp).toBeInTheDocument();
  });
});