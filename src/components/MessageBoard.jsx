import { setInputValue } from "../slices/inputValueSlice";
import { setAddMessageBoard } from "../slices/messageBoardSlice";
import { setDeleteMessageBoard } from "../slices/messageBoardSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";

function MessageBoard() {
  const messageBoard = useSelector((state) => {
    return state.messageBoard;
  });
  const inputValue = useSelector((state) => {
    return state.inputValue;
  });
  const dispatch = useDispatch();

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
            onChange={(e) => {
              dispatch(setInputValue(e.target.value));
            }}
            value={inputValue}
          />
        </label>
        <button
          className="submit-message-button"
          onClick={() => {
            dispatch(setAddMessageBoard(inputValue));
          }}
        >
          Submit
        </button>
      </div>
      {messageBoard.map((message, index) => {
        return (
          <div class="board" key={index}>
            <div className="message">
              <h1>{message}</h1>
              <button
                className="delete-button"
                onClick={() => dispatch(setDeleteMessageBoard(index))}
              >
                x
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MessageBoard;
