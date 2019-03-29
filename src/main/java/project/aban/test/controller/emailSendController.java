package project.aban.test.controller;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import project.aban.test.vo.Member;

@Controller
public class emailSendController {
	@RequestMapping(value="/emailSend", method= RequestMethod.POST)
	public String emailSend(HttpServletRequest request, ModelMap mo, String email, HttpSession Sendsession) throws AddressException, MessagingException {
		String host = "smtp.naver.com"; 
		int port=465; 
		//465=네이버, 587=지메일
		
		final String username = "redemption580";//발신자 사람의 메일 아이디
		final String password = "gonggam@@";//발신자의 비번 
		String recipient = email;
		Member m =(Member) Sendsession.getAttribute("pwCheckMember");
		
		String subject = "[공감]"+m.getId()+", "+m.getName() + " 님의 임시비밀번호입니다.";
		String body = "임시비밀번호는 "+Sendsession.getAttribute("sendPw")+" 입니다.";
		
		Properties props = System.getProperties();
	
		//props.put("mail.transport.protocol", "smtp");
		props.put("mail.smtp.host", host); 	
		props.put("mail.smtp.port", port);
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.ssl.enable", "true"); 	
		props.put("mail.smtp.ssl.trust", host);
		/*props.put("mail.smtp.socketFactory.class","javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.socketFactory.fallback","false");
*/		
		Session session = Session.getDefaultInstance(props, new javax.mail.Authenticator() {
			String un=username; 		
			String pw=password; 		
			protected javax.mail.PasswordAuthentication getPasswordAuthentication() {
				return new javax.mail.PasswordAuthentication(un, pw);
				} 	
			}); 
		session.setDebug(true);
		try {
			Message mimeMessage = new MimeMessage(session);
			mimeMessage.setFrom(new InternetAddress("redemption580@naver.com"));//발신자주소
			mimeMessage.setRecipient(Message.RecipientType.TO, new InternetAddress(recipient)); 
			mimeMessage.setSubject(subject); //제목셋팅 	
			mimeMessage.setText(body); //내용셋팅 	
			Transport.send(mimeMessage); 
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return "member/emailSendComplete";
	}
}
