package com.ccms.contactme.controller;

import com.ccms.contactme.model.Contact;
import com.ccms.contactme.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4242")
@RestController
@RequestMapping("/contact")
public class ContactController {

    @Autowired
    ContactService contactService;

    @GetMapping("/all")
    public ResponseEntity<?> getAll(){
        List<Contact> result = contactService.findAll();
        Contact c = new Contact();
        c.setName("hello");
        result.add(c);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

}
