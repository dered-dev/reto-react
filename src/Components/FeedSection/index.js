import React from 'react'
import FeedSectionImage from './FeedSectionImage'
import SectionTitle from '../SectionTitle'
import SectionSubtitle from '../SectionSubtitle'
import ButtonGoogle from '../ButtonGoogle'
import SectionUseButtons from '../SectionUseButtons'
function FeedSection () {
  return (
    <div className='FeedSection'>
      <div className='FeedSection__logo-container'>
        <div className='FeedSection__inner'>
          <div className='FeedSection__text-wrapper'>
            <SectionTitle>
              <span className='Section__title-emphasis'>Rediscover </span>the internet.
            </SectionTitle>
            <SectionSubtitle text='Mix is a new personalized discovery platform that unlocks more of the internet you care about.' />
            <div className='AuthSection__auth-section-wrapper'>
              <ButtonGoogle />
              <SectionUseButtons />
            </div>
          </div>
          <FeedSectionImage />
        </div>
      </div>
    </div>
  )
}

export default FeedSection
