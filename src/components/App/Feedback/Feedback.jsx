

const Feedback = ({ categories, total, positive }) => {
  return (
    <div>
      <p>Good: {categories.good}</p>
      <p>Neutral: {categories.neutral}</p>
      <p>Bad: {categories.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </div>
  )
}

export default Feedback