package com.ccms.contactme.controller;

import com.ccms.contactme.model.User;
import com.ccms.contactme.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/users")
public class UserController {
    public String name;

    @Autowired
    private UserService service;

    @RequestMapping(method = RequestMethod.GET)
    private List<User> getAllUsers(){
        return service.findAll();
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    private User addNewUser(@RequestBody User user){
        return service.save(user);
    }

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    private Boolean authenticateuser(@RequestBody User user) {
        return service.authenticateUser(user.getUsername(), user.getPassword());
    }

}

