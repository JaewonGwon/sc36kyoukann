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
		String host = "smtp.gmail.com"; 
		int port=465; 
		//465=네이버, 587=지메일
		
		final String username = "kyoukann365365";//발신자 사람의 메일 아이디
		final String password = "365365365";//발신자의 비번 
		String recipient = email;
		Member m =(Member) Sendsession.getAttribute("pwCheckMember");
		
		String subject = "[공감]"+m.getId()+", "+m.getName() + " 님의 임시비밀번호입니다.";
		String body = "임시비밀번호는 "+Sendsession.getAttribute("sendPw")+" 입니다.";
		body += "비밀번호를 재설정하시려면 아래의 링크를 클릭해주세요";
		body += "http://localhost:8888/test/memberCheck";
		
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
			mimeMessage.setFrom(new InternetAddress("kyoukann365365@gmail.com"));//발신자주소
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
