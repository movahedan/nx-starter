import { render } from '@testing-library/react';

import ExamplePage from '../pages/example';

describe('ExamplePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExamplePage text='text' />);
    expect(baseElement).toBeTruthy();
  });
});
