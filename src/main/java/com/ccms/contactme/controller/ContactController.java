package com.ccms.contactme.controller;

import com.ccms.contactme.service.EmailService;
import com.ccms.contactme.model.Contact;
import com.ccms.contactme.model.User;
import com.ccms.contactme.service.ContactService;
import com.ccms.contactme.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/contact")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @Autowired
    private UserService userService;

    @Autowired
    private EmailService emailService;

    @RequestMapping(value = "/contacts", method = RequestMethod.GET)
    public List<Contact> getAllContacts() {
        return contactService.findAll();
    }

    @RequestMapping(value = "contact/{id}", method = RequestMethod.GET)
    public Optional<Contact> getContactById(@PathVariable("id") String id) {
        return contactService.findById(id);
    }

    @RequestMapping(value = "/contacts", method = RequestMethod.POST)
    public Contact addNewContact(@RequestBody Contact contact) {
        Contact newContact = contactService.populateFields(contact);
        return contactService.save(newContact);
    }

    @RequestMapping(value = "/contacts/expired", method = RequestMethod.GET)
    public List<Contact> getExpiredContacts() {
        return contactService.findExpiredContacts();
    }

    @RequestMapping(value = "/sendEmail", method = RequestMethod.GET)
    public void sendEmailNotification() throws Exception {
        List<Contact> expiredContacts = contactService.findExpiredContacts();
        List<User> expiredUsers = new ArrayList<>();
        for(Contact c : expiredContacts){

            expiredUsers.add(userService.findByName(c.getUser().getFirstname()));

        }

        emailService.sendEmailNotification(expiredUsers.get(0).getEmail());
    }
}
