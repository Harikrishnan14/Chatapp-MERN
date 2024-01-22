import React from 'react'
import './Home.css'
import ProfileSide from '../../components/profileSide/ProfileSide'

const Home = () => {
  return (
    <div className='home'>
      <ProfileSide />
      <div className='post-side'>Post</div>
      <div className='right-side'>RightSide</div>
    </div>
  )
}

export default Home
