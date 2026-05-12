import { useEffect, useState } from "react";
import axios from "axios";

const Children = () => {
  const [children, setChildren] = useState([]);
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
  });

  // FETCH children
  const fetchChildren = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/children");
      setChildren(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchChildren();
  }, []);

  // HANDLE input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ADD child
  const addChild = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/children", form);

      setForm({
        name: "",
        age: "",
        gender: "",
      });

      fetchChildren();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Children List</h2>

      {/* FORM */}
      <form
        onSubmit={addChild}
        style={{
          marginBottom: "20px",
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="age"
          placeholder="Age"
          type="number"
          value={form.age}
          onChange={handleChange}
        />

        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <button type="submit">Add Child</button>
      </form>

      {/* TABLE */}
      <h3>All Children</h3>

      <table
        border="1"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "left",
        }}
      >
        <thead>
          <tr>
            <th style={{ padding: "10px" }}>Name</th>
            <th style={{ padding: "10px" }}>Age</th>
            <th style={{ padding: "10px" }}>Gender</th>
            <th style={{ padding: "10px" }}>Date Admitted</th>
          </tr>
        </thead>

        <tbody>
          {children.map((child) => (
            <tr key={child._id}>
              <td style={{ padding: "10px" }}>{child.name}</td>
              <td style={{ padding: "10px" }}>{child.age}</td>
              <td style={{ padding: "10px" }}>{child.gender}</td>
              <td style={{ padding: "10px" }}>
                {new Date(child.admissionDate).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Children;