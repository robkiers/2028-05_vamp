import { useFormStatus } from "react-dom";
import CharacterPropertyInput from "../components/ability";
import {
  characterSectionKeys,
  type Character,
  type CharacterSection,
} from "../components/character";
import emptyCharacter from "../components/emptyCharacter";
import "./sheet.css";

const SheetPage = () => {
  const handleSubmit = (formData: FormData) => {
    const { pending } = useFormStatus();
    const characterData = Object.fromEntries(formData.entries());
    console.log(characterData);
    // add error handling here
  };

  const handleCancel = () => {
    console.log("Cancel clicked");
    // Handle cancel logic here (e.g., navigate back or reset form)
  };

  const handlePrint = () => {
    console.log("Print clicked");
    console.log(character);
    // Handle print logic here (e.g., open print dialog)
  };

  const character: Character = emptyCharacter;

  return (
    <form className="sheet-form" action={handleSubmit}>
      <section className="sheet-form__header">
        <h1 className="sheet-form__title">Character sheet</h1>
        <div className="sheet-form__subtitle">Sheet Page</div>
      </section>
      <section className="sheet-form__content">
        {(Object.keys(characterSectionKeys) as CharacterSection[]).map(
          (section) => {
            const keys = characterSectionKeys[section];
            const values = character[section] as Record<string, any>;
            return (
              <div key={section} className={`content_${section}`}>
                <h2>{section.toUpperCase()}</h2>
                {keys.map((key) => {
                  const value = values[key as keyof typeof values];
                  const component =
                    // add proper type guard
                    typeof value === "object" ? (
                      <CharacterPropertyInput
                        key={key}
                        label={key}
                        value={value.value}
                        specialization={value.specialization}
                      />
                    ) : (
                      // convert to proper component
                      <div key={key} className="character-input__container">
                        {key}
                        <input
                          type="text"
                          name={key}
                          defaultValue={value}
                          className="character-input"
                        />
                      </div>
                    );
                  return component;
                })}
              </div>
            );
          }
        )}
      </section>
      <section className="sheet-form__footer">
        <button type="submit" className="sheet-form__submit">
          Save
        </button>
        <button
          type="button"
          className="sheet-form__cancel"
          onClick={handleCancel}>
          Cancel
        </button>
        <button
          type="button"
          className="sheet-form__cancel"
          onClick={handlePrint}>
          Print
        </button>
      </section>
    </form>
  );
};

export default SheetPage;
