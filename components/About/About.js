import Category from "./Category";

export default function About(props) {
  console.log(props);
  if (props.categories.length === 0) props.getCategories();

  const [feeValid, setFeeValid] = React.useState(false);

  const setField = (event, fieldName) =>
    props.setField([{ [fieldName]: event.target.value }], "about");

  return (
    <section>
      <h2>About</h2>

      <div className="field-container">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => setField(e, "title")}
          required
          placeholder="Make it short and clean"
        />
        {!props.isTitleValid && (
          <div className="field-container error-content">
            Plese select title!
          </div>
        )}
      </div>

      <div className="field-container">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          required
          maxLength="140"
          placeholder="Write about your event be creative."
          onChange={(e) => setField(e, "description")}
        ></textarea>
        {!props.isDescriptionValid && (
          <div className="field-container error-content">
            Please type description!
          </div>
        )}
      </div>

      <Category categories={props.categories} setField={setField} />

      <div className="field-container">
        <label htmlFor="payment">Payment</label>
        <div className="flex-3">
          <input
            type="radio"
            name="payment"
            value="free event"
            onClick={(event) => {
              props.setField(
                [{ eventType: event.target.value }, { showFee: false }],
                "about"
              );
            }}
          />
          Free event
          <input
            type="radio"
            name="payment"
            value="paid event"
            onClick={(event) => {
              props.setField(
                [{ eventType: event.target.value }, { showFee: true }],
                "about"
              );
            }}
          />
          Paid event
          {props.showFee && (
            <input
              type="number"
              id="fee"
              name="fee"
              placeholder="Fee"
              onChange={(e) => {
                setFeeValid(+e.target.value > 0);
              }}
            />
          )}
          {props.showFee && !props.feeValid && (
            <div className="field-container error-content">
              Please enter fee!
            </div>
          )}
        </div>
      </div>

      <div className="field-container">
        <label htmlFor="reward">Reward</label>
        <input
          type="number"
          name="reward"
          id="reward"
          placeholder="Number"
          onChange={(e) => setField(e, "reward")}
        />
      </div>
    </section>
  );
}
