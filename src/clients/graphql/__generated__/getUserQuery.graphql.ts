/**
 * @generated SignedSource<<590a9299645cb121bbdcddfde17ee7e9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getUserQuery$variables = {};
export type getUserQuery$data = {
  readonly user: {
    readonly email: string | null;
    readonly username: string | null;
  } | null;
};
export type getUserQuery = {
  response: getUserQuery$data;
  variables: getUserQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "username",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "getUserQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "getUserQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "c52f3208073231fda0ef1be2288561a5",
    "id": null,
    "metadata": {},
    "name": "getUserQuery",
    "operationKind": "query",
    "text": "query getUserQuery {\n  user {\n    username\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "8f0b28608717ff3c27b1d5c98e3f84c4";

export default node;
