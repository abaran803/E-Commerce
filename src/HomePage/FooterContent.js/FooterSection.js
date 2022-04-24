import FooterItems from "./FooterItems";

const FooterSection = (props) => {
  return (
    <div className="col-md-3 col-6">
      <div className="footer_title pt-3 mb-3">
        <h3>{props.name}</h3>
      </div>
      <div className="footer_links">
        <ul>
          {props.items && props.items.map((item) => (
            <FooterItems item={item} key={item.name} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterSection;
