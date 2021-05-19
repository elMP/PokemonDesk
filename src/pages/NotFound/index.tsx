import React from 'react';
import { navigate } from 'hookrouter';
import s from './NotFound.module.scss';
import { LinkEnum } from '../../routes';
import Button from '../../components/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.contentText}>404</div>
      <div className={s.layer}>
        <Button onClick={() => navigate(LinkEnum.HOME)} color="yellow">
          Return
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
