package project.aban.test.service;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import project.aban.test.dao.BookDao;
import project.aban.test.vo.Book;
import project.aban.test.vo.Tag;

@Service
public class DataService {
	
	@Autowired
	BookDao dao;
	
	@Value("/resources/assets/data/crawled_data.json")
	private Resource jsonResource;
	@Value("/resources/assets/data/tags_data.json")
	private Resource tagResource;
	private JsonObject obj;
	private Gson gson = new Gson();
	
	public void insert_books()  {
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
			System.out.println(insert_books(response) + "권의 책이 실행되었습니다.");
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	public int insert_books(StringBuffer response) {
		System.out.println(response);
		//temp_list for validation
		ArrayList<String> temp_list = new ArrayList<>();
		ArrayList<Book> buffer_data = new ArrayList<>();
		//å �ڵ� �߰��ؾ���!
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
			for(int j = 0 ; j < arr.size(); j++) {
				Book _temp = new Book();
				_temp.setBook_num(book_num_gen(genres_list.get(i)));
				_temp.setBook_title(arr.get(j).getAsJsonObject().get("book_title").getAsString());
				String insert_image = arr.get(j).getAsJsonObject().get("book_image").getAsString();
				//add the element to list for validation
				if(!temp_list.contains(insert_image)) {
					temp_list.add(insert_image);
					_temp.setBook_image(insert_image);
				} else {
					//중복 데이터 skip
					continue;
				}
				_temp.setBook_writer(arr.get(j).getAsJsonObject().get("book_writer").getAsString());
				_temp.setBook_date(arr.get(j).getAsJsonObject().get("book_date").getAsString());
				_temp.setBook_publisher(arr.get(j).getAsJsonObject().get("book_publisher").getAsString());
				_temp.setBook_content(arr.get(j).getAsJsonObject().get("book_content").getAsString());
				if (dao.select_book(_temp) != null || _temp.getBook_title() == null || _temp.getBook_image() == null) {
					continue;
				} else {
					result += 1;
					buffer_data.add(_temp);
					System.out.println("추가될 책 제목 : " + _temp.getBook_title());
				}
			}
		}
		for(Book b : buffer_data) {
			System.out.println(b.getBook_title());
		}
		
		dao.insert_book(buffer_data);
		return result;
	}
	
	public String book_num_gen(String genre) {
		Date d = new Date();
		DateFormat df = new SimpleDateFormat("YYYYMMDD");
		String uuid = UUID.randomUUID().toString().replace("-", "");
		String result = df.format(d) + "-" + genre + "-" + uuid.substring(0, 7);

		return result;
	}
	
	public void insert_tag() {
		try {
			InputStream jis = tagResource.getInputStream();
			BufferedReader rd = new BufferedReader(new InputStreamReader(jis, StandardCharsets.UTF_8));
			String line;
			StringBuffer response = new StringBuffer();
			System.out.println(response);
			while ((line = rd.readLine()) != null) {
				response.append(line);
				response.append('\r');
			}
			rd.close();
			insert_tag(response);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public int insert_tag(StringBuffer response) {
		System.out.println(response);
		Tag[] _tempList = gson.fromJson(response.toString(), Tag[].class);
		List<Tag> tag_list = Arrays.asList(_tempList);
		for(int i = 0 ; i < tag_list.size() ; i++) {
			tag_list.get(i).setTag_seq(i);
		}
		dao.insert_tag(tag_list);
		return 0;
	}

	public int update_tag() {
		List<Book> book_list = dao.show_all_book();
		List<String> tag_list = dao.select_all_tag();
		List<String> temp_tags = new ArrayList<String>();
		for (int i = 0 ; i < book_list.size() ; i++) {
			String _temp_content = book_list.get(i).getBook_content();
			System.out.println(book_list.get(i).getBook_title() + "의 태그 등록을 시작합니다.");
			temp_tags.add(book_list.get(i).getBook_title());
			for(int j = 0 ; j < tag_list.size(); i++) {
				if (_temp_content.contains(tag_list.get(i)))
					temp_tags.add(tag_list.get(i));
				System.out.println(tag_list.get(i));
			}
			
		}
		return 0;
	}
}
