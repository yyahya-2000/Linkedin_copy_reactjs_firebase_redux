import React from 'react'
import './headerOption.css'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
function HeaderOption({ avatar, Icone, title, onClick }) {
  const user = useSelector(selectUser)
  return (
    <div onClick={onClick} className='headerOption'>
      {Icone && <Icone className='headerOption__icon' />}
      {avatar && (
        <Avatar className='headerOption__icon'>{user?.email[0]}</Avatar>
      )}

      <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
