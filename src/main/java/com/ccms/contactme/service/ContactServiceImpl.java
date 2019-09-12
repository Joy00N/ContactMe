package com.ccms.contactme.service;

import com.ccms.contactme.model.Contact;
import com.ccms.contactme.repositories.ContactRepository;
import com.ccms.contactme.util.ContactType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    private ContactRepository contactRepository;

    @Override
    public List<Contact> findAll() {
        return contactRepository.findAll();
    }

    @Override
    public Optional<Contact> findById(String id) {
        return contactRepository.findById(id);
    }

    @Override
    public Contact save(Contact contact) {
        return contactRepository.insert(contact);
    }

    @Override
    public Contact populateFields(Contact contact) {
        LocalDate expirationDate = null;
        if (contact.getContactType().equals(ContactType.DAILY.getValue())) {
            expirationDate = contact.getOpeningDate().plusDays(1);
        } else if (contact.getContactType().equals(ContactType.BIWEEKLY.getValue())) {
            expirationDate = contact.getOpeningDate().plusWeeks(2);
        } else if (contact.getContactType().equals(ContactType.MONTHLY.getValue())) {
            expirationDate = contact.getOpeningDate().plusMonths(1);
        }
        contact.setExpirationDate(expirationDate);
        return contact;
    }

//    @Override
//    public List<Contact> findExpiredContacts() {
//        return contactRepository.findExpiredContacts();
//    }
}
