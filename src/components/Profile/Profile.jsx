import React from 'react';
import Layout from '../Layout/Layout';

const Profile = ({ close }) => {
  return (
    <div className='profile'>
      <Layout close={close}>
        <p style={{
          fontSize: '10rem',
          margin: '10rem'
        }}>PROFILE</p>
      </Layout>
    </div>
  );
}

export default Profile;
