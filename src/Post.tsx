import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
import { PageContainer } from '@ant-design/pro-components'
import { getIssuerDID, VerifiableCredentialComponent, CredentialActionsDropdown, IdentifierProfile } from '@veramo-community/agent-explorer-plugin'
import { Spin, Typography } from 'antd'
import { IDataStore } from '@veramo/core'
import { formatRelative } from 'date-fns'
import { EllipsisOutlined } from '@ant-design/icons'

export const Post = () => {
  const { id } = useParams<{ id: string }>()
  const { agent } = useVeramo<IDataStore>()

  if (!id) return null

  const { data: credential, isLoading: credentialLoading } = useQuery(
    ['credential', { id }],
    () => agent?.dataStoreGetVerifiableCredential({ hash: id }),
  )

  if (!credential) return null
  return (
    <PageContainer 
      loading={credentialLoading}
    >
      {credential && <VerifiableCredentialComponent credential={{hash: id, verifiableCredential: credential}}/>}
    </PageContainer>
  )
}
