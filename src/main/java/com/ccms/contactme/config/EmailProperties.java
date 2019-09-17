package com.ccms.contactme.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Getter
@Setter
@Configuration
@PropertySource("classpath:email.properties")
public class EmailProperties {
    @Value("${from.email}")
    public String from;
    @Value("${from.name}")
    public String fromName;

    @Value("${stmp.username}")
    public String smtp_userName;
    @Value("${stmp.password}")
    public String smtp_password;
    @Value("${host}")
    public String host;
    //25, 465 or 587
    @Value("${port}")
    public String port;
    @Value("${subject}")
    public String subject;

}
