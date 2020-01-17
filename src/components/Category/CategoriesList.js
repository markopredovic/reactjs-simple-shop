import React, { useContext, useState, useEffect } from "react";
import CategoryItem from "./CategoryItem";
import AppContext from "../../context/appContext";
import Table from "react-bootstrap/Table";
import MySpinner from "../UI/Layout/MySpinner";

const CategoriesList = ({ showRemoveMessage, removeRemoveMessage }) => {
  const context = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  let categories = [];

  useEffect(() => {
    const fetchList = async () => {
      setLoading(true);
      await context.list();
      setLoading(false);
    };

    fetchList();
  }, []);

  const handleEdit = category => {
    console.log("SHOW EDIT MODAL");
  };

  categories = context.categories
    ? context.categories.map((category, index) => (
        <CategoryItem
          {...category}
          key={index}
          editCategory={() => handleEdit(category)}
        />
      ))
    : [];

  return (
    <div className="l-categories-list">
      <Table striped bordered hover responsive>
        <thead className="bg-primary text-white">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th className="text-center">Edit</th>
            <th className="text-center">Remove</th>
          </tr>
        </thead>
        <tbody>{categories}</tbody>
      </Table>
      {loading && <MySpinner />}
    </div>
  );
};

export default CategoriesList;
