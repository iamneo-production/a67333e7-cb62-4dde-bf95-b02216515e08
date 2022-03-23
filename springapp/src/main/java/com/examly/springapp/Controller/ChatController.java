package com.examly.springapp.Controller;

import java.time.LocalDate;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.UserModel;
import com.examly.springapp.model.chatModel;
import com.examly.springapp.repository.ChatRepository;
import com.examly.springapp.repository.UserRepository;


class ReqBody{
	private long senderId;
	private String chat;
	
	ReqBody(long senderId, String chat){
		this.senderId = senderId;
		this.chat = chat;
	}

	public long getSenderId() {
		return senderId;
	}

	public void setSenderId(long senderId) {
		this.senderId = senderId;
	}

	public String getChat() {
		return chat;
	}

	public void setChat(String chat) {
		this.chat = chat;
	}
}


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/chat")
public class ChatController {
	@Autowired
	private ChatRepository chatRepository;
	@Autowired
	private UserRepository userRepository;
	
	
	@PostMapping("/{id}")
	String startChat(@PathVariable long id, @RequestBody ReqBody body){		
		UserModel primaryUser, secondaryUser;
		String chatId = "";
		
		if(id < body.getSenderId()) {
			chatId = id + " " + body.getSenderId();
			primaryUser = userRepository.findById(id)
					.orElseThrow(() -> new RuntimeException("Employee not exist with id :" + id));
			secondaryUser = userRepository.findById(body.getSenderId())
					.orElseThrow(() -> new RuntimeException("Employee not exist with id :" + body.getSenderId()));
		}else {
			 chatId = body.getSenderId() + " " + id;
			 primaryUser = userRepository.findById(body.getSenderId())
						.orElseThrow(() -> new RuntimeException("Employee not exist with id :" + body.getSenderId()));
			secondaryUser = userRepository.findById(id)
					.orElseThrow(() -> new RuntimeException("Employee not exist with id :" + id));
		}
		
		LocalDate d = LocalDate.now();
		
		List<String> l = new ArrayList<>();
		
		//Chat Model
		chatModel cm = chatRepository.findById(chatId)
					.orElse(
							new chatModel(chatId, primaryUser, secondaryUser, l, false, d)
					);
		
		l = cm.getChatHistory();
		l.add(body.getChat() + " -> " + body.getSenderId());
		
		chatRepository.save(cm);
		return "Started";
	}
	
	@GetMapping("/{chatId}")
	List<String> showChat(@PathVariable String chatId){
		chatModel cm = chatRepository.findById(chatId)
				.orElseThrow(() -> new RuntimeException("Chat not exist with id :" + chatId));
		
		return cm.getChatHistory();
	}
	
	
	@DeleteMapping("/{chatId}")
	String deleteChatItem(@PathVariable String chatId){
		chatModel cm = chatRepository.findById(chatId)
				.orElseThrow(() -> new RuntimeException("Chat not exist with id :" + chatId));
		
		chatRepository.delete(cm);
		return "Deleted";
	}
}
