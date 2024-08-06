
import useUserContext from '../../hooks/useUserContext'

const Profile = () => {
    const user=useUserContext()
  return (
    <div>
      <div>{user?.name}</div>
    </div>
  )
}

export default Profile
