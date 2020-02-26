import React from 'react'

function AppFooterColumn(props) {
  return (
    <div className="AppFooter__column AppFooter__column--company">
      {props.children}
    </div>
  )
}

export default AppFooterColumn
