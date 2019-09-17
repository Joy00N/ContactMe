package com.ccms.contactme.service;

import com.ccms.contactme.config.EmailProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.stereotype.Service;

import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

@Service
public class EmailService {
    Logger logger = LoggerFactory.getLogger(EmailService.class);

    @Autowired
    private EmailProperties emailProperties;

//    public EmailService(EmailProperties emailProperties){
//        this.emailProperties = emailProperties;
//    }

    final String BODY = String.join(
            System.getProperty("line.separator"),
            "<h1>Contact Lenses Expiration Alert!</h1>",
            "<p>Hi <user>! Your contact lenses will be expired on <date> "
    );

    public void sendEmailNotification(String toEmail) throws Exception {
        Properties props = System.getProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.port", Integer.parseInt(emailProperties.getPort()));
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.auth", "true");

        Session session = Session.getDefaultInstance(props);

        MimeMessage msg = new MimeMessage(session);
        msg.setFrom(new InternetAddress(emailProperties.getFrom(), emailProperties.getFromName()));
        msg.setRecipient(Message.RecipientType.TO, new InternetAddress(toEmail));
        msg.setSubject(emailProperties.getSubject());
        msg.setContent(BODY, "text/html");

        Transport transport = session.getTransport();
        try {
            logger.info("Sending...");

            transport.connect(emailProperties.getHost(), emailProperties.getSmtp_userName(), emailProperties.getSmtp_password());

            transport.sendMessage(msg, msg.getAllRecipients());
            logger.info("Email sent!");
        } catch (Exception ex) {
            logger.error("The email was not sent.");
            logger.error("Error message: " + ex.getMessage());
        } finally {
            transport.close();
        }
    }
}
