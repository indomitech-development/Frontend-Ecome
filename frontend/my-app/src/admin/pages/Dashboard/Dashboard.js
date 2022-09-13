import React from "react";
import Layout from "../../layout/Layout";
import ContactUs from "../contactUs/ContactUs";
import ShowOrder from "../showOrder/ShowOrder";

export default function Dashboard() {
  return (
    <Layout>
      <div className="container overflow-hidden">
        <div className="breadcrumbs">
          <div className="col-sm-4">
            <div className="page-header float-left">
              <div className="page-title">
                <h1>Dashboard</h1>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="page-header d-flex justify-content-end">
              <div className="page-title">
                <ol className="breadcrumb ">
                  <li className="active">Dashboard</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* dashboard items */}
        <div className="row mt-3">
          <div className="col-sm-6 col-lg-3  ">
            <div className="card ">
              <div className="card-body p-3 text-center">
                <h4 className="mb-0">
                  <span className="count fs-2">10468</span>
                </h4>
                <p className=" fs-4">Members online</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3  ">
            <div className="card ">
              <div className="card-body p-3 text-center">
                <h4 className="mb-0">
                  <span className="count fs-2">10468</span>
                </h4>
                <p className=" fs-4">Members online</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3  ">
            <div className="card ">
              <div className="card-body p-3 text-center">
                <h4 className="mb-0">
                  <span className="count fs-2">10468</span>
                </h4>
                <p className=" fs-4">Members online</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3  ">
            <div className="card ">
              <div className="card-body p-3 text-center">
                <h4 className="mb-0">
                  <span className="count fs-2">10468</span>
                </h4>
                <p className=" fs-4">Members online</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ShowOrder />
          </div>

          <div className="col-md-6">
            <ContactUs />
          </div>
        </div>
      </div>
    </Layout>
  );
}
