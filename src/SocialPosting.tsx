import React from 'react'
import { Row, Avatar, Col, Typography, theme, Skeleton, Space, Popover } from 'antd'
import { useVeramo } from '@veramo-community/veramo-react'
import { useQuery } from 'react-query'
import { getIssuerDID, shortId } from './utils/did'
import { UniqueVerifiableCredential } from '@veramo/core'
import { MarkDown } from './MarkDown'
import CredentialActionsDropdown from './components/CredentialActionsDropdown'
import { EllipsisOutlined } from '@ant-design/icons'
import { formatDistanceToNow, formatRelative } from 'date-fns'
import { useTimer } from './components/timer'

interface SocialPostingProps {
  credential: UniqueVerifiableCredential
}

export const SocialPosting: React.FC<SocialPostingProps> = ({
  credential
}) => {
  const { agent } = useVeramo()
  const { token } = theme.useToken()
  
  const [formattedDuration] = useTimer({
    endDate: new Date(credential.verifiableCredential.issuanceDate),
  });

  const did = getIssuerDID(credential.verifiableCredential)

  const { data, isLoading } = useQuery(
    ['identifierProfile', did, agent?.context.id],
    () => (did ? agent?.getIdentifierProfile({ did }) : undefined),
  )

  return (
    <>
    <Row align="top" wrap={false} style={{
      width: '100%',
      borderTop: '1px solid ' + token.colorBorderSecondary,
      padding: token.paddingSM,
      position: 'relative'
    }}>
      <div style={{position: 'absolute', top: 0, right: 0 }}>

      <CredentialActionsDropdown credential={credential.verifiableCredential}>
        <EllipsisOutlined />
      </CredentialActionsDropdown>
      </div>
      <Col style={{ marginRight: token.padding }}>
        {!isLoading && <Avatar src={data?.picture} size={'large'} />}
        {isLoading && <Skeleton.Avatar active />}
      </Col>
      <Col>
        <div style={{ justifyItems: 'flex-start', display: 'flex' }}>
          {!isLoading && (
            
            <Popover content={shortId(did)}>
              <Space direction='horizontal'>

              <Typography.Text ellipsis>
                {data?.name} 
              </Typography.Text>

              <svg
                className="veramo__verified_icon"
                xmlns="http://www.w3.org/2000/svg" 
                width="12" 
                height="12" 
                viewBox="0 0 1200 1200">
                <path d="M600,1200a604.428,604.428,0,0,1-120.921-12.19,596.709,596.709,0,0,1-214.545-90.281A601.752,601.752,0,0,1,47.151,833.547,596.971,596.971,0,0,1,12.19,720.921a605.85,605.85,0,0,1,0-241.842A596.709,596.709,0,0,1,102.47,264.534,601.751,601.751,0,0,1,366.453,47.151,596.971,596.971,0,0,1,479.079,12.19a605.85,605.85,0,0,1,241.842,0A596.709,596.709,0,0,1,935.466,102.47a601.751,601.751,0,0,1,217.383,263.982,596.976,596.976,0,0,1,34.961,112.626,605.849,605.849,0,0,1,0,241.842,596.709,596.709,0,0,1-90.281,214.545,601.751,601.751,0,0,1-263.982,217.383,596.976,596.976,0,0,1-112.626,34.961A604.428,604.428,0,0,1,600,1200ZM233.818,499.972l340.917,545.086L967.272,283.377,574.734,684.509Z" fill="#73c394"/>
              </svg>

              <Typography.Text type='secondary'>·</Typography.Text>
              <Typography.Text type='secondary'>{formattedDuration}</Typography.Text>
              </Space>
          </Popover>
          )}
          {isLoading && <Skeleton.Input style={{ width: 100 }} active />}
        </div>
        <MarkDown content={credential.verifiableCredential.credentialSubject.articleBody} />
      </Col>
    </Row>

    </>
  )
}
