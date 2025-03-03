import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = (props) => (
  <ContentLoader
    className="pie-block "
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="145" y="415" rx="25" ry="25" width="132" height="45" />
    <rect x="156" y="556" rx="3" ry="3" width="52" height="6" />
    <rect x="17" y="500" rx="3" ry="3" width="380" height="6" />
    <rect x="0" y="423" rx="10" ry="10" width="115" height="28" />
    <rect x="75" y="199" rx="0" ry="0" width="8" height="0" />
    <rect x="1" y="314" rx="10" ry="10" width="280" height="85" />
    <rect x="19" y="269" rx="10" ry="10" width="241" height="27" />
    <rect x="10" y="0" rx="50" ry="50" width="260" height="260" />
  </ContentLoader>
);

export default Skeleton;
