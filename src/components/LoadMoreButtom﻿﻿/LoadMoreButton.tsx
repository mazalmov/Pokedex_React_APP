// import React from 'react';
// import {LoadButtons} from './styles'
// interface LoadMoreButtonProps {
//   onClick: () => void;
//   loading: boolean;
// }

// const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick, loading }) => {
//   return (
//     <LoadButtons onClick={onClick} disabled={loading}>
//       {loading ? 'Loading More...' : 'Load More'}
//     </LoadButtons>
//   );
// };
// export default LoadMoreButton;


import React from 'react';
import { LoadButtons, LoadButtonsContainer } from './styles';

interface LoadMoreButtonProps {
  onClick: () => void;
  loading: boolean;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick, loading }) => {
  return (
    <LoadButtonsContainer>
      <LoadButtons onClick={onClick} disabled={loading}>
        {loading ? 'Loading More...' : 'Load More'}
      </LoadButtons>
    </LoadButtonsContainer>
  );
};

export default LoadMoreButton;