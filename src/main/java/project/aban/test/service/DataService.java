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
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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
	
	public void data_handler() {
		data_init();
		insert_books();
		insert_tag();
		insert_taglist();
		System.out.println("데이터 업데이트가 종료되었습니다.");
	}
	
	public void data_init() {
		System.out.println("Tag, taglist 데이터 초기화 작업을 시작합니다.");
		System.out.println(dao.delete_taglist() + "개의 tag relation이 삭제되었습니다.");
		System.out.println(dao.delete_tag() + "개의 tag가 삭제되었습니다.");
	}
	
	
	public void insert_books()  {
		try {
			System.out.println("Book 데이터를 로딩합니다.");
			InputStream jis = jsonResource.getInputStream();
			BufferedReader rd = new BufferedReader(new InputStreamReader(jis, StandardCharsets.UTF_8));
			String line;
			StringBuffer response = new StringBuffer();
			while ((line = rd.readLine()) != null) {
				response.append(line);
				response.append('\r');
			}
			rd.close();
			System.out.println(insert_books(response) + "권의 책이 입력되었습니다.");
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	public int insert_books(StringBuffer response) {
		//temp_list for validation
		ArrayList<String> temp_list = new ArrayList<>();
		ArrayList<Book> buffer_data = new ArrayList<>();
		//장르의 리스트 설정
		ArrayList<String> genres_list = new ArrayList<>(
		Arrays.asList(
				"100",	
				"110",	
				"160",	
				"170",	
				"120",	
				"190",	
				"180",	
				"250",	
				"210",	
				"200",	
				"310",	
				"320",	
				"130",	
				"140",	
				"150",	
				"270",	
				"290",	
				"280",	
				"330",	
				"290"));
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
		System.out.println("Book 데이터를 DB에 입력합니다.");
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
			System.out.println("Tag data를 로딩합니다.");
			InputStream jis = tagResource.getInputStream();
			BufferedReader rd = new BufferedReader(new InputStreamReader(jis, StandardCharsets.UTF_8));
			String line;
			StringBuffer response = new StringBuffer();
			while ((line = rd.readLine()) != null) {
				response.append(line);
				response.append('\r');
			}
			rd.close();
			System.out.println("DB에 Tag 등록을 시작합니다.");
			System.out.println(insert_tag(response) + "개의 Tag가 입력되었습니다.");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public int insert_tag(StringBuffer response) {
		Tag[] _tempList = gson.fromJson(response.toString(), Tag[].class);
		List<Tag> tag_list = Arrays.asList(_tempList);
		for(int i = 0 ; i < tag_list.size() ; i++) {
			tag_list.get(i).setTag_seq(i);
		}
		int result = dao.insert_tag(tag_list);
		return result;
	}

	public int insert_taglist() {
		System.out.println("테이블 Book과 Tag의 Realtion 설정을 시작합니다.");
		List<Book> book_list = dao.show_all_book();
		List<String> tag_list = dao.select_all_tag();
		List<Map<String, String>> temp_tags = new ArrayList<Map<String, String>>();
		//we don't need a tag_counter after the development ended
		//int tag_counter;
		for (int i = 0 ; i < book_list.size() ; i++) {
			//tag_counter = 0;
			String _temp_content = book_list.get(i).getBook_content();
			
			//가끔 book_content가 null인 객체도 있음..
			if(_temp_content != null) {
				for(int j = 0 ; j < tag_list.size(); j++) {
					Map<String, String> temp_vo = new HashMap<>();
					if (_temp_content.contains(tag_list.get(j))) {
						temp_vo.put("book_num", book_list.get(i).getBook_num());
						temp_vo.put("tag", tag_list.get(j));
						temp_tags.add(temp_vo);
					}
				}
			}
		}
		int buffer_size = 3000;
		int buffer_max = temp_tags.size()/buffer_size;
		int result = 0;
		for (int i = 0 ; i < buffer_max ; i++) {
			if (i != buffer_max-1) {
				int inserted_qnt = dao.insert_taglist(temp_tags.subList((int)Math.pow(2, i-1)*buffer_size, ((int)Math.pow(2, i)*buffer_size)-1));
				System.out.println(inserted_qnt + "개의 Relation이 추가되었습니다.");
				result += inserted_qnt;
			} else {
				int inserted_qnt = dao.insert_taglist(temp_tags.subList((int)Math.pow(2, i-1)*buffer_size, temp_tags.size()));
				System.out.println(inserted_qnt + "개의 Relation이 추가되었습니다.");
				result += inserted_qnt;
			}
		}
		return result;
	}

	public ArrayList<Book> request_recommend_list(String gn) {
		ArrayList<Book> log_list = dao.request_recommend_list(gn);
		// Group Number 기반 log_list 검색 -> 이를 바탕으로 log_list에 부족한 부분 추천해서 return
		for(int i = 0 ; i < log_list.size(); i++) {
			System.out.println(log_list.get(i));
		}
		return null;
	}
}
