import type { FC, MouseEvent, ChangeEvent, SubmitEvent } from "react";

const Form: FC = () => {
  // butona tıklandığında
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event.target);
  };

  // input değiştiğinde
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  // form gönderilince
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Formu Gönder</button>
    </form>
  );
};

export default Form;
