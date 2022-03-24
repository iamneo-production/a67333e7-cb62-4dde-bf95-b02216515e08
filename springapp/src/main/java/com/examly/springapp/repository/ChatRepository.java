package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.model.chatModel;

public interface ChatRepository  extends JpaRepository<chatModel, String>{

}
