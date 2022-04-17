import { render } from '@testing-library/react';

import { Ui } from './ui';

describe('Ui', () => {
  const renderComponent = () => render(<Ui />);

  it('should render successfully', () => {
    const { baseElement } = renderComponent();

    expect(baseElement).toBeTruthy();
  });

  it('should match the snapshots', () => {
    const { asFragment } = renderComponent();

    expect(asFragment()).toMatchSnapshot();
  });
});
