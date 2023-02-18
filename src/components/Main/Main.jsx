import "./main.css";
import { data } from "../../helpers/data";

const Main = () => {
  return (
    <div className="cards-container">
      {data.map((item) => {
        return (
          <div key={item.id} className="card">
            <h2>{item.title}</h2>
            <div className="image">
              <img src={item.image} alt="" />
              <div className="description">
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
