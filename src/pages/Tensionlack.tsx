import { Spin } from "antd";
import { Suspense } from "react";

const loadng: any = {
  with: "100vw",
  height: "100vh",
  margin: "20px 0",
  marginBottom: 20,
  padding: "30px 50px",
  textAlign: "center",
  borderRadius: 4,
};

const Tensionlack = () => {
  return (
    <div className="top-1">
      <div className="flex flex-wrap lg:flex-nowrap justify-center mt-1 h-full w-full top-1">
        <div
          style={{
            height: "100vh",
            maxHeight: "85vh",
          }}
          className="m-1 md:m-2 mt-1 p-1 md:p-5 bg-white rounded-3xl w-full flex flex-wrap lg:flex-nowrap shadow-lg"
        >
          <Suspense
            fallback={
              <div>
                <Spin style={loadng} />
              </div>
            }
          >
            <iframe
              width="100%"
              title="Tensionlack"
              style={{
                border: 0,
                height: "100%",
                width: "100%",
              }}
              src="https://lookerstudio.google.com/embed/reporting/67052bd9-a612-4f23-b9fd-91f789090c93/page/epZGD"
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Tensionlack;
