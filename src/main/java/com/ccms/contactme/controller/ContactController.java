package com.ccms.contactme.controller;

import com.ccms.contactme.model.Contact;
import com.ccms.contactme.service.ContactService;
import com.ccms.contactme.service.Producer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/contact")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @Autowired
    private Producer producer;

    @RequestMapping(value = "/contacts", method = RequestMethod.GET)
    public List<Contact> getAllContacts() {
        return contactService.findAll();
    }

    @RequestMapping(value = "contact/{id}", method = RequestMethod.GET)
    public Optional<Contact> getContactById(@PathVariable("id") String id) {
        return contactService.findById(id);
    }

    @RequestMapping(value = "/contacts", method = RequestMethod.POST)
    public Contact addNewContact(@RequestBody Contact contact){
        return contactService.save(contact);
    }

    @PostMapping(value = "/publish")
    public void sendMessageToKafkaTopic(@RequestParam("message")String message){
        this.producer.sendMessage(message);
    }

}
