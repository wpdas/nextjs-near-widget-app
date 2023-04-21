import { useEffect } from "react";
import {
  NearSocialBridgeProvider,
  Spinner,
  overrideLocalStorage,
} from "near-social-bridge";
import Routes from "@app/routes";

// Allows the `localStorage` usage
overrideLocalStorage();

const NearApp = () => {
  useEffect(() => {
    localStorage.setItem("name", "Wenderson");
  }, []);

  return (
    <NearSocialBridgeProvider waitForStorage fallback={<Spinner />}>
      <Routes />
    </NearSocialBridgeProvider>
  );
};

export default NearApp;
