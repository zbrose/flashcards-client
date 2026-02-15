import { useState } from "react";

export default function CreateForm() {
  const [title, setTitle] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  return (
    <form
      data-testid="create-form"
      id="create-form"
      className="border-black border flex flex-col gap-4"
    >
      <div className="flex flex-col">
        <label htmlFor="title">Title: </label>
        <input
          className="border-black border w-md"
          type="text"
          id="title"
          name="title"
          placeholder="Enter a title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="question">Question: </label>
        <textarea
          className="border-black border w-md"
          id="question"
          name="question"
          form="create-form"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="answer">Answer: </label>
        <textarea
          className="border-black border w-md"
          id="answer"
          name="answer"
          form="create-form"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
    </form>
  );
}
