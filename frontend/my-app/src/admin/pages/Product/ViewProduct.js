import React from "react";

export default function ViewProduct() {
  return (
    <div>
      <div className="card">
        <div className="card-header bg-success">
          <p className="card-title text-center fs-4 text-dark">View Product</p>
        </div>
        <div className="card-body">
          <table className="table table-bordered table-info">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Category</th>
                <th>Available Quantity</th>
                <th>Product Description</th>
                <th>Stock Alert</th>
                <th>Main Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <span>
                    <button>Delete</button>
                    <button>Update</button>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
