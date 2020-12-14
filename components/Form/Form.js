import { useRouter } from "next/router";
import {
  WhenContainer,
  CoordiantorContainer,
  Header,
  AboutContainer,
} from "..";

export default function Form(props) {
  const router = useRouter();
  const [formIsValid, setFormIsValid] = React.useState(true);

  function handleFormSubmit(event) {
    const isValid = props.validateForm(props);
    console.log("Form Validation", props);
    if (isValid) router.push("/SuccessPage");
    setFormIsValid(isValid);
    event.preventDefault();
  }

  return (
    <>
      <Header headerText="New event"></Header>
      <main>
        <form>
          {!formIsValid && (
            <div className="field-container error-content">
              Form is not valid.
            </div>
          )}
          <AboutContainer />
          <CoordiantorContainer />
          <WhenContainer />

          <div className="field-container align-center">
            <button onClick={handleFormSubmit}>Publish Event</button>
          </div>
        </form>
      </main>
    </>
  );
}
