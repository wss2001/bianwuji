<template>
  <div class="home">
    <div class="add">
      <el-button type="primary" @click="handleAdd">增加</el-button>
    </div>

    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="date"
          label="日期"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="address"
          label="地址">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
        :title="title"
        :visible.sync="dialogVisible"
        width="60%">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="日期" prop="date">
          <el-input v-model="form.date"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit('form')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      form: {
        date: '',
        name: '',
        address: '',
      },
      rules: {
        date: [
          { required: true, message: '请输入日期', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
        ],
        address: [
          { required: true, message: '请输入地址', trigger: 'blur' },
        ],
      },
      title:'添加',
      active:''
    }
  },
  mounted() {
    this.getSearch()
  },
  methods: {
    getSearch() {
      axios.get('/api/search')
    },
    handleAdd() {
    },
    handleSubmit(formName){
    },
    handleEdit(index,data){
    },
    handleDelete(index,data){
    },

  }
}
</script>
<style  scoped>
.add{
  overflow: hidden;
  margin-bottom: 24px

}
.add button{
  float: right;
}
</style>