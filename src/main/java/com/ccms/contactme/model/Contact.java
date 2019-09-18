package com.ccms.contactme.model;

import lombok.Generated;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document
@Getter
@Setter
@NoArgsConstructor
public class Contact {

    @Id
    private String id;
    private User user;
    private String name;
    private LocalDate openingDate;
    private LocalDate expirationDate;
    private String contactType;
}
