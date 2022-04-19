import { useParams } from "react-router-dom";
import "../css/common.css";
import rimg from "../images/img/01.jpg";
import Cdata from "../data/companydata";
import company from "../images/wslcompany.svg";
import Footer from "./footer";

const Common = () => {
  const { id } = useParams();
  const commonobj = Cdata.filter((item) => {
    return item._id == id;
  })[0];
  return (
    <>
      <section className="first  ">
        <left className="left shadow p-5 mb-5 rounded">{commonobj.cdesc}</left>
        {/* img-fluid animated */}
        <img
          className="right shadow p-0 mb-5 bg-white rounded animate-pulse"
          src={commonobj.cimg}
        ></img>
      </section>
      <section className="second">
        <box className="box shadow p-3 mb-5  animate-bounce">
          <p>Turnover</p>
          <p className="p-4 font-bold ">{commonobj.cturnover}</p>
        </box>
        <box className="box shadow p-3 mb-5  animate-bounce">
          <p>Market Cap</p>
          <p className="p-4 font-bold">{commonobj.ccap}</p>
        </box>
        <box className="box shadow p-3 mb-5 animate-bounce">
          <p>Country</p>
          <p className="p-4 font-bold">{commonobj.clocation || "John Doe"}</p>
        </box>
      </section>
      <section className="third">
        <right>
          <iframe
            id="rframe"
            src={commonobj.cvid}
            className=" shadow   p-1 mb-5 bg-white rounded"
          ></iframe>
        </right>
      </section>
      <Footer />
    </>
  );
};

export default Common;
