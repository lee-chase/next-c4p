'use client';

import { Button, Link } from '@carbon/react';
import { AboutModal } from '@carbon/ibm-products';
import { useState } from 'react';

import './example.scss';

export default function Example() {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenModalClick = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button kind='secondary' onClick={handleOpenModalClick}>
        Reopen the About Modal dialog
      </Button>

      <AboutModal
        tabListAriaLabel='an aria label'
        open={isOpen}
        additionalInfo={
          <>
            <img
              alt='Grafana'
              className='about-modal__tech-logo'
              src='/media/grafana-logo.svg'
            />
            <img
              alt='Ansible'
              className='about-modal__tech-logo'
              src='/media/ansible-logo.svg'
            />
            <img
              alt='JavaScript'
              className='about-modal__tech-logo'
              src='/media/js-logo.svg'
            />
          </>
        }
        closeIconDescription='Close'
        version={'Version 0.0.0'}
        copyrightText={'Copyright © 2020 IBM corporation'}
        legalText='This Web site contains proprietary notices and copyright information, the terms of which must be observed and followed. Please see the tab entitled “Copyright and trademark information” for related information.'
        links={[
          <Link key='link1' href='https://www.carbondesignsystem.com'>
            Carbon Design System
          </Link>,
          <Link key='link2' href='https://www.ibm.com/design/language'>
            IBM Design Language
          </Link>,
        ]}
        logo={
          <img
            alt='Example product or service logo'
            src='/media/example-logo.svg'
            style={{ maxWidth: '6rem' }}
          />
        }
        onClose={handleCloseModal}
        title={
          <>
            IBM{' '}
            <span
              style={
                // stylelint-disable-next-line carbon/type-token-use
                { fontWeight: '600' }
              }
            >
              Watson AI Ops
            </span>
          </>
        }
      />
    </>
  );
}
