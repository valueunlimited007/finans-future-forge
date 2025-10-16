import SimpleNavigation from "../components/SimpleNavigation";
import LegacyFooter from "../components/LegacyFooter";
import RichPrivatlan from "../components/RichPrivatlan";
import SeoManager from "../seo/SeoManager";

export default function Privatlan() {
  return (
    <>
      <SeoManager />
      <SimpleNavigation />
      <RichPrivatlan />
      <LegacyFooter />
    </>
  );
}
