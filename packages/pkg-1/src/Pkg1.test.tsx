import React from 'react';
import { render, screen } from '@testing-library/react';
import Pkg1 from './index';

import '@testing-library/jest-dom';

describe('@keiru/pkg-1', () => {
  it('expects the component gets rendered', () => {
    render(<Pkg1 label="teste 2" />);

    expect(screen.getByText('teste 2')).toBeInTheDocument();
  });
});
