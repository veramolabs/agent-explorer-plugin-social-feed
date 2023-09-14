import React from 'react';
import {
  UnorderedListOutlined,
} from '@ant-design/icons'
import './style.css'

import { IPlugin } from './types';
import { Feed } from './Feed'
import { Post } from './Post'

const Plugin: IPlugin = {
    init: () => {
        return {
          name: 'Social Feed',
          description: 'Decentralized reputation and social feed',
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
          hasCss: true,
        }
    }
};

export default Plugin;