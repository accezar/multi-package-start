/* eslint-disable no-console */
import React from 'react';

type ButtonProps = {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
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
const Button = ({
  primary,
  size,
  backgroundColor,
  label,
  isDisabled,
  ...props
}: ButtonProps): JSX.Element => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      disabled={isDisabled}
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  backgroundColor: 'red',
  onClick: () => console.log('Clicked me!'),
};

export default Button;
