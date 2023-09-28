import React, { useEffect, useState } from 'react'
import { Avatar, Button, Dropdown, Form, Input, Select, Space, theme, } from 'antd'
import { useVeramo } from '@veramo-community/veramo-react'
import { useQuery } from 'react-query'
import { IIdentifier } from '@veramo/core'
import { IdentifierProfile, IIdentifierProfile } from '@veramo-community/agent-explorer-plugin'


const { Option } = Select

export interface ComposeSocialPostingFormValues {
  issuer: string
  articleBody: string
}

interface ComposeSocialPostingFormFormProps {
  onNewSocialPosting: (values: ComposeSocialPostingFormValues) => void
}

export const ComposeSocialPostingForm: React.FC<ComposeSocialPostingFormFormProps> = ({
  onNewSocialPosting,
}) => {
  const { agent } = useVeramo()
  const { token } = theme.useToken()
  const [form] = Form.useForm()
  const issuer = Form.useWatch('issuer', {form, preserve:true });
  const subject = Form.useWatch('subject', {form, preserve:true });
  const [issuerProfile, setIssuerProfile] = useState<IIdentifierProfile>()

  const [managedIdentifiers, setManagedIdentifiers] = useState<
    IIdentifier[]
  >([])
  const [
    managedIdentifiersWithProfiles,
    setManagedIdentifiersWithProfiles,
  ] = useState<IIdentifierProfile[]>([])

  
  useQuery(
    ['identifiers', { id: agent?.context.id }],
    () => agent?.didManagerFind(),
    {
      onSuccess: (data: IIdentifier[]) => {
        if (data.length > 0) {
          setManagedIdentifiers(data)
          form.setFieldValue('issuer', data[0].did);
        }
      },
    },
  )

  useEffect(() => {
    if (agent) {
      Promise.all(
        managedIdentifiers.map((identifier) => {
          return agent.getIdentifierProfile({ did: identifier.did })
        }),
      )
        .then((profiles) => {
          setIssuerProfile(profiles[0])
          setManagedIdentifiersWithProfiles(profiles)
        })
        .catch(console.log)
    }
  }, [managedIdentifiers, agent])

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields()
        onNewSocialPosting(values)
      })
      .catch((info) => {
        console.log('Validate Failed:', info)
      })
  }
  return (

      <Form
        form={form}
        layout="inline"
        name="form_in_form"
        initialValues={{
        }}
        style={{ 
          width: '100%', 
          paddingBottom: token.paddingContentVertical, 
          marginLeft: 0, 
          marginRight: token.paddingSM,
        }}
      >

        {managedIdentifiersWithProfiles.length > 0 && <Dropdown

            menu={{
              items: [
                ...managedIdentifiersWithProfiles.map((profile) => {
                  return {
                    key: profile.did,
                    onClick: () => {
                      setIssuerProfile(profile)
                      form.setFieldValue('issuer', profile.did)
                    },
                    label: <IdentifierProfile did={profile.did} />,
                  }
                }),
              ],
              selectable: true,
              defaultSelectedKeys: [issuer],
            }}
          >
            <Button style={{ height: 'auto', border: 0 }} type={'text'}>
            <Avatar size={'large'} src={issuerProfile?.picture} />
            </Button>
          </Dropdown>
      }


        <Form.Item name="issuer" hidden>
          <Input />
        </Form.Item>


        {managedIdentifiersWithProfiles.length > 0 && (<Form.Item name="articleBody" style={{ display: 'flex', flexGrow: 1}}>
          <Input.TextArea 
            rows={1} 
            placeholder='What is happening?!' 
            bordered={false} 
            style={{minWidth: '300px'}}
            autoSize={{ minRows: 1, maxRows: 6 }}
            />
        </Form.Item>)}

        <Form.Item>

          {managedIdentifiersWithProfiles.length > 0 && (
            <Button
              type='primary'
              onClick={handleOk}
            >
              Post
            </Button>
          )}
      </Form.Item>
      </Form>
  )
}
