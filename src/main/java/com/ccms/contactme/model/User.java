package com.ccms.contactme.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@Getter
@Setter
@ToString
@NoArgsConstructor
public class User {

    public User(String id, String firstname, String lastname, String email){
        this.id=id;
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
    }

    @Id
    private String id;

    private List<Contact> contacts;
    private String username;
    private String password;
    private String firstname;
    private String lastname;
    private String email;
    private String phone;

}
