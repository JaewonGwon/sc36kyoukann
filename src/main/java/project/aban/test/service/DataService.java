package project.aban.test.service;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import project.aban.test.dao.BookDao;
import project.aban.test.vo.Book;

@Service
public class DataService {
	
	@Autowired
	BookDao dao;
	
	@Value("/resources/assets/data/crawled_data.json")
	private Resource jsonResource;
	private JsonObject obj;
	private Gson gson = new Gson();
	private JsonParser parser = new JsonParser();
	
	public void testJson()  {
		try {
			InputStream jis = jsonResource.getInputStream();
			BufferedReader rd = new BufferedReader(new InputStreamReader(jis, StandardCharsets.UTF_8));
			String line;
			StringBuffer response = new StringBuffer();
			while ((line = rd.readLine()) != null) {
				response.append(line);
				response.append('\r');
			}
			rd.close();
			System.out.println(call_dao(response) + "개의 책정보 추가");
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	public int call_dao(StringBuffer response) {
		//책 코드 추가해야함!
		ArrayList<String> genres_list = new ArrayList<>();
		genres_list.add("100");
		genres_list.add("110");
		genres_list.add("160");
		genres_list.add("170");
		genres_list.add("120");
		genres_list.add("190");
		int result = 0;
		obj = gson.fromJson(response.toString(), JsonObject.class);
		for(int i = 0 ; i < genres_list.size() ; i++) {
			JsonArray arr = obj.get(genres_list.get(i)).getAsJsonArray();
			System.out.println("Genre : " + genres_list.get(i));
			Book _temp = new Book();
			for(int j = 0 ; j < arr.size(); j++) {
				_temp.setBook_title(arr.get(j).getAsJsonObject().get("book_title").getAsString());
				_temp.setBook_image(arr.get(j).getAsJsonObject().get("book_image").getAsString());
				_temp.setBook_writer(arr.get(j).getAsJsonObject().get("book_writer").getAsString());
				_temp.setBook_date(arr.get(j).getAsJsonObject().get("book_date").getAsString());
				_temp.setBook_publisher(arr.get(j).getAsJsonObject().get("book_publisher").getAsString());
				_temp.setBook_content(arr.get(j).getAsJsonObject().get("book_content").getAsString());
				result += dao.insert_book(_temp);
			}
		}
		return result;
	}
}
