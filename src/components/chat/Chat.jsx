import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmojiClick = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, []);

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="user" />
          <div className="texts">
            <span>Shiba Inu</span>
            <p>Hue Hue Hue, Doge to the Moon !!!</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="phone" />
          <img src="./video.png" alt="video" />
          <img src="./info.png" alt="info" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="user" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              maxime, nisi nam, obcaecati fuga iure tempora numquam fugit, quis
              soluta eaque! Repudiandae asperiores voluptatem soluta.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              maxime, nisi nam, obcaecati fuga iure tempora numquam fugit, quis
              soluta eaque! Repudiandae asperiores voluptatem soluta.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="user" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              maxime, nisi nam, obcaecati fuga iure tempora numquam fugit, quis
              soluta eaque! Repudiandae asperiores voluptatem soluta.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              maxime, nisi nam, obcaecati fuga iure tempora numquam fugit, quis
              soluta eaque! Repudiandae asperiores voluptatem soluta.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="user" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              maxime, nisi nam, obcaecati fuga iure tempora numquam fugit, quis
              soluta eaque! Repudiandae asperiores voluptatem soluta.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <img
            src="https://images.pexels.com/photos/7915359/pexels-photo-7915359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              maxime, nisi nam, obcaecati fuga iure tempora numquam fugit, quis
              soluta eaque! Repudiandae asperiores voluptatem soluta.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="see" />
          <img src="./camera.png" alt="camera" />
          <img src="./mic.png" alt="microphone" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt="emoji"
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmojiClick} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
