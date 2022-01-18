// 메인의 자식
import React, { useEffect, useState } from 'react';

function Comments(props) {
  const uploadComment = ({ id, userName, content, isLiked }) => {
    return <div className="addAComment">{content}</div>;
  };
}

export default Comments;
