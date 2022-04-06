package com.examly.springapp.model;

import java.time.LocalDate;
import java.util.*;
import javax.persistence.*;

@Entity
@Table(name = "chats")
public class chatModel {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	@Column(name = "id")
//	private int id;
	
	@Id
	@Column(name = "chatId")
	private String chatId;
	
	@OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "primaryUser", nullable = false)
	private UserModel primaryUser;
	
	@OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "secondaryUser", nullable = false)
	private UserModel secondaryUser;
	
	@ElementCollection // 1
    @CollectionTable(name = "my_chats", joinColumns = @JoinColumn(name = "id")) // 2
    @Column(name = "chatHistory")
	private List<String> chatHistory;
	
	@Column(name = "status")
	private boolean status;
	
	@Column(name = "lastSeen")
	private LocalDate lastSeen;
	
	public chatModel() {
		
	}

	public chatModel(String chatId, UserModel primaryUser, UserModel secondaryUser, List<String> chatHistory,
			boolean status, LocalDate lastSeen) {
		super();
		this.chatId = chatId;
		this.primaryUser = primaryUser;
		this.secondaryUser = secondaryUser;
		this.chatHistory = chatHistory;
		this.status = status;
		this.lastSeen = lastSeen;
	}

//	public int  getId() {
//		return id;
//	}
//
//	public void setId(int id) {
//		this.id = id;
//	}

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

	public LocalDate getLastSeen() {
		return lastSeen;
	}

	public void setLastSeen(LocalDate lastSeen) {
		this.lastSeen = lastSeen;
	}
	
}
