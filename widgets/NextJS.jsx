const externalAppUrl = "http://localhost:3000/near";
const path = props.path;
const initialViewHeight = 809;
const initialPayload = {
  myNiceProp: "me gusta :D",
};

/**
 * Request Handlers.
 */
const requestHandler = (request, response, Utils) => {
  switch (request.type) {
    case "example":
      exampleHandler(request, response);
      break;
  }
};

const exampleHandler = (request, response) => {
  response(request).send({});
};

return (
  <Widget
    src="wendersonpires.near/widget/NearSocialBridgeCore"
    props={{
      externalAppUrl,
      path,
      initialViewHeight,
      initialPayload,
      requestHandler,
    }}
  />
);
