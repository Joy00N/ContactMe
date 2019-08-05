package com.ccms.contactme.service;

import com.ccms.contactme.model.Contact;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ContactService {
    List<Contact> findAll();

    Optional<Contact> findById(String id);

    Contact save(Contact contact);
}
