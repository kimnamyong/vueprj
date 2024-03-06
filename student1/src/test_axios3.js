import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000';

export async function test1() {
  // id가 1인 학생 조회 요청
  const response0 = await axios.get('/students/1');
  console.log(response0)
  const student0 = response0.data;
  console.log('test1', student0);

  // student0 객체를 복제하여 student1 객체를 만든다
  // name 속성값만 '홍길동'으로 수정한다
  const student1 = {...student0, name: '홍길동'};

  // id가 1인 학생을 student1 객체의 내용으로 수정 요청.
  // 그 학생이 이름이 '홍길동'으로 수정된다
  await axios.put('/students/1', student1);

  // id가 1인 학생 다시 조회
  const response2 = await axios.get('/students/1');
  console.log('test1', response2.data);

  // id가 1인 학생을 studen01 객체의 내용으로 수정 요청.
  // 그 학생이 원래 이름으로 수정된다
  await axios.put('/students/1', student0);

  // id가 1인 학생 다시 조회
  const response3 = await axios.get('/students/1');
  console.log('test1', response3.data);
}

export async function test2() {
  const student1 = { id: "200", studentNo: '201014099', name: '임꺽정',
                     phone: '111', email: 'h@a.c', sex: '남', departmentId: 1 };

  // student1 객체를 새로 등록 요청
  await axios.post('/students', student1);

  // 학생 목록 조회
  const response1 = await axios.get('/students');

  // 학생 목록에서 마지막 항목 출력
  const students1 = response1.data;
  const length = students1.length;
  console.log('test2', length, students1[length-1]);

  // 학생 목록에서 마지막 항목 삭제 요청
  // await axios.delete('/students/' + students1[length-1].id);
  // const response2 = await axios.get('/students');
  // console.log('test2', response2.data.length);
}
