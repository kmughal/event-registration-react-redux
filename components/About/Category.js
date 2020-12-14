export default function Category({ categories, setField }) {
  const categoryRef = React.useRef(null);
  let categoriesOpts = null;

  categories &&
    (categoriesOpts = [{ id: -1, name: "select cateogory" }]
      .concat(categories)
      .map((v) => (
        <option key={v.id} value={v.id}>
          {v.name}
        </option>
      )));

  return (
    <div className="field-container">
      <label htmlFor="category">Category</label>
      <select
        name="category"
        id="category"
        onClick={(e) => {
          setField(event, "category");
        }}
      >
        {categoriesOpts}
      </select>
    </div>
  );
}
