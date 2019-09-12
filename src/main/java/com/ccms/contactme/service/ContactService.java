package com.ccms.contactme.service;

import com.ccms.contactme.model.Contact;

import java.util.List;
import java.util.Optional;

public interface ContactService {
    List<Contact> findAll();

    Optional<Contact> findById(String id);

    Contact save(Contact contact);

    Contact populateFields(Contact contact);

    List<Contact> findExpiredContacts();

}
