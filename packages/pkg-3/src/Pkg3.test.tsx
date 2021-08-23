import React from 'react';
import { render, screen } from '@testing-library/react';
import Pkg1 from './index';

import '@testing-library/jest-dom';

describe('@keiru/pkg-3', () => {
  it('expects the component gets rendered', () => {
    render(<Pkg1 label="teste 34" />);

    expect(screen.getByText('teste 34')).toBeInTheDocument();
  });
});
