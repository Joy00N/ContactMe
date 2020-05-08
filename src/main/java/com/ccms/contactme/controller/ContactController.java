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

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

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

        //map for user - list of expired contacts
        Map<String, List<Contact>> expiredContactUserMap = expiredContacts.stream()
                .collect(Collectors.groupingBy(Contact::getUserId));

        Map<String, String> expiredContactProductNamesMap = new HashMap<>();

        for (String s : expiredContactUserMap.keySet()) {

            String expiredProductsName = expiredContactUserMap.get(s).stream()
                    .map(v -> v.getProductName())
                    .collect(Collectors.joining());

            expiredContactProductNamesMap.put(s, expiredProductsName);
        }


        for (String s : expiredContactProductNamesMap.keySet()) {
            User user = userService.findById(s).get();
            try {
                emailService.sendEmailNotification(user, expiredContactProductNamesMap.get(s));
            } catch (Exception e) {
                logger.error(e.getMessage());
            }
        }


    }
}
