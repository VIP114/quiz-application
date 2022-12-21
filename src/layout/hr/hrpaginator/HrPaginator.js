/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */

const Paginator = ({ currentItems }) => {
  return (
    <div>
      <ul>
        {currentItems.map((question, index) => {
          return (
            <li className="question" key={index}>
              {question.Question}<br />
              {question.desc}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Paginator