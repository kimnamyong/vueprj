<template>
  <div id="StudentListView">
    <h1>학생 목록</h1>
    <button type="button" v-on:click="goCreate">등록</button>
    <table>
      <tr>
        <td>id</td>
        <td>학번</td>
        <td>이름</td>
        <td>전화</td>
        <td>성별</td>
        <td>이메일</td>
        <td>학과</td>
      </tr>
      <tr
        v-for="student in students"
        v-bind:key="student.id"
        v-on:click="goEdit(student.id)"
      >
        <td>{{ student.id }}</td>
        <td>{{ student.studentNo }}</td>
        <td>{{ student.name }}</td>
        <td>{{ student.phone }}</td>
        <td>{{ student.sex }}</td>
        <td>{{ student.email }}</td>
        <td>{{ student.departmentId }}</td>
      </tr>
    </table>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#"
          v-on:click="goList('students?_page='+prev)"
          >Previous</a>
        </li>
        <li class="page-item"  v-for="page in pages" v-bind:key="page">
          <a class="page-link" href="#" 
          v-on:click="goList('students?_page='+page)">{{ page }}</a>
        </li>       
        <li class="page-item">
          <a class="page-link" href="#"
          v-on:click="goList('students?_page='+next)"
          >Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { loadStudents } from "../studentService";
import axios from "axios";
export default {
  name: "StudentListView",
  data() {
    return {
      students: [],
      pages:"",  
      next:""   ,
      prev:""
    };
  },
  async mounted() {
    let data= await loadStudents();
    console.log(data)
    this.students = data.data;
    this.pages=data.pages;
    this.next=data.next;   
  },
  methods: {
    goEdit(id) {
      this.$router.push("/edit/" + id);
    },
    goCreate() {
      this.$router.push("/create/");
    },
    goList(page) {
      axios.get(page).then((response)=>{
        this.students = response.data.data;
        this.next=response.data.next;
        this.prev=response.data.prev;
      });      
    },
    goNext() {
     // this.next= ++next;
    }
  },
};
</script>

<style scoped>
button {
  float: right;
  margin-top: -40px;
}
table {
  border-collapse: collapse;
  margin: 20px 0;
  width: 100%;
}
tr:nth-child(1) {
  background-color: #eee;
  text-align: center;
}
td {
  border: 1px solid gray;
  padding: 6px;
}
td:nth-child(1) {
  text-align: center;
  width: 30px;
}
tr:hover {
  background-color: #ffd;
  cursor: pointer;
}
</style>
