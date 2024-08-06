 import useUserContext from "../../hooks/useUserContext"

const SideBar = () => {
    const user=useUserContext()
  return (
    <div>
      <div>{user?.name}</div>
      <div>Suscribe : {user?.suscribe?"Iy":"Ngak"}</div>
    </div>
  )
}

export default SideBar
