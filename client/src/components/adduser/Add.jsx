import axios from "axios";

const API_URL = "http://localhost:5000";

const Create = () => {
  return (
    <div>
      <h3>Add product</h3>

      <form>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
        />
        <br />
        <br />
        <button type="submit">Add Product</button>

        <br />
        <br />

        <label htmlFor="quantity">Quantity:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter quantity"
          required
        />
        <br />
        <br />
        <button type="submit">quantity</button>

        <br />
        <br />

        <label htmlFor="price">Price:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter price"
          required
        />
        <br />
        <br />
        <button type="submit">price</button>
      </form>
    </div>
  );
};

export default Create;
