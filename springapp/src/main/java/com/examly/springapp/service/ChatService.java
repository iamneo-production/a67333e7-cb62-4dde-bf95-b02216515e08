package com.examly.springapp.service;

import com.examly.springapp.model.ReqBody;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.model.chatModel;
import com.examly.springapp.repository.ChatRepository;
import com.examly.springapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class ChatService {
    @Autowired
    private ChatRepository chatRepository;
    @Autowired
    private UserRepository userRepository;
     public String startchat(int id, ReqBody body){
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
     public List<String> showChat(String chatId){
         chatModel cm = chatRepository.findById(chatId)
                 .orElseThrow(() -> new RuntimeException("Chat not exist with id :" + chatId));

         return cm.getChatHistory();
     }
     public String deleteChatItem(String chatId){
         chatModel cm = chatRepository.findById(chatId)
                 .orElseThrow(() -> new RuntimeException("Chat not exist with id :" + chatId));

         chatRepository.delete(cm);
         return "Deleted";
     }

}
