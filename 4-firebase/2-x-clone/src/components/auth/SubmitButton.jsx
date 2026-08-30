const SubmitButton = ({ isLoginMode }) => {
  return (
    <button
      type="submit"
      className="mt-10 bg-white text-black rounded-full p-1 font-bold hover:bg-gray-300"
    >
      {isLoginMode ? "Giriş Yap" : "Kaydol"}
    </button>
  );
};

export default SubmitButton;
