const Maintenance = () => {
    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#111",
            color: "#fff",
            padding: "2rem",
            textAlign: "center"
        }}>
            <h1>🚧 Website Under Maintenance</h1>
            <p>I’m currently updating my portfolio — adding new projects and polishing a few things.
            Please check back soon to see what’s new!</p>
            <p style={{ marginTop: "2rem", fontSize: "0.9rem", opacity: 0.6 }}>
                &copy; {new Date().getFullYear()} Richard Khoo
            </p>
        </div>
    );
};

export default Maintenance;
  