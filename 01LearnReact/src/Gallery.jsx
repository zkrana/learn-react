function Profile() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/YfeOqp2s.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

export default function Gallery() {
  return <Profile />;
}
