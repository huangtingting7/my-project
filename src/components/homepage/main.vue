<template>
    <div class="layout">
        <Menu mode="horizontal" theme="dark" active-key="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <Menu-item key="1">
                    <Icon type="ios-navigate"></Icon>
                    导航一
                </Menu-item>
                <Menu-item key="2">
                    <Icon type="ios-keypad"></Icon>
                    导航二
                </Menu-item>
                <Menu-item key="3">
                    <Icon type="ios-analytics"></Icon>
                    导航三
                </Menu-item>
                <Menu-item key="4">
                    <Icon type="ios-paper"></Icon>
                    导航四
                </Menu-item>
            </div>
        </Menu>
        <div class="layout-content">
            <Row>
                <i-col span="5">
                  <div>
                    <!-- 相关api参考 https://www.npmjs.com/package/vue-tree-list -->
                    <!-- 演示地址 http://paradeto.com/vue-tree-list/ -->
                    <button @click="addNode">新增一级类目</button>
                    <vue-tree-list
                      @click="onClick"
                      @change-name="onChangeName"
                      @delete-node="onDel"
                      @add-node="onAddNode"
                      :model="data"
                      default-tree-node-name="new node"
                      default-leaf-node-name="new leaf"
                      v-bind:default-expanded="true">
                      <!-- <span class="icon" slot="addTreeNode">新增</span> -->
                      <!-- <span class="icon" slot="addLeafNode">新增文件</span> -->
                      <!-- <span class="icon" slot="editNode">编辑</span> -->
                      <!-- <span class="icon" slot="delNode">删除</span> -->
                    </vue-tree-list>
                    <!-- <button @click="getNewTree">Get new tree</button> -->
                </div>
                </i-col>
                <i-col span="19">
                    <div class="layout-content-main">内容区域{{ treeParam }}</div>
                </i-col>
            </Row>
        </div>
        <div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>
    </div>
</template>
<script>
  import { VueTreeList, Tree, TreeNode } from 'vue-tree-list'
  export default {
    components: {
      VueTreeList
    },
    data () {
      return {
        treeParam: {},
        newTree: {},
        data: new Tree([
          {
            name: '按客户分类',
            id: 1,
            pid: 0,
            dragDisabled: true,
            addLeafNodeDisabled: true, // 是否显示editNode按钮
            children: [
              {
                name: '重要客户',
                id: 2,
                isLeaf: false,
                addLeafNodeDisabled: true,
                pid: 1,
                children: [
                  {
                    name: '客户1',
                    id: 2,
                    isLeaf: false,
                    addLeafNodeDisabled: true,
                    pid: 1,
                    children: [
                      {
                        name: '南京工厂',
                        id: 2,
                        isLeaf: false,
                        addLeafNodeDisabled: true,
                        pid: 1,
                        children: [
                          {
                            name: '车间1',
                            id: 2,
                            isLeaf: false,
                            addLeafNodeDisabled: true,
                            pid: 1,
                            children: [
                              {
                                name: '生产线1',
                                id: 2,
                                isLeaf: false,
                                addLeafNodeDisabled: true,
                                pid: 1,
                                children: [
                                  {
                                    name: '机床1',
                                    id: 2,
                                    isLeaf: false,
                                    addLeafNodeDisabled: true,
                                    pid: 1
                                  },
                                  {
                                    name: '机床2',
                                    id: 3,
                                    isLeaf: false,
                                    addLeafNodeDisabled: true,
                                    pid: 4
                                  },
                                  {
                                    name: '机床3',
                                    id: 2,
                                    isLeaf: false,
                                    addLeafNodeDisabled: true,
                                    pid: 1
                                  },
                                  {
                                    name: '机床4',
                                    id: 3,
                                    isLeaf: false,
                                    addLeafNodeDisabled: true,
                                    pid: 4
                                  }
                                ]
                              },
                              {
                                name: '生产线2',
                                id: 3,
                                isLeaf: false,
                                addLeafNodeDisabled: true,
                                pid: 4
                              }
                            ]
                          },
                          {
                            name: '车间2',
                            id: 3,
                            isLeaf: false,
                            addLeafNodeDisabled: true,
                            pid: 4
                          }
                        ]
                      },
                      {
                        name: '北京工厂',
                        id: 3,
                        isLeaf: false,
                        addLeafNodeDisabled: true,
                        pid: 4
                      }
                    ]
                  },
                  {
                    name: '客户2',
                    id: 3,
                    isLeaf: false,
                    addLeafNodeDisabled: true,
                    pid: 4
                  }
                ]
              },
              {
                name: '一般客户',
                id: 3,
                isLeaf: false,
                addLeafNodeDisabled: true,
                pid: 4
              }
            ]
          },
          {
            name: '按区域分类',
            id: 3,
            pid: 0,
            dragDisabled: true,
            addLeafNodeDisabled: true,
            children: [
              {
                name: '西北办事处',
                id: 3,
                isLeaf: false,
                addLeafNodeDisabled: true,
                pid: 4,
                children: [
                  {
                    name: '四川1',
                    id: 3,
                    isLeaf: false,
                    addLeafNodeDisabled: true,
                    pid: 4,
                    children: [
                      {
                        name: '客户1',
                        id: 3,
                        isLeaf: false,
                        addLeafNodeDisabled: true,
                        pid: 4,
                        children: [
                          {
                            name: '某某工厂1',
                            id: 3,
                            isLeaf: false,
                            addLeafNodeDisabled: true,
                            pid: 4,
                            children: [
                              {
                                name: '生成线1',
                                id: 3,
                                isLeaf: false,
                                addLeafNodeDisabled: true,
                                pid: 4,
                                children: [
                                  {
                                    name: '机床1',
                                    id: 3,
                                    isLeaf: false,
                                    addLeafNodeDisabled: true,
                                    pid: 4,
                                    
                                  },
                                  {
                                    name: '机床2',
                                    id: 2,
                                    isLeaf: false,
                                    addLeafNodeDisabled: true,
                                    pid: 1
                                  },
                                  {
                                    name: '机床3',
                                    id: 3,
                                    isLeaf: false,
                                    addLeafNodeDisabled: true,
                                    pid: 4
                                  }
                                ]
                              },
                              {
                                name: '生成线2',
                                id: 2,
                                isLeaf: false,
                                addLeafNodeDisabled: true,
                                pid: 1
                              },
                              {
                                name: '生成线13',
                                id: 3,
                                isLeaf: false,
                                addLeafNodeDisabled: true,
                                pid: 4
                              }
                            ]
                          },
                          {
                            name: '某某工厂2',
                            id: 2,
                            isLeaf: false,
                            addLeafNodeDisabled: true,
                            pid: 1
                          },
                          {
                            name: '某某工厂3',
                            id: 3,
                            isLeaf: false,
                            addLeafNodeDisabled: true,
                            pid: 4
                          }
                        ]
                      },
                      {
                        name: '客户2',
                        id: 2,
                        isLeaf: false,
                        addLeafNodeDisabled: true,
                        pid: 1
                      },
                      {
                        name: '客户3',
                        id: 3,
                        isLeaf: false,
                        addLeafNodeDisabled: true,
                        pid: 4
                      }
                    ]
                  },
                  {
                    name: '湖南',
                    id: 2,
                    isLeaf: false,
                    addLeafNodeDisabled: true,
                    pid: 1
                  },
                  {
                    name: '重新',
                    id: 3,
                    isLeaf: false,
                    addLeafNodeDisabled: true,
                    pid: 4
                  }
                ]
              },
              {
                name: '华北办事处',
                id: 2,
                isLeaf: false,
                addLeafNodeDisabled: true,
                pid: 1
              },
              {
                name: '东北办事处',
                id: 3,
                isLeaf: false,
                addLeafNodeDisabled: true,
                pid: 4
              }
            ]
          }
        ])
      }
    },
    methods: {
      // 删除节点	树节点
      onDel (node) {
        console.log(node, 'onDel')
        node.remove()
      },
      // 更换名字	{'id'，'oldName'，'newName'}
      onChangeName (params) {
        console.log(params, 'onChangeName')
      },
      // 添加节点	树节点
      onAddNode (params) {
        console.log(params, 'onAddNode')
      },
      // tree节点点击事件
      onClick (params) {
        console.log(params, 'onClick')
        this.treeParam = params
      },
 
      addNode () {
        var node = new TreeNode({ name: 'new node', isLeaf: false })
        if (!this.data.children) this.data.children = []
        this.data.addChildren(node)
      },
 
      getNewTree () {
        var vm = this
        function _dfs (oldNode) {
          var newNode = {}
 
          for (var k in oldNode) {
            if (k !== 'children' && k !== 'parent') {
              newNode[k] = oldNode[k]
            }
          }
 
          if (oldNode.children && oldNode.children.length > 0) {
            newNode.children = []
            for (var i = 0, len = oldNode.children.length; i < len; i++) {
              newNode.children.push(_dfs(oldNode.children[i]))
            }
          }
          return newNode
        }
 
        vm.newTree = _dfs(vm.data)
      },
      
    }
  }
</script>
 
<style lang="less" rel="stylesheet/less" scoped>
  .icon {
    &:hover {
      cursor: pointer;
    }
  }
</style>
<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
</style>