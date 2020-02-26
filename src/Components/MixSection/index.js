import React from 'react'
import MixImg from '../../assets/images/img-mix.png'
function MixSection () {
  return (
    <section className='mix'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <img src={MixImg} alt='' />
          </div>
          <div className='col-12 col-md-6'>
            <img src='' alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MixSection
