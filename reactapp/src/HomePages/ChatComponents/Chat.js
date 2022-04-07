import React, { Component } from "react";
import ChatService from "../ChatService/ChatService";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import Navbar from "../AdminResourceComponents/Components/NavbarAdmin";
import "./chat.css";

class ChatComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chats: [],
      primaryUserId: this.props.primaryUserId,
      secondaryUserId: this.props.secondaryUserId,
      secondaryUserName: this.props.secondaryUserName,
      msg: "",
    };

    this.getChatId = this.getChatId.bind(this);
    this.changeMsgHandler = this.changeMsgHandler.bind(this);
    this.sendMsg = this.sendMsg.bind(this);
    this.deleteMsg = this.deleteMsg.bind(this);
    this.getAllChats = this.getAllChats.bind(this);
  }

  getChatId() {
    var chatId = "";
    if (this.state.primaryUserId < this.state.secondaryUserId) {
      chatId = this.state.primaryUserId + " " + this.state.secondaryUserId;
    } else {
      chatId = this.state.secondaryUserId + " " + this.state.primaryUserId;
    }

    return chatId;
  }

  changeMsgHandler(event) {
    this.setState({ msg: event.target.value });
  }

  sendMsg(e) {
    e.preventDefault();
    if (this.state.msg.length != 0) {
      let body = {
        senderId: this.state.primaryUserId,
        chat: this.state.msg,
      };

      ChatService.sendMsg(this.state.secondaryUserId, body).then((res) => {
        console.log("Added");
      });

      var message = this.state.msg + " -> " + this.state.primaryUserId;
      this.setState({
        chats: [...this.state.chats, message],
        msg: "",
      });
    }
  }

  deleteMsg(e) {
    e.preventDefault();
    if (this.state.chats.length != 0) {
      // console.log(this.getChatId());
      ChatService.deleteChat(this.getChatId()).then((res) => {
        this.setState({
          chats: [],
        });
      });
    }
  }

  getAllChats() {
    ChatService.getChats(this.getChatId()).then((res) => {
      this.setState({
        chats: res.data,
      });
    });
  }

  componentDidMount() {
    this.getAllChats();
  }

  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="grid-container">
          <div className="res-view">
            <div className="vedio"></div>
            <div className="pdf">
              <iframe
                width="560"
                height="315"
                src=""
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div className="chat-view">
            {" "}
            <div className="container">
              <h3>
                {this.state.secondaryUserName} &nbsp;&nbsp;
                <span>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={this.deleteMsg}
                  >
                    {" "}
                    Delete{" "}
                  </button>
                </span>
              </h3>

              <div className="scroll">
                {this.state.chats.length == 0 ? (
                  <div>
                    <h6>No Chats...</h6>
                  </div>
                ) : (
                  this.state.chats.map((chat) => {
                    var arr = chat.split(" -> ");
                    var msg = arr[0];
                    var sender = arr[1];
                    if (sender === this.state.primaryUserId) {
                      return <RightComponent msg={msg} />;
                    } else {
                      return <LeftComponent msg={msg} />;
                    }
                  })
                )}
              </div>

              <div>
                <span>
                  <input
                    type="text"
                    className="chatInputField"
                    placeholder="Send a message..."
                    value={this.state.msg}
                    onChange={this.changeMsgHandler}
                  />
                </span>
                <button className="btn-primary sendBtn" onClick={this.sendMsg}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatComponent;
