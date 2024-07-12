import PropTypes from "prop-types";

export const UserCard = ({ name, title, age }) => {
  const address = { street: "calle 73", neighboor: "El placer" };
  return (
    <>
      <h1>{name}</h1>
      <p>{title}</p>
      <p>{age}</p>
      <code>{JSON.stringify(address)}</code>
    </>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
};
