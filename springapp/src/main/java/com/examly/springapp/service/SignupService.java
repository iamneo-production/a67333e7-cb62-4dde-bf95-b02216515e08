package com.examly.springapp.service;

import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.UserRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.UUID;

@Service
public class SignupService {
    @Autowired
    private UserRepository userRepository;
    public UserModel saveUser(UserModel user){

        return userRepository.save(user);
    }
    public List<UserModel> saveUsers(List<UserModel> user){
        return userRepository.saveAll(user);
    }
    public List<UserModel> getUsers(){
        return userRepository.findAll();
    }
    public UserModel getUsersById(int id){
        return userRepository.findById(id).orElse(null);
    }
    public String deleteUser(int id){
        userRepository.deleteById(id);
        return "User removed of id"+id;
    }
    public UserModel updateUser(UserModel user){
        UserModel existingUser= userRepository.findAllById(user.getId());
        existingUser.setEmail(user.getEmail());
        existingUser.setUsername(user.getUsername());
        existingUser.setPassword(user.getPassword());
        existingUser.setMobileNumber(user.getMobileNumber());
        existingUser.setRole(user.getRole());
        return userRepository.save(existingUser);
    }


}
