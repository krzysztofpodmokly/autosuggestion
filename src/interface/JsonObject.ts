export type JsonType = JsonPrimitive | JsonObject | JsonArray;

export type JsonPrimitive = string | number | boolean | null;

export type JsonObject = {
  [key: string]: JsonType;
};

export type JsonArray = {
  [key: number]: JsonType;
};
