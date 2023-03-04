import React from 'react';
import {RiHomeGearFill} from "react-icons/ri";
import './Faq.scss';
import Question from './Question';
import {questions} from './data'

const Faq = () => {
  let a = questions.map((question) => (<Question title={question.title} answer={question.answer} key={question.id}/>) );
  return (
    <section className='faq-sec'>
        <div container="container faq">
            <div className="title --center-all">
            <RiHomeGearFill size={30} color="orangered"/>
            <h2 className='--mb2'>FAQS</h2>
            <p className='--text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugiat officiis nihil? Accusantium, ut. Minima incidunt nostrum neque commodi nemo.</p>
            </div>

            <div className="questions">
               {questions.map((question) => (<Question title={question.title} answer={question.answer} key={question.id}/>) )}
            </div>
        </div>
    </section>
   
  )
}

export default Faq