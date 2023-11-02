import React from 'react';

const Dashboard = () => {
  return (
    <div className="container">
      <h2 className="mt-4">Dashboard</h2>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/150"
              alt="Sample Image"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">This is some sample content for Card 1.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/150"
              alt="Sample Image"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">This is some sample content for Card 2.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/150"
              alt="Sample Image"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Card 3</h5>
              <p className="card-text">This is some sample content for Card 3.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
