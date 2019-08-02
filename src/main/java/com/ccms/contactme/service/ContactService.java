package com.ccms.contactme.service;

import com.ccms.contactme.model.Contact;

import java.util.List;

public interface ContactService {
    List<Contact> findAll();

    List<Contact> findAllById(String id);
}
