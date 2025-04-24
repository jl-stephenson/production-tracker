import { useTankStore } from "@/stores/tankStore";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { tanks } = useTankStore();

  const totalCapacity = tanks.reduce(
    (total, { capacity }) => total + capacity,
    0,
  );

  return (
    <>
      <main className="dashboard-container">
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="dashboard-card-header">
              <h2>Tanks</h2>
            </div>
            <div className="dashboard-card-body">
              {tanks.length > 0 ? (
                <>
                  <p>Number of tanks: {tanks.length}</p>
                  <p>Total capacity: {totalCapacity} litres</p>
                </>
              ) : (
                <p>No tanks, click below to add.</p>
              )}
            </div>
            <div className="dashboard-card-footer">
              {tanks.length === 0 ? (
                <Link className="dashboard-card-link" to="/tanks">
                  Add Tank
                </Link>
              ) : (
                <Link className="dashboard-card-link" to="/tanks">
                  View
                </Link>
              )}
            </div>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-card-header">
              <h2>Analytics</h2>
            </div>
            <div className="dashboard-card-body">
              <p>Something here.</p>
              <p>And another thing.</p>
            </div>
            <div className="dashboard-card-footer">
              <Link
                aria-disabled={true}
                className="dashboard-card-link"
                to="/tanks"
                onClick={(event) => event.preventDefault()}
              >
                View
              </Link>
            </div>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-card-header">
              <h2>Upcoming Tasks</h2>
            </div>
            <div className="dashboard-card-body">
              <p>Something here.</p>
              <p>And another thing.</p>
            </div>
            <div className="dashboard-card-footer">
              <Link
                aria-disabled={true}
                className="dashboard-card-link"
                to="/tanks"
                onClick={(event) => event.preventDefault()}
              >
                Edit
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
