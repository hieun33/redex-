// 리듀서 = 전역공간에 초기 데이터를 전달해주거나 기존 데이터를 변경해주는 역할 (변경자)


import { combineReducers } from 'redux';
import * as types from './actionType';


const memberReducer = (state = { members: [] }, action) => {
	switch (action.type) {
		case types.MEMBERS.start:
			return state;

		case types.MEMBERS.success:
			return { ...state, members: action.payload }

		case types.MEMBERS.fail:
			return { ...state, members: action.payload }

		default:
			return state;
	}
}

const youtubeReducer = (state = { youtube: [] }, action) => {
	switch (action.type) {
		 // 요청 시작
		 case types.YOUTUBE.start : 
		 return state;
   
	   // 요청 성공
	   case types.YOUTUBE.success :
		 return {...state, youtube: action.payload}
   
	   // 요청 실패
	   case types.YOUTUBE.fail :
		 return {...state, youtube: action.payload}

		default:
			return state;
	}
}

const flickrReducer = (state = { flickr: [] }, action) => {
	switch (action.type) {
		case types.FLICKR.start:
			return state;

		case types.FLICKR.success:
			return { ...state, flickr: action.payload }

		case types.FLICKR.fail:
			return { ...state, flickr: action.payload }

		default:
			return state;
	}
}


const reducers = combineReducers({ memberReducer, youtubeReducer, flickrReducer });

export default reducers;