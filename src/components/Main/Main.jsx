import React from 'react';
import Layout from '../Layout/Layout';
import Page from '../Page/Page';

const Main = ({ close }) => {
  return (
    <div className='main'>
      <Layout close={close}>
        <Page />
      </Layout>
    </div>
  );
}

export default Main;
