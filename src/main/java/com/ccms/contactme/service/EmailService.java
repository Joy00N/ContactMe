package com.ccms.contactme.service;

import com.ccms.contactme.config.EmailProperties;
import com.ccms.contactme.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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

    public void sendEmailNotification(User user, String productNames) throws Exception {
        Properties props = System.getProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.port", Integer.parseInt(emailProperties.getPort()));
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.auth", "true");

        Session session = Session.getDefaultInstance(props);

        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("<h1>Contact Lenses Expiration Alert!</h1>");
        stringBuilder.append("<p>Hi " + user.getFirstName() + "! Your contact lenses in below are expired. " + "</p>");
        stringBuilder.append("<p>" + productNames + "</p>");

        String content = stringBuilder.toString();

        String toEmail = user.getEmail();

        MimeMessage msg = new MimeMessage(session);
        msg.setFrom(new InternetAddress(emailProperties.getFrom(), emailProperties.getFromName()));
        msg.setRecipient(Message.RecipientType.TO, new InternetAddress(toEmail));
        msg.setSubject(emailProperties.getSubject());
        msg.setContent(content, "text/html");

        Transport transport = session.getTransport();
        try {
            transport.connect(emailProperties.getHost(), emailProperties.getSmtp_userName(), emailProperties.getSmtp_password());
            transport.sendMessage(msg, msg.getAllRecipients());
            logger.info("Email sent!");
        } catch (Exception ex) {
            logger.error("Error message: " + ex.getMessage());
        } finally {
            transport.close();
        }
    }
}
