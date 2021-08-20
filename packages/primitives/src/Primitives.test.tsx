import React from 'react';
import { render, screen } from '@testing-library/react';
import { Pkg1 } from './index';

import '@testing-library/jest-dom';

describe('@keiru/primitives', () => {
  it('expects the component gets rendered', () => {
    render(<Pkg1 label="teste primitives" />);

    expect(screen.getByText('teste primitives')).toBeInTheDocument();
  });
});
