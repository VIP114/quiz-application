/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */

import './Paginator.scss'

const Paginator = ({ currentItems }) => {
  return (
    <>
      {currentItems?.map((question, index) => {
        return (
          <li className="question" key={index}>
            {question.title}
          </li>
        )
      })}
    </>
  )
}

export default Paginator
