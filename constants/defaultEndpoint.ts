export const BASE_URL = '.....';

// Public routes
export const REGISTER = '/auth/register';
export const LOGIN = '/auth/login';
export const GET_RECENT_POSTS = '/posts/all';
export const GET_POST_DETAILS = '/post';
export const SEARCH_POSTS = '/search/posts';
export const SEARCH_TAGS = '/search/tags';
export const SEARCH_CHARACTERS = '/search/characters';
export const SEARCH_GENRES = '/search/genres';
export const SEARCH_CATEGORIES = '/search/categories';
export const GET_TAGS = '/tags/all';
export const GET_CATEGORIES = '/categories/all';
export const GET_GENRES = '/genres/all';

// Private routes
export const GET_USER_INFO = '/user/info';
export const GET_USER_LIKED_POSTS = '/user/liked';
export const CREATE_POST = '/posts/create';
export const UPDATE_POST = '/posts/update';
export const DELETE_POST = '/posts/delete';
export const LIKE_POST = '/posts/like';
export const UNLIKE_POST = '/posts/unlike';
export const ADD_COMMENT = '/posts/comment/add';
export const DELETE_COMMENT = '/posts/comment/delete';

// Extra endpoints for better functionality
export const GET_USER_POSTS = '/user/posts';
export const GET_USER_COMMENTS = '/user/comments';
export const UPDATE_USER_PROFILE = '/user/update';
export const FOLLOW_USER = '/user/follow';
export const UNFOLLOW_USER = '/user/unfollow';
export const GET_FOLLOWERS = '/user/followers';
export const GET_FOLLOWING = '/user/following';
