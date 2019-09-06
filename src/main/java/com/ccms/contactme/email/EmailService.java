package com.ccms.contactme.email;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;


public class EmailService {
    static final String FROM = "ccms.jo.yang.jo@gmail.com";
    static final String FROMNAME = "ContactMe";

    static final String TO = "yoonee9000@gmail.com";
    static final String SMTP_USERNAME = "AKIAR2YOOOV3D2VPJG7G";
    static final String SMTP_PASSWORD = "BHXhF1EpEfYLt4ZyOOyNPiephfbDt3g6uGFpm02BxGVL";

//    static final String CONFIGSET = "ConfigSet";
    static final String HOST = "email-smtp.us-east-1.amazonaws.com";

    //25, 465 or 587
    static final int PORT = 587;
    static final String SUBJECT = "ContactMe notification";
    static final String BODY = String.join(
            System.getProperty("line.separator"),
            "<h1>Contact Lenses Expiration Alert!</h1>",
            "<p>Hi <user>! Your contact lenses will be expired on <date> "
    );
    
    public static void main(String[] args) throws Exception {
        Properties props = System.getProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.port", PORT);
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.auth", "true");

        Session session = Session.getDefaultInstance(props);

        MimeMessage msg = new MimeMessage(session);
        msg.setFrom(new InternetAddress(FROM,FROMNAME));
        msg.setRecipient(Message.RecipientType.TO, new InternetAddress(TO));
        msg.setSubject(SUBJECT);
        msg.setContent(BODY,"text/html");

//        msg.setHeader("X-SES-CONFIGURATION-SET", CONFIGSET);

        Transport transport = session.getTransport();
        try
        {
            System.out.println("Sending...");

            transport.connect(HOST, SMTP_USERNAME, SMTP_PASSWORD);

            transport.sendMessage(msg, msg.getAllRecipients());
            System.out.println("Email sent!");
        }
        catch (Exception ex) {
            System.out.println("The email was not sent.");
            System.out.println("Error message: " + ex.getMessage());
        }
        finally
        {
            transport.close();
        }
    }
}
