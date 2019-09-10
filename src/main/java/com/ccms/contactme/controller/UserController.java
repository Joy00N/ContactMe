package com.ccms.contactme.controller;

import com.ccms.contactme.model.User;
import com.ccms.contactme.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserController {
    public String name;

    @Autowired
    private UserService service;

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    private List<User> getAllUsers(){
        return service.findAll();
    }

//    @RequestMapping(value = "/users", method = RequestMethod.POST)
//    private void addNewUser(@RequestBody User user){
//        service.save(user);
//    }

    @RequestMapping(value = "/users", method = RequestMethod.POST)
    private User addNewUser(@RequestBody User user){
        return service.save(user);
    }

}

