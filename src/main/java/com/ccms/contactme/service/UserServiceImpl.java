package com.ccms.contactme.service;

import com.ccms.contactme.model.User;
import com.ccms.contactme.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> findById(String id) {
        return Optional.of(userRepository.findById(id)).get();
    }

    @Override
    public User findByName(String name) {
        return userRepository
                        .findAll()
                        .stream()
                        .filter(v->
                            v.getFirstname().equals("jihyun")
                        )
                        .findAny()
                        .orElse(null);
    }

    @Override
    public User save(User user) {
        return userRepository.insert(user);
    }
}
