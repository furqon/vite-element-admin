<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="20" class="chats-container">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          xxx
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          xxx
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          xxx
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .chats-container {
    .chart-wrapper {
      border-radius: 5px;
      background: #fff;
      padding: 20px;
      box-sizing: border-box;
      margin-bottom: 20px;
      box-shadow: 0 -3px 31px 0 rgb(0 0 0 / 5%), 0 6px 20px 0 rgb(0 0 0 / 2%);
      &:hover {
        transition: all 0.3s;
        transform: translateY(-6px);
      }
    }
  }

  .table-list {
    height: 476px;
    .el-col {
      padding-right: 8px;
      margin-bottom: 30px;
    }
  }

  .user-info {
    height: 560px;
    margin: 20px 0;
  }
}
</style>
