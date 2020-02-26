import React from 'react'

function LinkFooter(props) {



  const {
    href,
    text,
    className,
    title
  } = props
  return (
    <a
      href={href}
      title={title}
      className={className}
    >
      {text}
      {props.children}
    </a>
  )
}

export default LinkFooter