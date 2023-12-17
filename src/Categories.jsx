import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState({});
  useEffect(() => {
    fetch("https://jbh-mockserver.onrender.com/categories")
      .then((f) => f.json())
      .then((x) => {
        setCategories(x);
      });
  }, []);
  return (
    <div id="categoreis" >
      {Object.keys(categories).map((f) => (
       <Link key={f} to={"/categories/"+f}>
        <div>
          <span>{f}</span>
          <img className="imca" src={categories[f]} alt="" />
        </div>
        </Link>
      ))}
    </div>
  );
}
