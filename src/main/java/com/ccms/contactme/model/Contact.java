package com.ccms.contactme.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
@Getter
@Setter
@NoArgsConstructor
public class Contact {

    @Id
    private String id;

    private String name;
    private Date expirationDate;

}
