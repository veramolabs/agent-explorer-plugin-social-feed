import * as React from "react";
import { UniqueVerifiableCredential } from "@veramo/core";
import { MarkDown } from "@veramo-community/agent-explorer-plugin";

export const SocialPosting: React.FC<{credential: UniqueVerifiableCredential}> = ({ credential: { verifiableCredential } }) => {
  return <>
    {verifiableCredential?.credentialSubject?.articleBody && <MarkDown content={verifiableCredential.credentialSubject.articleBody}/>}
  </>
}
