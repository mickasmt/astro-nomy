import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icons } from "@/icons";
import type { Airing, Media } from "@/types";
import {
  format,
  formatDistanceToNowStrict,
  fromUnixTime,
  isPast,
} from "date-fns";

interface AnimesTabsProps {
  animes: {
    trending: Media[];
    latestAiring: Airing[];
    futureAiring: Airing[];
    upcomingSeason: Media[];
  };
}

interface TabsTriggerProps {
  value: string;
  label: string;
  icon: keyof typeof Icons;
}

const tabTriggers: TabsTriggerProps[] = [
  {
    value: "latestAiring",
    label: "In Last 24 Hours",
    icon: "tv",
  },
  {
    value: "futureAiring",
    label: "Coming Up Next!",
    icon: "clock",
  },
  { value: "trending", label: "Trending", icon: "flame" },
  { value: "upcomingSeason", label: "Upcoming Season", icon: "calendar" },
];

export function AnimesTabs({ animes }: AnimesTabsProps) {
  return (
    <Tabs defaultValue="latestAiring" className="w-full">
      <p className="text-sm text-muted-foreground">
        <i>Images aren't optimized.</i>
      </p>
      <TabsList className="!bg-muted/80 mt-2 mb-4">
        {tabTriggers.map((tab) => {
          const Icon = Icons[tab.icon || "flame"];
          return (
            <TabsTrigger key={tab.value} value={tab.value}>
              <div className="flex gap-x-2 items-center">
                <Icon className="size-5" />
                <span className="hidden sm:inline-flex">{tab.label}</span>
              </div>
            </TabsTrigger>
          );
        })}
      </TabsList>

      {Object.entries(animes).map(([key, value]) => (
        <TabsContent key={key} value={key}>
          <div className="anime-grid">
            {value.map((anime, i) => (
              <AnimeCard key={key + "-" + i} data={anime} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}

function AnimeCard({ data }: { data: Media | Airing }) {
  let media, airingAt, episode;

  if ("media" in data) {
    media = data.media;
    airingAt = data.airingAt;
    episode = data.episode;
  } else {
    media = data;
  }

  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-[280px] rounded-md overflow-hidden bg-muted-foreground/15">
        <img
          width={260}
          height={300}
          loading="eager"
          className="size-full object-cover object-center"
          src={media.coverImage.extraLarge}
          alt={media.title.userPreferred}
        />
      </div>

      <div className="flex w-full flex-col justify-center">
        <p className="font-medium text-sm text-balance line-clamp-1 mt-1 text-foreground">
          {media.title.userPreferred}
        </p>

        {airingAt && episode ? (
          <p className="flex text-xs sm:text-[13px] font-medium text-muted-foreground line-clamp-1">
            {isPast(fromUnixTime(airingAt))
              ? formatDistanceToNowStrict(fromUnixTime(airingAt), {
                  addSuffix: true,
                })
              : format(fromUnixTime(airingAt), "p")}
            &nbsp; • &nbsp;Ep. {episode}
          </p>
        ) : null}
      </div>
    </div>
  );
}
