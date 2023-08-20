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
      <form className="message" onSubmit={submit} id="nform">
        <input
          class="part1"
          className="username"
          placeholder="name"
          onChange={handleChange}
          name="name"
          value={formData.name}
          required
        ></input>

        <button class="part3" className="submit" type="submit">
          Add Comment
        </button>
      </form>
      <textarea
        form="nform"
        rows={4}
        cols={55}
        // class="part2"
        className="text_area"
        placeholder="comments"
        onChange={handleChange}
        name="comment"
        value={formData.comment}
      ></textarea>
    </div>
  );
}
