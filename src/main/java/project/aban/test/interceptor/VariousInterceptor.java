package project.aban.test.interceptor;



import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.FlashMap;
import org.springframework.web.servlet.FlashMapManager;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import org.springframework.web.servlet.support.RequestContextUtils;

public class VariousInterceptor extends HandlerInterceptorAdapter {

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		
		// Code here
//		System.out.println("preHandle() checked.");
		HttpSession session = request.getSession();
	
		String loginId = (String)session.getAttribute("loginId");
		
		if ( loginId == null || loginId.trim().length() == 0 ) {

			session.setAttribute("loginId", null);
			String contextPath = request.getContextPath();
			
/*			FlashMap map = new FlashMap();
			map.put("error","�α��� �� �̿� ����");
			FlashMapManager flashMapManager = RequestContextUtils.getFlashMapManager(request);
			flashMapManager.saveOutputFlashMap(map, request, response);*/
			response.sendRedirect(contextPath + "/login");


			return false;
		}
		return true;
	}
}
