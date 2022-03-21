package com.examly.springapp.Controller;

import com.examly.springapp.model.UserModel;
import com.examly.springapp.service.SignupService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

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
    public String delUserById(@RequestParam UUID id){
        return signupService.deleteUser(id);
    }

}
