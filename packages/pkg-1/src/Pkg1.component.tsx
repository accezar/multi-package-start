/* eslint-disable no-console */
import React from 'react';

export type ButtonProps = {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * NEw props
   */
  isDisabled?: boolean;
};

/**
 * Primary UI component for user interaction
 */
const Button = ({ backgroundColor, label, isDisabled, ...props }: ButtonProps): JSX.Element => (
  <button type="button" disabled={isDisabled} style={{ backgroundColor }} {...props}>
    {label}
  </button>
);

Button.defaultProps = {
  size: 'medium',
  backgroundColor: 'red',
  onClick: () => console.log('Clicked me!'),
  isDisabled: false,
};

export default Button;
