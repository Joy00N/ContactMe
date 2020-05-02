package com.ccms.contactme.controller;

import com.ccms.contactme.model.Contact;
import com.ccms.contactme.model.User;
import com.ccms.contactme.service.ContactService;
import com.ccms.contactme.service.EmailService;
import com.ccms.contactme.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ContactController {

    Logger logger = LoggerFactory.getLogger(ContactController.class);

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

    @SuppressWarnings("unchecked")
    @RequestMapping(value = "/sendEmail", method = RequestMethod.GET)
    public void sendEmailNotification() throws Exception {
        List<Contact> expiredContacts = contactService.findExpiredContacts();

        expiredContacts.stream()
//                .filter(c -> c.getUser())
                .forEach(c -> c.setUser(new User("1", "Yoonyoung", "Jo", "yoonee9000@gmail.com")));

        Map<String, Set<Contact>> expiredMap = new HashMap<>();

        for (Contact c : expiredContacts) {
            User user = userService.findByFirstName(c.getUser().getFirstname());
            if (expiredMap.containsKey(user.getFirstname())) {
                expiredMap.get(user.getFirstname()).add(c);
            } else {
                Set<Contact> hs = new HashSet();
                hs.add(c);
                expiredMap.put(user.getFirstname(), hs);
            }
        }

        for (String s : expiredMap.keySet()) {
            try {
                emailService.sendEmailNotification(s, expiredMap.get(s));
            } catch (Exception e) {
                logger.error(e.getMessage());
            }
        }


    }
}
