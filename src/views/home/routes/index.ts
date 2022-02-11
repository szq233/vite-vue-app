/** @format */
// import { RouteConfig } from 'vue-router'; ts类型
// import CommonCardContent from '@/layouts/commonCardContent.vue'; 模板

export default [
  {
    path: '/',
    component: () => import('../container/index.vue')
    // children: [
    //   {
    //     path: 'list',
    //     name: 'teacher',
    //     component: () => import('../containers/list.vue'),
    //   },
    //   {
    //     path: 'add',
    //     name: 'teacher-add',
    //     component: () => import('../containers/listItemAdd.vue'),
    //   },
    //   {
    //     path: ':teacherId/subjects',
    //     name: 'teacher-subject-detail',
    //     component: () => import('../containers/subjectDetail.vue')
    //   }
    // ],
  }
]