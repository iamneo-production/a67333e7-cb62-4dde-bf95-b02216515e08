package com.examly.springapp.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.chatModel;

@Repository
public interface ChatRepository  extends JpaRepository<chatModel, String>{

}
