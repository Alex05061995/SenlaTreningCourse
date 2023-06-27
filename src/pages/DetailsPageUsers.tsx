import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux';
import UserDetail from '../components/UserDetail/UserDetail';

const DetailsPageUsers = () => {
    const params = useParams();

    const { users } = useAppSelector(state => state.sliceUsers);
    const user = users?.filter(user => String(user.id) === String(params.id))
    
  return (
    <div>
        <UserDetail user={user![0]} />
    </div>
  )
}

export default DetailsPageUsers