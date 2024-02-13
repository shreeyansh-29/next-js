import React from "react";

const UserList = ({users}) => {
  console.log(users);
  return (
    <>
      <h1>List of users</h1>
    </>
  );
};

export default UserList;

UserList.getInitialProps = async () => {
  let props = {};
  try {
    const res = await fetch("https://api.github.com/repos/vercel/next.js");
    const json = await res.json();
    console.log(json);
    props[users] = json;
  } catch (error) {}
  return {
    props,
  };
};
