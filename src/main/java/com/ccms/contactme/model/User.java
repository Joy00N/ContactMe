package com.ccms.contactme.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Getter
@Setter
@ToString
@NoArgsConstructor
public class User {

    public User(String username, String firstName, String lastName, String email) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    @Id
    @Generated
    private String id;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String email;

}
