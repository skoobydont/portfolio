import {
  screen,
  render,
  cleanup,
  fireEvent,
} from '@testing-library/react';
import React from 'react';
import ExpToggle from '../components/ExpToggle';
import Theme from '../components/Theme';
import PersonalSoftwareExp from '../components/personal/PersonalSoftwareExp';
import ProfessionalSoftwareExp from '../components/professional/ProfessionalSoftwareExp';

describe('exp toggle component tests', () => {
  // Setup
  let exp = 'professional';
  const setExp = () => {};
  let order = 'asc';
  const setOrder = () => {};
  const goBack = () => {};
  
  // Clean up
  afterEach(() => {
    cleanup();
  });
  

  test('parent div renders', () => {
    // Cannot put into beforeEach since last test needs access to rerenderer
    render(
      <Theme>
        <ExpToggle
          exp={exp}
          setExp={setExp}
          professionalComponent={<ProfessionalSoftwareExp />}
          personalComponent={<PersonalSoftwareExp />}
          order={order}
          setOrder={setOrder}
          goBack={goBack}
        />
      </Theme>
    );
    const expToggle = screen.getByTestId(/exptoggle/i);
    expect(expToggle).toBeInTheDocument();
  });

  test('button renders with text inside', () => {
    // Cannot put into beforeEach since last test needs access to rerenderer
    render(
      <Theme>
        <ExpToggle
          exp={exp}
          setExp={setExp}
          professionalComponent={<ProfessionalSoftwareExp />}
          personalComponent={<PersonalSoftwareExp />}
          order={order}
          setOrder={setOrder}
          goBack={goBack}
        />
      </Theme>
    );
    const toggleTabList = screen.getByRole('tablist');
    expect(toggleTabList).toBeInTheDocument();

    const textWithinBtn = toggleTabList.children;
    expect(textWithinBtn.length).toBeGreaterThan(0);
  });

  test('text updates when button clicked', () => {
    // Cannot put into beforeEach since last test needs access to rerenderer
    const {
      rerender
    } = render(
      <Theme>
        <ExpToggle
          exp={exp}
          setExp={setExp}
          professionalComponent={<ProfessionalSoftwareExp />}
          personalComponent={<PersonalSoftwareExp />}
          order={order}
          setOrder={setOrder}
          goBack={goBack}
        />
      </Theme>
    );
    // Default should show professional
    const toggleTabList = screen.getByRole('tablist');
    expect(toggleTabList.children[0].className.includes('Mui-selected')).toBeTruthy();
    // Get Tablist & click second element
    fireEvent.click(toggleTabList.children[toggleTabList.children.length - 1]);
    // Rerender
    rerender(
      <Theme>
        <ExpToggle
          exp={"personal"}
          setExp={setExp}
          professionalComponent={<ProfessionalSoftwareExp />}
          personalComponent={<PersonalSoftwareExp />}
          order={order}
          setOrder={setOrder}
          goBack={goBack}
        />
      </Theme>
    );    
    // Now personal text should be active
    const personalText = screen.getByTestId(/personalExp/i);
    expect(personalText.className.includes('Mui-selected')).toBeTruthy();
    // Ensure professional is not active
    const professionalText = screen.getByTestId(/professionalExp/i);
    expect(professionalText.className.includes('Mui-selected')).toBeFalsy();
  });
});