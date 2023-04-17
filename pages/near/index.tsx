import { NearSocialBridgeProvider } from "near-social-bridge";
import Routes from "@app/routes";

const NearApp = () => {
  return (
    <NearSocialBridgeProvider>
      <Routes />
    </NearSocialBridgeProvider>
  );
};

export default NearApp;
