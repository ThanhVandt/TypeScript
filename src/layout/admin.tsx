import {Outlet} from 'react-router-dom'
const AdminLayout = () => {
    return <div>
        <h1>Dashboard</h1>
        <Outlet/>
    </div>
}
export default AdminLayout