import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { styled } from './Theme.provider';
import '@testing-library/jest-dom';

const Icon = styled('i', {
  color: '$brandPrimary',
});

describe('Styled function: ', () => {
  it('expects styled to create a renderable component', () => {
    const handleClick = jest.fn();

    render(
      <Icon as="button" role="button" onClick={handleClick}>
        meu super icone botao
      </Icon>
    );

    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
