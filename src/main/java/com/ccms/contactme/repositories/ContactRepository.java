package com.ccms.contactme.repositories;

import com.ccms.contactme.model.Contact;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ContactRepository extends MongoRepository<Contact, String> {
    List<Contact> findAll();

    Optional<Contact> findById(String id);
}
