package com.examly.springapp.repository;

import com.examly.springapp.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<UserModel, UUID>  {

    UserModel findAllById(int id);
}
