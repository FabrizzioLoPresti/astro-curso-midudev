import { type APISpaceXResponse, type Doc } from "../types/types.d";

export const getLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "desc",
        },
        limit: 12,
        populate: {
          path: "rocket",
          select: {
            flickr_images: 1,
          },
        },
      },
    }),
  });
  const { docs: launches }: APISpaceXResponse = await res.json();
  return launches;
};

export const getLaunchById = async (id: string) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/query`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {
        _id: id,
      },
      options: {
        populate: {
          path: "rocket",
          select: {
            flickr_images: 1,
          },
        },
      },
    }),
  });
  const {docs} = await res.json();
  return docs[0] as Doc;
}