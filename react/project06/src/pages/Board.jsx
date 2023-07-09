import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import list from '../boardlist.json'

const Board = () => {
  const linkStyle = {
    textDecoration: 'none',
    fontWeight: 'bold'
  }

  let url = "/detail/"



  return (
    <div>
      <p className="m_tit">게시판</p>
      <table className='board'>
        <tbody>
          {list.boardList.map((item, idx) =>
            <tr key={item.num}>
              <td>{idx + 1}</td>
              <td><Link to={url + item.num} style={linkStyle}>{item.title}</Link></td>
              {/* <td><Link to={`/detail/${idx+1}`} style={linkStyle}>{item.title}</Link></td> */}
              <td>{item.writer}</td>
            </tr>
          )}
        </tbody>
      </table>
      <br />
    </div>
  )
}

export default Board