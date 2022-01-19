// import React, { useState } from 'react';
// import './MainMooseon.scss';

// function Comments() {
//   const [comment, setComment] = useState('');
//   return (
//     <div>
//       <form id="comment">
//         <input
//           onChange={e => {
//             setComment(e.target.value);
//             console.log('onchange');
//             console.log(comment);
//           }}
//           type="text"
//           id="inputcomment"
//           placeholder="댓글 달기..."
//         />

//         <button
//           onClick={e => {
//             e.preventDefault;
//             console.log('btn');
//             console.log(comment);
//             let newComment = [];
//             console.log(newComment);
//             newComment.push(comment);
//             setComment(newComment);
//             console.log('btn end');
//           }}
//           id="submit"
//         >
//           게시
//         </button>
//       </form>
//       <div className="commentAdd">
//         <p>
//           <span>더보기</span>
//         </p>
//         <ul id="comment-wrapper" />
//       </div>
//     </div>
//   );
// }

// export default Comments;
