type presenceType = {
  offline?: boolean;
  activity?: {
    visile?: boolean;
    name?: string;
    state?: string;
    description?: string;
    largeImage?: string;
    smallImage?: string;
    largeText?: string;
    smallText?: string;
    elapsed?: {
      hours?: string;
      minutes?: string;
      seconds?: string;
      timestamp: number;
    };
  };
  status?: {
    emoji?: {
      custom?: boolean;
    };
    name?: string;
  };
  user?: {
    avatar?: string;
    name?: string;
    status?: string;
    username?: string;
  };
};