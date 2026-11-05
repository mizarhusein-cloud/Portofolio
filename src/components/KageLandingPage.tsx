import {
  splitTypographyProps,
  usePageTypography,
  type PageTypographyProps,
} from "../shaders/landing-pages/pageTypography";
import { LandingPageFrame, type LandingPageProps } from "../shaders/landing-pages/LandingPageFrame";
import { KAGE_TYPOGRAPHY } from "../shaders/landing-pages/pageRecipes";

export type { PageTypographyProps } from "../shaders/landing-pages/pageTypography";
export type { LandingPageProps } from "../shaders/landing-pages/LandingPageFrame";

export function KageLandingPage(props: LandingPageProps & PageTypographyProps) {
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(KAGE_TYPOGRAPHY, type);
  return <LandingPageFrame {...frame} customization={customization} title="Franshin Mizar Husain — Frontend Developer" sourceUrl="/landing-pages/kage.html" />;
}
