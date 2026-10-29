import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type BaseProps = {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
}

type AnchorButtonProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & {
    as?: 'a'
    href: string
  }

type NativeButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
    as: 'button'
  }

type ButtonProps = AnchorButtonProps | NativeButtonProps

const variants: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-text',
}

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', className = '', ...rest } = props
  const classes = `${variants[variant]} ${className}`

  if (props.as === 'button') {
    const buttonProps = rest as Omit<NativeButtonProps, keyof BaseProps>
    return (
      <button className={classes} type={buttonProps.type ?? 'button'} {...buttonProps}>
        {children}
      </button>
    )
  }

  const anchorProps = rest as Omit<AnchorButtonProps, keyof BaseProps>
  return (
    <a className={classes} {...anchorProps}>
      {children}
    </a>
  )
}
