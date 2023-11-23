export type PodcastList = {
  feed: {
    author: Author;
    entry: [Entry];
    icon: SimpleInfo
    id: SimpleInfo
    link: [Link]
    rights: SimpleInfo
    title: SimpleInfo
    updated: SimpleInfo
  };
};

type SimpleInfo = {
    label: string
}

type Author = {
  name: {
    label: string;
  };
  uri: {
    label: string;
  };
};

export type Entry = {
  category: EntryCategory;
  id: EntryId;
  ["im:artist"]: EntryArtist;
  ["im:contentType"]: EntryContentType;
  ["im:image"]: [EntryImage];
  ["im:name"]: SimpleInfo;
  ["im:price"]: EntryPrice;
  ["im:releaseDate"]: EntryReleaseDate;
  link: Link;
  rights: SimpleInfo;
  summary: SimpleInfo;
  title: SimpleInfo;
};

type EntryCategory = {
  attributes: {
    ["im:id"]: string;
    label: string;
    scheme: string;
    term: string;
  };
};

type EntryId = {
  attributes: {
    ["im:id"]: string;
  };
  label: string;
};

type EntryArtist = {
  attributes: {
    href: string;
  };
  label: string;
};

type EntryContentType = {
  attributes: {
    label: string;
    term: string;
  };
};

type EntryImage = {
  attributes: {
    height: string;
  };
  label: string;
};

type EntryPrice = {
  attributes: {
    amount: string;
    currency: string;
  };
  label: string;
};

type EntryReleaseDate = {
  attributes: SimpleInfo;
  label: string;
};

type Link = {
  attributes: {
    href: string;
    rel: string;
    type: string;
  };
};
