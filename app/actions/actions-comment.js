/**
 * @flow
 * Includes actions for comments and backtracking.
 */
'use strict';
import Types from './types-comments';

export function submitComment(
  nickname: string,
  email: string,
  content: string,
) {
  return {
    type: Types.SUBMIT_COMMENT,
    nickname,
    email,
    content,
  };
}

export function getComments(postId: number) {
  return {
    type: Types.GET_COMMENTS,
    postId,
  };
}

export function submittedComment(comment) {
  return {
    type: Types.SUBMITTED_COMMENT,
    comment,
  };
}
