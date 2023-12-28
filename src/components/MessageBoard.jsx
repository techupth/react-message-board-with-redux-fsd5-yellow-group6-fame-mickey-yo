import { useSelector, useDispatch } from "react-redux";
import {
  addMessage,
  deleteMessage,
  inputMessage,
} from "../slices/messageBoardSlice";

function MessageBoard() {
  const messages = useSelector((state) => {
    return state.message.messages;
  });
  const inputMessages = useSelector((state) => {
    return state.message.inputMessages;
  });

  const dispatch = useDispatch();

  const handleInput = (event) => {
    dispatch(inputMessage(event.target.value));
    event.preventDefault();
  };
  const handleAdd = () => {
    dispatch(addMessage(inputMessages));
  };
  const handleDelete = (index) => {
    dispatch(deleteMessage(index));
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={handleInput}
          />
        </label>
        <button className="submit-message-button" onClick={handleAdd}>
          Submit
        </button>
      </div>
      <div class="board">
        {messages.map((message, index) => {
          return (
            <div className="message" key={index}>
              <h1>{message}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  handleDelete(index);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
