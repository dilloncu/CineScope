import { useState, useEffect } from "react";
import axios from "axios";

export default function Forum() {
  const [userName, setUsername] = useState("");

  //   new code down
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
  }, []);

  // READ
  async function getComments() {
    let API = "http://localhost:9010/moviesComment";
    const result = await axios.get(API);
    console.log(result.data);
    setComments(result.data);
  }

  // CREATE
  const handleAddComment = async (newCommentFormData) => {
    const res = await axios.post(
      "http://localhost:9010/moviesComment",
      newCommentFormData
    );
    setComments([...comments, res.data]);
  };

  // delete comment
  const handleDeleteComment = async (id) => {
    const res = await axios.delete(`http://localhost:9010/moviesComment/${id}`);
    console.log(res);
    getComments();
  };

  // UPDATE

  const handleUpdateComment = async (comment) => {
    await axios.put(
      `http://localhost:9010/moviesComment/${comment._id}`,
      comment
    );
    getComments();
  };
  // new code up

  return (
    <div>
      <div className="about-us">
        <h3>ABOUT US</h3>
        <p>
          This application should focus on targeting film enthusiasts or anyone
          who wants to find out more information about a certain film. The
          application should provide them with the ability to search for a film
          and have all the relevant details and posters displayed on the page
          through a clean UI and easy to navigate interface.
        </p>
      </div>
      <form>
        <input
          className="username"
          placeholder="name"
          type="text"
          onChange={setUsername}
        ></input>
        <input className="comment" placeholder="comment" type="text"></input>
        <button className="submit" alt="submit"></button>
      </form>
      <div className="comments">
        {/* <FormRender
          comments={comments}
          handleDelete={handleDeleteComment}
          handleUpdateMovie={handleUpdateComment}
        /> */}
      </div>
    </div>
  );
}
