import { atom } from "recoil";
// 북마크 전환 state
export const bookmarkState = atom<boolean>({
  key: "bookmarkState",
  default: true,
});
// 태크 전환 state
export const tagState = atom<String>({
  key: "tagState",
  default: "",
});
// 태그 전환 state
export const feedViewState = atom<boolean>({
  key: "feedViewState",
  default: true,
});
//  피드를 저장하는 state
export const feedState = atom<any>({
  key: "feedState",
  default: [],
});
//  태그를 저장하는 state
export const tagListState = atom<any>({
  key: "tagListState",
  default: [],
});
// 로그인 모달창을 띄우는 state
export const logModalVisble = atom<boolean>({
  key: "logModalVisble",
  default: false,
});
// 로그인 체크하는 state
export const sighUpCheck = atom<boolean>({
  key: "sighUpCheck",
  default: false,
});
// 유저 정보를 저장하는 state
export const userInfo = atom<any>({
  key: "userInfo",
  default: {
    nickname: "",
    img: "",
    groupName: "",
    groupId: "",
  },
});
// 유저가 그룹이 가입되어있는지 확인하는 state
export const groupJoinState = atom<boolean>({
  key: "groupJoinState",
  default: false,
});

export const groupAddState = atom<boolean>({
  key: "groupAddState",
  default: false,
});
export const groupInviteState = atom<boolean>({
  key: "groupInviteState",
  default: false,
});
// 그룹 모달창을 띄우는 state
export const groupModalVisble = atom<boolean>({
  key: "groupModalVisble",
  default: false,
});
// 태그 편집 모달창을 띄우는 state
export const tagModalVisble = atom<boolean>({
  key: "tagModalVisble",
  default: false,
});

export const feedTagList = atom<any>({
  key: "feedTagList",
  default: [],
});
export const groupTagList = atom<any>({
  key: "groupTagList",
  default: [],
});

export const mainSectionState = atom<number>({
  key: "mainSectionState",
  default: 0,
});
export const tagFeedList = atom<any>({
  key: "TagFeedList",
  default: [],
});
