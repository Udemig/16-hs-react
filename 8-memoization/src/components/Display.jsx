import React from "react";

const Display = ({ count, handleIncrease }) => {
  console.log("display bileşeni render oldu");

  return (
    <div>
      <h2>Sayacın Değeri: {count}</h2>
      <button onClick={handleIncrease}>Sayacı Arttır</button>
    </div>
  );
};

/*
 * Bu örnekte kapsayıcı component'ın state'leri her değiştiğinde kapsayıcının render olmasından kaynaklı display component'ı değişen state'İ prop olarak almasa bile gereksiz yere render olur
 
 * Bir component'ın aldığı proplar değişmediği müddetçe kapsayıcı component kaynaklı render olması gereksiz render olarak adlandırılır

 * Bu durmun önüne react memo ile geçeriz

 ! eğer primiive (string,number,boolean) yerine referance (object,array,function) bir değer olarak prop geliyorsa react.memo() görevini yapamaz
*/
export default React.memo(Display);
