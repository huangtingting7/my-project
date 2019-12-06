<template>
    <div>
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
            v-bind:default-expanded="false">
            <!-- <span class="icon" slot="addTreeNode">新增</span> -->
            <!-- <span class="icon" slot="addLeafNode">新增文件</span> -->
            <!-- <span class="icon" slot="editNode">编辑</span> -->
            <!-- <span class="icon" slot="delNode">删除</span> -->
          </vue-tree-list>
          <!-- <button @click="getNewTree">Get new tree</button> -->
      </div>
      <div>
        <tree
          :setting="setting"
          :nodes="nodes"
          @onClick="onClick"
          @onCheck="onCheck"
          @onCreated="handleCreated"
        />
      </div>
    </div>
</template>
<script>
const bigData = require("@/components/homepage/tree.json");
const simpleData = [
  { id: 1, pid: 0, name: "随意勾选 1", open: true },
  { id: 11, pid: 1, name: "随意勾选 1-1", open: true },
  { id: 111, pid: 11, name: "随意勾选 1-1-1" },
  { id: 112, pid: 11, name: "随意勾选 1-1-2" },
  { id: 12, pid: 1, name: "随意勾选 1-2", open: true },
  { id: 121, pid: 12, name: "随意勾选 1-2-1" },
  { id: 122, pid: 12, name: "随意勾选 1-2-2" },
  { id: 2, pid: 0, name: "随意勾选 2", checked: true, open: true },
  { id: 21, pid: 2, name: "随意勾选 2-1" },
  { id: 22, pid: 2, name: "随意勾选 2-2", open: true },
  { id: 221, pid: 22, name: "随意勾选 2-2-1", checked: true },
  { id: 222, pid: 22, name: "随意勾选 2-2-2" },
  { id: 23, pid: 2, name: "随意勾选 2-3" }
];
const dataQueue = [bigData.data, simpleData];
  import { VueTreeList, Tree, TreeNode } from 'vue-tree-list'
  import tree from "vue-giant-tree";
  export default {
    components: {
      VueTreeList,
      tree
    },
    data () {
      return {
        showIndex: 0,
        ztreeObj: null,
        setting: {
          check: {
            enable: false
          },
          data: {
            simpleData: {
              enable: true,
              pIdKey: "pid"
            }
          },
          view: {
            showIcon: true,
            showLine: true,
            txtSelectedEnable: true,
            addHoverDom: this.addHoverDom,
            removeHoverDom: this.removeHoverDom,
          }
        },
        treeParam: {},
        newTree: {},
        data: new Tree([
          {
            name: '按客户分类',
            id: 1,
            pid: 0,
            dragDisabled: false,
            addLeafNodeDisabled: false, // 是否显示editNode按钮
            children: [
              {
                name: '重要客户',
                id: 2,
                isLeaf: false,
                addLeafNodeDisabled: false,
                pid: 1,
                children: [
                  {
                    name: '客户1',
                    id: 2,
                    isLeaf: false,
                    addLeafNodeDisabled: false,
                    pid: 1,
                    children: [
                      {
                        name: '南京工厂',
                        id: 2,
                        isLeaf: false,
                        addLeafNodeDisabled: false,
                        pid: 1,
                        children: [
                          {
                            name: '车间1',
                            id: 2,
                            isLeaf: false,
                            addLeafNodeDisabled: false,
                            pid: 1,
                            children: [
                              {
                                name: '生产线1',
                                id: 2,
                                isLeaf: false,
                                addLeafNodeDisabled: false,
                                pid: 1,
                                children: [
                                  {
                                    name: '机床1',
                                    id: 2,
                                    isLeaf: false,
                                    addLeafNodeDisabled: false,
                                    pid: 1
                                  },
                                  {
                                    name: '机床2',
                                    id: 3,
                                    isLeaf: false,
                                    addLeafNodeDisabled: false,
                                    pid: 4
                                  },
                                  {
                                    name: '机床3',
                                    id: 2,
                                    isLeaf: false,
                                    addLeafNodeDisabled: false,
                                    pid: 1
                                  },
                                  {
                                    name: '机床4',
                                    id: 3,
                                    isLeaf: false,
                                    addLeafNodeDisabled: false,
                                    pid: 4
                                  }
                                ]
                              },
                              {
                                name: '生产线2',
                                id: 3,
                                isLeaf: false,
                                addLeafNodeDisabled: false,
                                pid: 4
                              }
                            ]
                          },
                          {
                            name: '车间2',
                            id: 3,
                            isLeaf: false,
                            addLeafNodeDisabled: false,
                            pid: 4
                          }
                        ]
                      },
                      {
                        name: '北京工厂',
                        id: 3,
                        isLeaf: false,
                        addLeafNodeDisabled: false,
                        pid: 4
                      }
                    ]
                  },
                  {
                    name: '客户2',
                    id: 3,
                    isLeaf: false,
                    addLeafNodeDisabled: false,
                    pid: 4
                  }
                ]
              },
              {
                name: '一般客户',
                id: 3,
                isLeaf: false,
                addLeafNodeDisabled: false,
                pid: 4
              }
            ]
          },
          {
            name: '按区域分类',
            id: 3,
            pid: 0,
            dragDisabled: false,
            addLeafNodeDisabled: false,
            children: [
              {
                name: '西北办事处',
                id: 3,
                isLeaf: false,
                addLeafNodeDisabled: false,
                pid: 4,
                children: [
                  {
                    name: '四川1',
                    id: 3,
                    isLeaf: false,
                    addLeafNodeDisabled: false,
                    pid: 4,
                    children: [
                      {
                        name: '客户1',
                        id: 3,
                        isLeaf: false,
                        addLeafNodeDisabled: false,
                        pid: 4,
                        children: [
                          {
                            name: '某某工厂1',
                            id: 3,
                            isLeaf: false,
                            addLeafNodeDisabled: false,
                            pid: 4,
                            children: [
                              {
                                name: '生成线1',
                                id: 3,
                                isLeaf: false,
                                addLeafNodeDisabled: false,
                                pid: 4,
                                children: [
                                  {
                                    name: '机床1',
                                    id: 3,
                                    isLeaf: false,
                                    addLeafNodeDisabled: false,
                                    pid: 4,
                                    
                                  },
                                  {
                                    name: '机床2',
                                    id: 2,
                                    isLeaf: false,
                                    addLeafNodeDisabled: false,
                                    pid: 1
                                  },
                                  {
                                    name: '机床3',
                                    id: 3,
                                    isLeaf: false,
                                    addLeafNodeDisabled: false,
                                    pid: 4
                                  }
                                ]
                              },
                              {
                                name: '生成线2',
                                id: 2,
                                isLeaf: false,
                                addLeafNodeDisabled: false,
                                pid: 1
                              },
                              {
                                name: '生成线13',
                                id: 3,
                                isLeaf: false,
                                addLeafNodeDisabled: false,
                                pid: 4
                              }
                            ]
                          },
                          {
                            name: '某某工厂2',
                            id: 2,
                            isLeaf: false,
                            addLeafNodeDisabled: false,
                            pid: 1
                          },
                          {
                            name: '某某工厂3',
                            id: 3,
                            isLeaf: false,
                            addLeafNodeDisabled: false,
                            pid: 4
                          }
                        ]
                      },
                      {
                        name: '客户2',
                        id: 2,
                        isLeaf: false,
                        addLeafNodeDisabled: false,
                        pid: 1
                      },
                      {
                        name: '客户3',
                        id: 3,
                        isLeaf: false,
                        addLeafNodeDisabled: false,
                        pid: 4
                      }
                    ]
                  },
                  {
                    name: '湖南',
                    id: 2,
                    isLeaf: false,
                    addLeafNodeDisabled: false,
                    pid: 1
                  },
                  {
                    name: '重新',
                    id: 3,
                    isLeaf: false,
                    addLeafNodeDisabled: false,
                    pid: 4
                  }
                ]
              },
              {
                name: '华北办事处',
                id: 2,
                isLeaf: false,
                addLeafNodeDisabled: false,
                pid: 1
              },
              {
                name: '东北办事处',
                id: 3,
                isLeaf: false,
                addLeafNodeDisabled: false,
                pid: 4
              }
            ]
          }
        ])
      }
    },
    computed: {
      nodes: function() {
        return dataQueue[this.showIndex];
      }
    },
    methods: {
      // 鼠标移入展示按钮
      addHoverDom(treeid, treeNode) {
        const item = document.getElementById(`${treeNode.tId}_a`);
        // 删除按钮
        if(item && !item.querySelector('.tree_extra_btn')){
          const btn = document.createElement('sapn');
          btn.id = `${treeid}_${treeNode.id}_btn`;
          btn.classList.add('tree_extra_btn');
          btn.innerText = '删除';
          btn.addEventListener('click', (e) => {
            e.stopPropagation()
            this.clickRemove(treeNode)
          })
          item.appendChild(btn);
        }
        // 添加按钮
        if(item && !item.querySelector('.tree_extra_btn2')){
          const btn2 = document.createElement('sapn');
          btn2.id = `${treeid}_${treeNode.id}_btn2`;
          btn2.classList.add('tree_extra_btn2');
          btn2.innerText = '添加';
          btn2.addEventListener('click', (e) => {
            e.stopPropagation()
            this.addChild(treeNode)
          })
          item.appendChild(btn2);
        }
        // 编辑按钮
        if(item && !item.querySelector('.tree_extra_btn3')){
          const btn3 = document.createElement('sapn');
          btn3.id = `${treeid}_${treeNode.id}_btn3`;
          btn3.classList.add('tree_extra_btn3');
          btn3.innerText = '编辑';
          btn3.addEventListener('click', (e) => {
            e.stopPropagation()
            this.editChild(treeNode)
          })
          item.appendChild(btn3);
        }
      },
      // 鼠标移出隐藏按钮
      removeHoverDom(treeid, treeNode) {
        const item = document.getElementById(`${treeNode.tId}_a`);
        if(item){
          const btn = item.querySelector('.tree_extra_btn');
          if(btn){
            item.removeChild(btn)
          }
        }
        if(item){
          const btn2 = item.querySelector('.tree_extra_btn2');
          if(btn2){
            item.removeChild(btn2)
          }
        }
        if(item){
          const btn3 = item.querySelector('.tree_extra_btn3');
          if(btn3){
            item.removeChild(btn3)
          }
        }
      },
      // 编辑
      editChild(treeNode) {
        console.log('editChild', treeNode)
      },
      // 添加
      addChild(treeNode) {
        console.log('addChild', treeNode)
      },
      clickRemove(treeNode) {
        console.log('remove', treeNode)
        this.ztreeObj && this.ztreeObj.removeNode(treeNode)
      },
      onClick: function(evt, treeId, treeNode) {
        // 点击事件
        console.log(evt.type, treeNode);
      },
      onCheck: function(evt, treeId, treeNode) {
        // 选中事件
        console.log(evt.type, treeNode);
      },
      handleCreated: function(ztreeObj) {
        this.ztreeObj = ztreeObj;
        // onCreated 中操作ztreeObj对象展开第一个节点
        ztreeObj.expandNode(ztreeObj.getNodes()[0], true);
      },
      update: function() {
        // 更新示例数据
        this.showIndex = this.showIndex === 0 ? 1 : 0;
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