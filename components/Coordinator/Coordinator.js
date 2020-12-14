export default function Coordinator(props) {
  let responsiblesOpts = null;

  if (props.responsibles.length === 0) props.getResponsibles();
  props.responsibles &&
    (responsiblesOpts = [{ id: -1, name: "select responsible" }]
      .concat(props.responsibles)
      .map((v) => (
        <option key={v.id} value={v.id}>
          {v.name} {v.lastname}
        </option>
      )));

  const responsibleChangeHandler = (e) => {
    const selectedItem = +e.target.value;
    const lookup = props.responsibles.find((f) => f.id === selectedItem);
    if (!lookup) return;

    props.setField(
      [{ responsibleId: e.target.value }, { email: lookup.email }],
      "COORDINATOR"
    );
  };

  return (
    <section>
      <h2>Coordinator</h2>

      <div className="field-container">
        <label htmlFor="responsible">Responsible</label>
        <select
          id="responsible"
          name="responsible"
          onClick={responsibleChangeHandler}
          required
        >
          {responsiblesOpts}
        </select>
        {!props.isCategorySelected && (
          <div className="field-container error-content">
            Please select a coordinator!
          </div>
        )}
      </div>

      <div className="field-container">
        <label htmlFor="email">Email</label>
        <p>{props.email}</p>
      </div>
    </section>
  );
}
