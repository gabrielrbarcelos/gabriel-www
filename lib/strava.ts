import { ActivityType } from "components/Activity";

const clientId = process.env.STRAVA_CLIENT_ID;
const clientSecret = process.env.STRAVA_CLIENT_SECRET;
const refreshToken = process.env.STRAVA_REFRESH_TOKEN;
const userId = process.env.STRAVA_USER_ID;
const TOKEN_ENDPOINT = "https://www.strava.com/oauth/token";
const ATHLETES_ENDPOINT = userId
  ? `https://www.strava.com/api/v3/athletes/${userId}`
  : null;
const ACTIVITY_ENDPOINT = "https://www.strava.com/api/v3/";

const getAccessToken = async () => {
  if (!clientId || !clientSecret || !refreshToken) {
    return null;
  }

  const body = JSON.stringify({
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: "refresh_token",
  });

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body,
  });

  return response.json();
};

export const getActivities = async () => {
  if (!ATHLETES_ENDPOINT) {
    return [];
  }
  const tokenResponse = await getAccessToken();
  if (!tokenResponse?.access_token) {
    return [];
  }
  const response = await fetch(
    `${ATHLETES_ENDPOINT}/activities?access_token=${tokenResponse.access_token}`
  );
  const json = await response.json();

  const publicActivities = json.filter(
    (activity: ActivityType) => activity.visibility === "everyone"
  );

  return publicActivities;
};

export const getActivity = async (id: number) => {
  const tokenResponse = await getAccessToken();
  if (!tokenResponse?.access_token) {
    return null;
  }
  const response = await fetch(
    `${ACTIVITY_ENDPOINT}/activities/${id}?access_token=${tokenResponse.access_token}`
  );
  const json = await response.json();
  return json;
};
