import React from 'react';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <p> Ваше имя {user.name}</p>
      <p> Вам {user.age} лет</p>
      <p> Ваш пол {user.gender}</p>
    </div>
  );
};

export default UserInfo;
