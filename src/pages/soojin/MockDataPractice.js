// import React, { useState } from 'react';
// import { useEffect } from 'react/cjs/react.development';
// import UploadComment from './Main/Feed';

// function CommentList() {
//   const [commentList, setCommentList] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3000/data/soojin/commentData.json', {
//       method: 'GET',
//     })
//       .then(res => res.json())
//       .then(data => {
//         setCommentList(data);
//       });
//   }, []);

//   return (
//     <div className="commentList">
//       <h1>MockData Practice Page</h1>
//       <ul>
//         {commentList.map(comment => {
//           return (
//             <UploadComment
//               key={comment.id}
//               name={comment.userName}
//               comment={comment.content}
//             />
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default CommentList;
