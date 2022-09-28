import { mappings } from "@aemforms/af-react-components";
import Slider from "../components/slider";

const customMappings: any = {
  'custom:slider': Slider,
  ...mappings
};

export default customMappings;