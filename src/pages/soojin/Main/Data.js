const UploadComment = ({ name, comment, idx }) => {
  return (
    <div className="commentWrapper">
      <div className="yourId">{name}</div>
      <div className="yourComment">{comment}</div>
      <div className="delete">delete</div>
    </div>
  );
};

export default UploadComment;
