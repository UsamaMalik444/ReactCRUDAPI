import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Popup from "../Components/Popup";
import FormEdit from "../Components/Form";
import {
  Delete,
  Edit,
  SaveData,
  Update,
  getAllData,
} from "../Endpoints/ApiCalls";

export const Crud = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isActive, setIsActive] = useState(0);

  const [editId, setEditId] = useState("");
  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState("");
  const [editIsActive, setEditIsActive] = useState(0);

  const handleEdit = async (id) => {
    let res = await Edit(id);
    setEditName(res.data.name);
    setEditAge(res.data.age);
    setEditIsActive(res.data.isActive);
    setEditId(id);
    handleShow();
  };

  const handleUpdate = async () => {
    const data = {
      id: editId,
      name: editName,
      age: editAge,
      isActive: editIsActive,
    };

    await Update(editId, data);

    getData();
    clear();
    handleClose();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete ? ") === true) {
      await Delete(id);
      getData();
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      age: age,
      isActive: isActive,
    };

    await SaveData(data);
    clear();
    getData();
  };

  const clear = () => {
    setName("");
    setAge("");
    setIsActive("");
    setEditName("");
    setEditAge("");
    setEditIsActive("");
    setEditId("");
  };

  const getData = async () => {
    let res = await getAllData();
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      <ToastContainer />

      <FormEdit
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        isActive={isActive}
        setIsActive={setIsActive}
        editId={1}
        classes="mt-4 mb-4"
        handleSave={handleSave}
        id="1"
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>isActive</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0
            ? data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.isActive}</td>
                    <td colSpan={2}>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            : "Loading ..."}
        </tbody>
      </Table>
      <Popup
        show={show}
        name={editName}
        setName={setEditName}
        age={editAge}
        setAge={setEditAge}
        editIsActive={editIsActive}
        setEditIsActive={setEditIsActive}
        handleUpdate={handleUpdate}
        editId={editId}
        setEditId={setEditId}
        handleClose={handleClose}
      />
    </Fragment>
  );
};
