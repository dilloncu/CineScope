import React, { useState } from "react";
import "./NewForm.css";

export default function Form({ onSubmitFunc, comment }) {
  const [formData, setFormData] = useState(
    comment ?? {
      name: "",
      comment: "",
    }
  );

  // Dealing with FORM DATA
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const submit = (event) => {
    event.preventDefault();

    onSubmitFunc(formData);
  };

  return (
    <div>
      <form className="message" onSubmit={submit}>
        <input
          class="part1"
          className="username"
          placeholder="name"
          onChange={handleChange}
          name="name"
          value={formData.name}
        ></input>

        <input
          class="part2"
          className="comment"
          placeholder="comments"
          onChange={handleChange}
          name="comment"
          value={formData.comment}
        ></input>
        <button class="part3" className="submit" type="submit">
          {comment ? "Update" : "Add Comment"}
        </button>
      </form>
    </div>
  );
}
