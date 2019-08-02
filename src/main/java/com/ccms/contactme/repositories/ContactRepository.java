package com.ccms.contactme.repositories;

import com.ccms.contactme.model.Contact;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ContactRepository extends MongoRepository<Contact, String> {
    List<Contact> findAll();

    List<Contact> findAllById(String id);
}
