import { Button } from "react-bootstrap";

const ViewSign = () => {
  return (
    <div>
      <section className="main-outer-box">
        <div className="container ">
          <div className="row main-containers">
            <div className="col-lg-6 ">
              <div className="middle-box">
                <div className="heading-box text-center">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                  </p>
                </div>
              </div>
              <div className="view-box text-center ">
                <Button id="privacy">
                  {" "}
                  Sign the Document and Save copies to Hedera
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewSign;
