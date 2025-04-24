import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <main className="dashboard-container">
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="dashboard-card-header">
              <h2>Tanks</h2>
            </div>
            <div className="dashboard-card-body">
              <p>Something here.</p>
              <p>And another thing.</p>
            </div>
            <div className="dashboard-card-footer">
              <Link className="dashboard-card-link" to="/tanks">View</Link>
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
              <Link aria-disabled={true} className="dashboard-card-link" to="/tanks" onClick={(event) => event.preventDefault()}>View</Link>
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
            <Link aria-disabled={true} className="dashboard-card-link" to="/tanks" onClick={(event) => event.preventDefault()}>Edit</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
