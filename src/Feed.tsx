import React, { useState } from 'react'
import { formatRelative } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
import { PageContainer } from '@ant-design/pro-components'
import { IDataStoreORM } from '@veramo/core'
import { App, Drawer, List } from 'antd'
import { PostForm } from './PostForm.js'
import { ComposeSocialPostingForm, ComposeSocialPostingFormValues } from './ComposeSocialPostingForm'
import uuid from 'uuid';
import { SocialPosting } from './SocialPosting'


export const Feed = () => {
  const { notification } = App.useApp()
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate()
  const { agent } = useVeramo<IDataStoreORM>()
  const { data: credentials, isLoading, refetch } = useQuery(
    ['social-feed', { agentId: agent?.context.name }],
    () =>
      agent?.dataStoreORMGetVerifiableCredentials({
        where: [{ column: 'type', value: ['VerifiableCredential,VerifiableSocialPosting'] }],
        order: [{ column: 'issuanceDate', direction: 'DESC' }],
      }),
  )

  const handleNewSocialPosting = async (values: ComposeSocialPostingFormValues) => {
    const issuerProfile = await agent?.getIdentifierProfile({ did: values.issuer })
    const credentialId = uuid.v4()
    const credential = await agent?.createVerifiableCredential({
      save: true,
      proofFormat: 'jwt',
      credential: {
        '@context': ['https://www.w3.org/2018/credentials/v1'],
        type: ['VerifiableCredential', 'VerifiableSocialPosting'],
        issuer: { id: values.issuer },
        issuanceDate: new Date().toISOString(),
        credentialSubject: {
          id: credentialId,
          type: "SocialMediaPosting",
          author: {
            id: values.issuer,
            image: issuerProfile?.picture,
            name: issuerProfile?.name,
          },
          headline: "",
          articleBody: values.articleBody,
        },
      },
    })

    if (credential) {
      await agent?.dataStoreSaveVerifiableCredential({verifiableCredential: credential})
      notification.success({
        message: 'Kudos sent',
      })
      refetch()
      
    }
  }

  const handleNewPost = async (hash: string) => {
    notification.success({
      message: 'Post created'
    })
    await refetch()
    navigate('/social-feed/' + hash)
  }


  return (
    <PageContainer>
      <ComposeSocialPostingForm
        onNewSocialPosting={handleNewSocialPosting}
      />

      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 30,
        }}
        dataSource={credentials}
        renderItem={(item) => (
          <SocialPosting
            key={item.hash}
            credential={item}
          />
        )}
      />

      <Drawer 
        title="Compose new post"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen} 
        width={800}
        destroyOnClose={true}
      >
        <PostForm onOk={handleNewPost}/>
      </Drawer>
    </PageContainer>
  )
}
