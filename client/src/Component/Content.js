import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Headerr.css';
import editIcon from '../Assest/edit.png';
import deleteIcon from '../Assest/delete.png';

export default function Content() {
  const [todos, setTodos] = useState([]);
  const [editableStatus, setEditableStatus] = useState({});
  const [editingLabels, setEditingLabels] = useState({});

  const getTodos = async () => {
    try {
      const response = await axios.get('http://localhost:8001/todoss');
      setTodos(response.data);
      setEditableStatus({});
      setEditingLabels({});
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8001/todoss/${id}`);
      getTodos();
    } catch (err) {
      console.error('Error deleting todo:', err);
    }
  };

  const handleEditStatus = async (id) => {
    try {
      const updatedStatus = editableStatus[id];
      const updatedLabel = editingLabels[id] || todos.find(todo => todo.id === id).title;
      await axios.put(`http://localhost:8001/todoss/${id}`, {
        title: updatedLabel,
        progress: updatedStatus,
      });
      getTodos();
    } catch (err) {
      console.error('Error updating todo:', err);
    }
  };

  const toggleEditingLabel = (id) => {
    setEditingLabels((prevLabels) => ({
      ...prevLabels,
      [id]: !prevLabels[id],
    }));
  };

  const handleEditLabel = (id, event) => {
    const updatedLabel = event.target.value;
    setEditingLabels((prevLabels) => ({
      ...prevLabels,
      [id]: updatedLabel,
    }));
  };

  const handleKeyPress = async (event, id) => {
    if (event.key === 'Enter') {
      try {
        await axios.put(`http://localhost:8001/todoss/${id}`, {
          title: editingLabels[id] || todos.find(todo => todo.id === id).title,
          progress: editableStatus[id],
        });
        getTodos();
        toggleEditingLabel(id);
      } catch (err) {
        console.error('Error updating todo:', err);
      }
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  if (!todos) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="dis">
        <div className="container4 myDiv">
          <ul className="myUL">
            {todos.map((item) => (
              <li key={item.id}>
                <input type="checkbox" id={`check-${item.id}`} className="checkk" />
                {/* <label htmlFor={`check-${item.id}`} className="lab">
                  {item.title}
                </label> */}
                {editingLabels[item.id] ? (
                  <input
                    type="text"
                    value={editingLabels[item.id] || item.title}
                    onChange={(e) => handleEditLabel(item.id, e)}
                    onKeyPress={(e) => handleKeyPress(e, item.id)}
                    onBlur={() => toggleEditingLabel(item.id)}
                  />
                ) : (
                  <label
                    htmlFor={`check-${item.id}`}
                    className="lab"
                    onClick={() => toggleEditingLabel(item.id)}
                  >
                    {item.title}
                  </label>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="contain2 myDiv">
          <ul className="myUL">
            {todos.map((item) => (
              <li key={item.id}>
                <select
                  name="status"
                  id={`sta-${item.id}`}
                  className="listt"
                  value={editableStatus[item.id] || item.progress}
                  onChange={(e) => setEditableStatus({ ...editableStatus, [item.id]: e.target.value })}
                  onBlur={() => handleEditStatus(item.id)}
                >
                  <option value="backvalue">{item.progress}</option>
                  <option value="In-Progress">Completed</option>
                  <option value="Completed">in progress</option>
                  <option value="On Hold">On Hold</option>
                </select>
                {/* {editingLabels[item.id] ? (
                  <input
                    type="text"
                    value={editingLabels[item.id] || item.title}
                    onChange={(e) => handleEditLabel(item.id, e)}
                    onKeyPress={(e) => handleKeyPress(e, item.id)}
                    onBlur={() => toggleEditingLabel(item.id)}
                  />
                ) : (
                  <label
                    htmlFor={`check-${item.id}`}
                    className="lab"
                    onClick={() => toggleEditingLabel(item.id)}
                  >
                    {item.title}
                  </label>
                )} */}
                <img
                  className="imgs"
                  src={editIcon}
                  height={30}
                  width={30}
                  alt="edit"
                  onClick={() => toggleEditingLabel(item.id)}
                />
                <img
                  src={deleteIcon}
                  height={30}
                  width={30}
                  alt="delete"
                  onClick={() => handleDelete(item.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
