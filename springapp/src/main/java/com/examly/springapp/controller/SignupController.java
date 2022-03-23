package com.examly.springapp.controller;

import com.examly.springapp.model.UserModel;
import com.examly.springapp.service.SignupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SignupController {

@Autowired
    private SignupService signupService;
@PostMapping("/signup")
public UserModel saveUser(@RequestBody UserModel user){
return signupService.saveUser(user);
}
@GetMapping("/admin")
public List<UserModel> getAllUsers(){
    return signupService.getUsers();
}
    @DeleteMapping("/admin/delete/{id}")
    public String delUserById(@PathVariable("id") int id){
    System.out.println(id);
    return signupService.deleteUser(id);
    }

}
