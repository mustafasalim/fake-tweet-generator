import classnames from "classnames"

interface ButtonProps {
  variant?: string
  size?: string
  children?: any
}

const Button = (props: ButtonProps) => {
  const { variant = "default", children } = props

  return (
    <button
      className={classnames("rounded-md", {
        "p-2 px-4 text-blue-500 border border-blue-500 ": variant === "default",
        "p-2 px-4 text-white bg-red-500": variant === "danger",
        "p-2 px-4 text-white bg-yellow-500 ": variant === "warning",
      })}
    >
      {children}
    </button>
  )
}

export default Button
