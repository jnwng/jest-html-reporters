import React, { Fragment } from 'react'
import { Row, Col, Icon, Modal, Button } from 'antd'
import ErrorInfoItem from './ErrorInfoItem'

function info({ failureMessage, timelineTraceLink }) {
  Modal.error({
    title: 'Failure Message',
    width: '80%',
    maskClosable: true,
    content: (
      <Fragment>
        {timelineTraceLink ? (
          <Row gutter={16} style={{ paddingBottom: 8 }}>
            <Col span={24}>
              <Button type='primary' href={timelineTraceLink} target='_blank'>
                Open timeline trace
              </Button>
            </Col>
          </Row>
        ) : null}
        <Row>
          <Col span={24}>
            <ErrorInfoItem data={failureMessage} />
          </Col>
        </Row>
      </Fragment>
    ),
  })
}

const ErrorButton = ({ failureMessage, timelineTraceLink }) => {
  if (!failureMessage) return null
  return <div
    className='error_button'
    onClick={() => info({ failureMessage, timelineTraceLink })}>
    <Icon type='exclamation-circle' theme='filled' /> Info
  </div>
}

export default ErrorButton
