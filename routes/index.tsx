import { useEffect } from "react";
import {
  createMockUser,
  createStackNavigator,
  initRefreshService,
  mockUser,
} from "near-social-bridge";
import Home from "@app/iframe-pages/Home";
import Profile from "@app/iframe-pages/Profile";
import List from "@app/iframe-pages/List";

const { Navigator, Screen } = createStackNavigator();

// Mock user
console.warn("Using fake user!");
const fakeUser = createMockUser();
mockUser(fakeUser);

const Routes = () => {
  useEffect(() => {
    // NOTE: should use it only for DEV
    initRefreshService();
  }, []);

  return (
    <Navigator autoHeightSync>
      <Screen name="Home" component={Home} />
      <Screen name="Profile" component={Profile} iframeHeight={200} />
      <Screen name="List" component={List} />
    </Navigator>
  );
};

export default Routes;