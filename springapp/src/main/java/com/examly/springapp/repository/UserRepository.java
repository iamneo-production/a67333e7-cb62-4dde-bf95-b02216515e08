package com.examly.springapp.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long>{

}
