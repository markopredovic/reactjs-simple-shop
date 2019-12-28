import React, { useContext, useState, useEffect } from "react";
import CategoryItem from "./CategoryItem";
import CategoryContext from "../../context/categoryContext";
import Table from "react-bootstrap/Table";
import MySpinner from "../UI/Layout/MySpinner";

const CategoriesList = () => {
  const context = useContext(CategoryContext);
  const [loading, setLoading] = useState(false);
  let categories = [];

  useEffect(() => {
    console.log("CATEGORY LIST USE EFFECT []");
    const fetchList = async () => {
      setLoading(true);
      await context.list();
      setLoading(false);
    };

    fetchList();
  }, []);

  console.log("CAEGORIES LIST");

  const handleRemove = async db_node_name => {
    setLoading(true);
    await context.remove(db_node_name);
    setLoading(false);
  };

  const handleEdit = category => {
    console.log("SHOW EDIT MODAL");
  };

  categories = context.categories
    ? context.categories.map((category, index) => (
        <CategoryItem
          {...category}
          key={index}
          editCategory={() => handleEdit(category)}
          removeCategory={() => handleRemove(category.db_node_name)}
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
