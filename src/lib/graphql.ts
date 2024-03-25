import { getSeasonInfo } from "@/lib/utils";
import type { Airing, Media } from "@/types";
import { addDays, getUnixTime, subDays } from "date-fns";

const graphqlAPI = "https://graphql.anilist.co/";

export const getPlanningAnimes = async () => {
  const { season, seasonYear, nextSeason, nextYear } = await getSeasonInfo();
  const query = `
    query getMedias(
      $season: MediaSeason
      $seasonYear: Int
      $nextSeason: MediaSeason
      $nextYear: Int
      $latestAiringStart: Int
      $latestAiringEnd: Int
      $futureAiringStart: Int
      $futureAiringEnd: Int
    ) {
      latestAiring: Page(page: 1, perPage: 50) {
        # sort : TIME_DESC
        airingSchedules(
          airingAt_greater: $latestAiringStart
          airingAt_lesser: $latestAiringEnd
          sort: TIME_DESC
        ) {
          id
          episode
          airingAt
          media {
            ...mediaFragment
          }
        }
      }
      futureAiring: Page(page: 1, perPage: 50) {
        # sort : TIME
        airingSchedules(
          airingAt_greater: $futureAiringStart
          airingAt_lesser: $futureAiringEnd
          sort: TIME
        ) {
          id
          episode
          airingAt
          media {
            ...mediaFragment
          }
        }
      }
      trending: Page(page: 1, perPage: 30) {
        media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {
          ...mediaFragment
        }
      }
      season: Page(page: 1, perPage: 30) {
        media(
          season: $season
          seasonYear: $seasonYear
          sort: POPULARITY_DESC
          type: ANIME
          isAdult: false
        ) {
          ...mediaFragment
        }
      }
      nextSeason: Page(page: 1, perPage: 30) {
        media(
          season: $nextSeason
          seasonYear: $nextYear
          sort: POPULARITY_DESC
          type: ANIME
          isAdult: false
        ) {
          ...mediaFragment
        }
      }
    }

    fragment mediaFragment on Media {
      id
      title {
        userPreferred
      }
      coverImage {
        extraLarge
        large
      }
      isAdult
    }
  `;

  const response = await fetch(graphqlAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: {
        season: season,
        seasonYear: seasonYear,
        nextSeason: nextSeason,
        nextYear: nextYear,
        latestAiringStart: getUnixTime(subDays(new Date(), 1)),
        latestAiringEnd: getUnixTime(new Date()),
        futureAiringStart: getUnixTime(new Date()),
        futureAiringEnd: getUnixTime(addDays(new Date(), 1)),
      },
    }),
  });

  const { data } = await response.json();

  const trending: Media[] = data.trending.media;
  const upcomingSeason: Media[] = data.nextSeason.media;

  const latestAiring: Airing[] = data?.latestAiring?.airingSchedules.filter(
    (airing: Airing) => airing.media.isAdult == false
  );

  const futureAiring: Airing[] = data?.futureAiring?.airingSchedules.filter(
    (airing: Airing) => airing.media.isAdult == false
  );

  return {
    trending,
    upcomingSeason,
    latestAiring,
    futureAiring,
  };
};
