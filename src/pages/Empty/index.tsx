import React from 'react';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <div>
      {/* <Header /> */}
      <div>This is Empty page for {title}</div>
    </div>
  );
};

export default EmptyPage;
