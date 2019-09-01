package com.ccms.contactme.model;

import lombok.Generated;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Getter
@Setter
@NoArgsConstructor
public class Contact {

    @Generated
    @Id
    private String id;

    private String name;
    private String expirationDate;

}
