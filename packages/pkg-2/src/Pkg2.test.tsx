import React from 'react';
import { render, screen } from '@testing-library/react';
import Pkg1 from './index';

import '@testing-library/jest-dom';

describe('@keiru/pkg-2', () => {
  it('expects the component gets rendered', () => {
    render(<Pkg1 label="teste" />);

    expect(screen.getByText('teste')).toBeInTheDocument();
  });
});
