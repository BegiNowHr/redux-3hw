import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../store/userSlice';

const UserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);



  const changeInput = (event) => {
    const { name, value } = event.target;
    dispatch(updateUser({ key: name, value }));
  };

  return (
    <div>
      <div><h3>Введите ваши данные</h3>
        <label>Имя:  </label>
        <input type="text" id="name" name="name" value={user.name} onChange={changeInput} />
      </div>
      <div>
        <label >Возраст:  </label>
        <input type="text" id="age" name="age" value={user.age} onChange={changeInput} />
      </div>
      <div>
        <label >Пол:  </label>
        <select id="gender" name="gender" value={user.gender} onChange={changeInput}>
          <option>Жен</option>
          <option>Муж</option>
          
        
        </select>
      </div>
    </div>
  );
};

export default UserForm;