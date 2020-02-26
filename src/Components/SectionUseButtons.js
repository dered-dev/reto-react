import React from 'react'
import LinkUseSection from './LinkUseSection'

function SectionUseButtons () {
  return (
    <div className='Section__use__buttons'>Or use:
      <div className='Section__use__buttons-wrapper'><LinkUseSection text='Facebook' /> <LinkUseSection text='Twitter' /> <LinkUseSection text='StumbleUpon' />
      </div>
    </div>
  )
}

export default SectionUseButtons
