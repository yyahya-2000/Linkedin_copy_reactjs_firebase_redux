import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import { FiberManualRecord } from '@material-ui/icons'
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecord />
      </div>
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('Was created by Yanal Yahya', 'Top news - 10015 readers')}
      {newsArticle('Tesla hits new highs', 'Cars & auto - 20000 readers')}
      {newsArticle('Bitcoin Breaks $22k', 'Crypto - 10000000 readers')}
      {newsArticle('To contact me', 'yanal.alyhya@gmail.com')}
    </div>
  )
}

export default Widgets
