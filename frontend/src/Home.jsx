import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-layout">
      <div>
        <h1>Real-Time Goods Tracking Simplified</h1>
        <p>
        Track the status, location, and responsibility of your goods in real-time with a secure, intuitive, and blockchain-powered platform.
        </p>
        <Link to="/dashboard" className="btn btn-default">
          Start tracking
        </Link>
      </div>
      <img
        src="../public/parcel_tracking.png"
        width="350"
        height="240"
        className="rounded home-image"
        alt=""
      />
    </div>
  );
}