import {
  screen,
  render,
  cleanup,
} from '@testing-library/react';
import React from 'react';
import FooterComponent from '../components/FooterComponent';
import Theme from '../components/Theme';

describe('footer component tests', () => {
  // Setup
  beforeEach(() => {
    /* Need to wrap footer in theme provider
      to have access to theme specific functions
      (theme.spacing, etc) */
    render(
      <Theme>
        <FooterComponent />
      </Theme>
    );
  });

  // Cleanup
  afterEach(() => {
    cleanup();
  });

  test('footer component renders', () => {
    // Ensure parent element renders
    const footer = screen.getByTestId(/footer/i);
    expect(footer).toBeInTheDocument();
  });

  test('footer buttons render', () => {
    /* Check for each button
      (cant use regex since icon tooltip inherits test id + 'icon'
      so must be specific)
    */
    const homeButton = screen.getByTestId('Home');
    expect(homeButton).toBeInTheDocument();
    
    const linkedinButton = screen.getByTestId('LinkedIn');
    expect(linkedinButton).toBeInTheDocument();

    const githubButton = screen.getByTestId('GitHub');
    expect(githubButton).toBeInTheDocument();
  });

});