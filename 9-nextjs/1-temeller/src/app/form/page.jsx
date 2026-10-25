import { handleSubmitAction } from "@/utils/action";

const Form = () => {
  console.log("3");

  return (
    <form action={handleSubmitAction} className="grid gap-10">
      <div className="flex flex-col items-start">
        <label>Email</label>
        <input type="email" name="email" className="border rounded p-1" />
      </div>

      <div className="flex flex-col items-start">
        <label>Şifre</label>
        <input type="password" name="password" className="border rounded p-1" />
      </div>

      <h1>selam</h1>

      <button type="submit" className="cursor-pointer me-auto bg-white text-black px-2 rounded">
        Gönder
      </button>
    </form>
  );
};

export default Form;
