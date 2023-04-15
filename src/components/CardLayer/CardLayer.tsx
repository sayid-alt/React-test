import Card from "./Card";
import Single from "../../assets/single.png";
import Double from "../../assets/double.png";
import Triple from "../../assets/triple.png";

const datas = [
  {
    userType: "Single User",
    image: Single,
    price: "149",
    feature_1: "500 GB Storage",
    feature_2: "1 User Allowed",
    feature_3: "Send up to 2GB",
  },
  {
    userType: "Partnership",
    image: Double,
    price: "199",
    feature_1: "1 TB Storage",
    feature_2: "3 Users Allowed",
    feature_3: "Send up to 10 GB",
  },
  {
    userType: "Group Account",
    image: Triple,
    price: "299",
    feature_1: "5 TB Storage",
    feature_2: "10 Users Allowed",
    feature_3: "Send up to 20 GB",
  },
];

const CardLayer = () => {
  return (
    <div className="bg-white py-20	">
      <div className="container grid md:grid-cols-3 gap-10">
        {datas.map((data) => (
          <Card
            image={data.image}
            userType={data.userType}
            price={data.price}
            feature_1={data.feature_1}
            feature_2={data.feature_2}
            feature_3={data.feature_3}
          />
        ))}
      </div>
    </div>
  );
};

export default CardLayer;
