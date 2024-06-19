import './homepage.css';
import Christmas from '../../components/campaigns/christmas/christmas';
import ProductPlacer from '../../components/productPlacer/productPlacer';

export default function Homepage() {
  return (
    <>
      <Christmas />
      <div className="blackBannerContainer"><div className="scrollThis blackBanner">ONLY 3 DAYS LEFT UNTIL END OF CHRISTMAS DEAL!</div></div>
      <ProductPlacer position="left" num={2} />
      <hr />
      <ProductPlacer position="right" num={3} />
    </>
  );
}
