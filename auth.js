import { createAuth0 } from "@auth0/auth0-vue";

let webAuth = createAuth0({
  domain: "dev-t0kqdfabolg2siaa.us.auth0.com",
  clientId: "GKyvSYb2SsbIEv8WWrfIOBHtWtDGxwGa",
  authorizationParams: {
    redirect_uri: "http://localhost:5173/callback",
  },
});
export default webAuth
