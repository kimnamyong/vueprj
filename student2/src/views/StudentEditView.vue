<template>
  <div id="StudentEdit">
    <h1>학생 수정</h1>
    <div>
      <input type="text" v-model="student.studentNo" />
    </div>
    <div>
      <input type="text" v-model="student.name" />
    </div>
    <div>
      <input type="phone" v-model="student.phone" />
    </div>
    <div>
      <label><input type="radio" value="남" v-model="student.sex" /> 남자</label>
      <label><input type="radio" value="여" v-model="student.sex" /> 여자</label>
    </div>
    <div>
      <input type="email" v-model="student.email" />
    </div>
    <div>
      <select v-model="student.departmentId">
        <option value=1>소프</option>
        <option value=2>컴공</option>
        <option value=3>정통</option>
        <option value=4>글티</option>
      </select>
    </div>
    <div>
      <button type="button" v-on:click="save">저장</button>
      <button type="button" v-on:click="remove">삭제</button>
      <button type="button" v-on:click="goList">취소</button>
    </div>
  </div>
</template>

<script>
import { loadStudent, updateStudent, deleteStudent } from '../studentService';

export default {
  name: "StudentEditView",
  data() {
    return {
      student: { }
    }
  },
  async mounted() {
    const id = this.$route.params.id;
    this.student = await loadStudent(id);
  },
  methods: {
    async save() {
      await updateStudent(this.student);
      this.goList();
    },
    async remove() {
      if (confirm('삭제하시겠습니까?')) {
        await deleteStudent(this.student.id);
        this.goList();
      }
    },
    goList() {
     // console.log(this.$router);
      this.$router.push("/");
    }
  }
}
</script>

<style>
input[type=text], input[type=phone], input[type=email] { padding: 6px; width: 200px; }
select { padding: 6px; width: 150px }
div { margin-bottom: 15px; }
label { margin-right: 15px; }
button { padding: 5px 20px; margin-right: 10px; }
</style>
