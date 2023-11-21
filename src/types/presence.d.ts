type presenceType = {
  activity?: {
    assets?: {
      largeImage?: string;
      largeText?: string;
      smallImage?: string;
      smallText?: string;
    };
    createdTimestamp?: number;
    details?: string;
    name?: string;
    state?: string;
    timestamps?: {
      end?: null | string;
      start?: number;
    };
    url: null | string;
  };
  customStatus?: {
    emoji?: {
      name?: string;
      url?: null | string;
    };
    state?: string;
  };
  user?: {
    avatar?: string;
    displayName?: string;
    status?: {
      devices: {
        desktop: "idle" | "dnd" | "online" | "offline";
        mobile: "idle" | "dnd" | "online" | "offline";
      };
      type: "idle" | "dnd" | "online" | "offline";
    };
    username?: string;
  };
};

type a = {
  user?: {
    displayName?: string;
    userName?: string;
    avatar?: string;
    status?: {
      devices?: {
        mobile?: "online" | "offline";
        desktop?: "online" | "offline";
      };
      state?: "idle" | "dnd" | "online" | "offline";
    };
  };
  activity?: {
    largeImage?: string;
    smallImage?: string;
    alt?: string;
    time?: {
      start?: number;
      elapsed?: number;
      end?: number;
    };
  };
};
