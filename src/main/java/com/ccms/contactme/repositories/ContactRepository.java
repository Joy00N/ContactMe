package com.ccms.contactme.repositories;

import com.ccms.contactme.model.Contact;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface ContactRepository extends MongoRepository<Contact, String> {

    @Query(value = "{'expirationDate' : {$lt : ?0}}")
    List<Contact> findExpiredContacts(Date date);

}
