import { useEffect, useState } from "react"
import Description from "./components/App/Description/Description"
import Options from "./components/App/Options/Options"
import Feedback from "./components/App/Feedback/Feedback"
import Notification from "./components/App/Notification/Notification"

const App = () => {
  const [categories, setCategories] = useState(() => {
    const parsedCategories = JSON.parse(localStorage.getItem('categories')) ?? {good: 0, neutral: 0, bad: 0}
    return parsedCategories;
  })
  
  useEffect(() => {
    const stringifyedCategories = JSON.stringify(categories);
    localStorage.setItem("categories", stringifyedCategories);
  }, [categories])

  const totalFeedback = categories.good + categories.neutral + categories.bad;
  const positiveFeedback = Math.round((categories.good / totalFeedback) * 100); 

  const onFeedbackButtons = (categoryName) => {
    setCategories({ ...categories, [categoryName]: categories[categoryName] + 1})
  }
  
  // const onGoodBtnClick = () => {
  //   setCategories({ ...categories, good: categories.good + 1})
  // }

  // const onNeutralBtnClick = () => {
  //   setCategories({ ...categories, neutral: categories.neutral + 1})
  // }

  // const onBadBtnClick = () => {
  //   setCategories({ ...categories, bad: categories.bad + 1})
  // }

  const onResetBtnClick = () => {
    setCategories({ good: 0, neutral: 0, bad: 0 })
  }

  return (
    <div>
      <Description />
      <Options
        onFeedbackButtons={onFeedbackButtons}
        onResetBtnClick={onResetBtnClick}
        total={totalFeedback}
      />
      {(categories.good !== 0 || categories.neutral !== 0 || categories.bad !== 0) ?
        <Feedback
          categories={categories}
          total={totalFeedback}
          positive = { (categories.good != 0) ? positiveFeedback : "0" } /> : <Notification/>}
    </div>
  )
}

export default App