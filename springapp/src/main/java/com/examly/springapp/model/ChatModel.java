package com.examly.springapp.model;

import java.util.*;

public class ChatModel {
	private long id;
	
	private String chatId;
	private UserModel primaryUser;
	private UserModel secondaryUser;
	private List<String> chatHistory;
	private boolean status;
	private Date lastSeen;
	
	public ChatModel() {
		
	}

	public ChatModel(String chatId, UserModel primaryUser, UserModel secondaryUser, List<String> chatHistory,
			boolean status, Date lastSeen) {
		super();
		this.chatId = chatId;
		this.primaryUser = primaryUser;
		this.secondaryUser = secondaryUser;
		this.chatHistory = chatHistory;
		this.status = status;
		this.lastSeen = lastSeen;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getChatId() {
		return chatId;
	}

	public void setChatId(String chatId) {
		this.chatId = chatId;
	}

	public UserModel getPrimaryUser() {
		return primaryUser;
	}

	public void setPrimaryUser(UserModel primaryUser) {
		this.primaryUser = primaryUser;
	}

	public UserModel getSecondaryUser() {
		return secondaryUser;
	}

	public void setSecondaryUser(UserModel secondaryUser) {
		this.secondaryUser = secondaryUser;
	}

	public List<String> getChatHistory() {
		return chatHistory;
	}

	public void setChatHistory(List<String> chatHistory) {
		this.chatHistory = chatHistory;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public Date getLastSeen() {
		return lastSeen;
	}

	public void setLastSeen(Date lastSeen) {
		this.lastSeen = lastSeen;
	}
	
}
