import React from 'react';

import { IComment } from '../../utils/Typescript';

import AvatarComment from './AvatarComment';
import CommentList from './CommentList';

interface IProps {
  comment: IComment;
}

const Comments: React.FC<IProps> = ({ comment }) => {
  return (
    <div className="my-3 d-flex">
      <AvatarComment user={comment.user} />

      <CommentList comment={comment} />
    </div>
  );
};

export default Comments;
