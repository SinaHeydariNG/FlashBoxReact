import React, { useState } from 'react'




export default function App() {
  return (
    <div className='container'>
      <h1 className='header'> Follow for more : @im_sina</h1>

      <FlashCard />

    </div>
  )
}


const questions = [
  {
    id: 200,
    question: 'ری اکت از چه زبان برنامه نویسی استفاده میکند ؟ ',
    answer: 'جاوااسکریپت'
  },
  {
    id: 300,
    question: ' در ری اکت از چه بلاک هایی برای مجزا سازی قسمت های مختلف برنامه استفاده میشود ؟  ',
    answer: 'کامپوننت ها'
  },
  {
    id: 400,
    question: "نام سینتکسی که در ری اکت برای نوشتن کد ها استفاده میشود چیست ؟",
    answer: 'JSX'
  },

  {
    id: 500,
    question: "برای انتفال دیتا بین کامپوننت ها از چه چیزی استفاده میکنیم ؟",
    answer: 'Props'
  },

  {
    id: 600,
    question: "برای ذخیره سازی اطلاعات در هر کامپوننت از چه چیزی استفاده میکنیم ؟",
    answer: 'useState()'
  },
  {
    id: 700,
    question: "آیا ری اکت همواره در حال اپدیت و توسعه است ؟",
    answer: 'بله!'
  },
]



function FlashCard() {
  const [selectedId, setselectedId] = useState(600)

  function handleSubmit(id) {
    setselectedId(id)
  }
  return (

    <div className='flashcards'>
      {
        questions.map((question) => {
          return (
            <div
              key={question.id}

              onClick={() => handleSubmit(question.id)}

              className={question.id === selectedId ? 'selected' : ''

              }>
              <p>{question.id === selectedId ? question.answer : question.question}</p>
            </div>
          )
        })
      }
    </div>
  )
}
