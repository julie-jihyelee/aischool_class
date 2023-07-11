import React from 'react'

const Comment = ({writer, content}) => {
  return (
    <div>
      {content} {''}
      작성자 : {writer}

    </div>
  )
}

export default Comment