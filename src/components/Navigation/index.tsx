import { FC } from "react"
import Link from "next/link";

const Navigation: FC = () => {
  return (
    <div className="h-12 w-full bg-yellow-600 fixed bottom-0 left-0">
      <Link className="material-icons" href="/">home</Link>

      <Link className="material-icons" href="/add-note">add</Link>
    </div>
  )
}

export default Navigation;
