const UserAvatar = ({ url, name }) => {
  return (
    <img
      src={url}
      alt={name}
      className="size-8.75 md:size-11.25 rounded-full"
      referrerPolicy="no-referrer"
    />
  );
};

export default UserAvatar;
