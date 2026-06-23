// Object Destructuring - Nesne Dağıtmak
// Bir objenin içerisindeki değerleri tek tek alıp değişkenlere atamayı kolaylaştıran bir özelliktir
const Button = ({ renk, yazi }) => {
  return (
    <div>
      <p>bilmem ne</p>

      <button style={{ background: renk, borderRadius: "10px" }}>{yazi}</button>
    </div>
  );
};
export default Button;
