import React from 'react';
import cn from 'classnames';
import './button.css';

interface ButtonProps {
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
}

/**
 * 按钮组件的说明
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      // className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      className={cn(
        "bg-primary dark:bg-blue-50 text-red-300 px-2 w-[100px]", 
        "after:content-['内容']",
        "hover:bg-emerald-400 transition duration-150 first-letter:text-red-500"
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
