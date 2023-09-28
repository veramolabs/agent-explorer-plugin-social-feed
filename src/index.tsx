import React from 'react';
import {
  UnorderedListOutlined,
} from '@ant-design/icons'

import { IPlugin } from '@veramo-community/agent-explorer-plugin';
import { Feed } from './Feed'
import { Post } from './Post'
import { UniqueVerifiableCredential } from '@veramo/core';
import { SocialPosting } from './SocialPosting';

const Plugin: IPlugin = {
    //@ts-ignore
    init: () => {
        return {
          name: 'Social Feed',
          description: 'Decentralized reputation and social feed',
          requiredMethods: [],
          routes: [
            {
              path: '/social-feed',
              element: <Feed />,
            },
            {
              path: '/social-feed/:id',
              element: <Post />,
            },
          ],
          menuItems: [
            {
              name: 'Social Feed',
              path: '/social-feed',
              icon: <UnorderedListOutlined />,
            },
          ],
          hasCss: false,
          getCredentialComponent: (credential: UniqueVerifiableCredential) => {
            if (credential.verifiableCredential.type?.includes('VerifiableSocialPosting')) {
              return SocialPosting
            }
            return undefined
          },
        }
    }
};

export default Plugin;