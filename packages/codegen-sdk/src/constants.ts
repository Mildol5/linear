import { Doc } from "@linear/codegen-doc";

export const Sdk = {
  ...Doc,
  CONNECTION_CLASS: "Connection",
  CONNECTION_NAME: "connection",
  CONNECTION_TYPE: "LinearConnection",
  CONNECTION_AFTER: "after",
  CONNECTION_BEFORE: "before",
  CONNECTION_LAST: "last",
  CONNECTION_FIRST: "first",
  CONNECTION_DEFAULT: "defaultConnection",
  DATA_NAME: "data",
  DATA_TYPE: "Data",
  FETCH_NAME: "fetch",
  FETCH_TYPE: "LinearFetch",
  MUTATION_TYPES: [
    "update",
    "settingsUpdate",
    "archive",
    "unarchive",
    "delete",
    "suspend",
    "unsuspend",
    "upgrade",
    "revoke",
    "rotateSecret",
    "resourceArchive",
  ],
  NAMESPACE: "L",
  NODE_NAME: "nodes",
  NODE_TYPE: "Node",
  PAGEINFO_NAME: "pageInfo",
  PAGEINFO_TYPE: "PageInfo",
  REQUEST_CLASS: "Request",
  REQUEST_NAME: "request",
  REQUEST_TYPE: "LinearRequest",
  RESPONSE_NAME: "response",
  RESPONSE_TYPE: "Response",
  SDK_CLASS: "LinearSdk",
  VARIABLE_NAME: "variables",
  VARIABLE_TYPE: "Variables",
};
