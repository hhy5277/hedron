import React from 'react';
import styled from 'styled-components';
import { Row } from '../';
import { passOn } from '../utils';


function PageContainer(props) {
  const { children, debug, ...rest } = props;
  const newChildren = passOn(children, [Row], (child) => {
    return {
      debug: typeof child.props.debug === 'undefined'
        ? debug
        : child.props.debug
    };
  });
  return <div {...rest}>{newChildren}</div>;
}

PageContainer.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  debug: React.PropTypes.bool
};


const Page = styled(PageContainer)`
  ${props =>
    props.fluid
    ? 'width: 100%;'
      : `
      margin: 0 auto;
      max-width: 100%;
      ${props.width
        ? `width: ${props.width};`
        : 'width: 960px;'
      }
    `
  }
`;

Page.propTypes = {
  fluid: React.PropTypes.bool,
  width: React.PropTypes.string
};

export default Page;

