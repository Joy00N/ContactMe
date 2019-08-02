package com.ccms.contactme.service;

import com.ccms.contactme.model.Contact;
import com.ccms.contactme.repositories.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    ContactRepository contactRepository;

    @Override
    public List<Contact> findAll() {
        return contactRepository.findAll();
    }

    @Override
    public List<Contact> findAllById(String id) {
        return contactRepository.findAllById(id);
    }
}
