from konlpy.tag import okt
from collections import Counter


def validator(text):
    invalidate_list = ['무엇', '가장', '누구', '최고', '통해', '우리']
    for l in invalidate_list:
        if text == l:
            return False

        return True


def get_tags(text, ntags=50):
    spliter = Okt()
    nouns = spliter.nouns(text)
    count = Counter(nouns)
    return_list = []  # 명사 빈도수 저장할 변수
    for n, c in count.most_common(ntags):
        if len(n) > 1 and validator(n):
            temp = {'tag': n, 'count': c}
            return_list.append(temp)
    # most_common 메소드는 정수를 입력받아 객체 안의 명사중 빈도수
    # 큰 명사부터 순서대로 입력받은 정수 갯수만큼 저장되어있는 객체 반환
    # 명사와 사용된 갯수를 return_list에 저장합니다.
    return return_list


def main():
    file = open("crawled_data.json", "rw")
    # 분석할 파일 Test
    noun_count = 2000
    # 최대 많은 빈도수 부터 20개 명사 추출
    output_file_name = "count.txt"
    # count.txt 에 저장
    open_text_file = open(text_file_name, 'r', -1, "utf-8")
    # 분석할 파일을 open
    text = open_text_file.read()  # 파일을 읽습니다.
    tags = get_tags(text, noun_count)  # get_tags 함수 실행
    open_text_file.close()  # 파일 close
    open_output_file = open(output_file_name, 'w', -1, "utf-8")
    # 결과로 쓰일 count.txt 열기
    for tag in tags:
        noun = tag['tag']
        count = tag['count']
        open_output_file.write('{} {}\n'.format(noun, count))
    # 결과 저장
    open_output_file.close()


if __name__ == '__main__':
    main()