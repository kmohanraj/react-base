import React from 'react';

interface IErrorProps {
  title: string;
  message?: string;
}

/*
  This should be updated once the UI Design is ready
*/

const ErrorPage = (props: IErrorProps) => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1>{props.title}</h1>
        <h5>{props.message}</h5>
      </div>
    </div>
  );
};

export default ErrorPage;
