import React from "react";
import Accordion from "./Accordion";





const Questions = () => {
  return (
    <div className="accordion container-center pt-8">
      <h2>Frequently Asked Questions</h2>
      <p className="body-p pt-4">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>

      <div className="faq">
        {questions.map((question)=> <Accordion
        id={question.id}
        title={question.question}
        answer={question.answer}
        />)}
      </div>

      <button className="btn mt-4">More Info</button>
    </div>
  );
};

export default Questions;

const questions = [
  {
    id: 1,
    question: " What is Bookmark?",
    answer:
      "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    id: 2,
    question: "  How can I request a new browser? ",
    answer:
      "  Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.  Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,  ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.  Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. ",
  },
  {
    id: 3,
    question: " Is there a mobile app? ",
    answer:
      "   Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum  urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed  sollicitudin ex et ultricies bibendum. ",
  },
  {
    id: 4,
    question: "   What about other Chromium browsers?",
    answer:
      " Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam  vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];
