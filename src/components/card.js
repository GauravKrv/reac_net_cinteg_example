import { Link } from "react-router-dom";
import "../css/card.css";
const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-12 mx-auto">
        <div className="card  shadow p-3 mb-5 bg-white rounded">
          <img src={props.val.cimg} alt={props.val.cname} id="imgid" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">
              {props.val._id}. {props.val.cname}
            </h5>

            <Link
              to={{
                pathname: `/common/${props.val._id}`,

                state: {
                  stateParam: true,
                },
              }}
              className="btn btn-light btn-outline-success btn-sm"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
