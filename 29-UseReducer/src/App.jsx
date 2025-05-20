import React, { useReducer, useState } from "react";

const ACTIONS = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  RESET: "RESET",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CREATE:
      return [...state, action.payload];

    case ACTIONS.UPDATE:
      return state.map((user) =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user
      );

    case ACTIONS.DELETE:
      return state.filter((user) => user.id !== action.payload);

    case ACTIONS.RESET:
      return [];

    default:
      return state;
  }
};

const initialUsers = [];

const App = () => {
  const [users, dispatch] = useReducer(userReducer, initialUsers);

  const [formData, setFormData] = useState({ name: "", surname: "" });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const handleCreate = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.surname) return;

    dispatch({
      type: ACTIONS.CREATE,
      payload: {
        id: Date.now(),
        name: formData.name,
        surname: formData.surname,
      },
    });

    setFormData({ name: "", surname: "" });
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setIsModalOpen(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.UPDATE,
      payload: editUser,
    });
    setIsModalOpen(false);
    setEditUser(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Management</h1>

      <form onSubmit={handleCreate} style={{ marginBottom: "20px" }}>
        <input
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          placeholder="Surname"
          value={formData.surname}
          onChange={(e) =>
            setFormData({ ...formData, surname: e.target.value })
          }
        />
        <button type="submit">Add User</button>
      </form>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} {user.surname}
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button
              onClick={() =>
                dispatch({ type: ACTIONS.DELETE, payload: user.id })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {users.length > 0 && (
        <button onClick={() => dispatch({ type: ACTIONS.RESET })}>
          Reset All
        </button>
      )}

      {isModalOpen && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.modal}>
            <h3>Edit User</h3>
            <form onSubmit={handleUpdate}>
              <input
                value={editUser.name}
                onChange={(e) =>
                  setEditUser({ ...editUser, name: e.target.value })
                }
              />
              <input
                value={editUser.surname}
                onChange={(e) =>
                  setEditUser({ ...editUser, surname: e.target.value })
                }
              />
              <button type="submit">Update</button>
              <button type="button" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    minWidth: "300px",
  },
};

export default App;
