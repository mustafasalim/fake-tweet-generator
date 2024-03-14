import classnames from "classnames"

interface InputProps {
  type?: string
  size?: string
  placholder?: string
}

const Input = (props: InputProps) => {
  const { type, size, placholder } = props
  return (
    <input
      className={classnames(
        "rounded-md outline-none border  focus:border-blue-500",
        {
          "!w-[10rem] ": size === "small",
          "!w-[13rem] h-10": size === "medium",
          "!w-[15rem] h-10": size === "large",
        }
      )}
      type={type}
      placeholder={placholder}
    />
  )
}

export default Input
