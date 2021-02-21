import InfoContent from "./components/InfoContent";

const InfoSection = () => (
  <section className="info--container">
    <div className="info--wrapper">
      <div className="lg:w-1/2">
        <div
          className="info--image"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
          }}
        />
      </div>
      <InfoContent />
    </div>
  </section>
);

export default InfoSection;
