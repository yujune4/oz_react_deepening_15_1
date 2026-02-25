import React from 'react';
import { useSetRecoilState } from 'recoil';
import { boardState } from '../recoil/atom';

const ControllerDetailModal = ({ onClose }) => {
  // 🔥 전역 상태 업데이트 함수
  const setBoardState = useSetRecoilState(boardState);

  const handleForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      id: Date.now(),
      type: formData.get('type'),
      title: formData.get('title'),
      desc: formData.get('desc'),
      created_at: new Date().toISOString().split('T')[0],
    };

    // 🔥 전역 상태에 추가
    setBoardState((prev) => [...prev, data]);

    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-black/70 bg-opacity-50 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-lg p-6 w-[600px]"
      >
        <h2 className="text-xl font-semibold mb-4 whitespace-break-spaces">
          업무 추가
        </h2>

        <form onSubmit={handleForm} className="flex flex-col gap-2">
          <div>업무 분류</div>
          <select
            className="border border-gray-300 rounded-md p-2"
            name="type"
          >
            <option value="todo">할 일</option>
            <option value="inprogress">진행 중</option>
            <option value="done">완료</option>
          </select>

          <div>업무 제목</div>
          <input
            type="text"
            name="title"
            placeholder="업무 제목을 입력하세요."
            className="border border-gray-300 rounded-md p-2"
            required
          />

          <div>업무 내용</div>
          <textarea
            name="desc"
            placeholder="업무 내용을 입력하세요."
            className="border border-gray-300 rounded-md p-2 resize-none"
            required
          ></textarea>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="cursor-pointer mt-4 bg-black text-white px-4 py-2 rounded hover:bg-stone-600"
            >
              추가
            </button>

            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              닫기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ControllerDetailModal;
