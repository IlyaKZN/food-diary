import { FC, ReactNode } from "react"

const Modal: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="-translate-x-2/4 -translate-y-2/4 fixed top-2/4 left-2/4">
      { children }
    </div>
  )
}

export default Modal;
