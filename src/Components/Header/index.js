import React from 'react'

function Header () {
  return (
    <div className='FeedSection__logo-container'>
      <svg className='FeedSection__logo-icon Icon Icon--mix-logomark' aria-hidden='true'>
        <svg id='mix-logomark' width='100%' height='100%' viewBox='0 0 24 24'>
          <g fill='none' fill-rule='evenodd'>
            <path d='M4 12.706v5.701C4 19.287 4.717 20 5.601 20s1.601-.713 1.601-1.593V9.693A3.199 3.199 0 014 12.706z' fill='var(--tertiary-color,#706E70)' />
            <path d='M19.904 4c-3.493 0-6.325 2.809-6.325 6.274v1.953c0-.879.719-1.592 1.605-1.592a1.6 1.6 0 011.606 1.592v.811c0 .879.718 1.592 1.605 1.592A1.6 1.6 0 0020 13.037V4.002A3.074 3.074 0 0019.904 4z' fill='var(--secondary-color,#9B999A)' />
            <path d='M4 12.755a3.2 3.2 0 003.198-3.017V8.242a1.597 1.597 0 011.599-1.595c.883 0 1.599.714 1.599 1.595v6.239c0 .881.716 1.594 1.599 1.594s1.599-.713 1.599-1.594v-4.197c0-3.471 2.82-6.284 6.3-6.284H4v8.755z' fill='var(--primary-color,#221E21)' />
          </g>
        </svg>
      </svg>
      <svg className='FeedSection__logo-text Icon Icon--mix-logotype' aria-hidden='true'>
        <svg id='mix-logotype' width='100%' height='100%' viewBox='0 0 33 11'>
          <path d='M22.64 2.08L24.06.7l3.41 3.33L30.88.7l1.42 1.38-3.4 3.33 3.4 3.33-1.42 1.39-3.4-3.33-3.42 3.33-1.42-1.39 3.41-3.33zM16.19 9.67h2V.7h-2zM6.27 4.98L9.63.7h1.91v9.15H9.5V3.93L6.28 8.07h-.01L3.05 3.93v5.92H1V.7h1.96z' fill='currentColor' fill-rule='evenodd' />
        </svg>
      </svg>
    </div>
  )
}

export default Header
