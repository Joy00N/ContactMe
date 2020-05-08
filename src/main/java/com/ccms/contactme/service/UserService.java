package com.ccms.contactme.service;

import com.ccms.contactme.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> findAll();

    Optional<User> findById(Long id);

    User save(User user);
}
