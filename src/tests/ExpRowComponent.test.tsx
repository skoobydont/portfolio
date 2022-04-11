import {
  screen,
  render,
  cleanup,
} from '@testing-library/react';
import React from 'react';
import ExpRow from '../components/ExpRow';
import Theme from '../components/Theme';

describe('exp row tests', () => {
  afterAll(() => cleanup());

  test('parent div renders', () => {
    render(
      <Theme>
        <ExpRow
          title="Test Title"
          tech={[{ text: 'Alt Test Text', href: '' }]}
        >
          <div>Child Test Element</div>
        </ExpRow>
      </Theme>
    );
    const expRow = screen.getByTestId(/exprow/i);
    expect(expRow).toBeInTheDocument();
  });
})