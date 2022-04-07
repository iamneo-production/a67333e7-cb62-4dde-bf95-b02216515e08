package com.examly.springapp.controller;

import com.examly.springapp.model.StatusIs;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.UserRepository;
import com.examly.springapp.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin
@RestController
public class LoginController {
    @Autowired
    private LoginService loginService;
    private UserRepository userRepository;
    @PostMapping("/login")
    public StatusIs loginUser(@RequestBody UserModel user) {
        List<UserModel> users = userRepository.findAll();
        for (UserModel other : users) {
            if (other.equals(user)) {
                user.setActive(true);
                userRepository.save(user);
                return StatusIs.FAILURE;
            }
        }        return StatusIs.FAILURE;
    }    @PostMapping("/users/logout")
    public StatusIs logUserOut(@RequestBody UserModel user) {
        List<UserModel> users = userRepository.findAll();
        for (UserModel other : users) {
            if (other.equals(user)) {
                user.setActive(false);
                userRepository.save(user);
                return StatusIs.SUCCESS;
            }
        }
        return StatusIs.FAILURE;
    }}

