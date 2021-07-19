import React from 'react';

const SiteInfo = () => {
  const admin = {
    firstName: "Laura",
    lastName: "White"
  }
  return (
    <div>
      <Admin {...admin} />
    </div>
  );
}



const Admin = ({firstName, lastName}) => {
  return (
    <div>
    <FullName firstName={firstName} lastName={lastName} />
    </div>
  );
}

const FullName = ({firstName, lastName}) => (
  <p>{firstName} {lastName}</p>
);

export default SiteInfo;