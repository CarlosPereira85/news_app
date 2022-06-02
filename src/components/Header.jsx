import Form from "./Form";

const Header = ({
  handleSubmit,
  language,
  searchRef,
  languageHandler,
  todaysDateDisplay,
}) => {
  return (
    <header>
      <h1>News</h1>
      <h3>{todaysDateDisplay}</h3>
      <aside>
        <Form
          handleSubmit={handleSubmit}
          language={language}
          languageHandler={languageHandler}
          searchRef={searchRef}
        />
      </aside>
    </header>
  );
};
export default Header;
