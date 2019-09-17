package com.ccms.contactme.service;

import com.ccms.contactme.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> findAll();

    Optional<User> findById(String id);

    User findByName(String name);

    User save(User user);
}
