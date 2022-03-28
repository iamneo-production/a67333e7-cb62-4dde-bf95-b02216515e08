package com.examly.springapp.model;

public class ReqBody {
    private int senderId;
    private String chat;

    ReqBody(int senderId, String chat){
        this.senderId = senderId;
        this.chat = chat;
    }

    public int getSenderId() {
        return senderId;
    }

    public void setSenderId(int senderId) {
        this.senderId = senderId;
    }

    public String getChat() {
        return chat;
    }

    public void setChat(String chat) {
        this.chat = chat;
    }
}
