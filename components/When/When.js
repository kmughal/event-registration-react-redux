export default function When(props) {
  
  const setField = (event, fieldName) =>
    props.setField([{ [fieldName]: event.target.value }]);

  return (
    <section>
      <h2>When</h2>

      <div className="field-container">
        <label htmlFor="start-on-date">Start On</label>
        <input
          type="date"
          id="start-on-date"
          name="start-on-date"
          onChange={(e) => setField(e, "startDate")}
          required
        />
        <input
          type="time"
          id="start-on-time"
          name="start-on-date"
          onChange={(e) => setField(e, "startTime")}
        />
        <div>
          <input
            type="radio"
            name="start-on-time__am-pm"
            value="AM"
            onChange={(e) => setField(e, "AMOrPM")}
          />{" "}
          AM
          <input
            type="radio"
            name="start-on-time__am-pm"
            value="PM"
            onChange={(e) => setField(e, "AMOrPM")}
          />{" "}
          PM
        </div>
      </div>

      <div className="field-container">
        <label htmlFor="duration">Duration</label>
        <input
          type="number"
          id="duration"
          name="duration"
          onChange={(e) => setField(e, "duration")}
        />
      </div>
    </section>
  );
}
