import React, {  useContext } from 'react'
import Spinner from '../Layouts/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../Context/github/GithubContext'

function UserResults() {
  const {users, loading}=useContext(GithubContext)
/*
  useEffect(()=>{
    fetchUsers()
  },[fetchUsers])
*/
  return (loading?<Spinner />:
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
        {users.map(user=><UserItem key={user.id} user={user}/>)}
    </div>
  )
}

export default UserResults