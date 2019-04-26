import json
from konlpy.tag import Komoran
from collections import Counter

def read_file():
    
    genre_list = [
	"100",	#소설
	"110",	#시/에세이
	"160",	#경제/경영
	"170",	#자기계발
	"120",	#인문
	"190",	#역사/문화
	"180",	#사회
	"250",	#과학/공학
	"210",	#예술/대중문화
	"200",	#종교
	"310",	#유아
	"320",	#어린이
	"130",	#가정/생활/요리
	"140",	#건강
	"150",	#취미/레져
	"270",	#여행/지도
	"290",	#국어/외국어
	"280",	#컴퓨터/IT
	"330",	#만화
	"290"	#잡지
	]
    
    #여기에 json파일의 book_content를 전부 모을 예정
    temp_data = ""
    for j in range(0, len(genre_list)):
        with open("crawled_data.json") as json_file:
            json_data = json.load(json_file)
            selected_genre = json_data[genre_list[j]] #장르 코드 입력
            print(selected_genre)
            for i in range(0, len(selected_genre)):
                temp_data = temp_data + selected_genre[i]["book_content"]

    return temp_data

def get_tags(text, ntags=20):
    komo = Komoran()
    nouns = komo.nouns(text)
    count = Counter(nouns)
    return_list = []  # 명사 빈도수 저장할 변수
    for n, c in count.most_common(ntags):
        temp = {'tag': n, 'tag_count': c}
        print(n)
        if len(n) == 1:
            continue
        return_list.append(temp)

    return return_list

def main():
    #출력 예정 단어 수
    cnt = 300
    text = read_file()
    tags = get_tags(text, cnt)
    result_json = json.dumps(tags, ensure_ascii=False)
    file = open("tags_data.json", "w")
    file.write(result_json)
    file.close()

if __name__ == '__main__':
    main()