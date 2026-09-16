
import { Link } from 'react-router'

const Navabar = () => {
  return (
    <div>
        <h1>Attendance Management System</h1>
        <div>
            <Link>home</Link>
            <Link>features</Link>
            <Link>about</Link>
            <Link>admin</Link>
        </div>
    </div>
  )
}

export default Navabar