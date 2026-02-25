import { atom } from 'recoil';

export const boardState = atom({
  key: 'boardState',
  default: [
    {
      id: 1,
      title: '작업 목록 1',
      desc: '해야 할 작업 목록입니다. 우선순위를 정하고 진행하세요.',
      type: 'todo',
      created_at: '2023-10-01',
    },
    {
      id: 2,
      title: '작업 중 1',
      desc: '현재 진행 중인 작업입니다. 작업 상태를 주기적으로 업데이트하세요.',
      type: 'inprogress',
      created_at: '2023-10-01',
    },
    {
      id: 3,
      title: '완료 1',
      desc: '완료된 작업 목록입니다. 작업 결과를 검토하고 공유하세요.',
      type: 'done',
      created_at: '2023-10-01',
    },
  ],
});