package com.examly.springapp.controller;

import java.time.LocalDate;
import java.util.*;

import com.examly.springapp.model.ReqBody;
import com.examly.springapp.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/chat")
public class ChatController {
	@Autowired
	private ChatService chatService;
	private ReqBody reqBody;
	
	
	@PostMapping("/{id}")
	String startChat(@PathVariable int id, @RequestBody ReqBody body){		
		return chatService.startchat(id,body);
	}
	
	@GetMapping("/{chatId}")
	List<String> showChat(@PathVariable String chatId){
		return chatService.showChat(chatId);
	}
	
	
	@DeleteMapping("/{chatId}")
	String deleteChatItem(@PathVariable String chatId){
		return chatService.deleteChatItem(chatId);
	}
}