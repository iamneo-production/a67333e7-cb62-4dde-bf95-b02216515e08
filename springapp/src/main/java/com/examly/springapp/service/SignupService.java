package com.examly.springapp.service;

import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
    public String updateUser(int id, UserModel user) {
        UserModel existingUser = userRepository.findAllById(id);
        if (existingUser == null) {
            return "User Not Found";
        } else {
            existingUser.setEmail(user.getEmail());
            existingUser.setUsername(user.getUsername());
            existingUser.setPassword(user.getPassword());
            existingUser.setMobileNumber(user.getMobileNumber());
            existingUser.setRole(user.getRole());
            existingUser.setQualification((user.getQualification()));
            userRepository.save(existingUser);
            return "User Updated";
        }
    }


}
