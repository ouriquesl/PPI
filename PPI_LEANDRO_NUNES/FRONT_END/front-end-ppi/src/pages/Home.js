import React from 'react'
import axios from 'axios'

export default function Home() {
    const [users, setUser] = React.useState([])
    React.useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users")
        setUser(result.data)
    }





  return (
    <div className='container'>
        <div className='py-4'>

        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Id</th>
      <th scope="col">Nome</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>

    {
        users.map((user, index) => (
            <tr>
                <th scope="row"key={index}>{index + 1}</th>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
        ))

    }
  </tbody>
</table>

        </div>
    </div>
  )
}
