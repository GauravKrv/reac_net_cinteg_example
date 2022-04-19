import Cdata from "../data/companydata";
import Card from "../components/card";
import Footer from "../components/footer";
const Home = () => {
  return (
    <>
      <div className="mt-3 mb-5 font-mono text-cyan-900">
        <h1 className="text-center"> Top 10 Largest Software Companies </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {/* arrayname.map method using key and alues as pa*/}
              {Cdata.map((val, ind) => {
                return <Card key={ind} val={val} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
